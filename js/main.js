$(document).ready(function () {

  $('.works__btns button, .works__btns a').on('focus', function (e) {
    $(this).parents('.works-item').addClass('works-item--active');
  });

  $('.works__btns button, .works__btns a').on('blur', function (e) {
    $(this).parents('.works-item').removeClass('works-item--active');
  });

  function moveProgressBar(node, nodeLine, tooltip, animationLength = 1500) {
    const progressElement = $(node);
    progressElement.each(function (value, item) {
      $(item).find(nodeLine).animate({
        width: item.dataset.progressPercent+'%'
      }, animationLength);
      $(item).find(tooltip).show(animationLength);
    });
  }

  let animate = true;


  $(window).scroll(function () {

    if($('.skills').offset().top <= $(window).scrollTop() + 150) {
      if(animate) {
        moveProgressBar('.progress__item', '.progress__bar', '.progress__tooltip');
      }
      animate = false;
    }

  });

  $('.owl-carousel').owlCarousel({
    nav: true,
    margin: 0,
    dots: false,
    loop: true,
    items: 10,
    navText: [],
    responsive:{
        0:{
          items: 1
        },
        480:{
          items: 2
        },
        768:{
          items: 3
        },
        980:{
          items: 5
        }
    }
  });

});

