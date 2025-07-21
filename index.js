var randomNumber1=Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src","./images/dice"+randomNumber1+".png");
var randomNumber2=Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src","./images/dice"+randomNumber2+".png");
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
 else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}

// Add a "Refresh Me" button to the page
var refreshBtn = document.createElement("button");
refreshBtn.textContent = "ROLL IT";
refreshBtn.style.marginTop = "20px";
refreshBtn.onclick = function() {
    location.reload();
};
document.body.appendChild(refreshBtn);
refreshBtn.style.display ="block";
refreshBtn.style.marginLeft = "auto";
refreshBtn.style.marginRight = "auto";
refreshBtn.style.fontSize = "20px";
refreshBtn.style.padding = "10px 20px";
refreshBtn.style.backgroundColor = "#4CAF50";
refreshBtn.style.color = "white";
refreshBtn.style.border = "white 2px solid";
refreshBtn.style.borderRadius = "5px";
refreshBtn.style.boxShadow = "0 4px 8px rgba(103, 254, 22, 1)";



var diceImages = document.querySelectorAll(".dice");
if (diceImages.length > 0) {
    diceImages[diceImages.length - 1].parentNode.insertBefore(refreshBtn, diceImages[diceImages.length - 1].nextSibling);
}
