// script.js

let words = ["사과", "바나나", "귤", "딸기", "포도"]; // 기억할 단어들
let displayedWords = []; // 사용자에게 보여줄 단어
let gameTime = 5; // 단어를 보여줄 시간 (초)
let gameStarted = false;

function startGame() {
    if (gameStarted) return; // 이미 게임이 시작되었으면 다시 시작하지 않음

    gameStarted = true;
    displayedWords = [];
    document.getElementById("game-message").textContent = "";

    // 단어 3개 랜덤 선택
    for (let i = 0; i < 3; i++) {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        displayedWords.push(randomWord);
    }

    // 단어 보여주기
    let displayText = displayedWords.join(" ");
    document.getElementById("word-display").textContent = displayText;

    // 게임 시간이 지나면 입력란을 활성화
    setTimeout(() => {
        document.getElementById("word-display").textContent = "";
        document.getElementById("user-input").disabled = false;
        document.getElementById("submit-button").disabled = false;
        document.getElementById("game-message").textContent = "입력하세요!";
    }, gameTime * 1000);

    // 게임 종료 메시지 초기화
    setTimeout(() => {
        if (document.getElementById("game-message").textContent !== "입력하세요!") {
            document.getElementById("game-message").textContent = "시간 초과! 다시 시도해 보세요.";
        }
    }, (gameTime + 1) * 1000);
}

function checkAnswer() {
    const userAnswer = document.getElementById("user-input").value.trim();
    const correctAnswer = displayedWords.join(" ");

    if (userAnswer === correctAnswer) {
        document.getElementById("game-message").textContent = "정답입니다! 축하합니다!";
    } else {
        document.getElementById("game-message").textContent = `틀렸습니다. 정답은 "${correctAnswer}"입니다.`;
    }

    // 게임 초기화
    document.getElementById("start-button").disabled = false;
    document.getElementById("submit-button").disabled = true;
    document.getElementById("user-input").disabled = true;
    gameStarted = false;
}
