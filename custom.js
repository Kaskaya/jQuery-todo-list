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

  $("ul").on("click", ".fa-trash", function () {
    $(this).parent("li").fadeOut(150);
  });

  $("ul").on("click", ".fa-check", function () {
    $(this).parent("li").toggleClass("checked");
  });
});
