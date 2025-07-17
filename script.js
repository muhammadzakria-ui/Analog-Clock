const hoursHand   = document.querySelector(".hour-hand");
const minutesHand = document.querySelector(".minutes-hand");
const secondsHand = document.querySelector(".second-hand");
const timePara    = document.querySelector(".timeNum");
const datePara    = document.querySelector("#datePara");
const formatBtn   = document.querySelector("#btn");
const bellIcon    = document.querySelector(".fa-solid");
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const dayNames = [
  "Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday"
];


let isTickingSoundOn = false;

bellIcon.addEventListener("click", () => {
  bellIcon.classList.toggle("fa-bell");
  bellIcon.classList.toggle("fa-bell-slash");
  isTickingSoundOn = !isTickingSoundOn;
});


let is24Hour = true;

function clockTick(){
   if (isTickingSoundOn){
           const tick = new Audio("tick_V1.mp4");
           tick.volume = 0.2;
           tick.play();
  }

    const date = new Date();
    const seconds = date.getSeconds() / 60;
    const minutes = (seconds + date.getMinutes()) / 60;
    const hours = (minutes + date.getHours()) / 12;

    datePara.innerHTML = `${dayNames[date.getDay()]}.${date.getDate()},${monthNames[date.getMonth()]}`;
    
    rotateClockHand(secondsHand,seconds);
    rotateClockHand(minutesHand,minutes);
    rotateClockHand(hoursHand,hours);

    // Update digital time too
    
  let displayHours = date.getHours();
  const displayMinutes = date.getMinutes();
  const displaySeconds = date.getSeconds();

  if (!is24Hour) {
    const amPm = displayHours >= 12 ? 'PM' : 'AM';
    displayHours = displayHours % 12 || 12;
    timePara.innerHTML = `${displayHours}:${displayMinutes}:${displaySeconds} ${amPm}`;
  } else {
    timePara.innerHTML = `${displayHours}:${displayMinutes}:${displaySeconds}`;
  }

}
function toggleFormat() {
      is24Hour = !is24Hour;
    }

function rotateClockHand(element,rotation){
       element.style.setProperty('--rotate', rotation * 360);
}

setInterval(clockTick,1000);


    