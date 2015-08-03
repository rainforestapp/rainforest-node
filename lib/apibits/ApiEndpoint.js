'use strict';

var _ = require('lodash');
var Promise = require('bluebird');

var ApiList = require('./ApiList');
var ApiError = require('../errors/ApiError');
var Request = require('./Request');
var ParamsBuilder = require('./ParamsBuilder');
var HeadersBuilder = require('./HeadersBuilder');
var PathBuilder = require('./PathBuilder');
var Util = require('./Util');


function ApiEndpoint(client, parent) {
  if(!(this instanceof ApiEndpoint)) {
    return new ApiEndpoint(client, parent);
  }
  this.client = client;
  this.parent = parent;
  return this;
}


ApiEndpoint = _.extend(ApiEndpoint, {

  // This should get cleaned up eventually.. but it works for now.
  prepArgs: function(args, func) {
    var argNames = Util.getArgNames(func);

    var temp = {};
    _.each(args, function(arg, index) {
      temp[argNames[index]] = arg;
    });

    // Find the callback (in case args were missing).
    var callback = temp.callback;
    if(!callback) {
      var cbKey = _.findLastKey(temp, function(arg) {
        return (typeof arg === 'function');
      });
      callback = temp[cbKey];
      delete temp[cbKey];
    } else {
      delete temp.callback;
    }

    // Pull out the params & headers.
    // Merge the rest into the params.
    var params = temp.params || {};
    delete temp.params;
    var headers = temp.headers || {};
    delete temp.headers;
    params = _.extend(temp, params);

    return {
      params: params,
      headers: headers,
      callback: callback
    }
  },

});

module.exports = ApiEndpoint;
