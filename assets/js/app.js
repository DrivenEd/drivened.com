/*
            ________        .__                    ___________________   
            \______ \_______|__|__  __ ____   ____ \_   _____/\______ \  
             |    |  \_  __ \  \  \/ // __ \ /    \ |    __)_  |    |  \ 
             |    `   \  | \/  |\   /\  ___/|   |  \|        \ |    `   \
            /_______  /__|  |__| \_/  \___  >___|  /_______  //_______  /
                    \/                    \/     \/        \/         \/ 



                                DrivenEd - APP
            This file contain the global APP object, used to interface with
            Google.



#Quick Reference
app.auth(authMode, immediate);  //Authenticates the user using authMode (immeidately?)
app.postRedirect(url, data);    //Redirects to url, with data

app.init                        //Set an anonymous function to it to be called when
                                    the client is loaded
*/

/**
 * Global app object, used as an interface for the google api
 */
app = {
    clientID:   '245338645414-54mgv49e2sv6660nor41qnbu4vbvsv9v.apps.googleusercontent.com',
    scopes:     'https://www.googleapis.com/auth/drive',
    authMode:   '',     //Temporarily stores the current auth mode
    autoAuth:   '',     //The authentication mode to automatically call (if present)
    route:      '',     //Current route
    init:       '',     //Anonymous function to call once the client starts

    /**
     * Makes an authentication request. Contains a callback to handle it
     * @param  {STR} login The authentication type
     *                     - login: Attempts to login into the dashboard
     * @param  {BOL} immeidate Whether to to auth immediately or through a popup
     */
    auth: function(authMode, immediate)
    {
        if(!authMode) return console.log('No authMode passed for app.auth()');

        this.authMode = authMode;
        var immediate = immediate || false;
        gapi.auth.authorize(
            {
                client_id:  this.clientID,
                scope:      this.scopes,
                immediate:  immediate

            }, function(data){
                if(data && !data.error){
                    switch(app.authMode){
                        case 'login':
                            window.location = '/drive';
                        break;
                        case 'page.drive':

                        break;
                    }

                //===============================================
                // Authentication Error
                //===============================================
                } else {

                    //- - - - - - - - - - - - - - - - - - - - - - - -
                    // Accessing page without proper authentication
                    //- - - - - - - - - - - - - - - - - - - - - - - -
                    if(app.route != 'home'){
                        app.postRedirect('/', {
                            woofy: [
                                {
                                    msg:    'Please login to view that page.',
                                    type:   'error'
                                }
                            ]
                        });
                    } else {
                        app.postRedirect('/', {
                            woofy: [
                                {
                                    msg:    'Could not login! Please refresh the page and try again.',
                                    type:   'error'
                                }
                            ]
                        });
                    }
                }
            }
        );
    },

    /**
     * Interface for gapi.client.request(), which makes an API request to a
     * Google Service.
     * :: Helper methods below are shortcuts with different methods set
     * https://developers.google.com/+/web/api/javascript
     *
     * @param {OBJ} data List of parameters as detailed in the link above
     * @param {FUNC} func The callback
     *
     * @return {OBJ} HTTP return
     */
    request: function(data)
    {
        gapi.client.request(data);
    },

    /**
     * Get interface for app.request
     * @param  {STRING} request Filename, relative to https://www.googleapis.com/
     * @param  {OBJ}    data    Contains the rest of the data
     * @param  {FUNC}   func    Callback function
     * 
     * @return {OBJ}         JSON
     */
    get: function(request, data, func)
    {
        data = data || {};
        data['method'] = 'GET';
        data['path'] = request;
        data['callback'] = func;

        app.request(data);
    },


    /**
     * Redirects to a page with post data. The data should be an object, where
     * the key will be used as the inputs name, and the value...the value
     * 
     * @param  {STR} url    URL to redirect to
     * @param  {OBJ} data   Data to POST
     */
    postRedirect: function(url, data)
    {
        _.each(data, function(value, index){
            var json = JSON.stringify(value);
            $router.append("<input name='"+index+"[]' value='"+json+"'>");
        });
        $router.attr('action', url);
        $router.attr('method', 'POST');
        $router.submit();
    }
};

//###############################################
// Initializes Drivened
//###############################################
function startDrivened()
{
    gapi.auth.init();
    if(app.autoAuth)
        app.auth(app.autoAuth, true);

    if(_.isFunction(app.init))
        app.init();
}


//###############################################
// Debug info
//###############################################
jQuery(function()
{
   // woofy.create('Could not log in! Please refresh the page and try again.', 'error');
});