// Quiz Master starter: build the quiz logic yourself.
// TODO: Create 5 question objects, each with question, options, answerIndex, explanation.
// TODO: Implement startQuiz(), renderQuestion(), selectAnswer(), showResults() and restartQuiz().
// TODO: Update score/progress, prevent multiple answers per question and save best score in localStorage.

const startScreen = document.querySelector("#start-screen");
const quizScreen = document.querySelector("#quiz-screen");
const resultScreen = document.querySelector("#result-screen");
const playerNameInput = document.querySelector("#player-name");
const startButton = document.querySelector("#start-button");
const nextButton = document.querySelector("#next-button");
const restartButton = document.querySelector("#restart-button");
const questionCount = document.querySelector("#question-count");
const scoreLabel = document.querySelector("#score-label");
const progressBar = document.querySelector("#progress-bar");
const questionText = document.querySelector("#question-text");
const answersContainer = document.querySelector("#answers");
const feedback = document.querySelector("#feedback");
const resultTitle = document.querySelector("#result-title");
const resultScore = document.querySelector("#result-score");
const resultMessage = document.querySelector("#result-message");

const questions = [
  { question: "Which language structures a webpage?", options: ["HTML", "CSS", "SQL", "Python"], answerIndex: 0, explanation: "HTML gives a webpage its structure." },
  { question: "Which language styles a webpage?", options: ["PHP", "CSS", "C++", "SQL"], answerIndex: 1, explanation: "CSS controls the visual design." },
  { question: "Which keyword declares a block-scoped variable?", options: ["print", "echo", "let", "style"], answerIndex: 2, explanation: "let declares a block-scoped variable in JavaScript." },
  { question: "Which method selects an element by CSS selector?", options: ["querySelector()", "getColor()", "selectHTML()", "findCSS()"], answerIndex: 0, explanation: "querySelector() returns the first matching element." },
  { question: "Where can a browser store small key-value data?", options: ["localStorage", "style.css", "DOCTYPE", "console only"], answerIndex: 0, explanation: "localStorage stores key-value strings in the browser." }
];

let currentQuestion = 0;
let score = 0;
let answered = false;
let playerName = "";

function startQuiz() {
  // TODO: initialize currentQuestion, score, playerName and show quizScreen.
}
function renderQuestion() {
  // TODO: render question/options, update counter and progress, reset feedback/next button.
}
function selectAnswer(selectedIndex, button) {
  // TODO: disable answer buttons, mark correct/incorrect, update score and feedback.
}
function showResults() {
  // TODO: show final score and a friendly message; save best score in localStorage.
}
function restartQuiz() {
  // TODO: reset state and call renderQuestion().
}

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
  // TODO: advance to next question or show results.
});
restartButton.addEventListener("click", restartQuiz);
