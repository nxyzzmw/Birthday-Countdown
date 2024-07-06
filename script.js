function countdown(endDate) {
  let days, hours, minutes, seconds;

  endDate = new Date(endDate).getTime();

  if (isNaN(endDate)) {
    return;
  }

  let interval = setInterval(calculate, 1000);

  function calculate() {
    let startDate = new Date();
    startDate = startDate.getTime();

    let timeRemaining = parseInt((endDate - startDate) / 1000);

    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400);
      timeRemaining = (timeRemaining % 86400);

      hours = parseInt(timeRemaining / 3600);
      timeRemaining = (timeRemaining % 3600);

      minutes = parseInt(timeRemaining / 60);
      timeRemaining = (timeRemaining % 60);

      seconds = parseInt(timeRemaining);

      document.getElementById("js-days").innerHTML = parseInt(days, 10);
      document.getElementById("js-hours").innerHTML = ("0" + hours).slice(-2);
      document.getElementById("js-minutes").innerHTML = ("0" + minutes).slice(-2);
      document.getElementById("js-seconds").innerHTML = ("0" + seconds).slice(-2);
    } else {
      clearInterval(interval);
      removeCountdownElements();
      showBirthdayMessage();
    }
  }
}

function removeCountdownElements() {
  const countdownElements = document.querySelector('.container, .clock');
  if (countdownElements) {
    countdownElements.style.display = 'none';
  }
}

function showBirthdayMessage() {
  const message = document.createElement('div');
  message.className = 'birthday-message';
  message.innerHTML = `
    <h1>Happy Birthday</h1>
    <p>wish you a wonderful life ahead.</p>
  `;
  document.body.appendChild(message);
}

(function () { 
  let now = new Date();
  let tenSecondsLater = new Date(now.getTime() + 10 * 1000); 
  countdown(tenSecondsLater); 
}());
