'use strict';

var _ = require('lodash');

var DefaultClient = require('./clients/DefaultClient');
var ClientStats = require('./resources/ClientStats');
var Environment = require('./resources/Environment');
var Generator = require('./resources/Generator');
var Integration = require('./resources/Integration');
var Run = require('./resources/Run');
var Schedule = require('./resources/Schedule');
var SiteEnvironment = require('./resources/SiteEnvironment');
var Site = require('./resources/Site');
var Test = require('./resources/Test');
var User = require('./resources/User');

function Rainforest(api_key) {
  this.apiKey = apiKey;
}

Rainforest = _.extend(Rainforest, {
  apiBase: "https://app.rainforestqa.com/api/1",
  apiStaging: "https://app.rnfrst.com/api/1/",
  apiVersion: "v1",
  supportEmail: "help@rainforestqa.com",
  docsUrl: "https://docs.rainfroestqa.com",


  defaultClient: function() {
    return new DefaultClient(Rainforest.apiKey);
  },

  ClientStats: ClientStats,
  Environment: Environment,
  Generator: Generator,
  Integration: Integration,
  Run: Run,
  Schedule: Schedule,
  SiteEnvironment: SiteEnvironment,
  Site: Site,
  Test: Test,
  User: User,
});

module.exports = Rainforest;
