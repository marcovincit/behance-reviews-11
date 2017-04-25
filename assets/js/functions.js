$(document).ready(function() {

	function close() {
		var closeOffset = $('.active circle.ball').offset();
		var closeSize = $('.active circle.ball').size();
		// console.log(closeSize)
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



if ( $(window).width() < 750) {


	var x = 0, y = 0,
	    vx = 0, vy = 0,
		ax = 0, ay = 0;
		
	var sphere = document.getElementById("float-mobile");



	if (window.DeviceMotionEvent != undefined) {
		window.ondevicemotion = function(e) {
			ax = event.accelerationIncludingGravity.x * 5;
			ay = event.accelerationIncludingGravity.y * 5;
			document.getElementById("accelerationX").innerHTML = e.accelerationIncludingGravity.x;
			document.getElementById("accelerationY").innerHTML = e.accelerationIncludingGravity.y;
			document.getElementById("accelerationZ").innerHTML = e.accelerationIncludingGravity.z;

			if ( e.rotationRate ) {
				document.getElementById("rotationAlpha").innerHTML = e.rotationRate.alpha;
				document.getElementById("rotationBeta").innerHTML = e.rotationRate.beta;
				document.getElementById("rotationGamma").innerHTML = e.rotationRate.gamma;

				// $('#schedule_shape').css({ left: e.rotationRate.alpha });
			}		
		}

		setInterval( function() {
			var landscapeOrientation = window.innerWidth/window.innerHeight > 1;
			if ( landscapeOrientation) {
				vx = vx + ay;
				vy = vy + ax;
			} else {
				vy = vy - ay;
				vx = vx + ax;
			}
			vx = vx * 0.98;
			vy = vy * 0.98;
			y = parseInt(y + vy / 50);
			x = parseInt(x + vx / 50);
			
			boundingBoxCheck();
			
			// sphere.style.top = -y + "px";
			// sphere.style.transform = "translateY("+y+")"
			// // sphere.style.left = -x + "px";
			// sphere.style.transform = "translateX("+x+")"

			$("#float-mobile").css({"transform":"translate(" +  x + "px, " + y+ "px)"});

			$("#float-mobile").appendTo(e.accelerationIncludingGravity.z);
			
		}, 25);
	} 


	function boundingBoxCheck(){
		if (x<0) { x = 0; vx = -vx; }
		if (y<0) { y = 0; vy = -vy; }
		if (x>document.documentElement.clientWidth-20) { x = document.documentElement.clientWidth-20; vx = -vx; }
		if (y>document.documentElement.clientHeight-20) { y = document.documentElement.clientHeight-20; vy = -vy; }
		
	}

}
