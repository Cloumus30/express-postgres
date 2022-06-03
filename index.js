require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000 || process.env.APP_PORT;


app.get('/',(req,res)=>{
    res.status(200).send({
        code:200,
        message:'success',
        data : 'hello world',
    });
})

app.listen(port,()=>{
    $url = process.env.APP_URL;
    console.log(`server started : ${$url}:${port}`);
});