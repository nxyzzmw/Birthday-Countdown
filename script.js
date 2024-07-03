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
      <h1>Happy Birthday En Aaasaaa Pondatiiii ehhh!</h1>
      <p>en thango porandha naal en bekka papa porandha naal...the born of the happy days of mine...happy birthday di en bekka veh..im soo lucky to have you...you are the bestesttttt wife, girlfriend..im soo happy to have you...kandipa unna idhey maaari last vara bathrama happy aa paathupen.</p>
    `;
    document.body.appendChild(message);
  }
  
  (function () { 
    let now = new Date();
    now.setMinutes(now.getMinutes() - 1); // Set to 1 minute ahead of current time
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0); // Set to 12 AM tomorrow
    countdown(tomorrow); 
  }());
