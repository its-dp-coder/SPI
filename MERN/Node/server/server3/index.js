var http=require('http');
var fs=require('fs');
var url=require('url');


http.createServer((req,res)=>{
    var txt=`${Date.now()}: ${req.url} New Request Receive\n`;
    var myurl=url.parse(req.url,true);
fs.appendFile("log.txt",txt,(error,data)=>{
        res.end("hello world");
    })
        switch (myurl.pathname) {
            case '/':      // -> myUrl.pathname==/
            res.end("Home Page");
             break;   
             case '/about':
                res.end("About Page");
                break; 
                case '/reg':
                    if(req.method=='POST'){
                    res.end("Registration Sucess");
                    }
                    else if(req.method=='PUT')
                    {
                        res.end("Form Uploaded");
                    }
                    else if(req.method=='PATCH')
                        {
                            res.end("Form  Data Updated");
                        }
                        else if(req.method=='DELETE')
                            {
                                res.end("Form data deleted");
                            }
                    else{
                        res.end("Registration Form");  
                    }
                    break; 
                   
                    case '/profile':
                      if(myurl.query.name==undefined)
                      {
                        myurl.query.name="Guest";
                      }
                      res.end(`Welcome ${myurl.query.name}`)
                    break; 
                    default:
                        res.end("Page not found");
                        break; 
          }
    
}).listen(5000,console.log("connection sucess at http://localhost:5000/ "));