// import dependencies
var _ = require("lodash");

exports.getObject = function(){
    var object = {};

    object.options = {};
    object.config = function(options){
        object.options.name =  options.user_name || options.client_name,
        object.options.key_contents = options.key,
        object.options.host_url = options.url || ["https://api.opscode.com/organizations", options.organization].join("/")
        if(options.hasOwnProperty("ca")) {
            // absent means default,
            // null means unsafe,
            // specific means specific
            object.options.ca = options.ca;
        }
    }

    require('./methods/clients');
    require('./methods/cookbooks');
    require('./methods/databags');
    require('./methods/environments');
    require('./methods/nodes');
    require('./methods/roles');
    require('./methods/search');
    require('./methods/users');

    return object;
}
