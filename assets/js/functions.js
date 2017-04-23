$(document).ready(function() {

	function close() {
		var closeOffset = $('circle.ball').offset();
		var closeSize = $('circle.ball').size();
		console.log(closeSize)
		$('.close').offset(closeOffset);
	}




	$('#main-menu li').hover(function() {

		$('#main-menu li').addClass('off');
		$(this).removeClass('off');


		var idMenu = $(this).attr('data-link');


		$('#home').removeAttr('class').addClass(idMenu);


		$("circle.ball").attr('class','ball');

		$("#"+idMenu+"_shape").find("circle.ball").attr('class','ball active');


		setTimeout(function(){

			$(".father").removeClass('hover');
			$("#"+idMenu+"_shape").addClass('hover');

		}, 500);
				


		

	}, function() {

		$('#main-menu li').removeClass('off');


		setTimeout(function(){
			$(".father").removeClass('hover');
		}, 500);

		

		// , #event-name, #event-location, #event-date, #event-sponsorships
	});


	$('#main-menu li').click(function () {


		$('#main-menu, #header').addClass('out');

		var idMenu = $(this).attr('data-link');

		$('.father').addClass('off');

		$("#"+idMenu+"_shape").removeClass('off').addClass('change');


		setTimeout(function(){

			$("#"+idMenu+"_shape").removeClass('change').addClass('active');


		}, 10);

		setTimeout(function(){

			$("#"+idMenu).addClass('active');

		}, 500);

		// $('#home').removeAttr('class').addClass(idMenu+"-active");

		// $("#"+idMenu).addClass('active');


		close();

		setTimeout(function(){ close(); }, 1000);

	});



	$(".close").click(function () {

		$(".father.active").addClass('change-return').removeClass('active');
		$(".section.active").removeClass('active');

		$("#header").removeClass('active');

		


		setTimeout(function(){

			$(".change-return").removeClass('change-return');

			$('#main-menu, #header').removeClass('out');
			$('.father').removeClass('off');

		}, 1000);

		

		close();
	});


});