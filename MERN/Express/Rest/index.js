var express=require('express');
var app=express();
app.get('/users',(req,res)=>{
    res.end("List of Users");
})
app.post('/users',(req,res)=>{
    res.end("Add new another User");  
})
app.patch('/users:id',(req,res)=>{
    res.end("Update Users");  
})
app.delete('/users:id',(req,res)=>{
    res.end("Delete data");  
})
app.listen(5000,()=>{console.log("Server Started at http://localhost:5000 😍😍")});