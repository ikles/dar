$(document).ready(function(){

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});

  //$('#header').after($("#bukkit"));








}); //end ready