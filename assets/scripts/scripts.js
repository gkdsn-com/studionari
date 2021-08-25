window.onload = () => {
};
$(function() {
    projectViewLoad();
});
colourSwitch = function(){
    $('body').toggleClass('dark');
    if ($('body').hasClass('dark')) {
        $.cookie('dark', 'true', { expires: 1, path: '/' })
    }
    else {
        $.cookie('dark', 'false', { expires: 1, path: '/' })
    }
}
projectView = function(e) {
    let $viewLinks = $('.js-view-link'),
        $projectContainer = $('.js-projects-container');
    e.preventDefault();
    $viewLinks.removeClass('current');
    $(this).addClass('current');
    let view = $('.js-view-link.current').attr('data-view'),
        href = $(this).attr('href');
    $projectContainer.addClass('hidden');
    $('#' + view).removeClass('hidden');
    window.history.replaceState(null, null, href);
    $(window).scrollTop(0);
}
projectViewLoad = function(){
    if (window.location.href.indexOf('?') != -1) {
        let currentView = window.location.href.split('?')[1],
            $viewLinks = $('.js-view-link'),
            $projectContainer = $('.js-projects-container');
        $projectContainer.addClass('hidden');
        $('#' + currentView).removeClass('hidden');
        $viewLinks.removeClass('current');
        $('.js-view-link[data-view='+ currentView +']').addClass('current');
    }
    else {
        $('#grid').removeClass('hidden');
        $('.js-view-link[data-view=grid]').addClass('current');
    }
}
contact = function(e) {
    e.preventDefault();
    $('body').toggleClass('contact-active');
    $('header.nav #contact').toggleClass('current');
}
const $listItem = document.querySelectorAll(".js-list-item")
$listItem.forEach(hover => {
    hover.addEventListener("mouseover", function () {
      $('.js-list-item').addClass('faded');
      $(this).removeClass('faded');
    })
    hover.addEventListener("mouseout", function () {
        $('.js-list-item').removeClass('faded');
    })
})
projectFilters = function(e) {
    $('.js-projects-filters').toggleClass('active');
}
  

$(document).on('click', '.js-colour-switch', colourSwitch);
$(document).on('click', '.js-view-link', projectView);
$(document).on('click', '#contact', contact);
$(document).on('click', '.js-project-filter', projectFilters);