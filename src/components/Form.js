import React from 'react'
import { useState, useEffect, useRef } from 'react'
import './Form.css'
import { createPost } from '../redux/postSlice'
import { useDispatch, useSelector } from 'react-redux'
import FileBase from 'react-file-base64'
import { setFormFocus } from '../redux/formFocusSlice'
import {STATUS} from '../redux/postSlice'
import LoadingSpiner from './LoadingSpiner'


const initialFormData = {
    title: "",
    message: "",
    creator: "",
    selectedFile: "",
}

function Form() {
    const [formData, setFormData] = useState(initialFormData)
    const [focusedElement, setFocusedElement] = useState(null)
    const [tag, setTag] = useState('')
    const [tagList, setTagList] = useState([])
    const [error, setError] = useState('')
    const [disabled, setDisabled] = useState(true)
    const dispatch = useDispatch()
    const formFocus = useSelector(state => state.formFocus)
    const status = useSelector(state => state.posts.createPostStatus)
    const formInput = useRef(null)
    const form = useRef(null)
    const errorMessage = useRef(null)

    useEffect(() => {
        setFocusedElement(document.activeElement)
        if (focusedElement === formInput) {
            dispatch(setFormFocus(true))
        } else {
            dispatch(setFormFocus(false))
        }
        if (formFocus) {
            formInput.current.focus()
        }

        if (formFocus) form?.current?.classList.add('form-focus')
    }, [formFocus, dispatch, focusedElement])

    useEffect(() => {
        function checkClick(e) {
            if (form?.current?.contains(e.target)) {
                // Clicked in form
                form?.current?.classList.add('form-focus')
            } else {
                // Clicked outside the form
                form?.current?.classList.remove('form-focus')
            }
        }

        window.addEventListener('click', e => checkClick(e));
        return () => window.removeEventListener('click', checkClick)
    }, [])


    const handleAddTag = (e) => {
        e.preventDefault()
        if (tag.length !== 0) {
            setTagList([...tagList, tag])
            setTag('')
        }
    }

    
    useEffect(() => {
        console.log(formData)
        const disableSubmit = () => {
            if (formData.title && formData.creator && formData.message) setDisabled(false)
        }
        disableSubmit()
    }, [formData])

    const handleRemoveTag = (id, e) => {
        setTagList(tagList.filter((tag, index) => index !== id))
    }


    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setFormData({
            ...formData,
            [name]: value
        })
        
    }

    //TODO: ***ADD ALERT MESSAGE***

    const handleSubmit = e => {
        e.preventDefault()
        if (!formData.message.replace(/\s/g, '').length) {
            setError('invalid message')
            return
          }
        if (!formData.selectedFile) {
            setError('Choose an image')
            return
        }
        setFormData({
            ...formData,
            tags: tagList
        })
        dispatch(createPost(formData))
        setFormData(initialFormData)
    }


    useEffect(() => {
        if (error) {
            const timeout = setTimeout(() => {
                setError('')
            }, 3000)
            return () => clearTimeout(timeout)
        }
    }, [error])

    const postButtonPlaceholder = status === STATUS.LOADING ? <LoadingSpiner /> : 'Post'
    

    return (
        <div ref={form} className='form-container'>
            <form className='form' onSubmit={handleSubmit} autoComplete='off'>
                <input ref={formInput} type="text" placeholder='Creator' name='creator' maxLength={40} value={formData.creator} onChange={handleChange} required />
                <input type="text" placeholder='Title' name='title' maxLength={40} value={formData.title} onChange={handleChange} required />
                <textarea placeholder='Message' name='message' maxLength={200} rows={5} value={formData.message} onChange={handleChange} required />
                <div className='tag-container'>
                    <div className="tag">
                        <input type="text" placeholder='Tags (max 5)' name='tags' value={tag} onChange={e => setTag(e.target.value)} maxLength={20} />
                        <button className='create-account-btn' onClick={handleAddTag} disabled={tagList.length < 5 ? false : true} >Add</button>
                    </div>
                    <div className='tag-list'>
                        {tagList.map((tag, id) => <p key={id} index={id} onClick={(e) => handleRemoveTag(id, e)}>{tag}</p>)}
                    </div>
                </div>
                {/* <label htmlFor="image-upload" className='choosefile-btn'>Choose Image</label> */}
                {/* <input type="file" id='image-upload' className='file-input' accept="image/*" name='post-image' /> */}
                <FileBase
                    type='file'
                    multiple={false}
                    onDone={({ base64 }) => setFormData({ ...formData, selectedFile: base64 })} />
                {error && <p ref={errorMessage} className='error-message'>{error}</p>}
                <button className='blue-btn' type="submit" onSubmit={handleSubmit} disabled={disabled}>{postButtonPlaceholder}</button>
            </form>
        </div>
    )
}

export default Form