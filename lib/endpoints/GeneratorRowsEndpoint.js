'use strict';

var _ = require('lodash');
var ApiMethod = require('../apibits/ApiMethod');
var ApiResource = require('../apibits/ApiResource');
var ApiEndpoint = require('../apibits/ApiEndpoint');
var ApiList = require('../apibits/ApiList');

function GeneratorRowsEndpoint(client, parent) {
  if(!(this instanceof GeneratorRowsEndpoint)) {
    return new GeneratorRowsEndpoint(client, parent);
  }
  this.client = client;
  this.parent = parent;
}

GeneratorRowsEndpoint.prototype = _.extend(GeneratorRowsEndpoint.prototype, {

  all: function(params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, GeneratorRowsEndpoint.prototype.all);
    var method = new ApiMethod("get", "/generators/:id/rows", mArgs, this.parent, function(json) {
      return json;
    });
    return this.client.execute(method);
  },

  create: function(params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, GeneratorRowsEndpoint.prototype.create);
    var method = new ApiMethod("post", "/generators/:id/rows", mArgs, this.parent, function(json) {
      return json;
    });
    return this.client.execute(method);
  },

});

module.exports = GeneratorRowsEndpoint;
