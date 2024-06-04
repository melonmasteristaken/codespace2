
//firefly.js
const fireflies = document.querySelector('.fireflies');

for (let i = 0; i < 10; i++) { // Create 10 fireflies
  const firefly = document.createElement('div');
  firefly.classList.add('firefly');
  firefly.style.top = `${random(0, 100)}vh`; // Move to random vertical position
  firefly.style.left = `${random(0, 100)}vw`; // Move to random horizontal position
  firefly.style.animationDelay = `${random(0, 2)}s`;

  // Add movement animation with fade-out
  firefly.animate([
    { 
      top: `${random(0, 100)}vh`, 
      left: `${random(0, 100)}vw`, 
      opacity: 1 
    },
    { 
      top: `${random(0, 100)}vh`, 
      left: `${random(0, 100)}vw`, 
      opacity: 0 
    }
  ], {
    duration: 4000, // 4 seconds
    iterations: Infinity, // Repeat indefinitely
    easing: 'ease-out' // Smooth animation
  });

  fireflies.appendChild(firefly);
}

function random(min, max) {
  return Math.random() * (max - min) + min;
}
