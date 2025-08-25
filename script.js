const questions = [
  {
    question: "Which is the capital of Australia?",
    answers: [
      { text: "Sydney", correct: false },
      { text: "Melbourne", correct: false },
      { text: "Canberra", correct: true },
      { text: "Perth", correct: false },
    ]
  },
  {
    question: "Who is known as the 'Father of the Nation' in India?",
    answers: [
      { text: "Jawaharlal Nehru", correct: false },
      { text: "Mahatma Gandhi", correct: true },
      { text: "Subhash Chandra Bose", correct: false },
      { text: "B. R. Ambedkar", correct: false },
    ]
  },
  {
    question: "Which is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
      { text: "Arctic Ocean", correct: false },
    ]
  },
  {
    question: "Which is the longest river in the world?",
    answers: [
      { text: "Amazon", correct: false },
      { text: "Nile", correct: true },
      { text: "Ganga", correct: false },
      { text: "Mississippi", correct: false },
    ]
  },
  {
    question: "Which country invented paper?",
    answers: [
      { text: "India", correct: false },
      { text: "China", correct: true },
      { text: "Egypt", correct: false },
      { text: "Greece", correct: false },
    ]
  },
  {
    question: "In which year did India gain independence?",
    answers: [
      { text: "1942", correct: false },
      { text: "1947", correct: true },
      { text: "1950", correct: false },
      { text: "1962", correct: false },
    ]
  },
  {
    question: "Which is the national flower of India?",
    answers: [
      { text: "Rose", correct: false },
      { text: "Lotus", correct: true },
      { text: "Sunflower", correct: false },
      { text: "Jasmine", correct: false },
    ]
  },
  {
    question: "Who was the first President of India?",
    answers: [
      { text: "Rajendra Prasad", correct: true },
      { text: "S. Radhakrishnan", correct: false },
      { text: "Zakir Husain", correct: false },
      { text: "V. V. Giri", correct: false },
    ]
  },
  {
    question: "Where is the Eiffel Tower located?",
    answers: [
      { text: "Rome", correct: false },
      { text: "London", correct: false },
      { text: "Paris", correct: true },
      { text: "Berlin", correct: false },
    ]
  },
  {
    question: "Who discovered gravity?",
    answers: [
      { text: "Albert Einstein", correct: false },
      { text: "Isaac Newton", correct: true },
      { text: "Galileo Galilei", correct: false },
      { text: "Nikola Tesla", correct: false },
    ]
  },
  
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions [currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "."  + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct; 
        }
        button.addEventListener("click", selectAnswer);
    });

}



function resetState(){
    nextButton.style.display = "none";
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer (e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
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
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});   

startQuiz();
