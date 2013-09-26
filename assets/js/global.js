//###############################################
// Global JavaScript
//###############################################
jQuery(function($){
    $window = $(window);
    $doc    = $('html, body');

    $('a').click(function(){
        var $this = $(this);
        if($this.attr('href').charAt(0) === '#'){
            $doc.animate({scrollTop: $('a[name="' + $this.attr('href').replace('#', '') + '"]').offset().top - 100}, 250);
            return false;
        }
    });
});