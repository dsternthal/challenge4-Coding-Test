// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
var timeEl = document.querySelector(".timer");
var startButton = document.querySelector(".button");
var introductionEl = document.querySelector("#intro-section");
var questionSection = document.querySelector("#question-section");
var questionEl = document.querySelector("#question");
var choicesEl  = document.querySelectorAll(".choices");
var backButton = document.querySelector("#go-back-bt");
var clearButton = document.querySelector("#clear-btn");
var gameOver = document.querySelector("#done")
var secondsLeft = 10;
var index = 0

//array of objects
var questions = [
    {
        Title: "Question1",
        Options: ["option", "option2", "option3", "option4"],
        Answer: "option2"
    },
    {
        Title: "Question2",
        Options: ["option1", "option2", "option3", "option4"],
        Answer: "option3"
    },
    {
        Title: "Question3",
        Options: ["option1", "option2", "option3", "option4"],
        Answer: "option1"
    },
    {
        Title: "Question4",
        Options: ["option1", "option2", "option3", "option4"],
        Answer: "option2"
    },
    {
        Title: "Question5",
        Options: ["option1", "option2", "option3", "option4"],
        Answer: "option4"
    }
]

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
            gameOver.setAttribute("class","")
        }

    }, 1000);
}

function showQuestions(){
questionEl.textContent = questions[index].Title;
    for (let i = 0; i < choicesEl.length; i++) {
        choicesEl[i].textContent=questions[index].Options[i]
    }
}

// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0

function sendMessage() {
    timeEl.textContent = "OVER";
}
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

//add event listener goes at the bottom because we want it to load last
startButton.addEventListener("click", function () {
    introductionEl.setAttribute("class", "hidden");
    questionSection.setAttribute("class", "");
    setTime();
    showQuestions();
})

questionSection.addEventListener("click",function(event){
    var element = event.target;
    if(element.matches("button")){
        index++;
        showQuestions();
    }
})