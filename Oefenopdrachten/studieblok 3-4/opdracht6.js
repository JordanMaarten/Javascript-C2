function startTimer() {
  var tijd = document.getElementsByName("tijd_input")[00].value;
  tijd *= 1000;
  if (tijd < 0 || tijd == 0 || tijd == "") {
    window.alert("Number can only be 1 second or higher.");
    document.getElementsByName("tijd_input")[00].value = "";
  } else {
    setTimeout(stopTimer, tijd);
    document.getElementsByName("tijd_input")[00].value = "";
  }
}

function stopTimer() {
  window.alert("Timer afgelopen!");
}
