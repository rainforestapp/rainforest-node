'use strict';

var _ = require('lodash');
var ApiMethod = require('../apibits/ApiMethod');
var ApiResource = require('../apibits/ApiResource');
var ApiList = require('../apibits/ApiList');
var ClientStatsEndpoint = require('../endpoints/ClientStatsEndpoint');

function ClientStats(json, method, client) {
  if(!(this instanceof ClientStats)) {
    return new ClientStats(json, method, client);
  }
  if(client == null) {
    client = require('../Rainforest').defaultClient();
  }
  _.extend(this, new ApiResource(json, method, client));
}

ClientStats = _.extend(ClientStats, {
  
  retrieve: function(params, headers) {
    var res = require('../Rainforest').defaultClient().clientStats.retrieve(params, headers);
    return res;
  },

});

ClientStats.prototype = _.extend(ClientStats.prototype, ApiResource.prototype, {
  
  refresh: function(params, headers) {
    var res = this.client.clientStats.retrieve(params, headers);
    return res;
  },

});

module.exports = ClientStats;
