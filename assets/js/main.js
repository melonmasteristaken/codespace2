//main.js

console.log("main.js active")

//sounds


//---




//install-sw.js
const registerServiceWorker = async () => {
  console.log("noError1")
  if ("serviceWorker" in navigator) {
    console.log("noError2")
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
      });
      console.log("noError3")
      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
        console.log("Service worker installed");
      } else if (registration.active) {
        console.log("Service worker active");
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

// Check if a service worker is installed
navigator.serviceWorker.getRegistrations().then(registrations => {
  if (registrations.length > 0) {
    // Show the modal notification
    showOfflineNotification();
     console.log("noError4")
  }
});

registerServiceWorker();


//---


//audio.js
const soundButton = document.getElementById('soundButton');
const soundtrack = document.getElementById('soundtrack');

soundButton.addEventListener('click', () => {
    if (soundtrack.paused) {
        soundtrack.play();
        soundButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        soundtrack.pause();
        //soundtrack.currentTime = 0;
        soundButton.innerHTML = '<i class="fas fa-play"></i>';
    }
});



//---


//firefly.js
const fireflies = document.querySelector('.fireflies');
console.log("noError5")
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



//---



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
//window.addEventListener("load", showOfflineNotification);



//---



//load-more.js

/*document.addEventListener('DOMContentLoaded', function(){
  const projectEntries = document.querySelectorAll('.project-entry');
  const loadMoreButton = document.getElementById('load-more');

  let visibleProjects = 0;

  function showMoreProjects() {
    for (let i = visibleProjects; i < visibleProjects + 6; i++) {
      if (projectEntries[i]) {
        projectEntries[i].classList.add('shown');
      }
    }
    visibleProjects += 6;

  //  if (visibleProjects >= projectEntries.length) {
  //    loadMoreButton.style.display = 'none';
  //  }
  //}
    loadMoreButton.addEventListener('click', function(){
      showMoreProjects();
    });

});*/



//---


//null.js
