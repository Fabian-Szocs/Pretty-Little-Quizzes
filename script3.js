const questions = [
  {
    question: "What did Hanna almost steal from the shop in episode 1?",
    answer: [
      {text:"A scarf", correct: false},
      {text:"A necklace", correct: true},
      {text:"Sunglasses", correct: false},
      {text:"A top", correct: false},
    ]
  },
  {
    question: "On what episode do the liars find out that Jenna can see?",
    answer: [
      {text:"Episode 2", correct: false},
      {text:"Episode 6", correct: false},
      {text:"Episode 3", correct: true},
      {text:"She can't see", correct: false},
    ]
  },
  {
    question: "What kind of party is Toby waiting for?",
    answer: [
      {text:"A birthday party", correct: false},
      {text:"A she's leaving Rosewood party ", correct: true},
      {text:"A goodbye party", correct: false},
      {text:"He doesn't like parties", correct: false},
    ]
  },
  {
    question: "Who meets Hanna in the curch?",
    answer: [
      {text:"Garret", correct: false},
      {text:"Jenna", correct: false},
      {text:"Jason", correct: false},
      {text:"Wilden", correct: true},
    ]
  },
  {
    question: "What kind of wine does Wilden buy for Ashley at the restaurant?",
    answer: [
      {text:"Red wine", correct: false},
      {text:"Rose", correct: false},
      {text:"White wine", correct: true},
      {text:"None of the above", correct: false},
    ]
  },
  {
    question: "What did Mona use to blackmail Lucas with?",
    answer: [
      {text:"The fact that he spent Caleb's money", correct: false},
      {text:"The fact that he stole test answers and sold them", correct: true},
      {text:"The fact that he was the one that hit Hanna with a car", correct: false},
      {text:"The fact that he tried to kill Alison", correct: false},
    ]
  },
  {
    question: "Who helps Hanna throw Wilden's car in lake?",
    answer: [
      {text:"Aria", correct: true},
      {text:"Caleb", correct: false},
      {text:"Emily", correct: false},
      {text:"Mona", correct: false},
    ]
  },
  {
    question: "Who finds Spancer in Radley and alerts her family?",
    answer: [
      {text:"Wren", correct: false},
      {text:"Anne Sulivan", correct: true},
      {text:"Mona", correct: false},
      {text:"Park Rangers", correct: false},
    ]
  },
  {
    question: "How does red coat arrive at the Lodge after the girls?",
    answer: [
      {text:"By car", correct: false},
      {text:"We don't see how", correct: false},
      {text:"By plane", correct: true},
      {text:"She was already there", correct: false},
    ]
  },
  {
    question: "How many people saw Alison that night?",
    answer: [
      {text:"3", correct: false},
      {text:"1", correct: true},
      {text:"4", correct: false},
      {text:"Nobody saw her", correct: false},
    ]
  },

];

const questionElement = document.getElementById("questions");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-bttn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answer.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("bttn");
    answerButton.appendChild(button);
    if (answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState(){
  nextButton.style.display = "none";
  while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e){
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if(isCorrect){
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach(button =>{
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again"
  nextButton.style.display = "block";
}



function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
});

startQuiz();