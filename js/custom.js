$(function(){ 

  $('.counter').counterUp({ 
    delay: 10,
    time: 2000
  });



  $(document).ready(function(){
    $('.venobox').venobox({ 
    }); 
  });

  
$('.feedback_main').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:".prev",
  nextArrow:".next",
  dots:false,
  arrows:true,
  // autoplay:true,
  // autoplaySpeed:1000
});

$('.mess_main').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:".before",
  nextArrow:".after",
  dots:false,
  arrows:true,
  // autoplay:true,
  // autoplaySpeed:1000
});

// back to top start 

$(".back2top").click(function(){
  $("html, body").animate({
      scrollTop:0
  }, 1000)
});

$(window).scroll(function(){
  var scrolling = $(this).scrollTop();

  if(scrolling > 50){
      $(".menu_bar").addClass("menu_ng");
  }else{
      $(".menu_bar").removeClass("menu_ng");
  }
  if(scrolling > 30){
      $(".back2top").fadeIn(500);
  }else{
      $(".back2top").fadeOut(500); 
  }
}); 
// back to top end

// animation scroll start 
$('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
.click(function (event) {
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
    ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1500, function () {
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                    return false;
                } else {
                    $target.attr('tabindex', '-1');
                    $target.focus();
                };
            });
        }
    }
}); 
// animation scrooll end




})