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
	
	$("#form").on("submit", function(e) {
		$(".overlay").fadeIn(300);
	});

	$('.overlay-btn').click(() => {
		$('.overlay').fadeOut(500, function() {
			// Reset overlay to default state
			$('.spinner').show();
			$('.success').hide();
			$('.error').hide();
		});
	});

	$('.nav-btn').click(() => {
		$('.overlay').fadeIn(300);
	})

    $(".mobile-nav").click(function(){
        $(".mobile-options").slideToggle();   
    });

	if ($(".success-message").text().trim() != ""){
		$('.overlay').show();
		$('.spinner').hide();
		$('.success').css('display', 'flex').hide().fadeIn(400);
		// Auto-close after 5 seconds
		setTimeout(() => {
			$('.overlay').fadeOut(500, function() {
				$('.spinner').show();
				$('.success').hide();
				$('.error').hide();
			});
		}, 5000);
	}

	if ($(".error-message").text().trim() != ""){
		console.log($('.error-message').text());
		$('.overlay').show();
		$('.spinner').hide();
		$('.error').css('display', 'flex').hide().fadeIn(400);
		// Auto-close after 5 seconds
		setTimeout(() => {
			$('.overlay').fadeOut(500, function() {
				$('.spinner').show();
				$('.success').hide();
				$('.error').hide();
			});
		}, 5000);
	}

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