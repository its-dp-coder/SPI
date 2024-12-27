const { error } = require('console');
var http=require('http');
var fs=require('fs');
var url=require('url');
http.createServer((req,res)=>{

console.log(req.url);
var t=`${Date.now()}:${req.url} New Request Recieved\n`;
console.log(t);
var myUrl=url.parse(req.url,true);
console.log(myUrl);
fs.appendFile("log.txt",t,(error,data)=>{
  switch (myUrl.pathname) {
    case '/':      // -> myUrl.pathname==/
    res.end("Home Page");
     break;   
     case '/about':
        res.end("About Page");
        break; 
        case '/reg':
            res.end("Registration Page");
            break; 
           
            case '/profile':
            res.end(`Hello ${myUrl.query.name} and your age ${myUrl.query.age}`);
            break; 
            default:
                res.end("Page not found");
                break; 
  }
});

}).listen(5004,console.log("run  on port 5003")
);
