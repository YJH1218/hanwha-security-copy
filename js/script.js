$(document).ready(function(){
    $('.slider-wrap01 > .slider').slick({
    autoplay: 4000,

    });
    $('.slider-wrap02 > .slider').slick({
      vertical: true,
      verticalSwiping: true,
      autoplay: 3000,
    })

    $('.section02 > .slider-wrap03 >.slider').slick({
      slidesToShow: 4,
      SlidesToScroll: 1,
      
    })

  });