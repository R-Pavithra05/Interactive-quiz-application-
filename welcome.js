window.onload = () => {
  const username = localStorage.getItem('quizUser');
  document.getElementById('welcome-msg').textContent = `Welcome, ${username}!`;

  document.getElementById('start-btn').addEventListener('click', () => {
    window.location.href = 'quiz.html';
  });
};
