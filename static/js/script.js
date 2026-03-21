$(document).ready( function() {
    let isSubmitting = false;

 $("input[name='pizza']").on("change", function() {

		if ($(this).is(":checked")) {
			$(this).val(1);
		} else {
			$(this).val(0);
		}

	});

	$("input[name='pasta']").on("change", function() {

		if ($(this).is(":checked")) {
			$(this).val(1);
		} else {
			$(this).val(0);
		}

	});

	$("input[name='pap']").on("change", function() {

		if ($(this).is(":checked")) {
			$(this).val(1);
		} else {
			$(this).val(0);
		}

	});

	$("input[name='other']").on("change", function() {

		if ($(this).is(":checked")) {
			$(this).val(1);
		} else {
			$(this).val(0);
		}

	});

   	$("input[name='age']").on("input", function() {
   		const age = parseInt($(this).val());

   		if (age < 5 || age > 120) {
   			alert("You must be over 5 years old, and younger than 120 years!");
   			
   		}


   	});

    $(".mobile-nav").click(function(){
        $(".mobile-options").slideToggle();   
    });

	if ($(".success-message").text().trim() != ""){
			$(".overlay").hide();
			$('.spinner').hide();
			$('.message-box').fadeIn();
			$('.success').fadeIn();
	}

	if ($(".error-message").text().trim() != ""){
		$(".overlay").hide();
		$('.spinner').hide();
		$(".message-box").fadeIn();
		$(".error").fadeIn();
	}

	$("#form").submit(function(){
		$(".overlay").fadeIn();
	});

	$(".menu-item-click").click(function(){
		$(".page-pop-up").show();
	});
	
	$(".radio-buttons").click(function(){
		console.log($(this).val());
	});

    

	if ($(".survey-message").text().trim() != "") {
		$(".No-survey-message").css("display", "block");
	}

	if($("#sucess-message").text().trim() != ""){
		$(".server-feedback").fadeIn();
		$(".result-1").fadeIn();
	}

	if ($("#error-message").text().trim() != ""){
		$(".server-feedback").fadeIn();
		$(".result-2").fadeIn();
	}

	$(".logo-style").click(function(){
		 $(".server-feedback").fadeIn();
	});

	$(".server-feedback").click(function(){
		$(this).fadeOut();
	});

});