const questions = [
  {
    question: "Witch of the liars has a hair change the season?",
    answer: [
      {text:"Aria", correct: false},
      {text:"Hanna", correct: true},
      {text:"Emily", correct: false},
      {text:"Spancer", correct: false},
    ]
  },
  {
    question: "What did Alison wraped her phone in to throw it out the window?",
    answer: [
      {text:"a piece of clothing", correct: false},
      {text:"A towel", correct: false},
      {text:"Toilet paper", correct: true},
      {text:"She didn' wrap it in anything", correct: false},
    ]
  },
  {
    question: "Who helps Spancer replant flowers in her back yard?",
    answer: [
      {text:"Jason", correct: false},
      {text:"Andrew", correct: true},
      {text:"Toby", correct: false},
      {text:"Her mother", correct: false},
    ]
  },
  {
    question: "In what episode does Veroinca Hasthings decides to leave Peter?",
    answer: [
      {text:"Episode 9", correct: false},
      {text:"Episode 7", correct: false},
      {text:"Episode 8", correct: false},
      {text:"Episode 5", correct: true},
    ]
  },
  {
    question: "Who has photos of Alison from then she was supossed to dead?",
    answer: [
      {text:"Jenna", correct: false},
      {text:"Mona", correct: false},
      {text:"Noel", correct: true},
      {text:"-A", correct: false},
    ]
  },
  {
    question: "Who is arrested for Bethany Youns's murder?",
    answer: [
      {text:"Alison", correct: false},
      {text:"Spancer", correct: true},
      {text:"Hanna", correct: false},
      {text:"Nobody", correct: false},
    ]
  },
  {
    question: "What was in the barrel?",
    answer: [
      {text:"Fragments of animal bones", correct: true},
      {text:"Nothing", correct: false},
      {text:"Mona's body", correct: false},
      {text:"It was not reveald", correct: false},
    ]
  },
  {
    question: "How many liars wore an orange jumpsuit?",
    answer: [
      {text:"4", correct: false},
      {text:"2", correct: false},
      {text:"1", correct: false},
      {text:"5", correct: true},
    ]
  },
  {
    question: "Who is singing at the piano in the DollHouse?",
    answer: [
      {text:"Alison", correct: false},
      {text:"Cece", correct: false},
      {text:"Mona", correct: true},
      {text:"Spancer", correct: false},
    ]
  },
  {
    question: "What color is Hanna' dress that she wears at the DollHouse Prom?",
    answer: [
      {text:"Blue", correct: false},
      {text:"Red", correct: true},
      {text:"Pink", correct: false},
      {text:"Black", correct: false},
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