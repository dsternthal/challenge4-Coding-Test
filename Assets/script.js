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
var answerType = document.querySelector("answerType")
var secondsLeft = 5;
var index = 0

//array of objects
var questions = [
    {
        Title: "Question1",
        Options: ["option1", "option2", "option3", "option4"],
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

function countDown() {
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
    gameOver.setAttribute("class","")
}
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

function nextQuestion(){
    var element = event.target;
    if(element.matches("button")){
        index++;
        showQuestions();
}}

//add event listener goes at the bottom because we want it to load last
startButton.addEventListener("click", function () {
    introductionEl.setAttribute("class", "hidden");
    questionSection.setAttribute("class", "");
    countDown();
    showQuestions();
})

questionSection.addEventListener("click",nextQuestion)

setTimeout(() => { console.log("delayed for 1 second");

}, 1000);

//set timeout

