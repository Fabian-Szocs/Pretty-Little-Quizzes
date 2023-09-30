const questions = [
  {
    question: "Who's dead body is the first that we see this season?",
    answer: [
      {text:"Toby's", correct: false},
      {text:"Wilden's", correct: true},
      {text:"Alison's", correct: false},
      {text:"Maya's", correct: false},
    ]
  },
  {
    question: "Where is the new A Laier at?",
    answer: [
      {text:"LostWoods Resort", correct: false},
      {text:"In the DiLaurentis' house basemant", correct: false},
      {text:"In a trailer park ", correct: true},
      {text:"We don't know", correct: false},
    ]
  },
  {
    question: "Who does Aria cheat with this season?",
    answer: [
      {text:"Jason", correct: false},
      {text:"Ezra", correct: true},
      {text:"Jake", correct: false},
      {text:"A new guy", correct: false},
    ]
  },
  {
    question: "What author is Hanna obsessed with?",
    answer: [
      {text:"William Shakespeare", correct: false},
      {text:"Vladimir Nabokov", correct: false},
      {text:"F. Scott Fitzgerald", correct: false},
      {text:"James Patterson", correct: true},
    ]
  },
  {
    question: "In what country does Ella Montgomery go to with her new boyfriend?",
    answer: [
      {text:"Germany", correct: false},
      {text:"Amsterdam", correct: false},
      {text:"Austria", correct: true},
      {text:"Iceland", correct: false},
    ]
  },
  {
    question: "What does Ezra buy for Aria?",
    answer: [
      {text:"A scarf", correct: false},
      {text:"A pair of cowboy boots", correct: true},
      {text:"Sunglasses", correct: false},
      {text:"Nothing", correct: false},
    ]
  },
  {
    question: "Where do the girls go after Emily's car broke down?",
    answer: [
      {text:"Ezra's cabin", correct: true},
      {text:"The BusyBee Inn", correct: false},
      {text:"They go back home", correct: false},
      {text:"The LostWoods Resort", correct: false},
    ]
  },
  {
    question: "How many people knew that Alison was still alive?",
    answer: [
      {text:"5", correct: false},
      {text:"7", correct: true},
      {text:"4", correct: false},
      {text:"6", correct: false},
    ]
  },
  {
    question: "Where does Alison take the girls to tell them what happend to her?",
    answer: [
      {text:"Philly", correct: false},
      {text:"An abandond building", correct: false},
      {text:"The Fitzgerald Teathre", correct: true},
      {text:"A motel", correct: false},
    ]
  },
  {
    question: "What is the lst scene of the season?",
    answer: [
      {text:"Aria killing Shana", correct: false},
      {text:"Jessica DiLaurentis getting buried", correct: true},
      {text:"Alison and the girls getting off the bus in Rosevowood", correct: false},
      {text:"Alison entering the police station", correct: false},
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