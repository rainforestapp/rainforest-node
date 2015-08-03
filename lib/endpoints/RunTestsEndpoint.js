'use strict';

var _ = require('lodash');
var ApiMethod = require('../apibits/ApiMethod');
var ApiResource = require('../apibits/ApiResource');
var ApiEndpoint = require('../apibits/ApiEndpoint');
var ApiList = require('../apibits/ApiList');

function RunTestsEndpoint(client, parent) {
  if(!(this instanceof RunTestsEndpoint)) {
    return new RunTestsEndpoint(client, parent);
  }
  this.client = client;
  this.parent = parent;
}

RunTestsEndpoint.prototype = _.extend(RunTestsEndpoint.prototype, {

  all: function(params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, RunTestsEndpoint.prototype.all);
    var method = new ApiMethod("get", "/runs/:id/tests", mArgs, this.parent, function(json) {
      return ApiList.construct('Test', json, this);
    });
    return this.client.execute(method);
  },

  retrieve: function(test_id, params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, RunTestsEndpoint.prototype.retrieve);
    var method = new ApiMethod("get", "/runs/:id/tests/:test_id", mArgs, this.parent, function(json) {
      return ApiResource.construct('Test', json, this);
    });
    return this.client.execute(method);
  },

});

module.exports = RunTestsEndpoint;
