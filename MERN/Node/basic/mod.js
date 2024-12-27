var a=10;
var b=10;
var c=30;
var d=40;
var e=50;
var f=100;
exports.a=10;
exports.b=10;
var g=()=>{
    console.log("hhh");

}
module.exports=[10,20,a,b,c,d,e,f,g];
console.log(__filename);
console.log(__dirname);
setInterval(()=>{
    console.log('hello world');
},1000);
setTimeout(()=>{
    console.log('hello world');
},2000);