'use strict';

var _ = require('lodash');
var ApiMethod = require('../apibits/ApiMethod');
var ApiResource = require('../apibits/ApiResource');
var ApiList = require('../apibits/ApiList');
var EnvironmentsEndpoint = require('../endpoints/EnvironmentsEndpoint');
var EnvironmentRunsEndpoint = require('../endpoints/EnvironmentRunsEndpoint');

function Environment(json, method, client) {
  if(!(this instanceof Environment)) {
    return new Environment(json, method, client);
  }
  if(client == null) {
    client = require('../Rainforest').defaultClient();
  }
  _.extend(this, new ApiResource(json, method, client));
}

Environment = _.extend(Environment, {
  
  all: function(params, headers) {
    var res = require('../Rainforest').defaultClient().environments.all(params, headers);
    return res;
  },

  retrieve: function(environmentId, params, headers) {
    var res = require('../Rainforest').defaultClient().environments.retrieve(environmentId, params, headers);
    return res;
  },

  update: function(environmentId, params, headers) {
    var res = require('../Rainforest').defaultClient().environments.update(environmentId, params, headers);
    return res;
  },

  delete: function(environmentId, params, headers) {
    var res = require('../Rainforest').defaultClient().environments.delete(environmentId, params, headers);
    return res;
  },

  create: function(params, headers) {
    var res = require('../Rainforest').defaultClient().environments.create(params, headers);
    return res;
  },

});

Environment.prototype = _.extend(Environment.prototype, ApiResource.prototype, {
  
  refresh: function(params, headers) {
    var res = this.client.environments.retrieve(this.id, params, headers);
    return res;
  },

  update: function(params, headers) {
    var res = this.client.environments.update(this.id, params, headers);
    return res;
  },

  delete: function(params, headers) {
    var res = this.client.environments.delete(this.id, params, headers);
    return res;
  },

  runs: function() {
    return new EnvironmentRunsEndpoint(this.client, this)
  },

});

module.exports = Environment;
