const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello world!')
})

// start the given server on the given port
// the call back called when the server run
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})