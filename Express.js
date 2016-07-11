var path = require('path')
var express = require('express')

var app = express()
var port = process.argv[2]
var fileDir = process.argv[3] || path.join(__dirname, 'public')

app.use(express.static(fileDir))

app.get('/home', function (req, res) {
  res.end('Hello World!')
})

app.listen(port)
