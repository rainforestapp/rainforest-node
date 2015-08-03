'use strict';

var _ = require('lodash');
var ApiMethod = require('../apibits/ApiMethod');
var ApiResource = require('../apibits/ApiResource');
var ApiList = require('../apibits/ApiList');
var TestsEndpoint = require('../endpoints/TestsEndpoint');

function Test(json, method, client) {
  if(!(this instanceof Test)) {
    return new Test(json, method, client);
  }
  if(client == null) {
    client = require('../Rainforest').defaultClient();
  }
  _.extend(this, new ApiResource(json, method, client));
}

Test = _.extend(Test, {
  
  all: function(params, headers) {
    var res = require('../Rainforest').defaultClient().tests.all(params, headers);
    return res;
  },

  retrieve: function(testId, params, headers) {
    var res = require('../Rainforest').defaultClient().tests.retrieve(testId, params, headers);
    return res;
  },

  update: function(testId, params, headers) {
    var res = require('../Rainforest').defaultClient().tests.update(testId, params, headers);
    return res;
  },

  delete: function(testId, params, headers) {
    var res = require('../Rainforest').defaultClient().tests.delete(testId, params, headers);
    return res;
  },

  create: function(params, headers) {
    var res = require('../Rainforest').defaultClient().tests.create(params, headers);
    return res;
  },

});

Test.prototype = _.extend(Test.prototype, ApiResource.prototype, {
  
  refresh: function(params, headers) {
    var res = this.client.tests.retrieve(this.id, params, headers);
    return res;
  },

  update: function(params, headers) {
    var res = this.client.tests.update(this.id, params, headers);
    return res;
  },

  delete: function(params, headers) {
    var res = this.client.tests.delete(this.id, params, headers);
    return res;
  },

  history: function(params, headers) {
    var res = this.client.tests.history(this.id, params, headers);
    return res;
  },

});

module.exports = Test;
