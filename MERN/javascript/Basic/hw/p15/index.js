var v1,v2;
v1=parseInt(prompt("enter the first number"));
v2=parseInt(prompt("enter the second number"));
console.log("Before swapping"+v1+","+v2);

v1=v1+v2;
v2=v1-v2;
v1=v1-v2;
console.log("After swapping"+v1+","+v2);


