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


// var startButton = document.createElement("button");
// document.getElementById("startQuiz").appendChild(startButton);
// startButton.textContent = "Start Button";
// startButton.addEventListener('click', function(){
//     question1();
//     timer();
//     // back end triggers
// });

var startButtonProcess = function(){
  document.getElementById("startQuiz").innerHTML = 
  `<p>This is the start of the quiz
    <br>
    Click below to begin
    </p>
    <button id="startButton"> Start Quiz </button>`
    ;
    var startButton = document.getElementById("startButton");
    startButton.addEventListener('click', function(){
      question1Process();
      timerProcess();
      // back end triggers
    });
}
startButtonProcess();
console.log(startButtonProcess);

var score = 0;
var timeAmount = 91;

var timerProcess = function(){
    incramentProcess = setInterval(timer, 1000);
    function timer() {
      if (timeAmount > 0){
        timeAmount--;
      } 
      // end of if statement function
    document.getElementById("changer").innerText = timeAmount
  }

    
};

// end of timerProcessFunction






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
var question1Process=function(){

  document.getElementById("startQuiz").innerHTML = "";
    document.getElementById("Questions").textContent = questionArray[0].question;
  

    var options1 = document.createElement("p");
        document.getElementById("answers").appendChild(options1);
        options1.textContent = questionArray[0].answers.a;
        options1.addEventListener('click', function(){
          timeAmount -= 10;
          startQuestion2Process()
        
        });

    var options2 = document.createElement("p");
        document.getElementById("answers").appendChild(options2);
        options2.textContent = questionArray[0].answers.b;
        options2.addEventListener('click', function(){
          timeAmount -= 10;
          startQuestion2Process();
        });


    var options3 = document.createElement("p");
        document.getElementById("answers").appendChild(options3);
        options3.textContent = questionArray[0].answers.c;
        options3.addEventListener('click', function(){
          score++;
          startQuestion2Process();
        
         
        });
  
}



var startQuestion2Process=function(){
  document.getElementById("answers").innerHTML = "";

  // for loop that runs through questionArray and displays it
  document.getElementById("Questions").textContent = questionArray[1].question;
  
  var options1 = document.createElement("p");
      document.getElementById("answers").appendChild(options1);
      options1.textContent = questionArray[1].answers.a;
      options1.addEventListener('click', function(){
        timeAmount -= 10;
        question3Process();
      });
      
  var options2 = document.createElement("p");
      document.getElementById("answers").appendChild(options2);
      options2.textContent = questionArray[1].answers.b;
      options2.addEventListener('click', function(){
        timeAmount -= 10;
        question3Process();
      });

  var options3 = document.createElement("p");
      document.getElementById("answers").appendChild(options3);
      options3.textContent = questionArray[1].answers.c;
      options3.addEventListener('click', function(){
        score++;
        question3Process();
      
    
      });
}

var question3Process=function(){
  document.getElementById("answers").innerHTML = "";
  // for loop that runs through questionArray and displays it
  document.getElementById("Questions").textContent = questionArray[2].question;
  
  var options1 = document.createElement("p");
      document.getElementById("answers").appendChild(options1);
      options1.textContent = questionArray[2].answers.a;
      options1.addEventListener('click', function(){
        timeAmount -= 10;
        startEndPageProcess();
      });
   
      
  var options2 = document.createElement("p");
      document.getElementById("answers").appendChild(options2);
      options2.textContent = questionArray[2].answers.b;
      options2.addEventListener('click', function(){
        timeAmount -= 10;
        startEndPageProcess();
      });

  var options3 = document.createElement("p");
      document.getElementById("answers").appendChild(options3);
      options3.textContent = questionArray[2].answers.c;
      options3.addEventListener('click', function(){
        timeAmount -= 10;
        
        startEndPageProcess();
      });

  var options4 = document.createElement("p");
      document.getElementById("answers").appendChild(options4);
      options4.textContent = questionArray[2].answers.d;
      options4.addEventListener('click', function(){
      score++;
      startEndPageProcess();    
      });
  

}

var startEndPageProcess = function(){
  clearInterval(incramentProcess);
  document.getElementById("changer").innerText = ""
  document.getElementById("score").innerHTML = "This is your score: " + score;
  document.getElementById("Questions").innerHTML = 
  `<form id="submit-form" method="POST">
  <label for="submit-text">Submit Name</label>
  <input type="text" placeholder="Enter Here" name="submit-text" id="submit-text" />
  </form>
  <button id="submitButton"> Submit Button </button>`;
  var nameSubmitButton = document.getElementById("submitButton");
    nameSubmitButton.addEventListener('click', function(){
      highScorePage();
    });

  
  document.getElementById("answers").innerHTML = "";
 

}

var highScorePage = function(){
  var nameInput = document.getElementById("submit-text").value;
  document.getElementById("Questions").innerHTML = nameInput + " " + score;
  document.getElementById("score").innerHTML = "";
  document.getElementById("answers").innerHTML= `<button id="resetButton"> Reset Quiz </button>`;
  resetButton.addEventListener('click', function(){
    document.getElementById("answers").innerHTML = "";
    document.getElementById("Questions").innerHTML = "";
    score = 0;
    timeAmount = 91;
    startButtonProcess();
  });
  
}



// startover button --> on click lister -- then call startbutton funtion



// var clear = function clearbox(Questions){
//   document.getElementById(Questions).innerHTML="";
// };







// if (option1 === true){
//   re
// }

// If Statement? - If Option 1 is selected for question1 move to next question


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


// console.log(question);
// myQuestions[0].answers.b





// // node.appendChild(question.questionOne.Answer);



