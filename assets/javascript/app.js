var seconds;
var timeLeft;
var id;
var index;
var userChoice;
var questionElements;
var displayQuest;
var numRight = 1;
var numWrong;
var questions = [
    {
        question:"What is a good breakfast food?",
        rightAnswer: "Eggs and Bacon",
        allAnswers: ["Cereal", "Eggs and Bacon", "Cookies", "Apples"]
    },
    {
        question:"Where do you sleep?",
        rightAnswer: "Bed",
        allAnswers: ["Bed", "Floor", "Couch", "Cave"]
    },
    {
        question:"How many fingers am I holding up?",
        rightAnswer: "Two",
        allAnswers: ["Twenty", "Four", "A million", "Two"]
    },
    {
        question:"Doctors suggest how many minutes of exercise we should get a day?",
        rightAnswer: "30",
        allAnswers: ["0", "30", "60", "420"]
    },
    {
        question: "Why did the chicken cross the road?",
        rightAnswer: "To get to the other side",
        allAnswers: ["Because he wanted to", "No reason", "To get to the other side", "This can't happen, chickens can't cross roads!"]
    },
    {
        question: "Is this true or false?",
        rightAnswer: "How can I even answer that?!",
        allAnswers: ["True", "False", "I don't know", "How can I even answer that?!"]
    },
    {
        question: "Do you even know why I'm even asking you all these weird questions?",
        rightAnswer: "No",
        allAnswers: ["Yes", "No"]
    },
    {
        question: "Is Santa Claus real?",
        rightAnswer: "Yes",
        allAnswers: ["Yes", "No"]
    },
    {
        question: "Can you touch your toes without bending your knees?",
        rightAnswer: "Yes",
        allAnswers: ["Yes", "No", "That's too hard!", "Why would I do that?"]
    },
    {
        question: "Put in a question here.",
        rightAnswer: "No",
        allAnswers: ["Yes", "No", "Okay", "Make me!"]
    },
]

window.addEventListener('DOMContentLoaded', function(event){
    seconds = 30;
    timeLeft = document.getElementById("timer");
    id;
    index = -1;
    userChoice = "";
    displayQuest = document.getElementById("question");
    questionElements = document.getElementsByClassName("Answer");
    startGame();
    clicky();
});

function timer(seconds){
    var convert = 1000;
    id = setInterval(function(){
        timeLeft.innerHTML = seconds;
        if (seconds === 0){
            alert("Teim up! Teh answer was " + questions[index].rightAnswer + "!");
            clearInterval(id);
            startGame();
            numWrong++
        }
        seconds--;
    }, convert);
}

function startGame(){
    index++
    if(index >= 10){
        alert("Your score is: " + numRight + " questions out of 10!")
        index = 0;
        numRight = 0;
    }
    timer(30);
    displayQuest.innerHTML = questions[index].question;
    for(var i = 0; i<questionElements.length;i++){
        questionElements[i].textContent = "";
        if (typeof questions[index].allAnswers[i] !== 'undefined'){
            questionElements[i].innerHTML = questions[index].allAnswers[i];
        }
    }
}

function resetTime(){
    if (id > 0){
        clearInterval(id);
    }
}

function clicky(){
    var pos1 = questionElements[0].onclick = function(){
        userChoice = questionElements[0].textContent;
        checkAnswer();
        }
    var pos2 = questionElements[1].onclick = function(){
        userChoice = questionElements[1].textContent;
        checkAnswer();
        }
    var pos3 = questionElements[2].onclick = function(){
        userChoice = questionElements[2].textContent;
        checkAnswer();
        }
    var pos4 = questionElements[3].onclick = function(){
        userChoice = questionElements[3].textContent;
        checkAnswer();
        }
}

function checkAnswer(){
    resetTime();
    if(userChoice === questions[index].rightAnswer){
        alert("Your correct!")
        startGame();
        numRight++
    }
    else{
        alert("Lol you're rong! Teh answer was " + questions[index].rightAnswer + "!")
        startGame();
        numWrong++
    }
}

