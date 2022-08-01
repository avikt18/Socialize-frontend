import './PostScreen.css'
import Form from '../components/Form'
import PostList from '../components/PostList'
import { useEffect } from 'react'
// import { fetchPosts } from '../api/posts'


const postData = {
    title: "Am I livin it right?",
    message: "This is a part of lyrics of the song 'Why Georgia' by John Mayer",
    creator: 'Avi Kt',
    likeCount: 5,
    selectedFile: 'blue-gradient.png',
    createdAt: new Date()
}

const PostScreen = () => {
    useEffect(() => console.log('Page Loaded!'), [])
    return (
        <div className='post-screen'>
            <section className='non-nav'>
                <PostList {...postData} />
                <Form />
            </section>
        </div>
    )
}

export default PostScreen