
//firefly.js
const fireflies = document.querySelector('.fireflies');

function spawnFirefly() {
  const firefly = document.createElement('div');
  firefly.classList.add('firefly');

  // Random position, opacity, and scale
  firefly.style.top = `${random(0, 100)}vh`;
  firefly.style.left = `${random(0, 100)}vw`;
  firefly.style.opacity = 0;
  firefly.style.transform = `scale(${random(0.5, 1.5)})`;

  // Fade-in animation
  firefly.animate([
    { opacity: 0 },
    { opacity: 1 }
  ], {
    duration: 1000, // 1 second
    easing: 'ease-out'
  });

  // Move and fade-out animation
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
    duration: 3000, // 3 seconds
    easing: 'ease-out',
    delay: 1000 // Delay fade-out by 1 second
  });

  // Remove firefly after animation
  firefly.addEventListener('animationend', () => {
    firefly.remove();
  });

  fireflies.appendChild(firefly);
}

// Spawn fireflies at a constant rate
setInterval(spawnFirefly, 500); // Spawn every 0.5 seconds

function random(min, max) {
  return Math.random() * (max - min) + min;
}
