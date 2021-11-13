'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-6e9edcee.js');
var helpers = require('./helpers.js');
var __chunk_2 = require('./chunk-9103eeda.js');

var ConfigComponent = {
  getOptions: function getOptions() {
    return __chunk_2.config;
  },
  setOptions: function setOptions(options) {
    __chunk_2.setOptions(helpers.merge(__chunk_2.config, options, true));
  }
};

exports.default = ConfigComponent;
