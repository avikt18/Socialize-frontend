import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post'
import './Postlist.css'
import { useEffect } from 'react'
import { getPosts } from '../redux/postSlice'
import {useDispatch} from 'react-redux'
import {STATUS} from '../redux/postSlice'
import Loading from './Loading'

function PostList() {
    const {data: posts, getPostStatus} = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    },[dispatch])


    if (getPostStatus === STATUS.IDLE && posts && !posts.length) {
        return <div className='status-message'>
            Oops! No posts
        </div>
    }

    if (getPostStatus === STATUS.LOADING) {
        return <Loading />
    }
    
    if (getPostStatus === STATUS.ERROR) {
        return <div className='status-message'>
            Something went wrong!
        </div>
    }

    return (
        <div className='postlist'>
            {posts.map(post => <Post key={post?._id} {...post} />)}
        </div>
    )
}

export default PostList