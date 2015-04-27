$(function () {
	$('.trigger').click(function(){
		console.log("clicked trigger");

		var logo = document.getElementsByClassName("ip-logo");
		$(logo).toggleClass("logo--hidden");
	});
});