'use strict';

var _ = require('lodash');
var ApiMethod = require('../apibits/ApiMethod');
var ApiResource = require('../apibits/ApiResource');
var ApiList = require('../apibits/ApiList');
var IntegrationsEndpoint = require('../endpoints/IntegrationsEndpoint');

function Integration(json, method, client) {
  if(!(this instanceof Integration)) {
    return new Integration(json, method, client);
  }
  if(client == null) {
    client = require('../Rainforest').defaultClient();
  }
  _.extend(this, new ApiResource(json, method, client));
}

Integration = _.extend(Integration, {
  
  all: function(params, headers) {
    var res = require('../Rainforest').defaultClient().integrations.all(params, headers);
    return res;
  },

  retrieve: function(integrationId, params, headers) {
    var res = require('../Rainforest').defaultClient().integrations.retrieve(integrationId, params, headers);
    return res;
  },

  update: function(integrationId, params, headers) {
    var res = require('../Rainforest').defaultClient().integrations.update(integrationId, params, headers);
    return res;
  },

});

Integration.prototype = _.extend(Integration.prototype, ApiResource.prototype, {
  
  refresh: function(params, headers) {
    var res = this.client.integrations.retrieve(this.id, params, headers);
    return res;
  },

  update: function(params, headers) {
    var res = this.client.integrations.update(this.id, params, headers);
    return res;
  },

});

module.exports = Integration;
