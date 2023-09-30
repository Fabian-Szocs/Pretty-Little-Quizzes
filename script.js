const questions = [
  {
    question: "What is the name of the town that ht show is set in?",
    answer: [
      {text:"CreekHill", correct: false},
      {text:"Rosewood", correct: true},
      {text:"NewHaven", correct: false},
      {text:"Ravenswood", correct: false},
    ]
  },
  {
    question: "On what date did Alison DiLaurentis disappear?",
    answer: [
      {text:"August 31st 2010", correct: false},
      {text:"September 1st 2010", correct: false},
      {text:"October 16th 2009", correct: false},
      {text:"September 1st 2009", correct: true},
    ]
  },
  {
    question: "Who is the first liar we see after the 1 year time jump?",
    answer: [
      {text:"Hanna", correct: false},
      {text:"Aria", correct: true},
      {text:"Emily", correct: false},
      {text:"Spancer", correct: false},
    ]
  },
  {
    question: "Who did Spancer have her first kiss with?",
    answer: [
      {text:"Wren", correct: false},
      {text:"Alex", correct: false},
      {text:"Toby", correct: false},
      {text:"Ian", correct: true},
    ]
  },
  {
    question: "What did A write on Hanna's cast when she was in the hospital?",
    answer: [
      {text:"I'm sorry about last night, kiss and make-up? -A", correct: false},
      {text:"You knew too much, sorry, -A.", correct: false},
      {text:"Sorry about losing my temper, my bad, love, -A.", correct: true},
      {text:"Careful Hanna, knowing too much is dangerous. -A", correct: false},
    ]
  },
  {
    question: "Where did Ashley Marin keept the money she stole?",
    answer: [
      {text:"In her closet", correct: false},
      {text:"In the lasagna box", correct: true},
      {text:"In her make-up bag", correct: false},
      {text:"In the popsicle box", correct: false},
    ]
  },
  {
    question: "What date was written on the bloody trophy the girls found?",
    answer: [
      {text:"August 2009", correct: true},
      {text:"September 2010", correct: false},
      {text:"September 2009", correct: false},
      {text:"August 2010", correct: false},
    ]
  },
  {
    question: "What did the number 214 mean?",
    answer: [
      {text:"It was a room number", correct: false},
      {text:"It was Caleb's loker combination", correct: true},
      {text:"It was just a number Toby gave to Spancer", correct: false},
      {text:"It was a safe combination", correct: false},
    ]
  },
  {
    question: "Who did three of the liars and Garret meet in the woods in the season finale?",
    answer: [
      {text:"Ian", correct: false},
      {text:"Jenna", correct: false},
      {text:"A random man", correct: true},
      {text:"Jason", correct: false},
    ]
  },
  {
    question: "Who tried to kill Sapncer in in bell tower?",
    answer: [
      {text:"Jenna", correct: false},
      {text:"Ian", correct: true},
      {text:"-A", correct: false},
      {text:"Nobody", correct: false},
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