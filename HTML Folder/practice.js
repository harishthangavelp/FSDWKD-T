var quizQuestions = [
    {
        question: "Which insect wont sleep from birth till death ?",
        choices: ["grasshopper","butterfly","ants","bees"],
        correctanswer: "ants",
    },
    {
        question: "Healthy person can sleep upto ___ hours",
        choices: ["8","9","10","7"],
        correctanswer: "7",
    },
    {
        question: "Which country made diamond in space ?",
        choices: ["Thailand","Japan","China","India"],
        correctanswer: "Japan",
    },
    {
        question: "World's largest hotest waterfall found in which country ?",
        choices: ["Asia","America","New Zealand","Australia"],
        correctanswer: "New Zealand",
    },
    {
        question: "In which insect green blood is found ?",
        choices: ["caterpillar","butterfly","mantis","lice"],
        correctanswer: "caterpillar",
    }
];

var UserScore = 0;

for(var s = 1; s <= quizQuestions.length; s++){
        for(var i = 0; i <= quizQuestions.length; i++)
var userAnswer = prompt(s + ")" +" " + quizQuestions[i].question + "\n" + quizQuestions[i].choices);
if(userAnswer === quizQuestions[i].correctanswer.toLowerCase || quizQuestions[i].correctanswer.toUpperCase ){
    UserScore++;
}
}
alert("Your final score is "+ UserScore + "/" +quizQuestions.length);