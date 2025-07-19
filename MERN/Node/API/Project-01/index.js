const express=require('express');

const {connectMongoDb}=require('./connection')
const userRouter=require("./routes/user");
const {logReqRes} = require("./middleware");
const app=express();
const PORT=8000;
// connection
connectMongoDb("mongodb://127.0.0.1:27017/myapp-app-1")
.then(()=> console.log("mongoDb connected"));

//Schema



// middleware- plugin
app.use(express.urlencoded({extended:false}));


app.use(logReqRes('log.txt'));
//Routes
app.use("/user",userRouter);


app.listen(PORT,()=>console.log(`Server Started at ${PORT}`))