 // pre-loader
 $(document).ready(function(){
  setTimeout(function(){
    $('.pre-loader').fadeOut();
  },3000);
});

// bottomtop 
var btn = $('.top-bottom');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// sticky header
$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});

// custom slider

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        items:1,
        dots:true,
    });

    var counted = 0;
    $(window).scroll(function() {
    
      var oTop = $('.counting-sec').offset().top - window.innerHeight;
      if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.number').each(function() {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
              countNum: countTo
            },
    
            {
    
              duration: 2000,
              easing: 'swing',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }
    
            });
        });
        counted = 1;
      }
    
    }); 
  });











