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
        console.log(video);
        video.pause();
        if ($(this).parents('.swiper-slide-active').length) {
            let activeVideo = $('.swiper-slide-active video').get(0);
            activeVideo.play();
            console.log('active slide')
        }
    })
    // let $activeVideo = $('.swiper-slide-active .js-project-video');
    // $activeVideo.get(0).play();
    // console.log('slide changed');
});