'use strict';

var _ = require('lodash');

function HeadersBuilder(headers) {
  headers = (typeof headers === 'undefined') ? {} : headers;
  headers = headers || {};

  return _.merge(_defaultHeaders(), headers);
}

function _defaultHeaders() {
  var Rainforest = require('../Rainforest');
  return _.extend({
    "User-Agent": "Rainforest/v1 NodeBindings/0.0.2"
  }, {
    "Content-Type": "application/json",
    "CLIENT_TOKEN": Rainforest.apiKey,
  });
}

module.exports = HeadersBuilder;
