var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var path = require ('path')


require('dotenv').config({
    path: path.join(__dirname, 'settings.env')
})

var mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {
    useMongoClient: true
})

app.listen(3000, function(){
    console.log("Listening on port 3000")
})


