const $aboutItems = document.querySelector('.about-items');
const $aboutLink = $('.js-about-link');
let isDown = false;
let startX;
let scrollLeft;

$(function() {
    aboutLoad();
});

$aboutItems.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - $aboutItems.offsetLeft;
  scrollLeft = $aboutItems.scrollLeft;
});
$aboutItems.addEventListener('mouseleave', () => {
  isDown = false;
});
$aboutItems.addEventListener('mouseup', () => {
  isDown = false;
});
$aboutItems.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - $aboutItems.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  $aboutItems.scrollLeft = scrollLeft - walk;
});

aboutClick = function(e) {
    let sectionName = $(this).attr('data-section'),
        $section = document.querySelector('#'+ sectionName),
        sectionOffset = $section.offsetLeft,
        sectionHref = $(this).attr('href');
    e.preventDefault();
    $aboutLink.removeClass('current')
    $(this).addClass('current')
    $aboutItems.scrollLeft = sectionOffset + 2;
    window.history.replaceState(null, null, sectionHref);
}
aboutLoad = function(){
    if (window.location.href.indexOf('?') != -1) {
        let currentView = window.location.href.split('?')[1],
        $section = document.querySelector('#'+ currentView),
        sectionOffset = $section.offsetLeft;
        $aboutLink.removeClass('current');
        $('.js-about-link[data-section='+ currentView +']').addClass('current');
        $aboutItems.scrollLeft = sectionOffset + 2;
    }
}

$(document).on('click', '.js-about-link', aboutClick);