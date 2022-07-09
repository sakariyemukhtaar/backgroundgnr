var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var grd = document.getElementById("grd");


 function setgradient(){
    grd.style.background = 
    "linear-gradient(to right,"
    + color1.value 
    +", "
    +color2.value
    ")";


    css.innerHTML = grd.style.background + ";";
 }
color1.addEventListener("input" , setgradient)

color2.addEventListener("input" , setgradient)