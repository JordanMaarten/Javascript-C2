$(document).ready(function() {
  var links = [];
  var rechts = [];
  var midden = [];

  $("#add").click(function() {
    var input = $("#naam");
    if (input.val() != "type hier..." && input.val() != "") {
      midden[midden.length] = input.val();
      $("#tekstvak1").prepend(input.val() + "<br>");
      input.val("");
    }
  });

  $("#switch1").click(function() {
    if ($("#tekstvak1").html().length != 0) {
      for (var i = 0; i < midden.length; i++) {
        rechts[i] = midden[i];
      }
      $("#tekstvak2").empty();
      for (var i = 0; i < rechts.length; i++) {
        $("#tekstvak2").prepend(rechts[i] + "<br>");
      }
      $("#tekstvak1").empty();
    }
    rechts = [];
  });

  $("#switch2").click(function() {
    if ($("#tekstvak2").html().length != 0) {
        for (var i = 0; i < midden.length; i++) {
          links[i] = midden[i];
        }
        $("#tekstvak1").empty();
        for (var i = 0; i < links.length; i++) {
          $("#tekstvak1").prepend(links[i] + "<br>");
        }
        $("#tekstvak2").empty();
      }
      links = [];
  });
});
