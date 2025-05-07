const questions = [
   {
    question: "Interconnection of computers known as",
    options: ["Internet", "network", "web server", "intercomputers"],
    answer:1
   },
    {
    question: "what is the default IP address if a device is not connected to any network?",
    options: ["192.168.5.1", "127.1.0.1", "192.168.1.1", "127.0.0.1"],
    answer: 3
    },
     {
    question: "IP address ranges between",
    options: ["1-255", "0-225", "0-255", "1-225"],
    answer:2
     },
     {
    question: "what does DNS stands for?",
    options: ["Domain name server", "Data named server", "Data needed service", "Domain name service"],
    answer:0
     },
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Multi Language"],
    answer: 0
  },
   {
    question: "Which Statement is true accordingto HTML heading tags?",
    options: ["<h1></h1>---<h6></h6> Size of content decreases from h1 to h6", "<h1></h1>---<h7></h7> Size of the content increases from h1 to h7","Both the above", "<h1></h1>---<h6></h6> Size of content increases from h1 to h6"],
    answer: 0
   },
    {
    question: "What is the current version of HTML ",
    options: ["html2","html4", "html1", "html5"],
    answer: 3
    },
    {
    question: "What does frontend mean?",
    options: ["The technologies which run on the server side ", "The technologies which run on the user side ", " Both", "None"],
    answer: 1
    },
  {
    question: "What does CSS stand for?",
    options: ["cascading style sheets", "converting styled sheets", "concatenating similar sheets", "None"],
    answer:0
  },
   {
    question: "How do DBMS act as?",
    options: ["network","web", "client", "Server"],
    answer: 3
   },
    {
    question: "Which of the following statement is true?",
    options: ["column-Attribute,rows-Record", "column-table,rows-tuple", "Both the above", "column-tuple,row-table"],
    answer: 2
    },
     {
    question: "What is a client?",
    options: ["The one who avails the service from the server","The one who provides the service to the server ", "The one which acts as intermediary between server and service", "None"],
    answer: 0
     }
];

let current = 0;
let score = 0;
let wrongAnswers = [];

function loadQuestion(index) {
  const q = questions[index];
  const questionDiv = document.getElementById('question');
  const optionsDiv = document.getElementById('options');
  questionDiv.textContent = q.question;
  optionsDiv.innerHTML = '';

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.className = 'option';
    btn.onclick = () => {
      const correct = i === q.answer;
      btn.style.backgroundColor = correct ? 'green' : 'red';
      if (correct) {
        score++;
      } else {
        wrongAnswers.push({ question: q.question, userAnswer: opt, correctAnswer: q.options[q.answer] });
      }
      disableButtons();
    };
    optionsDiv.appendChild(btn);
  });
}

function disableButtons() {
  const buttons = document.querySelectorAll('.option');
  buttons.forEach(btn => btn.disabled = true);
}

function loadNextQuestion() {
  current++;
  if (current < questions.length) {
    loadQuestion(current);
  } else {
    const user = localStorage.getItem('quizUser');
    localStorage.setItem('reviewAnswers', JSON.stringify(wrongAnswers));
    document.getElementById('question').textContent = `Quiz Completed! ${user}, you scored ${score}/${questions.length}`;
    document.getElementById('options').innerHTML = '';
    const nextBtn = document.getElementById('next-btn');
    nextBtn.textContent = 'Review Answers';
    nextBtn.onclick = () => window.location.href = 'review.html';
  }
}

window.onload = () => {
  const user = localStorage.getItem('quizUser');
  document.getElementById('username-display').textContent = `User: ${user}`;
  loadQuestion(current);
};
