var express = require('express')
var app = express()

app.use(express.static(__dirname + '/../client/build'))

var filmsRouter = require('./controllers/films_controller.js')

app.use('/api/films', filmsRouter)


app.listen(3000, function(){
  console.log(Date.now(), "This server will deliver biscuits and carrots on port " + this.address().port)
})
