$(function () {
	$('.trigger').click(function(){
		console.log("clicked trigger");

		var logo = document.getElementsByClassName("ip-logo");
		$(logo).toggleClass("logo--hidden");
	});


	//Flickity
	// init Flickity
	$('.gallery-main').flickity({
		setGallerySize: false,
		prevNextButtons: false,
pageDots: false
	});

	$('.items-wrap').children('a').on('click', function(){
		console.log("click");
	})

});