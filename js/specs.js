$(document).ready(function() {

    $("#add-purchase").submit(function() {
      event.preventDefault();

        var item = $("input#description").val();
        var amnt = $("input#ammount").parseInt().val();
        console.log(amnt);
        cosole.log(item);
    )};
  });
console.log("hi");
alert("im working");
