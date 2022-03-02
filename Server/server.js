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

let knownSites=
['https://en.wikipedia.org/wiki/',

]

/*async function get(URL){
    const requestOptions={
        method: 'GET',
      }
    const res= await fetch(URL, requestOptions);
    const body=await res.text()
    console.log(body)
    return body
}*/


app.get('/', (req, res)=>{
    res.sendFile('../client/index.html')
})

app.post('/search', (req, res)=>{
  console.log(req.body.textInput)
  
})

// To do: Get the server running
app.listen(PORT,()=>{
  console.log(`Server listening on port: ${PORT}`)
})
