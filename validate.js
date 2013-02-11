$(document).ready(function(){

  var formHandler = function(event){
  	var descElement = $("#desc");
  	var descValue = descElement.val();

    if (desc === ""){
    	$(".desc_error").text("Description should not be empty.")
    }; // fixme: validate form here

    var amountPattern = /^\d+(\.\d\d)?$/;
    var amount = $('#amount');
    var amountValue = amount.val();
    var amountIsValid = amountPattern.test(amountValue);
    if (!amountIsValid) {
    	$(".amount_error").text("Amount Should be 0.00 format.")
    };

    var cardNumberPattern = /^\d{16}$/;
    var cardNumberValue = $('#cardnumber').val();
    if (!cardNumberPattern.test(cardNumberValue)) {
    	$('.cardnumber_error').text("Not a valid CC number.");
    };

    var ccvPattern = /^\d{3}$/;
    var ccvValue = $('#ccv').val();
    if (!ccvPattern.test(ccvValue)){
    	$('.ccv_error').text("Not a vaild CCV number")
    };

    var datePattern = /^\d{2}$/
    var monthValue = $('#month').val();
    if (datePattern.test(monthValue)) {
    	if(monthValue < 12) {
    		if (!monthValue === 0){

    		}
    	}
    } else {
    	$('.month_error').text("Not a vaild month.")
    };

    var yearValue = $('#year').val();
    if (!datePattern.test(yearValue)) {
    	$('.year_error').text('Not a valid year.');
    };

    event.preventDefault(); // prevents the page from reloading
  };

  $("form").submit(formHandler); // register a callback
});