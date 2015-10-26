exports.methods = function(config){

    var http_methods = require('../http_methods').http_methods(config);


    return {
        getUsers: function(fn){
            http_methods.get([config.host_url, "users"].join("/"), null, function(err, response){
                return fn(err, response);
            });
        },

        createUser: function(body, fn){
            http_methods.post([config.host_url, "users"].join("/"), null, body, function(err, response){
                return fn(err, response);
            });
        },

        getUser: function(user, fn){
            http_methods.get([config.host_url, "users", user].join("/"), null, function(err, response){
                return fn(err, response);
            });
        },

        deleteUser: function(user, fn){
            http_methods.del([config.host_url, "users", user].join("/"), function(err, response){
                return fn(err, response);
            });
        },

        editUser: function(user, data, fn){
            http_methods.put([config.host_url, "users", user].join("/"), null, data, function(err, response){
                return fn(err, response);
            });
        }
    }
}
