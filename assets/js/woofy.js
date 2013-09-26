/*
                   __,-----._                       ,-. 
                 ,'   ,-.    \`---.          ,-----<._/ 
                (,.-. o:.`    )),"\\-._    ,'         `. 
               ('"-` .\       \`:_ )\  `-;'-._          \ 
              ,,-.    \` ;  :  \( `-'     ) -._     :   `: 
             (    \ `._\\ ` ;             ;    `    :    ) 
              \`.  `-.    __   ,         /  \        ;, ( 
               `.`-.___--'  `-          /    ;     | :   | 
                 `-' `-.`--._          '           ;     | 
                       (`--._`.                ;   /\    | 
                        \     '                \  ,  )   : 
                        |  `--::----            \'   ;  ;| 
                        \    .__,-      (        )   :  :| 
                         \    : `------; \      |    |   ; 
                          \   :       / , )     |    |  ( 
                 -hrr-     \   \      `-^-|     |   / , ,\ 
                            )  )          | -^- ;   `-^-^' 
                         _,' _ ;          |    | 
                        / , , ,'         /---. : 
                        `-^-^'          (  :  :,' 
                                         `-^--' 

                                WoofyJS
                simple Growl-like notifications for web apps

                by: Oz Ramos for DrivenEd
                dependencies: jQuery

---

#Quick Reference:
woofy.create(msg, type);


*/

//===============================================
// Our Woofy namespace
//===============================================
woofy = {
    //Cached elements
    $body:  null,

    messages:   [], //Contains a list of {msg, type} objects
    queueHeight: 0, //Height of all the messages combined
    lastHeight: 0,  //Height of the last item added
    id: 0,          //incremented ID to assign to messages

    /**
     * Style defaults
     * @type {Object}
     */
    style:    {
        baseTop:    20, //Base top to place the first woofy
        margin:     20,
        speed:      500,
        life:       10000,  //Length to show woofies for
        removeSpeed:  1000
    },

    /**
     * Creates a message and displays it
     * @param  {STR} msg  Message to display
     * @param  {STR} type Message type
     */
    create: function(msg, type)
    {
        var $ = jQuery;
        var $obj = this.add(msg, type);

        $obj.animate({top: this.style.baseTop + this.queueHeight - this.lastHeight}, this.style.speed);
        setTimeout(function(){
            woofy.remove($obj);
        }, this.style.life);
    },

    /**
     * Adds a new message to the queue
     * @param  {STR} msg  Message to display
     * @param  {STR} type Message type
     * @return {OBJ} Woofy jQuery object
     */
    add: function(msg, type)
    {
        this.messages.push({msg: msg, type: type});
        this.$body.prepend('<div id="woofy-message-' + (++this.id) + '" class="woofy-message woofy-'+type+'"><div>'+msg+'</div></div>');
        var $msg = $('#woofy-message-' + this.id);

        this.lastHeight     = $msg.height();
        this.queueHeight    += this.lastHeight + this.style.margin;

        return $msg;
    },

    /**
     * Removes a woofy
     * @param  {OBJ} $obj jQuery object to remove
     */
    remove: function($obj)
    {
        $obj.animate({top: -250}, this.style.removeSpeed)
            .animate({opacity: 0}, this.style.removeSpeed * .5);

        this.queueHeight -= $obj.height() + 20;
        this.messages.pop();
    },

    /**
     * Cache-n-stuff
     */
    init: function()
    {
        this.$body = jQuery('body');
    }
};


//===============================================
// Birth Woofy
//===============================================
jQuery(function($){
    woofy.init();
});