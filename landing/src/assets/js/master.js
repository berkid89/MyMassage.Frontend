// JavaScript Document
//Author Name: Saptarang
//Author URI: http://www.saptarang.org
//Themeforest: http://themeforest.net/user/saptarang?ref=saptarang
//Creation Date: 10nd April, 2014

$(document).ready(function() {
	
      //Preloader
		$(window).load(function() {
			$('#preloader').fadeOut();
			$('.loading').delay(350).fadeOut('slow');  
			$('body').delay(350).css({'overflow':'visible'});
		})
		
	  // Fixed Top bar
	  $(window).bind('scroll', function() {
	  var navHeight = $( window ).height();
		   if ($(window).scrollTop() > navHeight) {
			   $('#home').addClass('fixed');
		   }
		   else {
			   $('#home').removeClass('fixed');
		   }
	  });
		
	  // WOW - animated content
	  new WOW().init();
	
	  // Top Arrow
	  $(window).scroll(function() {
			  if ($(window).scrollTop() > 1000) { 
				  $('a.top').fadeIn('slow'); 
			  } else { 
				  $('a.top').fadeOut('slow');
			  }
	  });
	  
	  // SLIDER
	  $('#slides').superslides({
		animation: 'fade',
		play:7000, // change value if you want to increase or decrese speed
		animation_speed:800 // change time interval during slide change
	  });
	
	  // Datepicker - Prefered contact
	  $('#datetimepicker').datetimepicker({
	  format:'m.d.Y H:i', //date format
	  inline:false,
	  lang:'en' // language
	  });
	
	  // Gallery Overlay
	   $('ul.galleryImg li a').append('<div></div>');
	
	  // smooth page Scroll
	  $('nav a[href^=#], a.top[href^=#], a.read[href^=#]').click(function(event) {
			  event.preventDefault();
			  $('html,body').animate({
			  scrollTop: $(this.hash).offset().top},
			  1000);	
	  });
	  
	  // Parallax Images
	  	$('.para1').parallax("50%", 0.3);
		$('.para2').parallax("50%", 0.3);
		$('.para3').parallax("50%", 0.3);
	
	  // Services Carousel delay
	  $('#serviceList').carousel({
		  interval:false // set value like 5000 for making auto and increase or decrease for delay
		  });
	
	  // Image Lightbox
	   $("a[rel^='prettyPhoto']").prettyPhoto({overlay_gallery: true});
				
	  // Subscription Form Validation
		 $("#subscribeForm input").focus(function() {
			$(this).prev("label").hide();
			$(this).prev().prev("label").hide();	 		 	
		});
		 
		$("#subscribeForm").submit(function() {
			// validate and process form here
			var emailSubscribe = $("#emailSubscribe").val();
			if (emailSubscribe == "") {
				  $('#emailSubscribe').addClass('reqfld');
				  $('<span class="error" style="display:none; color:#cc0000"><i class="fa fa-exclamation-circle"></i></span>').insertBefore('#emailSubscribe').fadeIn(400);
				  $("#emailSubscribe").focus(function() {  $('#emailSubscribe').removeClass('reqfld');  $(this).prev().fadeOut(400);});
				  return false;
			 } else if(emailSubscribe.indexOf('@') == -1 || emailSubscribe.indexOf('.') == -1) {
				  $('#emailSubscribe').addClass('reqfld');
				  $('<span class="error" style="display:none;  color:#cc0000">Invalid!</span>').insertBefore('#emailSubscribe').fadeIn(400);
				  $("#emailSubscribe").focus(function() {  $('#emailSubscribe').removeClass('reqfld');  $(this).prev().fadeOut(400);});
				  return false;
			}
		
			var sub_security = $("#sub-security").val();
				
			var dataString = '&emailSubscribe=' + emailSubscribe + '&sub-security=' + sub_security;
			
			$.ajax({
			  type: "POST",
			  url: "form/subscribe.php",
			  data: dataString,
			  success: function() {
				$("#subscribeForm .form-row").hide();
				$('#subscribeForm').append("<div id='subscribesuccess' class='alert alert-success' style='border:#"+sub_successBox_Border_Color+" 1px "+sub_successBoxBorderStyle+"; background:#"+sub_successBoxColor+";' ></div>");
				$('#subscribesuccess').html("<h5 style='color:#"+sub_textColor+";'><i class='fa fa-check-circle'></i> "+sub_submitMessage+"</h5>")
				.hide().delay(300)
				.fadeIn(1500);
				
				$('#subscribeForm .form-row').delay(6000).slideUp('fast');
				
			  }
			});
			return false;
	  });	
	
	  // Contact Form
	  $('.loader').hide();
	  $("input, textarea").focus(function() {
		  $(this).prev("label").hide();
		  $(this).prev().prev("label").hide();	 		 	
	  });	  
});
