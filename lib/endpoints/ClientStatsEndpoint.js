'use strict';

var _ = require('lodash');
var ApiMethod = require('../apibits/ApiMethod');
var ApiResource = require('../apibits/ApiResource');
var ApiEndpoint = require('../apibits/ApiEndpoint');
var ApiList = require('../apibits/ApiList');

function ClientStatsEndpoint(client, parent) {
  if(!(this instanceof ClientStatsEndpoint)) {
    return new ClientStatsEndpoint(client, parent);
  }
  this.client = client;
  this.parent = parent;
}

ClientStatsEndpoint.prototype = _.extend(ClientStatsEndpoint.prototype, {

  retrieve: function(params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, ClientStatsEndpoint.prototype.retrieve);
    var method = new ApiMethod("get", "/clients/stats", mArgs, this.parent, function(json) {
      return ApiResource.construct('ClientStats', json, this);
    });
    return this.client.execute(method);
  },

});

module.exports = ClientStatsEndpoint;
