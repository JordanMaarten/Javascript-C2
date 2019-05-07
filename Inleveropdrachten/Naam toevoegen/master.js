$(document).ready(function() {
  var opslag = [];

  $("#add").click(function() {
    var input = $("#naam");
    if (input.val() != "type hier..." && input.val() != "") {
      opslag[opslag.length] = input.val();
      $("#tekstvak1").prepend(input.val() + "<br>");
      input.val("");
    }
  });

  $("#switch1").click(function() {
    if ($("#tekstvak1").html().length != 0) {
      $("#tekstvak2").empty();
      for (var i = 0; i < opslag.length; i++) {
        $("#tekstvak2").prepend(opslag[i] + "<br>");
      }
      $("#tekstvak1").empty();
    }
  });

  $("#switch2").click(function() {
    if ($("#tekstvak2").html().length != 0) {
        $("#tekstvak1").empty();
        for (var i = 0; i < opslag.length; i++) {
          $("#tekstvak1").prepend(opslag[i] + "<br>");
        }
        $("#tekstvak2").empty();
      }
  });
});
