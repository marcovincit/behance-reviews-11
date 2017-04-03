$(document).ready(function() {

	$(window).load(function () {

		setTimeout(function(){
		

		}, 3000);


	});



	///

    $.rand = function(arg) {
	        if ($.isArray(arg)) {
	            return arg[$.rand(arg.length)];
	        } else if (typeof arg == "number") {
	            return Math.floor(Math.random() * arg);
	        } else {
	            return 4;  // chosen by fair dice roll
	        }
	    };

	var items = ['blue','blue-light-01','blue-light-02','blue-dark-01','blue-dark-02','pink-01','pink-02','green-01','green-02','purple-01','purple-02','yellow-01','yellow-02'];





	$('#float-ball').attr('class', $.rand(items));




	var stade = $('#home'),
		stadeWidth = stade.width();
		stadeHeight = stade.height();


 	function randomize() {
 		$('#float-ball').each(function () {
	 		var random = $(this),
		 		randomWidth = random.width(),
		 		randomHeight = random.height(),

		 		randomTop = Math.floor(Math.random() * (stadeHeight-randomHeight + 1) + 0),
		 		randomLeft = Math.floor(Math.random() * (stadeWidth-randomWidth + 1) + 0);

	 		random.css({transform: 'translate(' + randomTop + 'px, ' + randomLeft + 'px)'});
	 	});
 	}


 	randomize();


	$('#float-ball').click(function() {
		$(this).removeAttr('class');
		$(this).attr('class', $.rand(items));
		randomize();

	});
































	$('*[data-link="true"]').click(function () {

		$('*[data-link="true"]').removeClass('current');

		$(this).addClass('current');

		var linkHash = $(this).attr('href'),
			link = linkHash.replace('#', ''),
			sectionCurrent = $(".section.in");

		console.log(link)

		$('#header, #sebrae, #hotmart, #logo span, #graphism, #bg-mask, #menu, #back').removeAttr('class').attr('class', link);

		sectionCurrent.addClass("out").removeClass("in");

		$('#'+link).addClass("in").removeClass("out");

		setTimeout(function(){
			sectionCurrent.removeClass("out");
		}, 3000);


		window.history.pushState(link, link, link);

		return false;




	});




	$('.names-list a').each(function () {


		$(this).hover(function () {
			$('.names-list a, .names-list span, .names-list p span').addClass('inactive');

			$(this).removeClass('inactive');


			var thisClass = $(this).attr('data-name'),
				thisClassIcon = thisClass.replace('#', '');

			$('#organizador-photo, #avaliador-photo').removeAttr('class').addClass(thisClassIcon);


		}, function () {
			$('.names-list a, .names-list span, .names-list p span').removeClass('inactive');
			$('#organizador-photo, #avaliador-photo').removeAttr('class');
		});

	});




});





$.fn.parallaxHorizontal = function ( resistance, mouse ) 
{
	$el = $( this );
	TweenLite.to( $el, .8, 
	{
		x : -(( mouse.clientX - (window.innerWidth/2) ) / resistance )
	});

};


$.fn.parallaxVertical = function ( resistance, mouse ) 
{
	$el = $( this );
	TweenLite.to( $el, .8, 
	{
		y : -(( mouse.clientY - (window.innerWidth/2) ) / resistance )
	});

};

$.fn.parallaxCompleto = function ( resistance, mouse ) 
{
	$el = $( this );
	TweenLite.to( $el, .8, 
	{
		x : -(( mouse.clientX - (window.innerWidth/2) ) / resistance ),
		y : -(( mouse.clientY - (window.innerHeight/2) ) / resistance )
	});

};

ww = $(window).width();


