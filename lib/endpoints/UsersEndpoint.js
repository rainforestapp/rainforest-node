'use strict';

var _ = require('lodash');
var ApiMethod = require('../apibits/ApiMethod');
var ApiResource = require('../apibits/ApiResource');
var ApiEndpoint = require('../apibits/ApiEndpoint');
var ApiList = require('../apibits/ApiList');
var User = require('../resources/User');

function UsersEndpoint(client, parent) {
  if(!(this instanceof UsersEndpoint)) {
    return new UsersEndpoint(client, parent);
  }
  this.client = client;
  this.parent = parent;
}

UsersEndpoint.prototype = _.extend(UsersEndpoint.prototype, {

  new: function(id) {
    return new User({ id: id }, null, this.client)
  },

  all: function(params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, UsersEndpoint.prototype.all);
    var method = new ApiMethod("get", "/users", mArgs, this.parent, function(json) {
      return ApiList.construct('User', json, this);
    });
    return this.client.execute(method);
  },

  retrieve: function(user_id, params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, UsersEndpoint.prototype.retrieve);
    var method = new ApiMethod("get", "/users/:user_id", mArgs, this.parent, function(json) {
      return ApiResource.construct('User', json, this);
    });
    return this.client.execute(method);
  },

  update: function(user_id, params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, UsersEndpoint.prototype.update);
    var method = new ApiMethod("put", "/users/:user_id", mArgs, this.parent, function(json) {
      return ApiResource.construct('User', json, this);
    });
    return this.client.execute(method);
  },

  create: function(params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, UsersEndpoint.prototype.create);
    var method = new ApiMethod("post", "/users", mArgs, this.parent, function(json) {
      return ApiResource.construct('User', json, this);
    });
    return this.client.execute(method);
  },

  resetPassword: function(email, params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, UsersEndpoint.prototype.resetPassword);
    var method = new ApiMethod("post", "/users/reset_password", mArgs, this.parent, function(json) {
      return json;
    });
    return this.client.execute(method);
  },

});

module.exports = UsersEndpoint;
