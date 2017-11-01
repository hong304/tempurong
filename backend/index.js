const bodyParser = require('body-parser')
const express = require('express')
const app = express()

const index = require('./routes/index')

app.set('view engine', 'html')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', index)

app.listen(3000)
console.log('success listen at port:3000......')
