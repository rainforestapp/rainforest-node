'use strict';

var _ = require('lodash');
var ApiMethod = require('../apibits/ApiMethod');
var ApiResource = require('../apibits/ApiResource');
var ApiList = require('../apibits/ApiList');
var GeneratorsEndpoint = require('../endpoints/GeneratorsEndpoint');
var GeneratorRowsEndpoint = require('../endpoints/GeneratorRowsEndpoint');

function Generator(json, method, client) {
  if(!(this instanceof Generator)) {
    return new Generator(json, method, client);
  }
  if(client == null) {
    client = require('../Rainforest').defaultClient();
  }
  _.extend(this, new ApiResource(json, method, client));
}

Generator = _.extend(Generator, {
  
  all: function(params, headers) {
    var res = require('../Rainforest').defaultClient().generators.all(params, headers);
    return res;
  },

  retrieve: function(generatorId, params, headers) {
    var res = require('../Rainforest').defaultClient().generators.retrieve(generatorId, params, headers);
    return res;
  },

  update: function(generatorId, params, headers) {
    var res = require('../Rainforest').defaultClient().generators.update(generatorId, params, headers);
    return res;
  },

  delete: function(generatorId, params, headers) {
    var res = require('../Rainforest').defaultClient().generators.delete(generatorId, params, headers);
    return res;
  },

  create: function(params, headers) {
    var res = require('../Rainforest').defaultClient().generators.create(params, headers);
    return res;
  },

});

Generator.prototype = _.extend(Generator.prototype, ApiResource.prototype, {
  
  refresh: function(params, headers) {
    var res = this.client.generators.retrieve(this.id, params, headers);
    return res;
  },

  update: function(params, headers) {
    var res = this.client.generators.update(this.id, params, headers);
    return res;
  },

  delete: function(params, headers) {
    var res = this.client.generators.delete(this.id, params, headers);
    return res;
  },

  rows: function() {
    return new GeneratorRowsEndpoint(this.client, this)
  },

});

module.exports = Generator;
