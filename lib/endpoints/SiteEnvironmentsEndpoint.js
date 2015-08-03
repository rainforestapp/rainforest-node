'use strict';

var _ = require('lodash');
var ApiMethod = require('../apibits/ApiMethod');
var ApiResource = require('../apibits/ApiResource');
var ApiEndpoint = require('../apibits/ApiEndpoint');
var ApiList = require('../apibits/ApiList');
var SiteEnvironment = require('../resources/SiteEnvironment');

function SiteEnvironmentsEndpoint(client, parent) {
  if(!(this instanceof SiteEnvironmentsEndpoint)) {
    return new SiteEnvironmentsEndpoint(client, parent);
  }
  this.client = client;
  this.parent = parent;
}

SiteEnvironmentsEndpoint.prototype = _.extend(SiteEnvironmentsEndpoint.prototype, {

  new: function(id) {
    return new SiteEnvironment({ id: id }, null, this.client)
  },

  all: function(params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, SiteEnvironmentsEndpoint.prototype.all);
    var method = new ApiMethod("get", "/site_environments", mArgs, this.parent, function(json) {
      return ApiList.construct('SiteEnvironment', json, this);
    });
    return this.client.execute(method);
  },

  update: function(site_environment_id, params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, SiteEnvironmentsEndpoint.prototype.update);
    var method = new ApiMethod("put", "/site_environments/:site_environment_id", mArgs, this.parent, function(json) {
      return ApiResource.construct('SiteEnvironment', json, this);
    });
    return this.client.execute(method);
  },

});

module.exports = SiteEnvironmentsEndpoint;
