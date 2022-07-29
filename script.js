//GIVEN I am taking a code quiz
//WHEN I answer a question
//THEN I am presented with another question
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score
//Think about the functionality of what the Javascript is doing to do 
//on click fo the first question, how do I get it to pull the first question?
//get the variables that represent the html page 
//last worry about the logic 
//right or wrong answer and then subtracting the 

//local storage would be last 
//determine using event listeners what is being shown and what is being hidden

//WHEN I click the start button
//THEN a timer starts and I am presented with a question
var startBtn = document.getElementById("start");
var timerEl = document.querySelector(".timer");
var answerEl = document.querySelector(".answer");
var CurrentQuestion = document.querySelector(".Question");
var timer = 6;
var quizinterval; 
var currentquestionindex = 0; 
var index = 0;

//WHEN I click the start button
//THEN a timer starts and I am presented with a question
startBtn.addEventListener("click", function() {
    quizinterval = setInterval(countdown, 1000);
    timerEl.textContent = timer;
    displayquestions();
});

function countdown(){
//stopping the timer at 0 seconds and letting the user know that they ran out of time. 
if (timer >= 0) {
    timer--;
    timerEl.textContent = "Time: " + timer;
}
else { 
    quizend();
};
}

//displaying the current question and populating the HTML with the answers 
var displayquestions = function() {
    CurrentQuestion.textContent = questions[index].title;
  for (var i = 0; i < questions[index].choices.length; i++){
    var choice = questions[index].choices[i];
    var choiceBtn = document.createElement("button");
    choiceBtn.textContent = choice; 
    choiceBtn.setAttribute("value", choice);
    choiceBtn.onclick = answercheck;
    answerEl.append(choiceBtn);
  };
  };

//checking the answer the user gives and making an adjustment to the timer
  var answercheck = function() { 
    if (this.value !== questions[index].answer) {
        timer -= 10; 
        if (timer === 0) {
            quizend(); 
        }
    }
  }

  //function that is called that will prompt the end of the game 
  var quizend = function() {
    clearInterval(quizinterval); 
    var endgame = document.createElement("h2");
    endgame.textContent = ("You Ran Out Of Time, Try Again?");
    
  }

  //array that holds all of the questions, choices and answer
var questions = [
    {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts',
    },
    {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: 'parentheses',
    },
    {
      title: 'Arrays in JavaScript can be used to store ____.',
      choices: [
        'numbers and strings',
        'other arrays',
        'booleans',
        'all of the above',
      ],
      answer: 'all of the above',
    },
    {
      title:
        'String values must be enclosed within ____ when being assigned to variables.',
      choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
      answer: 'quotes',
    },
    {
      title:
        'A very useful tool used during development and debugging for printing content to the debugger is:',
      choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
      answer: 'console.log',
    },
  ];

//function to check if the answer is right or wrong, current index++
//