var start_btn = document.getElementById("Start-btn"); //get and store the element id of Start button given in the Html file
var Stop_btn = document.getElementById("Stop-btn"); //get and store the element id of Stop button given in the Html file
var Reset_btn = document.getElementById("Reset-btn"); //get and store the element id of Reset button given in the Html file
var timer_value = document.getElementById("timer-value"); //get and store the element id of Timer value which is to be displayed
var timer = document.getElementById("timer-circle"); //get and store the element id of circle which contains the timer value

var hours = "00",
  minutes = "00",
  seconds = "00"; //declaring HH:MM:SS in '00' variables

//  On click to Start the timer
start_btn.addEventListener("click", Timer);

// Function that Executes the Timer
function Timer(event) {
  timer.style.animation = "circles 1s ease-in infinite"; //animation in the circle defined in the css File
  timer.style.backgroundColor = "rgb(54, 70, 70)"; // After click setting the background color of Circle

  event.target.disabled = true; //to disable the start button
  event.target.disabled ? (start_btn.style.backgroundColor = "white") : null; //to maintain color of disabled button ,default set by bootstrap

  //start of the timer
  var start_timer = setInterval(() => {
    seconds++;
    seconds < 10 ? (seconds = "0" + seconds) : seconds; //to maintain 0x value of seconds where x=0 to 9

    // update timer on one minute
    if (seconds === 60) {
      seconds = "00";
      minutes++;
      minutes < 10 ? (minutes = "0" + minutes) : minutes; //to maintain 0x value of minutes where x=0 to 9
    }
    // update timer on one hour
    if (minutes === 60) {
      seconds = "00";
      minutes = "00";
      hours++;
      hours < 10 ? (hours = "0" + hours) : hours;
    }

    // Limit of the timer
    if (hours === 60) {
      clearInterval(start_timer); //Stop the timer
      timer.style.animation = ""; //No animation on Reset Button
      seconds = "00";
      minutes = "00";
      hours = "00";
      alert("Maximum value reached,Timer Will start from 00:00:00"); //After 60 hrs timer will be automatically reset
    }
    timer_value.innerHTML = hours + ":" + minutes + ":" + seconds; //Value to be displayed on innerHTML of timer-value id
  }, 1000); // Interval after 1 second

  //on click of Stop button
  Stop_btn.addEventListener("click", () => {
    clearInterval(start_timer); //Stop the timer
    event.target.disabled = false; //Enable the Start Button again
    Stop_btn.style.backgroundColor = "white";
    timer.style.animation = ""; //No animation on Stop Button
    if (timer_value.innerHTML !== "00:00:00") {
      //if timer already has zero value check topping Timer
      timer.style.backgroundColor = "rgb(120, 16, 16)"; //red color indication on Stop button
    }
  });

  //on click of Reset button
  Reset_btn.addEventListener("click", () => {
    clearInterval(start_timer); //Stop the timer
    hours = "00"; //Setting the timer values
    minutes = "00";
    seconds = "00";
    event.target.disabled = false; //Enable the Start Button again
    Reset_btn.style.backgroundColor = "white";
    timer_value.innerHTML = hours + ":" + minutes + ":" + seconds; //Resets the timer
    timer.style.animation = ""; //No animation on Reset Button
    timer.style.backgroundColor = "rgb(57, 63, 69)"; //color indication that reset has been pressed
  });
}
