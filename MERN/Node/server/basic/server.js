var http=require('http');
http.createServer((req,res)=>{
    console.log("new request found");
    console.log(req.headers);
    res.end("hello world");
}).listen(5000);
console.log("server started at http://127.0.0.1:5000");