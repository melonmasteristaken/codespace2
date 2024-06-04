//firefly.js
const fireflies = document.querySelector('.fireflies');

function spawnFirefly() {
  const firefly = document.createElement('div');
  firefly.classList.add('firefly');

  firefly.animate([
    { 
      top: '100vh', 
      left: `${random(10, 90)}vw`, 
      opacity: 0 
    },
    { 
      top: '30vh', 
      left: `${random(10, 90)}vw`, 
      opacity: 1 
    },
    { 
      top: '10vh', 
      left: `${random(10, 90)}vw`, 
      opacity: 0 
    }
  ], {
    duration: 7000, // 7 seconds
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


//------------------------------------------------------------------------------------------------------------


//offline-notification.js
// Show the notification for 3 seconds [setTimeout()]
function showOfflineNotification() {
  const notification = document.getElementById("offline-notification");
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}

// Call the function when the page loads
window.addEventListener("load", showOfflineNotification);


//------------------------------------------------------------------------------------------------------------


//null.js
