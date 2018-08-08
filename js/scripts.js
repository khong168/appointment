$(document).ready(function() {
  $("#appointmentInput").submit(function(event) {
    event.preventDefault();
    var name = $("#nameInput").val();

    var description = $("#descriptionInput").val();

    var date = $("#dateInput").val();

    var time = $("#timeInput").val();


    $(".time").append(time);
    $(".date").append(date);
    $(".description").append(description);
    $(".name").append(name);

    $(".story").show();

  });
});
