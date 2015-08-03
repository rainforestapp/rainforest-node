'use strict';

var _ = require('lodash');
var ApiMethod = require('../apibits/ApiMethod');
var ApiResource = require('../apibits/ApiResource');
var ApiEndpoint = require('../apibits/ApiEndpoint');
var ApiList = require('../apibits/ApiList');
var Site = require('../resources/Site');

function SitesEndpoint(client, parent) {
  if(!(this instanceof SitesEndpoint)) {
    return new SitesEndpoint(client, parent);
  }
  this.client = client;
  this.parent = parent;
}

SitesEndpoint.prototype = _.extend(SitesEndpoint.prototype, {

  new: function(id) {
    return new Site({ id: id }, null, this.client)
  },

  all: function(params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, SitesEndpoint.prototype.all);
    var method = new ApiMethod("get", "/sites", mArgs, this.parent, function(json) {
      return ApiList.construct('Site', json, this);
    });
    return this.client.execute(method);
  },

  delete: function(site_id, params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, SitesEndpoint.prototype.delete);
    var method = new ApiMethod("delete", "/sites/:site_id", mArgs, this.parent, function(json) {
      return ApiResource.construct('Site', json, this);
    });
    return this.client.execute(method);
  },

  update: function(site_id, params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, SitesEndpoint.prototype.update);
    var method = new ApiMethod("put", "/sites/:site_id", mArgs, this.parent, function(json) {
      return ApiResource.construct('Site', json, this);
    });
    return this.client.execute(method);
  },

  create: function(params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, SitesEndpoint.prototype.create);
    var method = new ApiMethod("post", "/sites", mArgs, this.parent, function(json) {
      return ApiResource.construct('Site', json, this);
    });
    return this.client.execute(method);
  },

});

module.exports = SitesEndpoint;
