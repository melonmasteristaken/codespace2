const fireflies = document.querySelector('.fireflies');

for (let i = 0; i < 12; i++) { // Create 10 fireflies
  const firefly = document.createElement('div');
  firefly.classList.add('firefly');
  firefly.style.top = `${random(-200, 200)}px`;
  firefly.style.left = `${random(-200, 200)}px`;
  firefly.style.animationDelay = `${random(0, 2)}s`;

  // Add movement animation
  firefly.animate([
    { top: `${random(-200, 200)}px`, left: `${random(-200, 200)}px` },
    { top: `${random(-200, 200)}px`, left: `${random(-200, 200)}px` }
  ], {
    duration: 2000, // 2 seconds
    iterations: Infinity, // Repeat indefinitely
    easing: 'ease-out' // Smooth animation
  });

  fireflies.appendChild(firefly);
}

function random(min, max) {
  return Math.random() * (max - min) + min;
}
