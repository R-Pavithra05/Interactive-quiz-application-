window.onload = () => {
  const container = document.getElementById('review-container');
  const data = JSON.parse(localStorage.getItem('reviewAnswers')) || [];

  if (data.length === 0) {
    container.innerHTML = '<p>No wrong answers to review!</p>';
  } else {
    data.forEach(item => {
      const div = document.createElement('div');
      div.innerHTML = `
        <p><strong>Question:</strong> ${item.question}</p>
        <p><span style="color:red;"><strong>Your Answer:</strong> ${item.userAnswer}</span></p>
        <p><span style="color:green;"><strong>Correct Answer:</strong> ${item.correctAnswer}</span></p>
        <hr>
      `;
      container.appendChild(div);
    });
  }
};
