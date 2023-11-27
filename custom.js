$(document).ready(function () {
  $("#input").change(function () {
    let input = $(this).val();
    $("ul").append(
      "<li>" +
        input +
        " <i class='fas fa-check'></i> <i class='fas fa-trash'></i> </li>"
    );
    $(this).val("");
  });
});
