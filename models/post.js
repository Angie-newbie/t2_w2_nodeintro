import {model} from 'mongoose'

const Post = model('Post', {
    title: String,
    body: String,
    is_Publish: Boolean
})

export default Post