const questions = [
  {
    question: "Where do they find Hanna's fake dead body at?",
    answer: [
      {text:"In her car", correct: false},
      {text:"In the bell tower", correct: true},
      {text:"In the LostWoods", correct: false},
      {text:"In Spancer's back yard", correct: false},
    ]
  },
  {
    question: "Who finds Hanna on the side of the road and takes her back to Rosewood?",
    answer: [
      {text:"Mona", correct: false},
      {text:"Alison", correct: false},
      {text:"Mary Drake", correct: true},
      {text:"Melissa Hastings", correct: false},
    ]
  },
  {
    question: "Why do the girls go to the forest in episode 3?",
    answer: [
      {text:"To look for A.D", correct: false},
      {text:"To find Alison and help her", correct: true},
      {text:"To bury a body", correct: false},
      {text:"To hide from someone", correct: false},
    ]
  },
  {
    question: "What does Spancer do after she buried Eliot's body?",
    answer: [
      {text:"She want to the train station and put his phone in the train", correct: false},
      {text:"She went back to her house to get rid of her dirty and bloody clothes", correct: false},
      {text:"She takes the car to rapair show to get the windsheald fixed", correct: false},
      {text:"She makes out with a stranger at the Radley Bar Hotel ", correct: true},
    ]
  },
  {
    question: "Who got the windsheald fixed?",
    answer: [
      {text:"Spancer", correct: false},
      {text:"Hannna", correct: false},
      {text:"Mona", correct: true},
      {text:"Caleb", correct: false},
    ]
  },
  {
    question: "Where do Noel and Jenna take the girls to kill them?",
    answer: [
      {text:"The LostWoods Motel", correct: false},
      {text:"In the forest", correct: false},
      {text:"In an abandoned school for the blind", correct: true},
      {text:"Unnamed location in Rosewood", correct: false},
    ]
  },
  {
    question: "Who is reveald to have had files on all the girls and has been following them and Alison?",
    answer: [
      {text:"Jessica DiLaurentis", correct: true},
      {text:"Jenna", correct: false},
      {text:"Mona", correct: false},
      {text:"Mary Drake", correct: false},
    ]
  },
  {
    question: "What postpones Aria and Ezra's wedding?",
    answer: [
      {text:"Aria gets cold feet", correct: false},
      {text:"A.D wants to blow up the building", correct: false},
      {text:"A.D kills Wren", correct: false},
      {text:"Ezra get kidnapped", correct: true},
    ]
  },
  {
    question: "How many people knew about Spancer's twin before the finale?",
    answer: [
      {text:"4", correct: false},
      {text:"2", correct: false},
      {text:"3", correct: true},
      {text:"Just Cece", correct: false},
    ]
  },
  {
    question: "Where are the girls in their last scene on the show?",
    answer: [
      {text:"Spancer's barn", correct: false},
      {text:"Town's square", correct: true},
      {text:"At the Brew", correct: false},
      {text:"Apple Rose Gril", correct: false},
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