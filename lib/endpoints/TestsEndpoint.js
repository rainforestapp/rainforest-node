'use strict';

var _ = require('lodash');
var ApiMethod = require('../apibits/ApiMethod');
var ApiResource = require('../apibits/ApiResource');
var ApiEndpoint = require('../apibits/ApiEndpoint');
var ApiList = require('../apibits/ApiList');
var Test = require('../resources/Test');

function TestsEndpoint(client, parent) {
  if(!(this instanceof TestsEndpoint)) {
    return new TestsEndpoint(client, parent);
  }
  this.client = client;
  this.parent = parent;
}

TestsEndpoint.prototype = _.extend(TestsEndpoint.prototype, {

  new: function(id) {
    return new Test({ id: id }, null, this.client)
  },

  all: function(params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, TestsEndpoint.prototype.all);
    var method = new ApiMethod("get", "/tests", mArgs, this.parent, function(json) {
      return ApiList.construct('Test', json, this);
    });
    return this.client.execute(method);
  },

  retrieve: function(test_id, params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, TestsEndpoint.prototype.retrieve);
    var method = new ApiMethod("get", "/tests/:test_id", mArgs, this.parent, function(json) {
      return ApiResource.construct('Test', json, this);
    });
    return this.client.execute(method);
  },

  delete: function(test_id, params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, TestsEndpoint.prototype.delete);
    var method = new ApiMethod("delete", "/tests/:test_id", mArgs, this.parent, function(json) {
      return json;
    });
    return this.client.execute(method);
  },

  update: function(test_id, params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, TestsEndpoint.prototype.update);
    var method = new ApiMethod("put", "/tests/:test_id", mArgs, this.parent, function(json) {
      return ApiResource.construct('Test', json, this);
    });
    return this.client.execute(method);
  },

  create: function(params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, TestsEndpoint.prototype.create);
    var method = new ApiMethod("post", "/tests", mArgs, this.parent, function(json) {
      return ApiResource.construct('Test', json, this);
    });
    return this.client.execute(method);
  },

  history: function(test_id, params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, TestsEndpoint.prototype.history);
    var method = new ApiMethod("get", "/tests/:test_id/history", mArgs, this.parent, function(json) {
      return ApiList.construct('Run', json, this);
    });
    return this.client.execute(method);
  },

});

module.exports = TestsEndpoint;
