var express=require('express');
var app=express();
app.get('/',(req,res)=>{
    res.end("Home Page");
})
app.get('/reg',(req,res)=>{
    res.end("Registration Page"); 
})
app.post('/reg',(req,res)=>{
    res.end("Registration Page form submit"); 
})
const port=4633;
app.listen(port,()=>console.log(`Server started at$ port http://localhost:4633🔥🔥🔥`));