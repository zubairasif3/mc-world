// carousels scrcipt
jQuery("#hero-carousel").owlCarousel({
    autoplay: false,
    rewind: false,
    loop: true,
    margin: 20, 
    responsiveClass: true,
    autoHeight: true,
    nav: true,
    dots: false,
    items: 1
});
jQuery("#testimonial-carousel").owlCarousel({
  autoplay: false,
  rewind: false,
  loop: true,
  margin: 20, 
  responsiveClass: true,
  autoHeight: true,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 2
    },

    1024: {
      items: 3
    },

    1366: {
      items: 3
    }
  }
});
jQuery("#video-carousel").owlCarousel({
  autoplay: false,
  rewind: false,
  loop: true,
  margin: 20, 
  responsiveClass: true,
  autoHeight: true,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 3
    },

    1024: {
      items: 4
    },

    1366: {
      items: 4
    }
  }
});
jQuery("#projects-carousel").owlCarousel({
  autoplay: false,
  rewind: false,
  loop: true,
  margin: 20, 
  responsiveClass: true,
  autoHeight: true,
  nav: false,
  dots: false,
  items: 2.5
});
$( ".owl-prev").html('<i class="fa fa-long-arrow-alt-left"></i>');
$( ".owl-next").html('<i class="fa fa-long-arrow-alt-right"></i>');
$( "#video-carousel .owl-prev").html('<i class="fa fa-arrow-left"></i>');
$( "#video-carousel .owl-next").html('<i class="fa fa-arrow-right"></i>');


// video popup script


$(document).ready(function() {
  $('.popup-video1').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
  });
});