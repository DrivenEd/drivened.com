//###############################################
// Controls the homepage
//###############################################
jQuery(function($){
    $header = $('header');
    $login  = $('#login');
    $headerImage = $('.bg', $header);
    $headerH1 = $('h1', $header);

    //===============================================
    // Window resize
    //===============================================
    var home_watchWindowResize = _.throttle(function(){
        $header.height(Math.min($window.height() - 180), 800);
        $login.css({top: $window.height() / 2 - 180 - $login.height() / 2});
    }, 100);
    $window.resize(home_watchWindowResize);
    home_watchWindowResize();

    //===============================================
    // Window scroll
    //===============================================
    $window.scroll(function(){
        if($window.scrollTop() < $window.height()){
            var windowHeightRatio = $window.scrollTop()/($header.height());

            $login.css({
                opacity: 1 - windowHeightRatio * 1.5,
                top: $window.scrollTop() * 1.1
            });
            $headerImage.css({top: $window.scrollTop() / 1.25 + 'px'});
            $headerH1.css({
                letterSpacing: Math.max(windowHeightRatio * 100, 10)
            });
        }
    });
    $window.trigger('scroll');
});