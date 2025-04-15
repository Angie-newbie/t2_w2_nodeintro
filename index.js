const express = require('express')
const app = express()
const port = 3000

const person = {
    name: 'matt',
    age: 54
}

const posts = [
    {
        title: 'post 1',
        body: '',
        isPublish: false
    },
    {
        title: 'post 2',
        body: '',
        isPublish: true
    }
]

app.get('/', (req, res) => {
    // Serialize person and send to the client
  res.send(person)
})



app.get('/posts', (req,res) => {
    res.send(posts)
})

// start the given server on the given port
// the call back called when the server run
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})