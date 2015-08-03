'use strict';

var _ = require('lodash');
var ApiMethod = require('../apibits/ApiMethod');
var ApiResource = require('../apibits/ApiResource');
var ApiEndpoint = require('../apibits/ApiEndpoint');
var ApiList = require('../apibits/ApiList');

function EnvironmentRunsEndpoint(client, parent) {
  if(!(this instanceof EnvironmentRunsEndpoint)) {
    return new EnvironmentRunsEndpoint(client, parent);
  }
  this.client = client;
  this.parent = parent;
}

EnvironmentRunsEndpoint.prototype = _.extend(EnvironmentRunsEndpoint.prototype, {

  all: function(params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, EnvironmentRunsEndpoint.prototype.all);
    var method = new ApiMethod("get", "/environments/:id/runs", mArgs, this.parent, function(json) {
      return ApiList.construct('Run', json, this);
    });
    return this.client.execute(method);
  },

});

module.exports = EnvironmentRunsEndpoint;
