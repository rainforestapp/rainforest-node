'use strict';

var _ = require('lodash');

var Util = require('./Util');

function ApiResource(json, apiMethod, client) {
  if(!(this instanceof ApiResource)) {
    return new ApiResource(json, apiMethod, client);
  }
  this.refresh_from(json, apiMethod, client);
}

ApiResource = _.extend(ApiResource, {
  defaultClient: function() {
    return Rainforest.defaultClient();
  },

  determineArgs: function(params, headers, callback) {
    if(typeof params === 'function') {
      callback = params;
      params = {};
      headers = {}
    } else if(typeof headers === 'function') {
      callback = headers;
      headers = {};
    }
    return {
      params: params,
      headers: headers,
      callback: callback
    };
  },

  construct: function(klass, json, method) {
    if(typeof klass === 'string') {
      klass = require('../resources/' + klass);
    }
    return new klass(json, method, method.client);
  },

});

ApiResource.prototype = _.extend(ApiResource.prototype, {
  // This *DOES NOT* clear any existing data.
  refresh_from: function(json, apiMethod, client) {
    this.apiMethod = apiMethod;
    this.client = client;

    if(typeof json === 'string') {
      json = { id: json };
    }
    return _.extend(this, json);
  }
});

module.exports = ApiResource;
