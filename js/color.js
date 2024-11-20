let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]; // 무지개 색깔들
let displayedColors = []; // 사용자에게 보여줄 색깔 순서
let userInput = []; // 사용자가 입력한 색깔 순서
let gameStarted = false;
let currentColorIndex = 0; // 현재 표시 중인 색상 인덱스

function startGame() {
    // 게임 재시작을 위해 초기화
    gameStarted = true;
    displayedColors = [];
    userInput = [];
    currentColorIndex = 0; // 색상 표시 인덱스 초기화
    document.getElementById("submit-button").disabled = false;
    document.getElementById("game-message").textContent = "";
    document.getElementById("color-picker").style.display = "none";
    document.getElementById("submit-button").style.display = "none";
    document.getElementById("color-display").style.backgroundColor = "white"; // 화면 초기화

    // 랜덤으로 4~5개의 색깔 선택
    let numColors = 5; // 4 또는 5개
    let previousColor = null;
    for (let i = 0; i < numColors; i++) {
        let randomColor;
        do {
            randomColor = colors[Math.floor(Math.random() * colors.length)];
        } while (randomColor === previousColor); // 이전 색상과 같으면 다시 선택
        displayedColors.push(randomColor);
        previousColor = randomColor; // 이전 색상을 업데이트
    }

    // 색깔 순서 하나씩 화면에 표시
    displayColorsOneByOne();
}

function displayColorsOneByOne() {
    if (currentColorIndex < displayedColors.length) {
        const colorDiv = document.getElementById("color-display");
        colorDiv.style.backgroundColor = displayedColors[currentColorIndex];
        console.log(currentColorIndex)
        colorDiv.style.width = "300px";
        colorDiv.style.height = "300px";
        colorDiv.style.margin = "0 auto";

        // 다음 색상을 1초 뒤 표시
        setTimeout(() => {
            colorDiv.style.backgroundColor = "transparent";
            currentColorIndex++;
            displayColorsOneByOne();
        }, 1000);
    } else {
        // 색상 표시가 끝나면 입력 단계로 이동
        setTimeout(() => {
            document.getElementById("color-display").innerHTML = ""; // 초기화
            document.getElementById("color-picker").style.display = "block";
            document.getElementById("submit-button").style.display = "inline-block";
            document.getElementById("game-message").textContent = "색깔 순서를 입력하세요!";
        }, 500);
    }
}

function chooseColor(color) {
    if (userInput.length < displayedColors.length) {
        userInput.push(color);

        // 선택한 색상을 가로 정렬로 표시
        const colorDisplay = document.getElementById("color-display");
        colorDisplay.innerHTML = ""; // 화면 초기화
        userInput.forEach(selectedColor => {
            let colorBlock = document.createElement("div");
            colorBlock.style.backgroundColor = selectedColor;
            colorBlock.style.width = "50px";
            colorBlock.style.height = "50px";
            colorBlock.style.borderRadius = "5px";
            colorBlock.style
            colorBlock.style.margin = "5px";
            colorBlock.style.display = "inline-block"; // 가로 정렬
            colorDisplay.appendChild(colorBlock);
        });
    }
}

function checkAnswer() {
    const correctAnswer = displayedColors.join(",");
    const userAnswer = userInput.join(",");

    // 결과 출력 영역 초기화
    const colorDisplay = document.getElementById("color-display");
    colorDisplay.innerHTML = ""; // 화면 초기화

    if (userAnswer === correctAnswer) {
        document.getElementById("game-message").textContent = "정답입니다! 축하합니다!";
    } else {
        document.getElementById("game-message").textContent = `틀렸습니다. 정답은 다음과 같습니다.`;
    }

    // 정답 색상 가로로 표시
    displayedColors.forEach(color => {
        let colorBlock = document.createElement("div");
        colorBlock.style.backgroundColor = color;
        colorBlock.style.width = "50px";
        colorBlock.style.height = "50px";
        colorBlock.style.borderRadius = "5px";
        colorBlock.style.margin = "5px";
        colorBlock.style.display = "inline-block"; // 가로 정렬
        colorDisplay.appendChild(colorBlock);
    });

    // 게임 초기화 버튼 활성화
    document.getElementById("start-button").disabled = false;
    document.getElementById("submit-button").disabled = true;
    document.getElementById("color-picker").style.display = "none";
    gameStarted = false;
}
