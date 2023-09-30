const questions = [
  {
    question: "What is the name of the therapist that the girls are sent to?",
    answer: [
      {text:"Mary Drake", correct: false},
      {text:"Anne Sulivan", correct: true},
      {text:"Jessica Marshall", correct: false},
      {text:"Mary Sulivan", correct: false},
    ]
  },
  {
    question: "Where did Spancer belive Ian was hideing?",
    answer: [
      {text:"In a barn", correct: false},
      {text:"In another town", correct: false},
      {text:"Melissa's apartment in Philly", correct: false},
      {text:"In Jason's house", correct: true},
    ]
  },
  {
    question: "Who did Emily go on a date with after Samara broke up with her?",
    answer: [
      {text:"Page", correct: false},
      {text:"Maya", correct: true},
      {text:"A girl she met online", correct: false},
      {text:"She didn't go on a date.", correct: false},
    ]
  },
  {
    question: "Who did Jenna buy the black lace lingerie for?",
    answer: [
      {text:"Toby", correct: false},
      {text:"Ian", correct: false},
      {text:"Jason", correct: false},
      {text:"Garret", correct: true},
    ]
  },
  {
    question: "Why did Emily end up in the hospital?",
    answer: [
      {text:"She was attaked by A", correct: false},
      {text:"She had an accident while swimming", correct: false},
      {text:"She developed an stress ulcer", correct: true},
      {text:"She was in a car crash", correct: false},
    ]
  },
  {
    question: "What was Alisons's cause of death as stated in her death report?",
    answer: [
      {text:"She was hit with an object that had a curved blunt edge", correct: false},
      {text:"She was buerid alive", correct: true},
      {text:"She was strangled", correct: false},
      {text:"She was thown off of the bell tower", correct: false},
    ]
  },
  {
    question: "Who punched Ezra after he revield his realtionship with Aria?",
    answer: [
      {text:"Mike", correct: true},
      {text:"Byron", correct: false},
      {text:"Jason", correct: false},
      {text:"Nobody", correct: false},
    ]
  },
  {
    question: "What is the name of the town where the girls find the creepy doll shop?",
    answer: [
      {text:"Ravenswood", correct: false},
      {text:"BrookHaven", correct: true},
      {text:"Philadelphia", correct: false},
      {text:"HitlonHead", correct: false},
    ]
  },
  {
    question: "What does Spancer find in Alisons's journal form A's lair?",
    answer: [
      {text:"A story Alison wrote", correct: false},
      {text:"A's name", correct: false},
      {text:"A gum wraper", correct: true},
      {text:"A drawing of a black swan costume", correct: false},
    ]
  },
  {
    question: "Who visits Mona in Readly in the last scene of season 2?",
    answer: [
      {text:"Jenna", correct: false},
      {text:"Someone in a red coat", correct: true},
      {text:"Alison", correct: false},
      {text:"Lucas", correct: false},
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