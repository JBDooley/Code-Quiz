
var startButton = document.querySelector("#begin")



function beginQuiz(){
    var initialContent = document.querySelector(".initial");
    initialContent.setAttribute("style","display:none;");
};

startButton.addEventListener("click", function() { 
    beginQuiz();
    console.log("quiz has begun!");
}
);