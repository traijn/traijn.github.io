// script.js
document.getElementById('heads').addEventListener('click', function() {
    playGame('heads');
  });
  
  document.getElementById('tails').addEventListener('click', function() {
    playGame('tails');
  });
  
  function playGame(userChoice) {
    const outcomes = ['heads', 'tails'];
    const computerChoice = outcomes[Math.floor(Math.random() * outcomes.length)];
  
    const coin = document.getElementById('coin');
    const resultText = document.getElementById('result');
  
    coin.classList.add('flip');
    
    setTimeout(() => {
      coin.classList.remove('flip');
      
      if (computerChoice === 'heads') {
        coin.src = 'coin-heads.png';
      } else {
        coin.src = 'coin-tails.png';
      }
  
      if (userChoice === computerChoice) {
        resultText.textContent = `You won! It was ${computerChoice}.`;
      } else {
        resultText.textContent = `You lost! It was ${computerChoice}.`;
      }
    }, 1000);
  }
  