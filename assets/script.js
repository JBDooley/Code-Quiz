
var startButton = document.querySelector("#begin")
var initialEl = document.querySelector(".initial");
var questionsEl = document.querySelector("#questionBox");
var questionTitleEl = document.querySelector("#questionTitle");
var answerOptionnsEl = document.querySelector("#answerOptions");
var optionAEl = document.querySelector("#optionA");
var optionBEl = document.querySelector("#optionB");
var optionCEl = document.querySelector("#optionC");
var optionDEl = document.querySelector("#optionD");

let i = 0;



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



function beginQuiz(){
    initialEl.setAttribute("style","display:none;");

    questionsEl.removeAttribute("class");

    getQuestion();
};

function getQuestion() {
    questionTitleEl.textContent = questionOptions[i].question;
        optionAEl.textContent = questionOptions[i].answers[0]; 
        optionBEl.textContent = questionOptions[i].answers[1]; 
        optionCEl.textContent = questionOptions[i].answers[2]; 
        optionDEl.textContent = questionOptions[i].answers[3]; 
};

startButton.addEventListener("click", function() { 
    beginQuiz();
    console.log("quiz has begun!");
}
);