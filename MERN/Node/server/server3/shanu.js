var http=require('http');
var fs=require('fs');
var url=require('url');
http.createServer((req,res)=>{
    var text=`${Date.now()}:${req.url} New reques Receive`;
    var myurl=url.parse(req.url,true);
    fs.appendFile("dep.txt",text,(error,data)=>
    {
        res.end("hello Shanu beta");
    });
    switch (myurl.pathname) {
        case "//":
            res.end("Home page");
            break;
            case "//Name":
                if(req.method=='POST'){
                res.end("My name is  Shanu");
                }
                else if(req.method=='GET')
                    {
                        res.end("My name is show in url as Shanu Chand");
                    }
                else if(req.method=='PUT')
                {
                    res.end("My name is Still Shanu ");
                }
                else if(req.method=='PATCH')
                {
                    res.end("My name is updated as Shanu Chand");
                }
                else if(req.method='DELETE'){
                    res.end("My name is Deleted");
                }
                break;
                case "//Age":
                res.end("My Age is  20");
                break;
        default:
            res.end("it's default value");
            break;
    }

}).listen(5000,console.log("connection sucess at https://localhost:5000/"));
