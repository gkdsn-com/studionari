window.onload = (event) => {
};
  
colourSwitch = function(){
    $('body').toggleClass('dark');
    if ($('body').hasClass('dark')) {
        $.cookie('dark', 'dark', { expires: 1, path: '/' })
    }
    else {
        $.removeCookie('dark')
    }
}

$(document).on('click', '.js-colour-switch', colourSwitch);