// script.js

let colors = ["red", "green", "blue", "yellow", "orange"]; // 사용할 색깔들
let displayedColors = []; // 사용자에게 보여줄 색깔 순서
let userInput = []; // 사용자가 입력한 색깔 순서
let gameStarted = false;

function startGame() {
    if (gameStarted) return; // 이미 게임이 시작되었으면 다시 시작하지 않음

    gameStarted = true;
    displayedColors = [];
    userInput = [];
    document.getElementById("game-message").textContent = "";

    // 랜덤으로 4~5개의 색깔 선택
    let numColors = Math.floor(Math.random() * 2) + 4; // 4 또는 5개
    for (let i = 0; i < numColors; i++) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        displayedColors.push(randomColor);
    }

    // 색깔 순서 화면에 표시
    displayColors();

    // 3초 후 색깔 숨기기
    setTimeout(() => {
        document.getElementById("color-display").textContent = "";
        document.getElementById("color-picker").style.display = "block";
        document.getElementById("submit-button").style.display = "inline-block";
        document.getElementById("game-message").textContent = "색깔 순서를 입력하세요!";
    }, 3000);
}

function displayColors() {
    let colorDiv = document.getElementById("color-display");
    colorDiv.innerHTML = '';
    displayedColors.forEach(color => {
        let colorBlock = document.createElement("div");
        colorBlock.style.backgroundColor = color;
        colorBlock.style.width = "50px";
        colorBlock.style.height = "50px";
        colorBlock.style.margin = "5px";
        colorDiv.appendChild(colorBlock);
    });
}

function chooseColor(color) {
    if (userInput.length < displayedColors.length) {
        userInput.push(color);
        let colorBlock = document.createElement("div");
        colorBlock.style.backgroundColor = color;
        colorBlock.style.width = "50px";
        colorBlock.style.height = "50px";
        colorBlock.style.margin = "5px";
        document.getElementById("color-display").appendChild(colorBlock);
    }
}

function checkAnswer() {
    const correctAnswer = displayedColors.join(",");
    const userAnswer = userInput.join(",");

    if (userAnswer === correctAnswer) {
        document.getElementById("game-message").textContent = "정답입니다! 축하합니다!";
    } else {
        document.getElementById("game-message").textContent = `틀렸습니다. 정답은 ${displayedColors.join(", ")}입니다.`;
    }

    // 게임 초기화
    document.getElementById("start-button").disabled = false;
    document.getElementById("submit-button").disabled = true;
    document.getElementById("color-picker").style.display = "none";
    gameStarted = false;
}
