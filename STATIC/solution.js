var path = require('path')
var express = require('express')

var app = express()
var port = process.argv[2]
var fileDir = process.argv[3]

app.use(express.static(fileDir || path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.render('index', {date: new Date().toDateString()})
})

app.listen(port)
