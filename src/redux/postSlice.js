import { createSlice } from '@reduxjs/toolkit'
import * as api from '../api/posts'

export const STATUS = Object.freeze({
    IDLE: 'idle',
    LOADING: 'loading',
    ERROR: 'error',
})

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        data: [],
        getPostStatus: STATUS.IDLE,
        createPostStatus: STATUS.IDLE,
        likePostStatus: STATUS.IDLE,
    },
    reducers: {
        getPostsRequest: (state, action) => {
            state.data = action.payload
        },
        createPostRequest: (state, action) => {
            state.data.push(action.payload)
        },
        setPostStatus: (state, action) => {
            state.getPostStatus = action.payload
        },
        createPostStatus: (state, action) => {
            state.createPostStatus = action.payload
        },
        likePostStatus: (state, action) => {
            state.likePostStatus = action.payload
        },
        likePostRequest: (state, action) => {
            state.data = state.data.map(post => {
                if (post._id === action.payload) post.likeCount++
                return post
            })
        }
    }
})

export const { getPostsRequest, createPostRequest, likePostRequest, setPostStatus, createPostStatus, likePostStatus } = postSlice.actions
export default postSlice.reducer

// Thunks

export const getPosts = () => async (dispatch) => {
    dispatch(setPostStatus(STATUS.LOADING))
    try {
        const posts = await api.fetchPosts()
        if (posts instanceof Error)
            throw Error()
        dispatch(getPostsRequest(posts))
        dispatch(setPostStatus(STATUS.IDLE))
    } catch (error) {
        console.log('can not fetch')
        dispatch(setPostStatus(STATUS.ERROR))
    }
}

export const createPost = (formData) => async (dispatch) => {
    dispatch(createPostStatus(STATUS.LOADING))
    try {
        const newPost = await api.createPost(formData)
        if (newPost instanceof Error)
            throw Error()
        console.log(newPost)
        dispatch(createPostRequest(newPost))
        dispatch(createPostStatus(STATUS.IDLE))
    } catch (error) {
        console.log(error)
        dispatch(createPostStatus(STATUS.ERROR))
    }
}

export const likePost = (id) => async (dispatch) => {
    dispatch(likePostStatus(STATUS.LOADING))
    try {
        await api.likePost(id)
        dispatch(likePostRequest(id))
        dispatch(likePostStatus(STATUS.IDLE))
    } catch (error) {
        dispatch(likePostStatus(STATUS.ERROR))
        console.log(error)
    }
}