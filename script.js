/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).

--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.


var Question = function(question, answers, correctAnswer){ // function constructor
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}
// creating questions
var q1 = new Question ("Are you over 18 years old?", ["Yes", "No"], 0);
var q2 = new Question ("Are you from Ljubljana?", ["Yes", "No"], 1);
var q3 = new Question ("What frameworks do you use?", ["Angular", "Vue", "React", "None"], 3);
var q4 = new Question ("Do you hate CSGO?", ["Yes", "No", "Not sure"], 2);
// storing them in array
var quizArr = [q1, q2, q3, q4];

Question.prototype.randQuest = function() { // method for displaying question and getting answer
    var quizLength = quizArr.length; //length of array
    var rand = Math.floor((Math.random() * quizLength - 1) + 1); //setting random number from 1 to length of quiz array
    console.log(quizArr[rand].question); // display question

    var answersDisplay = quizArr[rand].answers;
    var questioNumber = 1;

    //goes through answers array and displays them
    for (var i = 0; i < answersDisplay.length; i++) {
        console.log(questioNumber + ". " + answersDisplay[i]);
        questioNumber++; //number before answers
    }

    var answer = quizArr[rand].correctAnswer + 1; //answers index + 1, so we have 1, 2, 3,...
    var userAnswer = prompt("Please answer question by entering number:");
    if (parseInt(userAnswer) === answer) { // checks if answer is correct
        console.log("Your answer is CORRECT!");
    } else {
        console.log("Your answer is wrong! :(");
    }
}

console.log(q1.randQuest()); // Zakaj to dela??

SECOND

(function () {
    var Question = function(question, answers, correctAnswer) { // function constructor
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    };
    // creating questions
    var q1 = new Question("Are you over 18 years old?", ["Yes", "No"], 1);
    var q2 = new Question("Are you from Ljubljana?", ["Yes", "No"], 2);
    var q3 = new Question("What frameworks do you use?", ["Angular", "Vue", "React", "None"], 4);
    var q4 = new Question("Do you hate CSGO?", ["Yes", "No", "Not sure"], 3);
    // storing them in array
    var quizArr = [q1, q2, q3, q4];

    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log((i+1) + ". " + this.answers[i]);
        }
    };

    Question.prototype.checkAnswer = function(userAnswer) {
        if (userAnswer === this.correctAnswer) {
            console.log("Your answer is CORRECT!!");
        } else {
            console.log("Your answer is wrong :(");
        }
    };

    startQuiz();

    function startQuiz() {
        var rand = Math.floor(Math.random() * quizArr.length);
        quizArr[rand].displayQuestion();
        var userAnswer = parseInt(prompt("Please enter answer number:"));
        quizArr[rand].checkAnswer(userAnswer);
    }
})();

THIRD WITHOUT SCORE

(function () {
    var Question = function(question, answers, correctAnswer) { // function constructor
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    };
    // creating questions
    var q1 = new Question("Are you over 18 years old?", ["Yes", "No"], 1);
    var q2 = new Question("Are you from Ljubljana?", ["Yes", "No"], 2);
    var q3 = new Question("What frameworks do you use?", ["Angular", "Vue", "React", "None"], 4);
    var q4 = new Question("Do you hate CSGO?", ["Yes", "No", "Not sure"], 3);
    // storing them in array
    var quizArr = [q1, q2, q3, q4];

    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log((i + 1) + ". " + this.answers[i]);
        }
    };

    Question.prototype.checkAnswer = function(userAnswer) {
        if (parseInt(userAnswer) === this.correctAnswer) {
            console.clear();
            console.log("Your answer is CORRECT!!");
            console.log("----------------------------");
            startQuiz();
        } else if (userAnswer === "exit"){
            console.clear();
            console.log("You have exit the quiz");
        } else {
            console.clear();
            console.log("Your answer is wrong :(");
            console.log("----------------------------");
            startQuiz();
        }
    };

    startQuiz();
    function startQuiz() {
        var rand = Math.floor(Math.random() * quizArr.length);
        quizArr[rand].displayQuestion();
        var userAnswer = prompt("Please enter answer number:");
        quizArr[rand].checkAnswer(userAnswer);
    }
})();
*/















































