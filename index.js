

var readlineSync=require('readline-sync');

var score=0;
var userName = readlineSync.question("What is your name? \n");
console.log("Welcome "+userName+" do you like memes?")
console.log("Let's see how good you are with a Bollywood memes!")

function bolly(question,answer){
  var userAns=readlineSync.question(question);
  
  if(userAns==answer){
    console.log("Absolutely correct answer!");
    score++;
  }
  else{
    console.log("oh oh wrong answer!");
    score--;
  }

  console.log("Your current score is "+score);
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
}

var questions=[
  {
    question:"Aurat ka chakkar Babu Bhaiyya \n a. Hera pheri \n b. Phir hera pheri  \n c. Golmal \n d. Jolly LLb 2 \n",
    answer:"a"
  },

  {
    question:"Khazana bade 'W' ke niche hai \n a. Dhol \n b. Dhamaal  \n c. Golmal \n d. Golmaal 2 \n",
    answer:"b"
  },

  {
    question:"Ye koi tarika hai bheek mangne ka  \n a. Golmaal 3   \n b. Hera pheri  \n c. Golmaal \n d. Dhamaal \n",
    answer:"c"
  },

  {
    question:"Behan dar gayi, behan dar gayi \n a. Bhagam bhag   \n b. Bhool bhulaiya  \n c. dhol \n d. Dhamaal \n",
    answer:"d"
  },

  {
    question:"Kon h ye log... kaha se aate h ye log \n a. Golmaal 3 \n b. Golmaal 2  \n c. Golmaal \n d. Jolly LLB\n",
    answer:"d"
  },

  {
    question:"Bhai sahab ye kis line m aa gaye aap \n a. Mujhase shaadi karogi\n b. Housefull 2 \n c. Welcome \n d. Jolly LLB         2 \n",
    answer:"c"
  },

  {
    question:"Aurat banne ka shaikh hai ha? \n a. Bhool bhulaiyya\n b. Bhagam bhag 2 \n c. Welcome \n d. Housefull 2 \n",
    answer:"a"
  },

  {
    question:"Jali na teri jali na \n a. Hera pheri  \n b. Bhagam bhag 2  \n c. Phir hera pheri \n d. Mujhase shaadi karogi \n",
    answer:"d"
  },

  {
    question:"Abey jldi bol, kal subeh panvel nikalna hai \n a. Golmaal 3   \n b. Golmaal 2  \n c. Golmaal \n d. Dhamaal \n",
    answer:"a"
  },

  {
    question:"Jor jor se bolkar sbko scheme bata de \n a. Phir hera pheri\n b. Hera pheri  \n c. dhol \n d. Dhamaal \n",
    answer:"a"
  },
]

for(var i=0;i<questions.length;i++){
  var curr=questions[i];
  bolly(curr.question, curr.answer);
}

console.log("HERE IS YOUR FINAL SCORE!");
if(score===10){
  
  console.log("Hurrey your score is "+score+"/10");
  console.log("WOW..You are Genius!");
}
if(score>5){
  console.log("Yayy! your score is "+score+"/10");
  console.log("You are doing well!");
}
else{
  
  console.log("Your score is "+score);
  console.log("Try one more time!");
}
