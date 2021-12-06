const swiper = new Swiper('.project-swiper-container', {
    // Optional parameters
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    mousewheel: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button.next',
      prevEl: '.swiper-button.prev',
    },
});

let $allVideos = $('.js-project-video');
swiper.on('transitionEnd', function () {
    $allVideos.each(function(){
        let video = $(this).get(0);
        video.pause();
        video.muted = true;
    })
    $allVideos.each(function(){
        // If the video is active, play it
        if ($(this).parents('.swiper-slide-active').length) {
            let activeVideo = $('.swiper-slide-active video').get(0);
            activeVideo.play();
            // activeVideo.muted = false;
        }
    })
    // Change the description to the current slide
    let descText = $('.swiper-slide-active').data('desc');
    $('.js-slide-description').html(descText);
    // Change the numerical indicators to the current numbers
    let slideNumber = $('.swiper-slide-active').attr('aria-label')
    $('.js-slide-number').html(slideNumber)
});
// Once the DOM has loaded, update the numerical indicators and if there is a video as the first item, play it
$(function() {
    let slideNumber = $('.swiper-slide-active').attr('aria-label');
    $('.js-slide-number').html(slideNumber)
    $allVideos.each(function(){
        if ($(this).parents('.swiper-slide-active').length) {
            let activeVideo = $('.swiper-slide-active video').get(0);
            activeVideo.play();
        }
    })
    $allVideos.each(function(){
        let video = $(this).get(0)
        video.play();
        video.pause();
    })
});
// Go through every video on the page and pause it when transition starts
// swiper.on('transitionStart', function () {
//     $allVideos.each(function(){
//         let video = $(this).get(0);
//         video.pause();
//     })
// });
