//###############################################
// Global JavaScript
//###############################################
jQuery(function($){
    $window = $(window);
    $doc    = $('html, body');
    $router = $('#router');

    /**
     * Caches the anchor links target
     */
    $('a').each(function(){
        var $this = $(this);
        if(!$this.attr('href')) return;
        var $target = $('a[name="' + $this.attr('href').replace('#', '') + '"]');

        if($this.attr('href').charAt(0) !== '#')
            return false;

        $this.click(function(){
            if($target)
                $doc.animate({scrollTop: $('a[name="' + $this.attr('href').replace('#', '') + '"]').offset().top - 100}, 250);
            return false;
        });
    });
});