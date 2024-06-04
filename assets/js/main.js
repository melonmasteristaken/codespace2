
//firefly.js
const fireflies = document.querySelector('.fireflies');

function spawnFirefly() {
  const firefly = document.createElement('div');
  firefly.classList.add('firefly');

  // Random position, opacity, and scale
  firefly.style.top = `${random(5, 20)}vh`;
  firefly.style.left = `${random(5, 95)}vw`;
  firefly.style.opacity = 0;
  firefly.style.transform = `scale(${random(0.5, 1.0)})`;

  // Fade-in animation
  firefly.animate([
    { opacity: 0 },
    { opacity: 1 }
  ], {
    duration: 700, // 1 second
    easing: 'ease-out'
  });

  // Move and fade-out animation
firefly.animate([
  { 
    top: `${random(80, 95)}vh`, 
    left: `${random(5, 95)}vw`, 
    opacity: 1 
  },
  { 
    top: `${random(0, 100)}vh + Math.sin(Math.random() * 10) * 20`, 
    left: `${random(0, 100)}vw + Math.cos(Math.random() * 10) * 20`, 
    opacity: 0 
  }
], {
  duration: 1700, // 3 seconds
  easing: 'ease-out',
  delay: 700 // Delay fade-out by 1 second
});

  // Remove firefly after animation
  firefly.addEventListener('animationend', () => {
    firefly.remove();
  });

  fireflies.appendChild(firefly);
}

// Spawn fireflies at a constant rate
setInterval(spawnFirefly, 1000); // Spawn every 0.5 seconds

function random(min, max) {
  return Math.random() * (max - min) + min;
}
