var randomNumner1 = Math.floor(Math.random() * 6) +1;
var randomDiceImage =  "dice"+ randomNumner1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var Image1 = document.querySelectorAll("img")[0];
Image1.setAttribute("src", randomImageSource);


var randomNumner2 = Math.floor(Math.random() * 6) +1;
var randomImageSource2 = "images/dice" + randomNumner2 + ".png";
var Image2 = document.querySelectorAll("img")[1];
Image2.setAttribute("src", randomImageSource2);


if (randomNumner1 > randomNumner2){

    document.querySelector("h1").innerHTML = " 🏆Player 1 Wins..." 
}
else if (randomNumner2 > randomNumner1)
{
    document.querySelector("h1").innerHTML = " 🏆Player 2 Wins..." 
}

else{
    document.querySelector("h1").innerHTML = " It's Tie...." 
}