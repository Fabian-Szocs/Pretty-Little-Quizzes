const questions = [
  {
    question: "Where does caleb put a GPS traker when Alison is going to meet with A?",
    answer: [
      {text:"In her car", correct: false},
      {text:"In her shoe", correct: true},
      {text:"In her bracelet", correct: false},
      {text:"In her necklace", correct: false},
    ]
  },
  {
    question: "Where did A kept Mona?",
    answer: [
      {text:"In her bedroom", correct: false},
      {text:"Outside", correct: false},
      {text:"In a well", correct: true},
      {text:"In a secret cell", correct: false},
    ]
  },
  {
    question: "Who do the girls this is Charles DiLaurentis?",
    answer: [
      {text:"Jason", correct: false},
      {text:"Andrew", correct: true},
      {text:"Toby", correct: false},
      {text:"Noel", correct: false},
    ]
  },
  {
    question: "That did Cece do to Jason and Keneth DiLaurentis?",
    answer: [
      {text:"Killed them", correct: false},
      {text:"Traped them in a basemant", correct: false},
      {text:"Locked them in a  hidden room", correct: false},
      {text:"Temporarily paralied them ", correct: true},
    ]
  },
  {
    question: "What is the theme for the Rosewood High Junior Prom?",
    answer: [
      {text:"James Bond", correct: false},
      {text:"Night at the Opera", correct: false},
      {text:"Firytale", correct: true},
      {text:"Disco", correct: false},
    ]
  },
  {
    question: "Witch of the liars is engaged after the time jump?",
    answer: [
      {text:"Alison", correct: false},
      {text:"Spancer", correct: false},
      {text:"Hanna", correct: true},
      {text:"Nobody", correct: false},
    ]
  },
  {
    question: "How many people testify against Cece's relise from Welby?",
    answer: [
      {text:"1", correct: true},
      {text:"4", correct: false},
      {text:"2", correct: false},
      {text:"Everybody", correct: false},
    ]
  },
  {
    question: "What did Cece have in her hand when the police discoverd her dead body?",
    answer: [
      {text:"A note", correct: false},
      {text:"Nothing", correct: false},
      {text:"A piece of the murder weapon", correct: false},
      {text:"A rose", correct: true},
    ]
  },
  {
    question: "Where do the liars want to execute their plan to find out who the new A is?",
    answer: [
      {text:"Alison's house", correct: false},
      {text:"The curch", correct: false},
      {text:"LostWoods Motel", correct: true},
      {text:"At Veronica's  party", correct: false},
    ]
  },
  {
    question: "Witch Liar gets taken by A?",
    answer: [
      {text:"Spancer", correct: false},
      {text:"Hanna", correct: true},
      {text:"Aria", correct: false},
      {text:"Emily", correct: false},
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