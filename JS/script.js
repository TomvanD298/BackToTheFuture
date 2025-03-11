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