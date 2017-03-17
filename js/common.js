$('.quote-slider, .work-slider').slick({
  autoplay: true,
  respondTo: window
});

$('.navbar_link').on('click', function(){
    var target = $(this).attr('data-target'); //should be css selector (e.g. data-target=".next-block")
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 1000);
    return false;
});

$('.mob_menu').on('click', function() {
	$('.navbar').toggleClass('active');
});