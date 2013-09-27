//###############################################
// Loads the Drive Dashboard
//###############################################


/**
 * Load information onload
 */
app.autoAuth = 'page.load';
menuClick = function(){
    app.get('drive/v2/files', null, function(data){
        console.log(data);
    });
};