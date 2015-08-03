'use strict';

var _ = require('lodash');
var ApiMethod = require('../apibits/ApiMethod');
var ApiResource = require('../apibits/ApiResource');
var ApiList = require('../apibits/ApiList');
var SiteEnvironmentsEndpoint = require('../endpoints/SiteEnvironmentsEndpoint');

function SiteEnvironment(json, method, client) {
  if(!(this instanceof SiteEnvironment)) {
    return new SiteEnvironment(json, method, client);
  }
  if(client == null) {
    client = require('../Rainforest').defaultClient();
  }
  _.extend(this, new ApiResource(json, method, client));
}

SiteEnvironment = _.extend(SiteEnvironment, {
  
  all: function(params, headers) {
    var res = require('../Rainforest').defaultClient().siteEnvironments.all(params, headers);
    return res;
  },

  update: function(siteEnvironmentId, params, headers) {
    var res = require('../Rainforest').defaultClient().siteEnvironments.update(siteEnvironmentId, params, headers);
    return res;
  },

});

SiteEnvironment.prototype = _.extend(SiteEnvironment.prototype, ApiResource.prototype, {
  
  update: function(params, headers) {
    var res = this.client.siteEnvironments.update(this.id, params, headers);
    return res;
  },

});

module.exports = SiteEnvironment;
