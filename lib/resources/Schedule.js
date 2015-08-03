'use strict';

var _ = require('lodash');
var ApiMethod = require('../apibits/ApiMethod');
var ApiResource = require('../apibits/ApiResource');
var ApiList = require('../apibits/ApiList');
var SchedulesEndpoint = require('../endpoints/SchedulesEndpoint');

function Schedule(json, method, client) {
  if(!(this instanceof Schedule)) {
    return new Schedule(json, method, client);
  }
  if(client == null) {
    client = require('../Rainforest').defaultClient();
  }
  _.extend(this, new ApiResource(json, method, client));
}

Schedule = _.extend(Schedule, {
  
  all: function(params, headers) {
    var res = require('../Rainforest').defaultClient().schedules.all(params, headers);
    return res;
  },

  retrieve: function(scheduleId, params, headers) {
    var res = require('../Rainforest').defaultClient().schedules.retrieve(scheduleId, params, headers);
    return res;
  },

  update: function(scheduleId, params, headers) {
    var res = require('../Rainforest').defaultClient().schedules.update(scheduleId, params, headers);
    return res;
  },

  delete: function(scheduleId, params, headers) {
    var res = require('../Rainforest').defaultClient().schedules.delete(scheduleId, params, headers);
    return res;
  },

  create: function(params, headers) {
    var res = require('../Rainforest').defaultClient().schedules.create(params, headers);
    return res;
  },

});

Schedule.prototype = _.extend(Schedule.prototype, ApiResource.prototype, {
  
  refresh: function(params, headers) {
    var res = this.client.schedules.retrieve(this.id, params, headers);
    return res;
  },

  update: function(params, headers) {
    var res = this.client.schedules.update(this.id, params, headers);
    return res;
  },

  delete: function(params, headers) {
    var res = this.client.schedules.delete(this.id, params, headers);
    return res;
  },

});

module.exports = Schedule;
