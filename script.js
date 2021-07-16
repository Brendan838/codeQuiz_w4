
// Connecting our html elements to Javscript variables
var highScore = document.querySelector("#highScore");
var startQuiz = document.querySelector("#startQuiz");
var startContent= document.querySelector("#startContent");
var nextQuestion= document.querySelector("#nextQuestion");
var questionDiv= document.querySelector("#questionDiv");
var questionPrompt= document.querySelector("#questionPrompt")
var allButtons= document.querySelectorAll(".button");
var button1= document.querySelector("#button1")
var button2= document.querySelector("#button2")
var button3= document.querySelector("#button3")
var button4= document.querySelector("#button4")
var questionIndex = 0;
var initialTimer = 60;
var timer = document.querySelector("#timer")
var endScreenDiv = document.querySelector("#endScreenDiv")
var youWin = document.querySelector("#youWin")

//Events
highScore()
//Start the quiz
var startQuizButton = startQuiz.addEventListener("click", function () {
  startContent.style.display = "none";
  questionDiv.style.display = "block";

  var countdown = setInterval(function(){
  initialTimer--;
  timer.innerHTML = initialTimer 
  if (initialTimer <= 0) {
  clearInterval(countdown)
  gameOver()
  }
  },1000
  )
  renderQuestion();
})
//answer quiz questions, subtract 20 seconds if a question is wrong, if it is question 5 go to high score screen
button1.addEventListener("click", function() {
if (questionArray[questionIndex].answers[0].answerBool === false) {
  initialTimer = initialTimer -20;
}
else {
  initialTimer = initialTimer -0;
};
/*
if (questionIndex = 4 && initialTimer > 0) {
highScore()
}
*/
questionIndex++;
renderQuestion()

})

button2.addEventListener("click", function() { 
if (questionArray[questionIndex].answers[1].answerBool === false){
  initialTimer = initialTimer -20;
}
else {
  initialTimer = initialTimer -0;
}
questionIndex++;
renderQuestion()
})

button3.addEventListener("click", function() {
if (questionArray[questionIndex].answers[2].answerBool === false){
  initialTimer = initialTimer -20;
}
else {
  initialTimer = initialTimer -0;
}
questionIndex++;
renderQuestion()
})

button4.addEventListener("click", function() {
if ((questionArray[questionIndex].answers[3].answerBool) === false){
  initialTimer = initialTimer -20;
}
else {
  initialTimer = initialTimer -0;
}

questionIndex++;
renderQuestion()
})

//submit high score

//create an event to click on the buttons and when the button is clicked to render the next question
//how do I create an event listener for multiple elements

//create a view high score event


//create an button to submit your high score




//This will render the correct quiz content into the buttons based on the question number given as a parameter
function renderQuestion() {
questionPrompt.innerHTML = questionArray[questionIndex].question;
button1.innerHTML = questionArray[questionIndex].answers[0].answer;
button2.innerHTML = questionArray[questionIndex].answers[1].answer;
button3.innerHTML = questionArray[questionIndex].answers[2].answer;
button4.innerHTML = questionArray[questionIndex].answers[3].answer;
}

/*This is my list of questions. It is an array of objects that contain 2 items in each object, a question, 
and an array of 4 objects that are the answers and their values
*/
var questionArray = [
{
question: "What is 2 + 2?",
answers: [
{ answer: "1", answerBool: false},
{ answer: "2", answerBool: false},
{ answer: "3", answerBool: false},
{ answer: "4", answerBool: true}
]
},
{
question: "What is 3 + 3?",
answers: [
{ answer: "1", answerBool: false},
{ answer: "6", answerBool: true},
{ answer: "3", answerBool: false},
{ answer: "4", answerBool: false}
]
},
{
question: "What is 10 + 10?",
answers: [
{ answer: "1", answerBool: false},
{ answer: "2", answerBool: false},
{ answer: "20", answerBool: true},
{ answer: "4", answerBool: false}
]
},
{
question: "What is 4 + 4?",
answers: [
{ answer: "8", answerBool: true},
{ answer: "2", answerBool: false},
{ answer: "3", answerBool: false},
{ answer: "4", answerBool: false}
]
},
{
question: "What is 1 + 1?",
answers: [
{ answer: "1", answerBool: false},
{ answer: "2", answerBool: true},
{ answer: "3", answerBool: false},
{ answer: "4", answerBool: false}
]
}
]
//Game over screen if timer = 0 
function gameOver() {
questionDiv.style.display = "none";
endScreenDiv.style.display= "block";
}

// Screen for entering high score here

function highScore() {
questionDiv.style.display = "none";
youWin.style.display = "block"
}


//function for decreasing time for each wrong answer


//function for adding up correct answers