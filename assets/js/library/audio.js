const soundtrackButton = document.getElementById('soundtrack-button');

soundtrackButton.addEventListener('click', () => {
  const soundtrackId = soundtrackButton.dataset.soundtrack;
  const soundtrackUrl = `assets/sounds/${soundtrackId}.mp3`;

  const soundtrack = new Howl({
    src: [soundtrackUrl],
    loop: true,
    volume: 0.5,
  });
  soundtrack.play();
});
