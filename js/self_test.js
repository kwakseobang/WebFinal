// 설문 문항 배열
const questions = [
    "1. 어떤 일이 언제 일어났는지 기억하지 못할 때가 있다.",
    "2. 며칠 전에 들었던 이야기를 잊는다.",
    "3. 반복되는 일상 생활에 변화가 생겼을 때 금방 적응하기가 힘들다.",
    "4. 본인에게 중요한 사항을 잊을 때가 있다. (예를 들어 배우자 생일, 결혼 기념일 등)",
    "5. 어떤 일을 하고도 잊어버려 다시 반복한 적이 있다.",
    "6. 약속을 하고 잊은 때가 있다.",
    "7. 이야기 도중 방금 자기가 무슨 이야기를 하고 있었는지를 잊을 때가 있다.",
    "8. 약 먹는 시간을 놓치기도 한다.",
    "9. 하고 싶은 말이나 표현이 금방 떠오르지 않는다.",
    "10. 물건 이름이 금방 생각나지 않는다.",
    "11. 개인적인 편지나 사무적인 편지를 쓰기 힘들다.",
    "12. 갈수록 말수가 감소되는 경향이 있다.",
    "13. 신문이나 잡지를 읽을 때 이야기 줄거리를 파악하지 못한다.",
    "14. 책을 읽을 때 같은 문장을 여러 번 읽어야 이해가 된다.",
    "15. 텔레비전에 나오는 이야기를 따라 가기 힘들다.",
    "16. 전에 가본 장소를 기억하지 못한다.",
    "17. 길을 잃거나 헤맨 적이 있다.",
    "18. 계산 능력이 떨어졌다.",
    "19. 돈 관리를 하는 데 실수가 있다.",
    "20. 과거에 쓰던 기구 사용이 서툴러졌다."
];

// 설문 문항을 동적으로 생성하는 함수
function generateQuestions() {
    const form = document.getElementById("quiz-form");
    
    questions.forEach((question, index) => {
        // 각 질문을 위한 div 생성
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        // 질문 내용
        const questionLabel = document.createElement("label");
        questionLabel.setAttribute("for", `q${index + 1}`);
        questionLabel.textContent = question;
        
        // 예/아니오 라디오 버튼 생성
        const yesInput = document.createElement("input");
        yesInput.setAttribute("type", "radio");
        yesInput.setAttribute("id", `q${index + 1}-yes`);
        yesInput.setAttribute("name", `q${index + 1}`);
        yesInput.setAttribute("value", "1");

        const yesLabel = document.createElement("label");
        yesLabel.setAttribute("for", `q${index + 1}-yes`);
        yesLabel.textContent = "예";

        const noInput = document.createElement("input");
        noInput.setAttribute("type", "radio");
        noInput.setAttribute("id", `q${index + 1}-no`);
        noInput.setAttribute("name", `q${index + 1}`);
        noInput.setAttribute("value", "0");

        const noLabel = document.createElement("label");
        noLabel.setAttribute("for", `q${index + 1}-no`);
        noLabel.textContent = "아니오";

        // 생성된 요소들을 questionDiv에 추가
        questionDiv.appendChild(questionLabel);
        questionDiv.appendChild(yesInput);
        questionDiv.appendChild(yesLabel);

        questionDiv.appendChild(noInput);
        questionDiv.appendChild(noLabel);
        questionDiv.appendChild(document.createElement("br"));
        
        // form에 questionDiv를 추가
        form.appendChild(questionDiv);
    });
}

// 페이지 로드 시 질문을 생성
window.onload = generateQuestions;

// 점수 계산 함수
function calculateScore() {
    let score = 0;
    
    // 각 질문에 대해 선택된 "예" 값을 가져와 점수 계산
    questions.forEach((question, index) => {
        const yesOption = document.getElementById(`q${index + 1}-yes`);
        if (yesOption.checked) {
            score += parseInt(yesOption.value);  // 예를 선택한 경우 점수 추가
        }
    });
    
    // 결과 표시
    let resultText = `총 점수: ${score}점<br>`;
    if (score >= 10) {
        resultText += "치매 증상이 의심됩니다. 가까운 병원에 방문하여 진단을 받는 것이 좋습니다.";
    } else {
        resultText += "치매 증상이 의심되지 않습니다. 꾸준한 관리와 예방이 중요합니다.";
    }
    
    document.getElementById("result").innerHTML = resultText;
}
