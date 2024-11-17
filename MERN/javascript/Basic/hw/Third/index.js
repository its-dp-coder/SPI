var n1,n2,n3;
n1 = parseInt(prompt("enter first number:"));
n2 = parseInt(prompt("enter second number:"));
n3= parseInt(prompt("enter second number:"));
if(n1>n2&&n1>n3)
{
     console.log(n1+" is Largest number");
}
else if(n2>n1&&n2>n3)
{
    console.log(n2+" is Largest number");   
}
else
{
 console.log(n3+" is Largest number");
}