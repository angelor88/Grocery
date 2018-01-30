//business logic
var items = [];


//User Interface
$(document).ready(function() {
  $("#submitButton").click(function() {
      $("#groceryForm").hide();
      var result = $("#items-input").val();


      $(".result").text(result);
  });
});
