exports.http_methods = function(config){
    var operations = require("./operations").operations(config);

    return {
        get: function(uri, qs, fn){
            operations.request(uri, qs, null, "GET", function(err, response){
                if(response && response.error){
                    err = new Error(response.error);
                    response = null;
                }

                return fn(err, response);
            });
        },

        put: function(uri, qs, data, fn){
            operations.request(uri, qs, data, "PUT", function(err, response){
                if(response && response.error){
                    err = new Error(response.error);
                    response = null;
                }

                return fn(err, response);
            });
        },

        post: function(uri, qs, data, fn){
            operations.request(uri, qs, data, "POST", function(err, response){
                if(response && response.error){
                    err = new Error(response.error);
                    response = null;
                }

                return fn(err, response);
            });
        },

        del: function(uri, fn){
            operations.request(uri, null, null, "DELETE", function(err, response){
                if(response && response.error){
                    err = new Error(response.error);
                    response = null;
                }

                return fn(err, response);
            });
        }
    }
}

