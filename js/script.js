$(document).ready(function(){

  $('.offerItem').click(function(){
    $('.offerItem').removeClass('active');
    $('.offerItemTitle').removeClass('hide');
    $(this).addClass('active');
    $(this).children('.offerItemTitle').addClass('hide');
  });


  $('.hamburger').click(function() {
    if($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('body').removeClass('fixed');
    }
    else{
      $(this).addClass('active');
      $('body').addClass('fixed');
    }
  });

  $('.grid_view').click(function() {
    $('.list_product_wrap').removeClass('list');
    $('.list_product_wrap').addClass('grid');
  });

  $('.list_view').click(function() {
      $('.list_product_wrap').removeClass('grid');
      $('.list_product_wrap').addClass('list');
  });

  $('.product_list_main .nav-item .nav-link').click(function() {
    $('.product_list_main .nav-item .nav-link').removeClass('active');
    $(this).addClass('active');
  });


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