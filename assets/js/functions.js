$(document).ready(function() {

	function close() {
		var closeOffset = $('.active circle.ball').offset();
		var closeSize = $('.active circle.ball').size();
		console.log(closeSize)
		$('.active .close').offset(closeOffset);
	}




	$('#main-menu li').hover(function() {

		$('#main-menu li, #links').addClass('off');
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

		$('#main-menu li, #links').removeClass('off');


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



		if (idMenu === 'hosts') {
			$('.mask').addClass('active');
		}


		setTimeout(function(){

			$("#"+idMenu+"_shape").removeClass('change').addClass('active');


		}, 10);

		setTimeout(function(){

			$("#"+idMenu).addClass('active');

		}, 500);

		// $('#home').removeAttr('class').addClass(idMenu+"-active");

		// $("#"+idMenu).addClass('active');


		close();

		setTimeout(function(){ close(); }, 2000);

	});



	$(".close").click(function () {

		
		$(".section.active").removeClass('active');
		$('.mask').removeClass('active');

		

		setTimeout(function(){

			$("#header").removeClass('active');

			$(".father.active").addClass('change-return').removeClass('active');

		}, 500);

		


		setTimeout(function(){

			$('#main-menu, #header').removeClass('out');
			$('.father').removeClass('off');

		}, 1000);

		setTimeout(function(){

			$(".change-return").removeClass('change-return');

		}, 2000);

		

		close();
	});




	$('#judges-name-list li').hover(function () {
		$('#judges-name-list li').addClass('off');
		$(this).removeClass('off');

		var thisNumber = $(this).index() + 1;

		$('#judges-image-list li:nth-child('+ thisNumber +')').find('img').addClass('active');


	}, function () {
		$('#judges-name-list li').removeClass('off');
		$('#judges-image-list img').removeClass('active');
	});


	$('#hosts-name-list li').hover(function () {
		$('#hosts-name-list li').addClass('off');
		$(this).removeClass('off');

		var thisNumber = $(this).index() + 1;

		$('#hosts-image-list li:nth-child('+ thisNumber +')').find('img').addClass('active');


	}, function () {
		$('#hosts-name-list li').removeClass('off');
		$('#hosts-image-list img').removeClass('active');
	});






	$(window).resize(function () {
		setTimeout(function(){ 
			close();
		}, 1000);	
	});


});