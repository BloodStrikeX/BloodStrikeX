const cupsContainer = document.getElementById("cups-container");
const startButton = document.getElementById("start-button");
const scoreDisplay = document.getElementById("score");
const message = document.getElementById("message");

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
        message.textContent = "آفرین! درست حدس زدی!";
    } else {
        message.textContent = "اشتباهه! بازی تمام شد. روی 'شروع مجدد' کلیک کنید.";
        startButton.textContent = "شروع مجدد";
        startButton.style.display = "block";
        cupsContainer.style.display = "none";
        return;
    }
    scoreDisplay.textContent = score;
    shuffleCups();
}

startButton.addEventListener("click", () => {
    score = 0;
    numberOfCups = 3;
    scoreDisplay.textContent = score;
    message.textContent = "روی لیوانی که توپ داخل آن بود کلیک کنید!";
    startButton.style.display = "none";
    cupsContainer.style.display = "flex";
    shuffleCups();
});
