const url = 'https://api-socialize.herokuapp.com/api/posts/'

const fetchPosts = async () => {
    try {
        const response = await fetch(url)
        console.log(response);
        const data = await response.json()
        console.log("data",data)
        return data
    } catch (err) {
        console.log("error",err)
        return err
    }
}

const createPost = async (formData) => {
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(formData) 
        })
        const newPost = await res.json()
        console.log(newPost)
        return newPost
    } catch (error) {
        console.log(error)
    }
}

const likePost = async (id) => {
    try {
        await fetch(`${url}/${id}/likePost`, {method: 'PATCH'})
        console.log(`post (_id:${id}) is liked`)
    } catch (error) {
        console.log(error)
    }
}

export { fetchPosts, createPost, likePost }
