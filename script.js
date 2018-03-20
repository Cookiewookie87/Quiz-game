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
*/

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
