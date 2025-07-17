const express=require('express');
const fs=require('fs');
const users=require("./MOCK_DATA.json");
const app=express();
const PORT=8000;
// middleware- plugin
app.use(express.urlencoded({extended:false}));

app.use((req,res,next)=>{
    console.log("hello from middlewere 1");
    // return res.json({msg:"Hello from middleware 1"});
    next();
});
app.use((req,res,next)=>{
    fs.appendFile("log.txt",
        `\n${Date.now()}; ${req.ip} ${req.method}: ${req.path}\n`,(err,data)=>{
            next();
        }
    );
    // console.log("hello from middlewere 2");
// return res.end("hey");


});
//Routes
app.get('/users',(req,res)=>{  
    const html=`
<ul>
${users.map((user)=>`<li>${user.first_name}</li>`).join("")};
</ul>
    `;
    res.send(html);
});
//REST API
app.get('/api/users',(req,res)=>{
   res.setHeader("X-MyName","Dependra");
    return res.json(users);
})

app
.route("/api/users/:id")
.get((req,res)=>
{
    const id=Number(req.params.id);
    const user=users.find(user=>user.id===id);
    if(!user)
        return res.status(404).json({error:"user not found"});
    return res.json(user);
})
.patch((req,res)=>{
    return res.json({status:"pending"});
})
.delete((req,res)=>{status:"pending"});

app.post("/api/users",(req,res)=>{
    const body=req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title)
    {
        return res.status(400).json({msg:"All fields are required.."});
    }
    users.push({...body,id:users.length+1});
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>
    {
        return res.status(201).json({status:"Success",id:users.length});
    });
    // console.log("body",body);
   
});


app.listen(PORT,()=>console.log(`Server Started at ${PORT}`))