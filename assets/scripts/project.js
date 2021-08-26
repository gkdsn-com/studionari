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
swiper.on('slideChange', function () {
    $allVideos.each(function(){
        let video = $(this).get(0);
        console.log(video);
        video.pause();
    })
    let $activeVideo = $('.swiper-slide-active .js-project-video').get(0);
    $activeVideo.play();
    console.log('slide changed');
});