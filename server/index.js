const morgan = require('morgan')
const path = require('path')
const express = require('express')
const app = express()

// log requests
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, '..', 'public')))

// sends index.html
app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})

app.listen(8080, () => console.log('Listening on 8080'))
