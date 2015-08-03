'use strict';

var _ = require('lodash');

function ApiList(json, apiMethod, klass, client) {
  if(!(this instanceof ApiList)) {
    return new ApiList(json, apiMethod, klass, client);
  }
  this.refresh_from(json, apiMethod, klass, client);
}

ApiList = _.extend(ApiList, {
  construct: function(klass, json, method) {
    if(typeof klass === 'string') {
      klass = require('../resources/' + klass);
    }
    return new ApiList(json, method, klass, method.client);
  },
});

ApiList.prototype = _.extend(ApiList.prototype, {
  refresh_from: function(json, apiMethod, klass, client) {
    if(typeof klass === 'string') {
      klass = require('../resources/' + klass);
    }
    this.apiMethod = apiMethod;
    this.klass = klass;
    this.client = client;

    if(Array.isArray(json)) {
      json = {
        data: json
      };
    }
    var instances = new Array();
    _.each(json.data, function(instanceJson) {
      instances.push(new klass(instanceJson, apiMethod, client));
    });
    json.data = instances;
    return _.extend(this, json);
  }
});

module.exports = ApiList;
