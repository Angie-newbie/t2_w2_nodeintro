// import express from 'express' //Import the default export 
import { Router } from "express" // Destructures Router from within the default export
import Post from '../models/post.js'

const posts = [
    {   
        id : 1,
        title: 'post 1',
        body: 'p1 body',
        isPublish: false
    },
    {   
        id : 2, 
        title: 'post 2',
        body: 'post2 body',
        isPublish: true
    }
]
// Flask blue print
const router = Router()

//Get All posts
router.get('/posts', async(req, res)=> {
    res.send(await Post.find());
})

//Get one post 
    // 1. Declare the route
    // pythoon : @app.route ('/posts/<int:id>')

router.get('/posts/:id', (req, res) => {
    // 2. Get the id of the post
    const post_id = req.params.id // All params values are string
    // res.send({post_id : post_id})
    // 3. Fetch the post with the given id
    const post = posts.find(p => p.id == post_id)

    // 4. send the post back to the client
    if (post) {
        res.send(post)

    } else{
        res.status(404).send ({error:`Post with id ${post_id} not found`})
    }

})

// Create a new post
//Post /posts
router.post('/posts', (req,res) => {
    //Get post data from the request body
    const bodyData = req.body
    console.log(bodyData)
    // Create new Post instance
    // commit new Post instance to db
    // Send .. to the client
    res.send('POST /posts')
})
//One default ecport allowed per module
export default router;