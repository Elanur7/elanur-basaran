const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get("text_text",(req,res)=>{

})

app.listen(port,()=>{
    console.log("Server " + port);
})