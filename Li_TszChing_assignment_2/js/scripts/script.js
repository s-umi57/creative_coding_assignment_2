let gameBoard = document.getElementById("gameBoard");
let score = document.getElementById("score");
let pig = document.getElementById("pig");

let clicks = 0;
let time = 20;
let timer = setInterval(function() {
    time--;
    document.getElementById("timer").innerHTML = "Timer: " + time + "s";
    if (time == 0) {
        clearInterval(timer);
        alert("Time's up! You clicked the piggy " + clicks + " times :)");
        location.reload();
    }
}, 1000);

pig.addEventListener("click", function() {
        clicks++;
        score.innerHTML = "Clicks: " + clicks;
        pig.style.top = Math.random() * (gameBoard.offsetHeight - pig.offsetHeight) + "px";
        pig.style.left = Math.random() * (gameBoard.offsetWidth - pig.offsetWidth) + "px";
});