'use strict';

var _ = require('lodash');
var ApiMethod = require('../apibits/ApiMethod');
var ApiResource = require('../apibits/ApiResource');
var ApiEndpoint = require('../apibits/ApiEndpoint');
var ApiList = require('../apibits/ApiList');
var Integration = require('../resources/Integration');

function IntegrationsEndpoint(client, parent) {
  if(!(this instanceof IntegrationsEndpoint)) {
    return new IntegrationsEndpoint(client, parent);
  }
  this.client = client;
  this.parent = parent;
}

IntegrationsEndpoint.prototype = _.extend(IntegrationsEndpoint.prototype, {

  new: function(id) {
    return new Integration({ id: id }, null, this.client)
  },

  all: function(params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, IntegrationsEndpoint.prototype.all);
    var method = new ApiMethod("get", "/integrations", mArgs, this.parent, function(json) {
      return ApiList.construct('Integration', json, this);
    });
    return this.client.execute(method);
  },

  retrieve: function(integration_id, params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, IntegrationsEndpoint.prototype.retrieve);
    var method = new ApiMethod("get", "/integrations/:integration_id", mArgs, this.parent, function(json) {
      return ApiResource.construct('Integration', json, this);
    });
    return this.client.execute(method);
  },

  update: function(integration_id, params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, IntegrationsEndpoint.prototype.update);
    var method = new ApiMethod("put", "/integrations/:integration_id", mArgs, this.parent, function(json) {
      return ApiResource.construct('Integration', json, this);
    });
    return this.client.execute(method);
  },

});

module.exports = IntegrationsEndpoint;
