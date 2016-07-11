var path = require('path')
var express = require('express')

var app = express()
var port = process.argv[2]
var fileDir = process.argv[3]

// post setting
var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: false}))

app.set('view engine', 'jade')
app.set('views', fileDir)

app.get('/home', function (req, res) {
  res.render('index', {date: new Date().toDateString()})
})

app.post('/form', function (req, res) {
  res.end(req.body.str.split('').reverse().join(''))
})

app.listen(port)
