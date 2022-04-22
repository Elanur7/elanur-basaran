const express = require('express');
const fs = require('fs')

const app = express();

const port = process.env.PORT || 3000;

app.get('test_html',(req,res)=>{
    res.send("<h1>Elanur Başaran</h1>")
})

app.get('test_json',(req,res)=>{
    res.send(
        {
            ad:"Elanur",
        },
        {
            soyad:"Başaran"
        },
        {
            numara:19360859020
        }
    )
})

app.listen(port,()=>{
    console.log("Server " + port);
})