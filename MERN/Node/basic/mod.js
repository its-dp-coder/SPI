var[a,b,c]=require('./mod');
console.log(c);
console.log(_filename);
console.log(_dirname);
setInterval(()=>{
    console.log('hello world');
},1000);
setTimeout(()=>{
    console.log("timeout");
},2000);