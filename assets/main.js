const $ = require('jquery');


function scrollTo(div){

  return () => {
    var divPosition = $(`.${div}`).offset();
    $('html, body').animate({scrollTop: (divPosition.top+10)}, "slow");
  }

}

document.addEventListener('DOMContentLoaded', () => {
  $('#nav-icon1').click(function(){
		$(this).toggleClass('open');
    if($('#menu').hasClass('hidden')){
      $('#menu').removeClass('hidden').addClass('show');
    } else{
      $('#menu').removeClass('show').addClass('hidden');
        $('#contact-menu').removeClass('show').addClass('hidden');
    }
	});

  $('#home').click(scrollTo("top-div"));
  $('#portfolio').click(scrollTo('portfolio-div'));
  $('#about').click(scrollTo('about-div'));

  $('#contact').click(() =>{
    if($('#contact-menu').hasClass('hidden')){
      $('#contact-menu').removeClass('hidden').addClass('show')
    } else{
      $('#contact-menu').removeClass('show').addClass('hidden')
    }
  });

  window.addEventListener('scroll', () => {
    let scrollPos = $(window).scrollTop();
    if(scrollPos > $('.top-div').offset().top && scrollPos < $('.portfolio-div').offset().top){
      $('#home').css('border-bottom','1px solid white');
      $('#portfolio').css('border-bottom','none');
      $('#about').css('border-bottom','none');
    }else if(scrollPos > $('.portfolio-div').offset().top && scrollPos < $('.about-div').offset().top){
      $('#home').css('border-bottom','none');
      $('#portfolio').css('border-bottom','1px solid white');
      $('#about').css('border-bottom','none');
    }else if(scrollPos > $('.about-div').offset().top){
      $('#home').css('border-bottom','none');
      $('#portfolio').css('border-bottom','none');
      $('#about').css('border-bottom','1px solid white');
    }
  });

});
