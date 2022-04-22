const express = require('express');
const path = require('path');
const fs = require('fs')
const geocode = require('./utils/geocode')
const weather = require('./utils/weather')

const app = express();
const directory = path.join("../web-server/src");
app.use(express.static(directory));

const port = process.env.PORT || 3000;

app.get("test_text",(req,res)=>{
    res.send("19360859020")
})

app.get('test_html',(req,res)=>{
    res.send("<h1>Elanur Başaran</h1>")
})

app.get('test_geocode',(req,res)=>{
    res.send([
        {
            geocode : geocode
        }
    ])
})

app.get('test_weather',(req,res)=>{
    res.send([
        {
            weather:weather
        }
    ])
})

fs.readFile('index.html',"utf-8",function(err,data){
    if(err){
        throw err;
    }
    res.write(data)
})

app.get('test_json',(req,res)=>{
    res.send([
        {
            ad:"Elanur",
        },
        {
            soyad:"Başaran"
        },
        {
            numara:19360859020
        }
    ]
    )
})

app.listen(port,()=>{
    console.log("Server " + port);
})