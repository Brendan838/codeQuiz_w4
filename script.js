
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
var stopTimer 
var scoresList = document.querySelector("#scoresList")
var initialsValue = document.querySelector("#highScoreInitials");
var submitForm = document.querySelector("#highScoreSubmit");
var highScoreList = document.querySelector("#highScoreList")
var userInfo = {
user: ["User"],
score: ["High Score"]
 }
var parsedHighScores = JSON.parse(localStorage.getItem("userInfo"))





function countingDown() {
 initialTimer--;
 timer.innerHTML = "You have " + initialTimer + " seconds left!"
  if (initialTimer <= 0) {
  clearInterval(stopTimer)
  gameOver()
  }
}

//Start the quiz
var startQuizButton = startQuiz.addEventListener("click", function () {
  scoresList.style.display = "none";
  startContent.style.display = "none";
  questionDiv.style.display = "block";
  stopTimer = setInterval(countingDown, 1000)
  renderQuestion(); 
  document.querySelector("#startQuiz").disabled = true;
})



//answer quiz questions, subtract 20 seconds if a question is wrong, if it is question 5 go to high score screen
button1.addEventListener("click", function() {
if (questionArray[questionIndex].answers[0].answerBool === false) {
  initialTimer = initialTimer -20;
}
else if (questionIndex === 4) {
highScoreScreen()
}
questionIndex++;
renderQuestion()

})

button2.addEventListener("click", function() { 
if (questionArray[questionIndex].answers[1].answerBool === false){
  initialTimer = initialTimer -20;
}
else if (questionIndex === 4) {
highScoreScreen()
}

questionIndex++;
renderQuestion()
})

button3.addEventListener("click", function() {
if (questionArray[questionIndex].answers[2].answerBool === false){
  initialTimer = initialTimer -20;
}
else if (questionIndex === 4) {
highScoreScreen()
}

questionIndex++;
renderQuestion()
})

button4.addEventListener("click", function() {
if ((questionArray[questionIndex].answers[3].answerBool) === false){
  initialTimer = initialTimer -20;
}
else if (questionIndex === 4) {
highScoreScreen()
}


questionIndex++;
renderQuestion()
})


//This will render the correct quiz content into the buttons based on the question number given as a parameter
function renderQuestion() {
if (questionIndex === 5){
highScoreScreen()
}
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

function highScoreScreen() {
questionDiv.style.display = "none";
youWin.style.display = "block"
clearInterval(stopTimer);
}


// button for submitting high score and then going to the high score page

submitForm.addEventListener("click", getInfo)
	
function  getInfo(e) {
	e.preventDefault();
  storeLocally(initialsValue.value, initialTimer)
  youWin.style.display = "none"
  highScoreList.style.display = "block"
  printHighScores()
  }

//get local storage- push high score and user name to those arrays and then save back to local storage
function storeLocally (user,score) {
if(parsedHighScores){
parsedHighScores.user.push(user)
parsedHighScores.score.push(score)
localStorage.setItem("userInfo", JSON.stringify(parsedHighScores))
}
else {
userInfo.user.push(user)
userInfo.score.push(score)
localStorage.setItem("userInfo", JSON.stringify(userInfo))
}
}



//function for printing high scores
function printHighScores() {
scoresList.style.display = "block"
if (parsedHighScores){
for (var i = 0; i < parsedHighScores.user.length; i++) {
var scoreEl = document.createElement("p");
scoreEl.innerHTML = parsedHighScores.user[i] + ": " + parsedHighScores.score[i];
scoresList.append(scoreEl)
}
}
else {
console.log(userInfo)
for (var i = 0; i < userInfo.user.length; i++) {
var scoreEl = document.createElement("p");
scoreEl.innerHTML = userInfo.user[i] + ": " + userInfo.score[i];
scoresList.append(scoreEl)
}
}
}


highScore.addEventListener("click", function(){
localStorage.clear()
document.location.reload()

})



/* 1. store high score as a variable
2. store initals as a variable
3. prepend that information in a created element on the high score screen
4. store that information in an array
4. save the array to localStorage
6. Upon reloading of the web page, have the array reflect the stored initials and scores
7. Get View HIgh Scores button working


print



*/