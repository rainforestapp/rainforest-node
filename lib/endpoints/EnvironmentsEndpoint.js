'use strict';

var _ = require('lodash');
var ApiMethod = require('../apibits/ApiMethod');
var ApiResource = require('../apibits/ApiResource');
var ApiEndpoint = require('../apibits/ApiEndpoint');
var ApiList = require('../apibits/ApiList');
var Environment = require('../resources/Environment');

function EnvironmentsEndpoint(client, parent) {
  if(!(this instanceof EnvironmentsEndpoint)) {
    return new EnvironmentsEndpoint(client, parent);
  }
  this.client = client;
  this.parent = parent;
}

EnvironmentsEndpoint.prototype = _.extend(EnvironmentsEndpoint.prototype, {

  new: function(id) {
    return new Environment({ id: id }, null, this.client)
  },

  all: function(params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, EnvironmentsEndpoint.prototype.all);
    var method = new ApiMethod("get", "/environments", mArgs, this.parent, function(json) {
      return ApiList.construct('Environment', json, this);
    });
    return this.client.execute(method);
  },

  retrieve: function(environment_id, params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, EnvironmentsEndpoint.prototype.retrieve);
    var method = new ApiMethod("get", "/environments/:environment_id", mArgs, this.parent, function(json) {
      return ApiResource.construct('Environment', json, this);
    });
    return this.client.execute(method);
  },

  delete: function(environment_id, params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, EnvironmentsEndpoint.prototype.delete);
    var method = new ApiMethod("delete", "/environments/:environment_id", mArgs, this.parent, function(json) {
      return json;
    });
    return this.client.execute(method);
  },

  update: function(environment_id, params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, EnvironmentsEndpoint.prototype.update);
    var method = new ApiMethod("put", "/environments/:environment_id", mArgs, this.parent, function(json) {
      return ApiResource.construct('Environment', json, this);
    });
    return this.client.execute(method);
  },

  create: function(params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, EnvironmentsEndpoint.prototype.create);
    var method = new ApiMethod("post", "/environments", mArgs, this.parent, function(json) {
      return ApiResource.construct('Environment', json, this);
    });
    return this.client.execute(method);
  },

});

module.exports = EnvironmentsEndpoint;
