window.onload = (event) => {
    colourCookie();
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
colourCookie = function(){
    let schemeCookie = $.cookie('dark');
    console.log(schemeCookie);
    if (schemeCookie === 'dark') {
        $('body').addClass('dark');
    }
}

$(document).on('click', '.js-colour-switch', colourSwitch);