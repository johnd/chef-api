var _ = require("lodash");

exports.methods = function(config){

    var http_methods = require('../http_methods').http_methods(config);


    return {
        // http://docs.opscode.com/api_chef_server_search.html#get
        getSearchIndices: function(fn){
            http_methods.get([config.host_url, "search"].join("/"), null, function(err, response){
                return fn(err, response);
            });
        }, 

        // http://docs.opscode.com/api_chef_server_search_index.html#get
        search: function(index, qs, fn){
            http_methods.get([config.host_url, "search", index].join("/"), qs, function(err, response){
                return fn(err, response);
            });
        },

        // http://docs.opscode.com/api_chef_server_search_index.html#post
        partialSearch: function(index, qs, data, fn){
            http_methods.post([config.host_url, "search", index].join("/"), qs, data, function(err, response){
                return fn(err, response);
            });
        }
    }
}
