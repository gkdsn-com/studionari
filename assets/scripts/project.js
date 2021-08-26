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
    // Go through every video on the page and pause it
    $allVideos.each(function(){
        let video = $(this).get(0);
        video.pause();
        // If the video is active, play it
        if ($(this).parents('.swiper-slide-active').length) {
            let activeVideo = $('.swiper-slide-active video').get(0);
            activeVideo.play();
            console.log('playing video')
        }
    })
});

