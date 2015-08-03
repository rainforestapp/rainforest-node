'use strict';

var _ = require('lodash');

function ApiClient(headers, params) {
  if(!(this instanceof ApiClient)) {
    return new ApiClient(headers, params);
  }
  this.headers = headers;
  this.params = params;
  return this;
}

ApiClient.prototype = _.extend(ApiClient.prototype, {
  execute: function(apiMethod) {
    apiMethod.headers = _.extend(apiMethod.headers, this.headers);
    apiMethod.params = _.extend(apiMethod.params, this.params);
    apiMethod.client = this;
    return apiMethod.execute();
  }
});

module.exports = ApiClient;
