$(document).ready(function(){

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});

  $('body').click(function() {
    if($('.toggle-mnu').hasClass('on')) {
      $('.toggle-mnu').removeClass('on');
      $(".main-mnu").slideToggle();
    }
  });


  $('.price-table td').attr('align','');

  /*scrollTop*/ 

  $('a[href^="#"]').click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html,body').animate( { scrollTop: destination }, 1100 );
    return false;
  });
  var ue = $(".to_top").position();

  var wid = $(window).width();
  var wid = (wid-960)/2;

  var 
  speed = 100,
  $scrollTop = $("<a/>")
  .addClass('scrollTop')
  .attr({href:'#', style:'display:none; z-index:9999; position:fixed;'})
  .appendTo('body');    

  $scrollTop.click(function(e){
    e.preventDefault();
    $( 'html:not(:animated),body:not(:animated)' ).animate({"scrollTop":0},"slow");
  });

  //аПаОбаВаЛаЕаНаИаЕ
  function show_scrollTop(){
    ( $(window).scrollTop() > 300 ) ? $scrollTop.fadeIn(600) : $scrollTop.fadeOut(600);
  }
  $(window).scroll( function(){ show_scrollTop(); } );
  show_scrollTop();

  $('.scrollTop').html('');

  $('.scrollTop').css({'marginLeft':wid});

  /*scrollTop*/


}); //end ready