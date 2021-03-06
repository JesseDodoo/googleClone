const express = require('express')
const fetch=require('node-fetch')
const path= require('path')
var bodyParser = require('body-parser')
const app = express()
const cors = require('cors');
const PORT=3000;
app.use(express.static(path.join(__dirname,'../client')))
app.use(express.json())
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const webData = require("../data")


app.post('/search', (req, res)=>{
  console.log(req,req.body.inputTxt)
  res.render('results.ejs', {data: req.body.inputTxt, sites:webData})
})

app.get('/', (req, res)=>{
    res.sendFile('../client/index.html')
})

app.get('/:id', (req,res) => {
  const randomSite = webData[Math.floor(Math.random()* webData.length)]
  res.send(randomSite)
})

// To do: Get the server running
app.listen(PORT,()=>{
  console.log(`Server listening on port: ${PORT}`)
})
