document.getElementById('login-btn').addEventListener('click', () => {
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value;
  const confirm = document.getElementById('confirm-password').value;
  const message = document.getElementById('message');

  if (!user || !pass || !confirm) {
    message.textContent = 'Please fill in all fields.';
    return;
  }

  if (pass !== confirm) {
    message.textContent = 'Passwords do not match.';
    return;
  }

  localStorage.setItem('quizUser', user);
  window.location.href = 'welcome.html';
});
