$(window).scroll(function() {
  if ($(document).scrollTop() > 4) {
    $('#main-nav-desk').addClass('nav-shrink uk-animation-slide-top');
  } else {
    $('#main-nav-desk').removeClass('nav-shrink uk-animation-slide-top');
  }
});
