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
