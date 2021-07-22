var n1=Math.floor(Math.random()*6) +1;
var n2=Math.floor(Math.random()*6) +1;
var risource1= "images/dice" + n1 + ".png";
var risource2= "images/dice" + n2 + ".png";
document.querySelector(".img1").setAttribute("src",risource1);
document.querySelector(".img2").setAttribute("src",risource2);
if(n1>n2)
{
    document.querySelector("h1").textContent = "🧨Player 1 wins";
}
else if(n1<n2)
{
    document.querySelector(" h1").textContent = "🧨Player 2 wins";
}
else
{
    document.querySelector("h1").textContent = "🎗Draw! Refresh!";
}
