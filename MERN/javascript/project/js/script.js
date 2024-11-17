async function weather(c){
    let url=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${c}&appid=4b0d776886eea4ba75700ef568191090`
    let res= await fetch(url);
    console.log(res);
    let data =await res.json();
    console.log(data);
    if(data.cod=='404')
    {
        window.alert("Enter Again");
        document.querySelector('#search>input').value="";
        main.style.display="none";
    }
else{
    temp.innerHTML=Math.round(data.main.temp)+"℃";
    city.innerHTML=data.name;
    wind.innerHTML=data.wind.speed+ " Km/h";
     humidity.innerHTML=data.main.humidity +"%"; 
     main.style.display="block"; 
} 
    
}
var search = ()=>{
    let n=document.querySelector('#search>input');
  if(n.value.trim()==""){
    window.alert("Please Enter City Name :");

  }
  else{
    let cn=n.value;
    // window.alert(cn);
    weather(cn);
  }
}