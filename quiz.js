const questions = [
  {
    question: "What is Software Engineering",
    correct: "Coding",
    options: ["Painting", "Drawing", "Hiking", "Coding"],
  },
  {
    question: "Who is the founder of Tesla",
    correct: "Elon Musk",
    options: ["Bill Gates", "Henry Ford", "Elon Musk", "Mark Zuck"],
  },
  {
    question: "Acidic value for Hydrogen Sulpur",
    correct: "0.098",
    options: ["1.345", "0.098", "0.321", "0.324"],
  },
  {
    question: "What is the language of choice for the web",
    correct: "Javascript",
    options: ["Javascript", "Python", "Ruby", "C++"],
  },
  {
    question: "How many stars are there in the Galaxy",
    correct: "Infinite",
    options: ["4500", "1000", "10000", "Infinite"],
  },
];

let num = 0;
let timeStamp = 15;
let quizDone = false;
const wrapper = document.getElementById("wrapper");
const score = document.getElementById("scores");
const time = document.getElementById("time");
const answer = document.getElementsByClassName("answer");
const title = document.getElementsByClassName("title")[0];

function beginQuestions() {
  initialQuestion();
  answerClicked();
  setInterval(startTime, 1000);
}

function initialQuestion() {
  timeStamp = 15;
  wrapper.innerHTML = `
    <div class="question-container">
        <p class="question">${questions[num].question}?</p>
    </div>
    <div class="answer-container">
        <div class="answer">${questions[num].options[0]}</div>
        <div class="answer">${questions[num].options[1]}</div>
        <div class="answer">${questions[num].options[2]}</div>
        <div class="answer">${questions[num].options[3]}</div>
    </div>
    `;
}

function answerClicked() {
  for (let i = 0; i < answer.length; i++) {
    answer[i].addEventListener("click", () => {
      if (quizDone) {
        location.reload();
        return;
      }
      if (answer[i].innerHTML === questions[num].correct) {
        score.innerHTML = num + 1;
        nextQuestion();
      } else {
        alert("Sorry!! You Pick The Wrong Answer");
        location.reload();
      }
    });
  }
}

function startTime() {
  if (timeStamp == 0) {
    timeStamp = 0;
    time.innerHTML = timeStamp;
    title.innerHTML = `Game Over!!! Your Score: ${scores.innerHTML}`;
    quizDone = true;
  } else {
    time.innerHTML = timeStamp;
    timeStamp--;
  }
}

function nextQuestion() {
  if (questions.length - 1 > num) {
    num = num + 1;
    initialQuestion();
    answerClicked();
  }
}
