'use strict';

var _ = require('lodash');

var RainforestError = require('./RainforestError');

function ApiError(message, apiMethod) {
  if(!(this instanceof ApiError)) {
    return new ApiError(message, apiMethod);
  }

  this.message = message;
  this.apiMethod = apiMethod;
  this.stack = (new Error(this.message)).stack;
  try {
    this.json = JSON.parse(this.message);
  } catch(error) {
  }
}

ApiError.prototype = _.extend(Object.create(RainforestError.prototype), {

})

module.exports = ApiError;
