import express from 'express'
import mongoose from 'mongoose'
import post_routes from './routes/post_routes.js'


const app = express()
const port = 3000

app.use('/',post_routes)

// start the given server on the given port
// the call back called when the server run
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  // Connect to MongoDB
  mongoose.connect(`mongodb://127.0.0.1:27017/nodeintro_db`)
  console.log(mongoose.connection.readyState)

})