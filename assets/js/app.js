//###############################################
// Our JavaScript App
//###############################################
app = {
    clientID:   '245338645414-54mgv49e2sv6660nor41qnbu4vbvsv9v.apps.googleusercontent.com',
    scopes:     'https://www.googleapis.com/auth/drive',
    authMode:    '', //Temporarily stores the current auth mode

    /**
     * Makes an authentication request. Contains a callback to handle it
     * @param  {STR} login The authentication type
     *                     - login: Attempts to login into the dashboard
     * @param  {BOL} immeidate Whether to to auth immediately or through a popup
     */
    auth:       function(authMode, immediate){
        if(!authMode) return console.log('No authMode passed for app.auth()');

        this.authMode = authMode;
        var immediate = immediate || false;

        gapi.auth.authorize({
            client_id:  this.clientID,
            scope:      this.scopes,
            immediate:  immediate

        }, function(data){
            if(data && !data.error){
                switch(this.method){
                    case 'login':
                        window.location = '/drive';
                    break;
                    case 'page.drive':

                    break;
                }
            } else {
                
            }
        });
    },

    /**
     * Interface for gapi.client.request(), which makes an API request to a
     * Google Service
     * @param  {STR} path   The API request path. See: https://developers.google.com/apis-explorer/#p/
     * @param  {OBJ} params Parameters to pass through the request
     */
    call:        function(path, params){
        gapi.client.request({
            'path':     path,
            'params':   params
        });
    }
};