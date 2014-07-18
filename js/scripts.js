$(document).ready(function() {

    $("#add-purchase").submit(function() {
      event.preventDefault();

//Grabbing user input, turning string to number for amnt, then clearing input//
        var item = $("input#description").val();
        var amnt = parseInt($("input#ammount").val());
        var quant = parseInt($("input#quantity").val());
//Creating a Object with user input, make sure to use return for the function or else will just say undefined//
        var Purchase = { description: item, cost: amnt, quantity: quant,
          totalcost: function() {
            return this.quantity * this.cost }
        }

        $("input#description").val("");
        $("input#ammount").val("");
        $("input#quantity").val("");


//Appending item & amnt to table//

  if(amnt && item && quant){
    $(".info").append("<tr>" + "<td>" + Purchase.description + "</td>" + "<td>" + Purchase.cost + "</td>" + "<td>" + Purchase.quantity + "</td>" + "<td>" + Purchase.totalcost() + "</td>" + "</tr>");
        }
     });
  });

