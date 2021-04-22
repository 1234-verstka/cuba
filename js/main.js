$(function(){

  $('.photo__slider').slick({

    prevArrow:'<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="влево"></button>',
    nextArrow:'<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="вправо"></button>'
  });
$('.menu__btn').on('click' , function(){
$('.menu__list').slideToggle();
});
});