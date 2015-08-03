'use strict';

var _ = require('lodash');
var ApiMethod = require('../apibits/ApiMethod');
var ApiResource = require('../apibits/ApiResource');
var ApiList = require('../apibits/ApiList');
var UsersEndpoint = require('../endpoints/UsersEndpoint');

function User(json, method, client) {
  if(!(this instanceof User)) {
    return new User(json, method, client);
  }
  if(client == null) {
    client = require('../Rainforest').defaultClient();
  }
  _.extend(this, new ApiResource(json, method, client));
}

User = _.extend(User, {
  
  all: function(params, headers) {
    var res = require('../Rainforest').defaultClient().users.all(params, headers);
    return res;
  },

  retrieve: function(userId, params, headers) {
    var res = require('../Rainforest').defaultClient().users.retrieve(userId, params, headers);
    return res;
  },

  update: function(userId, params, headers) {
    var res = require('../Rainforest').defaultClient().users.update(userId, params, headers);
    return res;
  },

  create: function(params, headers) {
    var res = require('../Rainforest').defaultClient().users.create(params, headers);
    return res;
  },

  resetPassword: function(email, params, headers) {
    var res = require('../Rainforest').defaultClient().users.resetPassword(email, params, headers);
    return res;
  },

});

User.prototype = _.extend(User.prototype, ApiResource.prototype, {
  
  refresh: function(params, headers) {
    var res = this.client.users.retrieve(this.id, params, headers);
    return res;
  },

  update: function(params, headers) {
    var res = this.client.users.update(this.id, params, headers);
    return res;
  },

  resetPassword: function(params, headers) {
    var res = this.client.users.resetPassword(this.email, params, headers);
    return res;
  },

});

module.exports = User;
