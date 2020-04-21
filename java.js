// To start:
    // Process on how to update the DOM - append the element to html page
    // Create text for question and answers
    // Start button at home page

    // / WHEN I click the start button
    // addEventLister --> click
    // Button --> when clicked start timer (might use setInterval) & show first question (html)?

// THEN a timer starts and I am presented with a question
    // Question 1: Is the sky blue? (static data we are going to store)


// how to creat html elements in JavaScript
// build html first for framework

var startquizContainer = document.getElementById("startQuiz");
var startButton = document.createElement("button")
document.getElementById("startQuiz").appendChild(startButton);
startButton.textContent = "Start Button"
startquizContainer.appendChild(startButton);
startButton.addEventListener('click', function(){
    document.getElementById(startquizContainer);
});

// variables and questions
var questionContainer = document.getElementById("questions");
var answerContainer = document.getElementById("answers");
var confirmationContainer = document.getElementById("confirmation");

var myQuiz = [
    {
        question: "How many leters are in pig?",
        answers:{
            a: "1",
            b: "2",
            c: "3"
        }
        correctAnswer: "c"
        
    },
    {
        question: "How may 'n's' does 'MOUNTAIN' have?",
        answers:{
            a: "1",
            b: "2",
            c: "3"
        }
        correctAnswer: "b"
        
    },
    {
        question: "How many followers does @world_record_egg have? on Instagram",
        answers:{
            a: "6.7M",
            b: "50M",
            c: "10K"
        }
        correctAnswer: "a"
        
    },
]


// node.appendChild(question.questionOne.Answer);



