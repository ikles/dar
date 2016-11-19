$(document).ready(function() {

  console.log('Hello-common-js');   

  $('.form-pop-link').click(function (eventObject) {
    eventObject.preventDefault();            
    $('.zoom').addClass('dblock');
    $('.form-pop').addClass('dblock');
    $('.overka').addClass('dblock');
    $('.closer').addClass('dblock');
  });


  $('.overka').click(function () {
    $('.overka').removeClass('dblock');
    $('.form-pop').removeClass('dblock');
    $('.zoom').removeClass('dblock');    
  });

  $('.closer').click(function (eventObject) {
    eventObject.preventDefault();
    $('.form-pop').removeClass('dblock');
    $('.overka').removeClass('dblock');
    $('.zoom').removeClass('dblock');    
  });

  $('.hidden_link').click(function (eventObject) {
  eventObject.preventDefault();
});;
 
    if(parseInt($('.jsTotal.total:first').text(), 10) >= 4000) {
        $('.free-delivery').show();
    }

$("#links_divs .button").click(function (eventObject) {
    $(".par").hide();
    $(eventObject.currentTarget).find(".triangle, .tooltip").show();
});

$('.close_win').click(function (eventObject) {
  eventObject.preventDefault();
    $(".tooltip, .triangle").hide();
});

$(document).mouseup(function (e) {
    var container = $(".par");
    if (container.has(e.target).length === 0){
        container.hide();
        $('.triangle').hide();
    }
});
   
$('div.jcommentsrev').prepend('<div class="rews2"><a class="all-rews" href="/otzyvy">Смотреть все отзывы</a><a class="all-rews all-rews2" href="/otzyvy#addcomments2">Добавить отзыв</a></div>');

$('#comments').after('<a href="#addcomments2" id="addcomments2"></a>');

});//конец ready 