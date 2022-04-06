$(document).ready(function(){
    // 슬라이드 1
    $('.slider-wrap01 > .slider').slick({
    autoplay: 4000,
    arrows: false,
    });
    // 슬라이드 2
    $('.slider-wrap02 > .slider').slick({
      vertical: true,
      verticalSwiping: true,
      autoplay: 3000,
    })
    // 슬라이드 3
    $('.section02 > .slider-wrap03 >.slider').slick({
      slidesToShow: 4,
      SlidesToScroll: 1,
      swipeToSlide: true,
      infinite: false,
      prevArrow: $(".section02 > .slider-wrap03 > .prev-btn") ,
      nextArrow: $(".section02 > .slider-wrap03 > .next-btn") ,
    })

    // $('.section02 > .slider-wrap03 > .prev-btn').slick('slickPrev');
    // $('.section02 > .slider-wrap03 > .next-btn').slick('slickNext');

  });