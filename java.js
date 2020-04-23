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


var startButton = document.createElement("button");
document.getElementById("startQuiz").appendChild(startButton);
startButton.textContent = "Start Button";
startButton.addEventListener('click', function(){
    question1();
    timer();
    // back end triggers
});


var timer = function(){
    var timeAmount = 90;
    var myVar = setInterval(someFunction, 1000);
    function someFunction() {
        timeAmount--;
        //console.log(document.getElementById("changer"));
        document.getElementById("changer").innerText = timeAmount;
    };
};




var questionArray = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    }
  ];



// // variables and questions
var question1=function(){
    // for loop that runs through questionArray and displays it
    document.getElementById("Questions").textContent = questionArray[0].question;
    
    var options1 = document.createElement("p");
        document.getElementById("answers").appendChild(options1);
        options1.textContent = questionArray[0].answers.a;
    var options2 = document.createElement("p");
        document.getElementById("answers").appendChild(options2);
        options2.textContent = questionArray[0].answers.b;
    var options3 = document.createElement("p");
        document.getElementById("answers").appendChild(options3);
        options3.textContent = questionArray[0].answers.c;
}


// build the back end of the html changer (set Interval going to run a decrease funtion every 1000 millisecond)
// display 90 seconds HTML changer











// set interval - runs funtion every specified time over and over // and set time out only sets one and it has a delay

// set up structure: 
    // backend: set interval timer - decreases by 1 second
    // display: text content of interval timer


// when you click the button it will show you the number 90
// backend, variable that is set to 90






// createElementby ID - each time you create A you give it an ID of an
// targetElementbyID - select

// var x = questionarray[0].answer.b;
// var y = questionArray[2].answer.d;
// var c = questionArray[0].correctAnswer;







        
// //         question: "How may 'n's' does 'MOUNTAIN' have?",
// //         question: "How many followers does @world_record_egg have? on Instagram",
// //     
// // ];

var optionOne = ["5", "3", "7"];
var optionsforTwo = ["4", "6", "2"];
var optionsforThree = ["6.7M", "4M", "100K"];

var answers = ["3", "2", "6.7M"];



// console.log(question);
// myQuestions[0].answers.b





// // node.appendChild(question.questionOne.Answer);



