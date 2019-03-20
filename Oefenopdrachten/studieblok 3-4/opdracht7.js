function verbergen() {
  var info = document.getElementById("info");
  if (info.style.display == "none") {
    info.style.display = "block";
    document.getElementById("button").innerHTML = "hide";
  } else {
    info.style.display = "none";
    document.getElementById("button").innerHTML = "show";
  }
}
