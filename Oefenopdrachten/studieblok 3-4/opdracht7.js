var info = document.getElementById("info");
var linebreak1 = document.getElementById("linebreak1");
var button = document.getElementById("button");

function verbergen() {
  if (info.style.display == "block") {
    info.style.display = "none";
    linebreak1.style.display = "block";
    document.getElementById("button").innerHTML = "show";
  } else {
    info.style.display = "block";
    linebreak1.style.display = "none";
    document.getElementById("button").innerHTML = "hide";
  }
}
