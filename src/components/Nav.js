import React from 'react'
import './Nav.css';
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {setFormFocus} from '../redux/formFocusSlice' 

function Nav() {
    const dispatch = useDispatch()
    return (
        <div className='nav'>
            <div className='content-container'>
                <div className='nav-heading'>
                    <Link to='/'>
                        <img src='./Logo.svg' alt='' className='logo' />
                        <h1 className='title'>Socialize</h1>
                    </Link>
                </div>
                <div className="btn">
                    <Link to='/posts'>
                        <button className='create-account-btn' onClick={()=>dispatch(setFormFocus(true))}>
                            New Post +
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Nav
