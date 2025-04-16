// import express from 'express' //Import the default export 
import { Router } from "express" // Destructures Router from within the default export
import Post from "../models/post"

const posts = [
    {
        title: 'post 1',
        body: 'p1 body',
        isPublish: false
    },
    {
        title: 'post 2',
        body: 'post2 body',
        isPublish: true
    }
]
// Flask blue print
const router = Router()

//Get All posts
router.get(`/posts`, async(req, res)=> {
    res.send(await Post.find)
})

//Get one post 

//One default ecport allowed per module
export default router;