var highScore = document.querySelector("#highScore");
var startQuiz = document.querySelector("#startQuiz");
var startContent= document.querySelector("#startContent");
var nextQuestion= document.querySelector("#nextQuestion");
var questionDiv= document.querySelector("#questionDiv");
var questionPrompt= document.querySelector("#questionPrompt")
var button1= document.querySelector("#button1")
var button2= document.querySelector("#button2")
var button3= document.querySelector("#button3")
var button4= document.querySelector("#button4")


/*
You have to:
Create a timer
  1. create display in html
  2. creat function that starts countdown when you hit the start quiz button
  3. create if statement in the function that if timer = 0 before the quiz is done then it displays the ending page

You have to:

Do we want it to display whether an answer was correct or incorrect?

Create a high Score page in the html
*/

var questionNumber = 0 

startQuiz.addEventListener("click", function () {
  startContent.style.display = "none"
  questionDiv.style.display = "block"
  renderQuestion(questionNumber);
})



function renderQuestion(questionNumber) {
questionPrompt.innerHTML = questionArray[questionNumber].question1
button1.innerHTML = questionArray[questionNumber].answer1
button2.innerHTML = questionArray[questionNumber].answer2
button3.innerHTML = questionArray[questionNumber].answer3
button4.innerHTML = questionArray[questionNumber].answer4
}


var questionArray = [
{
question: "What is 2 + 2?",
answer1: "1",
answer2: "2",
answer3: "3",
answer4: "4",
},
{
question: "What is 3 + 3?",
answer1: "1",
answer2: "2",
answer3: "3",
answer4: "6",
},
{
question: "What is 4 + 4?",
answer1: "1",
answer2: "2",
answer3: "8",
answer4: "4",
},
{
question: "What is 5 + 5?",
answer1: "1",
answer2: "2",
answer3: "10",
answer4: "4",
},
{
question: "What is 6 + 6?",
answer1: "1",
answer2: "2",
answer3: "11",
answer4: "4",
}
]


