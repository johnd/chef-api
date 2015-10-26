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


    var methodsFiles = ["clients", "cookbooks", "databags", "environments", "nodes", "roles", "search", "users"];

    _.each(methodsFiles, function(file){
            _.each(require([".", "methods", file].join("/")).methods(object.options), function(method, method_name){
                object[method_name] = method;
            });
    });
    
    return object;
}
