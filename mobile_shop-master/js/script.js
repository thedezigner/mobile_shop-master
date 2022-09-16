$(document).ready(function(){

  $('.offerItem').click(function(){

    $('.offerItem').removeClass('active');
    $('.offerItemTitle').removeClass('hide');
    $(this).addClass('active');
    $(this).children('.offerItemTitle').addClass('hide');
  });
});




$(document).ready(function(){

  $('.hamburger').click(function() {
    if($('.hamburger').hasClass('active')) {
      $('.hamburger').removeClass('active');
      $('body').removeClass('fixed');
    }
    else{
      $('.hamburger').addClass('active');
      $('body').addClass('fixed');
    }
  });
});


$(document).ready(function(){
  $('.instagram_post').slick({
      slidesToShow: 8,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
          {
          breakpoint: 769,
          settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
          }
          },
          {
          breakpoint: 480,
          settings: {
              slidesToShow: 2
          }
          }
      ]
  });
});