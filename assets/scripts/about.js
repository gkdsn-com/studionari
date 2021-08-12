const $aboutItems = document.querySelector('.about-items');
const $aboutLink = $('.js-about-link');
let isDown = false;
let startX;
let scrollLeft;

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
        sectionOffset = $section.offsetLeft;
    e.preventDefault();
    $aboutLink.removeClass('current')
    $(this).addClass('current')
    $aboutItems.scrollLeft = sectionOffset + 2;
}

$(document).on('click', '.js-about-link', aboutClick);