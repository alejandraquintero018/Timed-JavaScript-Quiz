
var startBtn = document.getElementById("start");
var timerEl = document.querySelector(".timer");
var answerEl = document.querySelector(".answer");
var CurrentQuestion = document.querySelector(".Question");
var EndGameEl = document.querySelector(".EndScript");
var UserInput = document.querySelector(".Name");
var SubmitBtn = document.querySelector(".Submit"); 
var StartoverBtn = document.querySelector(".Startover");
var timer = 30;
var quizinterval;
var currentquestionindex = 0;
var index = 0;

//WHEN I click the start button
//THEN a timer starts  I am presented with a question, this also hides the start page 

startBtn.addEventListener("click", function () {
    quizinterval = setInterval(countdown, 1000);
    timerEl.textContent = "Time: " + timer;
    displayquestions();
    document.querySelector(".startpage").setAttribute("class", "hide");
});

function countdown() {
    //stopping the timer at 0 seconds and letting the user know that they ran out of time. 
    if (timer >= 1) {
        timer--;
        timerEl.textContent = "Time: " + timer;
    } if (timer === 0) {
        quizend();
    }
};
//displaying the current question and populating the HTML with the answers 
var displayquestions = function () {
    CurrentQuestion.textContent = questions[index].title;
    answerEl.innerHTML = "";
    for (var i = 0; i < questions[index].choices.length; i++) {
        var choice = questions[index].choices[i];
        var choiceBtn = document.createElement("button");
        choiceBtn.textContent = choice;
        choiceBtn.setAttribute("value", choice);
        choiceBtn.onclick = answercheck;
        answerEl.append(choiceBtn);
    };
};


//checking the answer the user gives and making an adjustment to the timer
var answercheck = function () {
    if (this.value !== questions[index].answer) {
        for (var i = 0; i < questions.length; i++) {
            displayquestions();
            console.log("click");
            timer -= 5;
        }
    }
    if (this.value === questions[index].answer) {
        for (var i = 0; i < questions.length; i++) {
            displayquestions();
            console.log("click");
        }
    }
    if (timer === 0) {
        quizend();
    }
}
//function that is called that will prompt the end of the game 
//quizend stop the timer 


var quizend = function () {
    clearInterval(quizinterval);
    document.querySelector(".Quiz").setAttribute("class", "hide");
    EndGameEl.textContent = "You Ran Out of Time! Try Again?";
    //Creating HTML elements that will be the input for name and button to submit.  
    var Input = document.createElement("input");
    var saveBtn = document.createElement("button"); 
    var startquizagain = document.createElement("button");
    //setting the button up to submut then store the name in local storage. 
    saveBtn.addEventListener("click", function(event) {
        event.preventDefault();
    //Grabbing the input value to then store it
        console.log(Input.value); 
        localStorage.setItem("name", Input.value);  
    });
    UserInput.append("Name: ");
    UserInput.append(Input);
    SubmitBtn.append(saveBtn);
    saveBtn.textContent = "Submit"; 
    StartoverBtn.append(startquizagain);
    startquizagain.textContent = "Restart Quiz";

    startquizagain.addEventListener("click", function(event){
        event.preventDefault();

    })

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