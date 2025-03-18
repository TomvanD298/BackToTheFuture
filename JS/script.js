// Functie om de tijd op te halen van een live server en dit in een variabel naar CSS zetten.
function updateDateTime() {
    const now = new Date();
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    
    document.documentElement.style.setProperty("--date-month", '"' + monthNames[now.getMonth()] + '"');
    document.documentElement.style.setProperty("--date-day", '"' + now.getDate().toString().padStart(2, '0') + '"');
    document.documentElement.style.setProperty("--date-year", '"' + now.getFullYear() + '"');
    document.documentElement.style.setProperty("--date-hours", '"' + now.getHours().toString().padStart(2, '0') + '"');
    document.documentElement.style.setProperty("--date-min", '"' + now.getMinutes().toString().padStart(2, '0') + '"');
  }

  updateDateTime();
  setInterval(updateDateTime, 1000);


// Dit is alleen om het geluid af te spelen en te stoppen als je op een knop(checkbox) klikt.
// Autosleutel
const keyToggle = document.getElementById('ignition');
const carSound = document.getElementById('carSound');

keyToggle.addEventListener('change', () => {
    if (keyToggle.checked) {
        carSound.play();
    } else {
        carSound.pause();
        carSound.currentTime = 0;
    }
});


// Go knop
const goButton = document.getElementById('go');
const drivingSound = document.getElementById('drivingSound');

goButton.addEventListener('change', () => {
  if (goButton.checked) {
    drivingSound.play();
  } else {
    drivingSound.pause();
    drivingSound.currentTime = 0;
  }
});


// 
// 
// 