'use strict';

var _ = require('lodash');
var ApiClient = require('../apibits/ApiClient');
var ClientStatsEndpoint = require('../endpoints/ClientStatsEndpoint');
var EnvironmentsEndpoint = require('../endpoints/EnvironmentsEndpoint');
var GeneratorsEndpoint = require('../endpoints/GeneratorsEndpoint');
var IntegrationsEndpoint = require('../endpoints/IntegrationsEndpoint');
var RunsEndpoint = require('../endpoints/RunsEndpoint');
var SchedulesEndpoint = require('../endpoints/SchedulesEndpoint');
var SiteEnvironmentsEndpoint = require('../endpoints/SiteEnvironmentsEndpoint');
var SitesEndpoint = require('../endpoints/SitesEndpoint');
var TestsEndpoint = require('../endpoints/TestsEndpoint');
var UsersEndpoint = require('../endpoints/UsersEndpoint');

function DefaultClient(apiKey) {
  if(!(this instanceof DefaultClient)) {
    return new DefaultClient(api_key);
  }
  var headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "CLIENT_TOKEN": apiKey,
  };
  var params = {
  };
  _.extend(this, new ApiClient(headers, params));

  this.clientStats = new ClientStatsEndpoint(this);
  this.environments = new EnvironmentsEndpoint(this);
  this.generators = new GeneratorsEndpoint(this);
  this.integrations = new IntegrationsEndpoint(this);
  this.runs = new RunsEndpoint(this);
  this.schedules = new SchedulesEndpoint(this);
  this.siteEnvironments = new SiteEnvironmentsEndpoint(this);
  this.sites = new SitesEndpoint(this);
  this.tests = new TestsEndpoint(this);
  this.users = new UsersEndpoint(this);

  return this;
}

DefaultClient.prototype = _.extend(DefaultClient.prototype, ApiClient.prototype, {
});

module.exports = DefaultClient;
