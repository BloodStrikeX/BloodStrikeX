const cupsContainer = document.getElementById("cups-container");
const startButton = document.getElementById("start-button");
const scoreDisplay = document.getElementById("score");

let score = 0;
let numberOfCups = 3;
let correctCupIndex = 0;

function generateCups() {
    cupsContainer.innerHTML = "";
    for (let i = 0; i < numberOfCups; i++) {
        const cup = document.createElement("div");
        cup.classList.add("cup");
        if (i === correctCupIndex) {
            const ball = document.createElement("div");
            ball.classList.add("cup-ball");
            cup.appendChild(ball);
        }
        cup.addEventListener("click", () => handleCupClick(i));
        cupsContainer.appendChild(cup);
    }
}

function shuffleCups() {
    correctCupIndex = Math.floor(Math.random() * numberOfCups);
    generateCups();
}

function handleCupClick(index) {
    if (index === correctCupIndex) {
        score++;
        numberOfCups++;
        alert("آفرین! درست حدس زدی!");
    } else {
        alert("اشتباهه! بازی تمام شد.");
        score = 0;
        numberOfCups = 3;
    }
    scoreDisplay.textContent = score;
    shuffleCups();
}

startButton.addEventListener("click", () => {
    score = 0;
    numberOfCups = 3;
    scoreDisplay.textContent = score;
    shuffleCups();
});
