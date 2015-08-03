'use strict';

var _ = require('lodash');
var ApiMethod = require('../apibits/ApiMethod');
var ApiResource = require('../apibits/ApiResource');
var ApiEndpoint = require('../apibits/ApiEndpoint');
var ApiList = require('../apibits/ApiList');
var Run = require('../resources/Run');

function RunsEndpoint(client, parent) {
  if(!(this instanceof RunsEndpoint)) {
    return new RunsEndpoint(client, parent);
  }
  this.client = client;
  this.parent = parent;
}

RunsEndpoint.prototype = _.extend(RunsEndpoint.prototype, {

  new: function(id) {
    return new Run({ id: id }, null, this.client)
  },

  all: function(params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, RunsEndpoint.prototype.all);
    var method = new ApiMethod("get", "/runs", mArgs, this.parent, function(json) {
      return ApiList.construct('Run', json, this);
    });
    return this.client.execute(method);
  },

  retrieve: function(run_id, params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, RunsEndpoint.prototype.retrieve);
    var method = new ApiMethod("get", "/runs/:run_id", mArgs, this.parent, function(json) {
      return ApiResource.construct('Run', json, this);
    });
    return this.client.execute(method);
  },

  delete: function(run_id, params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, RunsEndpoint.prototype.delete);
    var method = new ApiMethod("delete", "/runs/:run_id", mArgs, this.parent, function(json) {
      return ApiResource.construct('Run', json, this);
    });
    return this.client.execute(method);
  },

  abort: function(run_id, params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, RunsEndpoint.prototype.abort);
    var method = new ApiMethod("delete", "/runs/:run_id", mArgs, this.parent, function(json) {
      return ApiResource.construct('Run', json, this);
    });
    return this.client.execute(method);
  },

  create: function(params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, RunsEndpoint.prototype.create);
    var method = new ApiMethod("post", "/runs", mArgs, this.parent, function(json) {
      return ApiResource.construct('Run', json, this);
    });
    return this.client.execute(method);
  },

});

module.exports = RunsEndpoint;
