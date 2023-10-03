window.onload = function(){

const hrs = document.getElementById("hours");
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");

setInterval(() => {
  const currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours() < 10 ? "0":"") + currentTime.getHours();
  mins.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
  secs.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
}, 1000);
}