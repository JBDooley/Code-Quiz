
var timerEl = document.querySelector("#timer");
var startButton = document.querySelector("#begin")
var startupEl = document.querySelector("#startup");
var questionsEl = document.querySelector("#questionBox");
var finalEl = document.querySelector("#final");
var questionTitleEl = document.querySelector("#questionTitle");
var answerOptionnsEl = document.querySelector("#answerOptions");
var optionAEl = document.querySelector("#optionA");
var optionBEl = document.querySelector("#optionB");
var optionCEl = document.querySelector("#optionC");
var optionDEl = document.querySelector("#optionD");
var scoreEl = document.querySelector("#score");
var feedbackEl = document.querySelector("#feedback");
var scoreButtonEl = document.querySelector("#scoreButton");
var scorePageEl = document.querySelector("#scorePage");
var scorelistEl = document.querySelector("#scorelist")
var goBackEl = document.querySelector("#goBack");
var clearScoresEl = document.querySelector("#clearScores");
var submitEl = document.querySelector("#submit");
var initialEl = document.querySelector("#initials")

let i = 0;
var time = 70;
var timeStart = false;
var countdownInterval = setInterval(startTimer, 1000);


var questionOptions = [
    {
        question: "Which is not a primitive data type?",
        answers: ["A) strings", "B) booleans", "C) alerts", "D) numbers"],
        correct: 2
    },
    {
        question: "String values must always be enclosed within ___ when assigned to variables",
        answers: ["A) ' '", "B) { }", "C) ( )", "D) [ ]"],
        correct: 0
    },
    {
        question: "Arrays can be used to store ___",
        answers: ["A) strings", "B) booleans", "C) other arrays", "D) all of the above"],
        correct: 3
    },
    {
        question: "The two basic groups of data types are",
        answers: ["A) primitive and attribute", "B) attribute and reference types", "C) reference types and primitive", "D) none of the above"],
        correct: 2
    },
    {
        question: "Which is not a type of popup box",
        answers: ["A) alert", "B) ask", "C) prompt", "D) confirm"],
        correct: 1
    },
    {
        question: "Which of these is a valid boolean operator",
        answers: ["A) &&", "B) !", "C) ||", "D) all of the above"],
        correct: 3
    },
    {
        question: "The condition of an if/else statement is contained within",
        answers: ["A) ' '", "B) { }", "C) ( )", "D) [ ]"],
        correct: 2
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
    startupEl.setAttribute("style","display:none;");

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

function displayFeedback(){
    feedbackEl.setAttribute("class", "showFeedback");
    setTimeout(function hideFeedback(){
        feedbackEl.setAttribute("class", "hideFeedback");
    }, 1000);
};

optionAEl.addEventListener("click", function(event){
    event.stopPropagation();
    correctEl = questionOptions[i].correct
    if (0 !== correctEl) {
        time -=10;
        feedbackEl.textContent = "???"
    } else {
        feedbackEl.textContent = "???"
    }
    displayFeedback();
    if (i >= questionOptions.length -1) {
        endQuiz();
    } else {
        i++
    };
    getQuestion();
});

optionBEl.addEventListener("click", function(event){
    event.stopPropagation();
    correctEl = questionOptions[i].correct
    if (1 !== correctEl) {
        time -=10;
        feedbackEl.textContent = "???"
    } else {
        feedbackEl.textContent = "???"
    }
    displayFeedback();
    if (i >= questionOptions.length -1) {
        endQuiz();
    } else {
        i++
    };
    getQuestion();
});

optionCEl.addEventListener("click", function(event){
    event.stopPropagation(); 
    correctEl = questionOptions[i].correct
    if (2 !== correctEl) {
        time -=10;
        feedbackEl.textContent = "???"
    } else {
        feedbackEl.textContent = "???"
    }
    displayFeedback();
    if (i >= questionOptions.length -1) {
        endQuiz();
    } else {
        i++
    };
    getQuestion();
});

optionDEl.addEventListener("click", function(event){
    event.stopPropagation();
    correctEl = questionOptions[i].correct
    if (3 !== correctEl) {
        time -=10;
        feedbackEl.textContent = "???"
    } else {
        feedbackEl.textContent = "???"
    }
    displayFeedback();
    if (i >= questionOptions.length -1) {
        endQuiz();
    } else {
        i++
    };
    getQuestion();
});

function endQuiz() {
    questionsEl.setAttribute("style","display:none");
    
    finalEl.removeAttribute("class")
    
    timeStart = false;

    scoreEl.textContent = time;
    
};

function submitScore() {
    var initialItem = initialEl.value.trim()
    if (initialItem !== "") {
    
        var scoreItem = {
        initials: initialItem,
        score: time
        };
    
        var allScores = JSON.parse(localStorage.getItem("allScores")) || []; 

        allScores.push(scoreItem);
        localStorage.setItem("allScores", JSON.stringify(allScores));



        displayScores();
    }
};

function displayScores() {
    startupEl.setAttribute("class", "hidden");
    questionsEl.setAttribute("class", "hidden");
    finalEl.setAttribute("class", "hidden"); 
    scorePageEl.setAttribute("style", "display:block");

    var allScores = JSON.parse(localStorage.getItem("allScores")) || [];
    
    allScores.sort(function(a, b){
        return b.score -a.score;
    });

    allScores.forEach(function(score) {
        var liEl = document.createElement("li")
        liEl.textContent = score.initials + ":" + score.score;

        var olEl = document.getElementById("scorelist");
        olEl.appendChild(liEl);
    });
};

startButton.addEventListener("click", function() { 
    beginQuiz();
    console.log("quiz has begun!");
}
);

submitEl.addEventListener("click", function() {
    submitScore();
});

scoreButtonEl.addEventListener("click", function(){
    displayScores();
});

goBackEl.addEventListener("click", function(){
    location.reload();
})

clearScoresEl.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
})

