'use strict';

var _ = require('lodash');
var ApiMethod = require('../apibits/ApiMethod');
var ApiResource = require('../apibits/ApiResource');
var ApiEndpoint = require('../apibits/ApiEndpoint');
var ApiList = require('../apibits/ApiList');
var Generator = require('../resources/Generator');

function GeneratorsEndpoint(client, parent) {
  if(!(this instanceof GeneratorsEndpoint)) {
    return new GeneratorsEndpoint(client, parent);
  }
  this.client = client;
  this.parent = parent;
}

GeneratorsEndpoint.prototype = _.extend(GeneratorsEndpoint.prototype, {

  new: function(id) {
    return new Generator({ id: id }, null, this.client)
  },

  all: function(params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, GeneratorsEndpoint.prototype.all);
    var method = new ApiMethod("get", "/generators", mArgs, this.parent, function(json) {
      return ApiList.construct('Generator', json, this);
    });
    return this.client.execute(method);
  },

  retrieve: function(generator_id, params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, GeneratorsEndpoint.prototype.retrieve);
    var method = new ApiMethod("get", "/generators/:generator_id", mArgs, this.parent, function(json) {
      return ApiResource.construct('Generator', json, this);
    });
    return this.client.execute(method);
  },

  delete: function(generator_id, params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, GeneratorsEndpoint.prototype.delete);
    var method = new ApiMethod("delete", "/generators/:generator_id", mArgs, this.parent, function(json) {
      return ApiResource.construct('Generator', json, this);
    });
    return this.client.execute(method);
  },

  update: function(generator_id, params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, GeneratorsEndpoint.prototype.update);
    var method = new ApiMethod("put", "/generators/:generator_id", mArgs, this.parent, function(json) {
      return ApiResource.construct('Generator', json, this);
    });
    return this.client.execute(method);
  },

  create: function(params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, GeneratorsEndpoint.prototype.create);
    var method = new ApiMethod("post", "/generators", mArgs, this.parent, function(json) {
      return ApiResource.construct('Generator', json, this);
    });
    return this.client.execute(method);
  },

});

module.exports = GeneratorsEndpoint;
