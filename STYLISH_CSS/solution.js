var path = require('path')
var express = require('express')
var stylus = require('stylus')

var app = express()
var port = process.argv[2]
var fileDir = process.argv[3]

app.use(stylus.middleware(fileDir))
app.use(express.static(fileDir))

app.listen(port)
