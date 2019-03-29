var beurt = true;

function kruis(element) {
  if (beurt == true && element.classList.contains("empty")) {
    element.style.backgroundImage="url(red_cross.png)";
    element.className="full";
    console.log("p1 beurt");
    beurt = false;
  } else if (beurt == false && element.classList.contains("empty")) {
    element.style.backgroundImage="url(red_circle.png)";
    element.className="full";
    console.log("p2 beurt");
    beurt = true;
  }

}
