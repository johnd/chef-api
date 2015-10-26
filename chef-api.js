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


    var methodsClients = require('./methods/clients'),
        methodsCookbooks = require('./methods/cookbooks'),
        methodsDatabags = require('./methods/databags'),
        methodsEnvironments = require('./methods/environments'),
        methodsNodes = require('./methods/nodes'),
        methodsRoles = require('./methods/roles'),
        methodsSearch = require('./methods/search'),
        methodsUsers = require('./methods/users');

    var methodsFiles = [methodsClients, methodsCookbooks, methodsDatabags, methodsEnvironments, methodsNodes, methodsRoles, methodsSearch, methodsUsers];

    _.each(methodsFiles, function(file){
      _.each(file.methods(object.options), function(method, method_name){
        object[method_name] = method;
      })
    });

    return object;
}
