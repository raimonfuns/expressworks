var fs = require('fs')
var express = require('express')

var app = express()
var port = process.argv[2]
var filePath = process.argv[3]

app.get('/books', function (req, res) {
  fs.readFile(filePath, function (err, data) {
    if (err) return res.sendStatus(500)

    try {
      var books = JSON.parse(data)
    } catch (err) {
      res.sendStatus(500)
    }
    res.json(books)
  })
})

app.listen(port)
