function italic(italic) {
  italic.style.fontStyle = "italic";
}

function normal(normal) {
  normal.style.fontStyle = "normal";
}

var engels = false;

function english() {
  if (engels == false) {
    document.getElementById('italic_english').innerHTML = "Hallo wereld!";
    engels = true;
  } else {
    document.getElementById('italic_english').innerHTML = "Hello world!";
    engels = false;
  }

}
