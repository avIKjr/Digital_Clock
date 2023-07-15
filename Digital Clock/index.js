//*getting all the elements
const hourE1 = document.getElementById("hour");
const minuteE1 = document.getElementById("minutes");
const secondE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");
//*Main Function
function updateClock() {
  //getting current time
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "PM";
  //If current hour is greater than 12 turning PM into AM
  if (h > 12) {
    h = h - 12;
    ampm = "AM";
  }
  //If hour,minute,second is less than 10 then adding an Zero
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourE1.innerHTML = h;
  minuteE1.innerHTML = m;
  secondE1.innerHTML = s;
  ampmE1.inertText = ampm;
  //setting the timeout for every second
  setTimeout(() => {
    updateClock();
  }, 1000);
}
updateClock();
