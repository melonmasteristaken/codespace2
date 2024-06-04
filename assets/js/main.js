//firefly.js
const fireflies = document.querySelector('.fireflies');

function spawnFirefly() {
  const firefly = document.createElement('div');
  firefly.classList.add('firefly');

  firefly.animate([
    { 
      top: '100vh', 
      left: `${random(0, 100)}vw`, 
      opacity: 0 
    },
    { 
      top: '0vh', 
      left: `${random(0, 100)}vw`, 
      opacity: 1 
    },
    { 
      top: '0vh', 
      left: `${random(0, 100)}vw`, 
      opacity: 0 
    }
  ], {
    duration: 3000, // 3 seconds
    easing: 'ease-out',
    fill: 'forwards' // Keep the final state
  });

  firefly.addEventListener('animationend', () => {
    firefly.remove();
  });

  fireflies.appendChild(firefly);
}

setInterval(spawnFirefly, 500); // Spawn every 0.5 seconds

function random(min, max) {
  return Math.random() * (max - min) + min;
}

