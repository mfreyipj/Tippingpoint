window.onload = function startCountdown() {
  let counter = 5;
  var span = document.getElementById("countDownSpan");

  const interval = setInterval(() => {
    span.innerHTML = counter;
    counter--;

    if (counter < 0 ) {
      clearInterval(interval);
      window.location.href='index.html'
    }
  }, 1000);
}
