var coor =[3, 3] ;

function checkkey(event) {
  var block = coor[0] * 10 + coor[1];
  document.getElementById(block).style.backgroundColor="white";
  if (event.key === "ArrowUp" && coor[1] < 5) {
    coor[1]++;
  } else if (event.key === "ArrowRight" && coor[0] < 5) {
    coor[0]++;
  } else if (event.key === "ArrowDown" && coor[1] > 1) {
    coor[1]--;
  } else if (event.key === "ArrowLeft" && coor[0] > 1) {
    coor[0]--;
  }
  block = coor[0] * 10 + coor[1]
  document.getElementById(block).style.backgroundColor="black";
}
