/*
            ________        .__                    ___________________   
            \______ \_______|__|__  __ ____   ____ \_   _____/\______ \  
             |    |  \_  __ \  \  \/ // __ \ /    \ |    __)_  |    |  \ 
             |    `   \  | \/  |\   /\  ___/|   |  \|        \ |    `   \
            /_______  /__|  |__| \_/  \___  >___|  /_______  //_______  /
                    \/                    \/     \/        \/         \/ 



                                    DrivenEd
            This is the DrivenEd framework, used to drive...drivened.

Quickstart:

 */


jQuery(function($){

    /**
     * Click Events
     */
    $('[click]').each(function(){
        var $this = $(this);
        $this.data('function', $this.attr('click'));
        $this.click(function(){window[$this.data('function')]();});
    });
});