'use strict';

var _ = require('lodash');
var ApiMethod = require('../apibits/ApiMethod');
var ApiResource = require('../apibits/ApiResource');
var ApiList = require('../apibits/ApiList');
var RunsEndpoint = require('../endpoints/RunsEndpoint');
var RunTestsEndpoint = require('../endpoints/RunTestsEndpoint');

function Run(json, method, client) {
  if(!(this instanceof Run)) {
    return new Run(json, method, client);
  }
  if(client == null) {
    client = require('../Rainforest').defaultClient();
  }
  _.extend(this, new ApiResource(json, method, client));
}

Run = _.extend(Run, {
  
  all: function(params, headers) {
    var res = require('../Rainforest').defaultClient().runs.all(params, headers);
    return res;
  },

  retrieve: function(runId, params, headers) {
    var res = require('../Rainforest').defaultClient().runs.retrieve(runId, params, headers);
    return res;
  },

  delete: function(runId, params, headers) {
    var res = require('../Rainforest').defaultClient().runs.delete(runId, params, headers);
    return res;
  },

  abort: function(runId, params, headers) {
    var res = require('../Rainforest').defaultClient().runs.delete(runId, params, headers);
    return res;
  },

  create: function(params, headers) {
    var res = require('../Rainforest').defaultClient().runs.create(params, headers);
    return res;
  },

});

Run.prototype = _.extend(Run.prototype, ApiResource.prototype, {
  
  refresh: function(params, headers) {
    var res = this.client.runs.retrieve(this.id, params, headers);
    return res;
  },

  delete: function(params, headers) {
    var res = this.client.runs.delete(this.id, params, headers);
    return res;
  },

  abort: function(params, headers) {
    var res = this.client.runs.delete(this.id, params, headers);
    return res;
  },

  associatedTests: function() {
    return new RunTestsEndpoint(this.client, this)
  },

});

module.exports = Run;
