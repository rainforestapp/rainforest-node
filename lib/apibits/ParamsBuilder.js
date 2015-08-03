'use strict';

var _ = require('lodash');

function ParamsBuilder(params) {
  params = (typeof params === 'undefined') ? {} : params;
  params = params || {};

  return _.merge(_defaultParams(), params);
}

ParamsBuilder = _.extend(ParamsBuilder, {
  merge: function(a, b) {
    a = this.ensure(a);
    b = this.ensure(b);
    return _.extend(a, b);
  },
  ensure: function(a) {
    return (typeof a === 'undefined') ? {} : a;
  }
});


function _defaultParams() {
  var Rainforest = require('../Rainforest');
  return {
  };
}

module.exports = ParamsBuilder;
