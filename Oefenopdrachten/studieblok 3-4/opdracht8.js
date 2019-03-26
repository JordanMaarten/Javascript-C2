function addname() {
  var name = prompt("Enter name:", "");
  if (name != "") {
    if (document.getElementById("change_name").innerHTML == "") {
      document.getElementById("change_name").innerHTML += name;

    } else {
      document.getElementById("change_name").innerHTML += ", " + name;

    }

  }

}
