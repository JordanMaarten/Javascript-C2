function startTimer() {
  var tijd = document.getElementsByName("tijd_input")[0].value;
  tijd *= 1000;
  if (tijd < 0 || tijd == 0 || tijd == "") {
    alert("Number can only be 1 second or higher.");
    document.getElementsByName("tijd_input")[0].value = "";
  } else {
    setTimeout(stopTimer, tijd);
    document.getElementsByName("tijd_input")[0].value = "";
  }
}

function stopTimer() {
  alert("Timer afgelopen!");
}
