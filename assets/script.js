
var timerEl = document.querySelector("#timer");
var startButton = document.querySelector("#begin")
var initialEl = document.querySelector("#startup");
var questionsEl = document.querySelector("#questionBox");
var finalEl = document.querySelector("#final");
var questionTitleEl = document.querySelector("#questionTitle");
var answerOptionnsEl = document.querySelector("#answerOptions");
var optionAEl = document.querySelector("#optionA");
var optionBEl = document.querySelector("#optionB");
var optionCEl = document.querySelector("#optionC");
var optionDEl = document.querySelector("#optionD");

let i = 0;
var time = 70;
var timeStart = false;
var countdownInterval = setInterval(startTimer, 1000);


var questionOptions = [
    {
        question: "First question here",
        answers: ["A) 1", "B) 2", "C) 3", "D) 4"]
    },
    {
        question: "Second question here",
        answers: ["A) 1", "B) 2", "C) 3", "D) 4"]
    },
    {
        question: "Third question here",
        answers: ["A) 1", "B) 2", "C) 3", "D) 4"]
    },
    {
        question: "Fourth question here",
        answers: ["A) 1", "B) 2", "C) 3", "D) 4"]
    },
    {
        question: "Fifth question here",
        answers: ["A) 1", "B) 2", "C) 3", "D) 4"]
    },
    {
        question: "Sixth question here",
        answers: ["A) 1", "B) 2", "C) 3", "D) 4"]
    },
    {
        question: "Seventh question here",
        answers: ["A) 1", "B) 2", "C) 3", "D) 4"]
    }
];

function startTimer() {
    if (timeStart)
    time--;
    if(time<= 0) {
    endQuiz();
    time = 0;    
    }
    document.getElementById("timeLeft").innerHTML = time;
}


function beginQuiz(){
    initialEl.setAttribute("style","display:none;");

    questionsEl.removeAttribute("class");

    timeStart = true;

    getQuestion();
};

function getQuestion() {
    questionTitleEl.textContent = questionOptions[i].question;
        optionAEl.textContent = questionOptions[i].answers[0]; 
        optionBEl.textContent = questionOptions[i].answers[1]; 
        optionCEl.textContent = questionOptions[i].answers[2]; 
        optionDEl.textContent = questionOptions[i].answers[3]; 
};

function endQuiz() {
    questionsEl.setAttribute("style","display:none");

    finalEl.removeAttribute("class")

    timeStart = false;
};

optionAEl.addEventListener("click", function(){
    if (i >= questionOptions.length -1) {
        endQuiz();
    } else {
        i++
    };
    getQuestion();
});

optionBEl.addEventListener("click", function(){
    if (i >= questionOptions.length -1) {
        endQuiz();
    } else {
        i++
    };
    getQuestion();
});

optionCEl.addEventListener("click", function(){ 
    if (i >= questionOptions.length -1) {
        endQuiz();
    } else {
        i++
    };
    getQuestion();
});

optionDEl.addEventListener("click", function(){
    if (i >= questionOptions.length -1) {
        endQuiz();
    } else {
        i++
    };
    getQuestion();
});

startButton.addEventListener("click", function() { 
    beginQuiz();
    console.log("quiz has begun!");
}
);