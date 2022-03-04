const express = require('express')
const fetch=require('node-fetch')
const path= require('path')
var bodyParser = require('body-parser')
const app = express()
const cors = require('cors');
const PORT=3000;
app.use(express.static(path.join(__dirname,'../client')))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const webData = require("../data")

app.get("/search", (req,res) => {
  res.send(webData)
  // res.redirect('../client/search.html', )
})

const notFound = (req, res) => {
  res.status(404);
  res.send(JSON.stringify({id: "404!", quote: "No site found"}, null, 2));
}


app.get("/search", (req,res) => {
  res.send(webData)
  // res.redirect('../client/search.html', )
})

app.get('/', (req, res)=>{
    res.sendFile('../client/index.html')
})


// app.get('/:id', (req,res) => {
//   const randomSite = webData[Math.floor(Math.random()* webData.length)]
//   if (req.params.id > webData.length || req.params.id <= 0) {
//     notFound(req, res);
//   } else {
//     res.status(200);
//     res.send(JSON.stringify(webData[req.params.id -1], null, 2));
//   }

//   // res.send(randomSite)
// })

app.get('/:id', (req,res) => {
  const randomSite = webData[Math.floor(Math.random()* webData.length)]
  res.send(randomSite)
})


// To do: Get the server running
app.listen(PORT,()=>{
  console.log(`Server listening on port: ${PORT}`)
})

