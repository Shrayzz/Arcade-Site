const questions = [
    {
        question: "Quelle est la décennie de l'âge d'or de l'arcade ?",
        answers: [
            { text: "1960", correct: false},
            { text: "1970", correct: false},
            { text: "1980", correct: true},
            { text: "1990", correct: false},
        ]
    },
    {
        question: "Quel style de l'arcade à été le plus joué lors de compétitions ?",
        answers: [
            { text: "Jeux de Combat", correct: true},
            { text: "Jeux de Stratégie", correct: false},
            { text: "Jeux de Gestion", correct: false},
            { text: "Jeux d'Action", correct: false},
        ]
    },
    {
        question: "Qui est considéré comme le meilleur joueur arcade au monde ?",
        answers: [
            { text: "Dwayne Johnson", correct: false},
            { text: "Todd Rogers", correct: false},
            { text: "Nathan Pesta", correct: false},
            { text: "Billy Mitchells", correct: true},
        ]
    },
    {
        question: "Le style arcade comprends quels sorte de gameplays ?",
        answers: [
            { text: "Jeux de stratégie", correct: false},
            { text: "Jeux de rôle", correct: true},
            { text: "Jeux en ligne", correct: false},
            { text: "Jeux de course", correct: false},
        ]
    },
    {
        question: "Quel objet ne fait pas partie du style arcade ?",
        answers: [
            { text: "Les consoles de jeu", correct: false},
            { text: "La borne d'arcade", correct: false},
            { text: "Le flipper", correct: true},
            { text: "La réalité virtuelle", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerQuestion = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Tu as gagné ${score} sur ${questions.length}!`;
    nextButton.innerHTML = "Rejouer ?";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnwser(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
nextButton.addEventListener("click", ()=> {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
})

startQuiz();
