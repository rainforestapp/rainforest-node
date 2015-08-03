'use strict';

var _ = require('lodash');
var ApiMethod = require('../apibits/ApiMethod');
var ApiResource = require('../apibits/ApiResource');
var ApiList = require('../apibits/ApiList');
var SitesEndpoint = require('../endpoints/SitesEndpoint');

function Site(json, method, client) {
  if(!(this instanceof Site)) {
    return new Site(json, method, client);
  }
  if(client == null) {
    client = require('../Rainforest').defaultClient();
  }
  _.extend(this, new ApiResource(json, method, client));
}

Site = _.extend(Site, {
  
  all: function(params, headers) {
    var res = require('../Rainforest').defaultClient().sites.all(params, headers);
    return res;
  },

  update: function(siteId, params, headers) {
    var res = require('../Rainforest').defaultClient().sites.update(siteId, params, headers);
    return res;
  },

  delete: function(siteId, params, headers) {
    var res = require('../Rainforest').defaultClient().sites.delete(siteId, params, headers);
    return res;
  },

  create: function(params, headers) {
    var res = require('../Rainforest').defaultClient().sites.create(params, headers);
    return res;
  },

});

Site.prototype = _.extend(Site.prototype, ApiResource.prototype, {
  
  update: function(params, headers) {
    var res = this.client.sites.update(this.id, params, headers);
    return res;
  },

  delete: function(params, headers) {
    var res = this.client.sites.delete(this.id, params, headers);
    return res;
  },

});

module.exports = Site;
