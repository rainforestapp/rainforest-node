'use strict';

var _ = require('lodash');
var ApiMethod = require('../apibits/ApiMethod');
var ApiResource = require('../apibits/ApiResource');
var ApiEndpoint = require('../apibits/ApiEndpoint');
var ApiList = require('../apibits/ApiList');
var Schedule = require('../resources/Schedule');

function SchedulesEndpoint(client, parent) {
  if(!(this instanceof SchedulesEndpoint)) {
    return new SchedulesEndpoint(client, parent);
  }
  this.client = client;
  this.parent = parent;
}

SchedulesEndpoint.prototype = _.extend(SchedulesEndpoint.prototype, {

  new: function(id) {
    return new Schedule({ id: id }, null, this.client)
  },

  all: function(params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, SchedulesEndpoint.prototype.all);
    var method = new ApiMethod("get", "/schedules", mArgs, this.parent, function(json) {
      return ApiList.construct('Schedule', json, this);
    });
    return this.client.execute(method);
  },

  retrieve: function(schedule_id, params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, SchedulesEndpoint.prototype.retrieve);
    var method = new ApiMethod("get", "/schedules/:schedule_id", mArgs, this.parent, function(json) {
      return ApiResource.construct('Schedule', json, this);
    });
    return this.client.execute(method);
  },

  delete: function(schedule_id, params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, SchedulesEndpoint.prototype.delete);
    var method = new ApiMethod("delete", "/schedules/:schedule_id", mArgs, this.parent, function(json) {
      return ApiResource.construct('Schedule', json, this);
    });
    return this.client.execute(method);
  },

  update: function(schedule_id, params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, SchedulesEndpoint.prototype.update);
    var method = new ApiMethod("put", "/schedules/:schedule_id", mArgs, this.parent, function(json) {
      return ApiResource.construct('Schedule', json, this);
    });
    return this.client.execute(method);
  },

  create: function(params, headers, callback) {
    var mArgs = ApiEndpoint.prepArgs(arguments, SchedulesEndpoint.prototype.create);
    var method = new ApiMethod("post", "/schedules", mArgs, this.parent, function(json) {
      return ApiResource.construct('Schedule', json, this);
    });
    return this.client.execute(method);
  },

});

module.exports = SchedulesEndpoint;
