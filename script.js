
$(".card").stop(true).hover(function() {
	$(this).animate({
		marginTop: "30px"
	},100);
}, function () {
	$(this).stop(true).animate({
		marginTop: "20px"
	},100);
});