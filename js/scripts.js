$(document).ready(function() {
  $("form#name").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    $("#name").text;
  });
});

$(document).ready(function() {
  $("form#description").submit(function(event) {
    event.preventDefault();
    var name = $("#description").val();
    $("#description").text;
  });
});

$(document).ready(function() {
  $("form#date").submit(function(event) {
    event.preventDefault();
    var name = $("#date").val();
    $("#date").text;
  });
});

$(document).ready(function() {
  $("form#time").submit(function(event) {
    event.preventDefault();
    var name = $("#time").val();
    $("#time").text;
  });
});
