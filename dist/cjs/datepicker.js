'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-6e9edcee.js');
require('./helpers.js');
require('./chunk-9103eeda.js');
require('./chunk-ce9f10eb.js');
require('./chunk-1beca555.js');
var __chunk_5 = require('./chunk-13e039f5.js');
require('./chunk-2a0395ef.js');
require('./chunk-12b0083e.js');
require('./chunk-ae7e641a.js');
require('./chunk-6bb82aef.js');
require('./chunk-cd0e67ef.js');
require('./chunk-8c89197f.js');
var __chunk_18 = require('./chunk-d7174da2.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_5.registerComponent(Vue, __chunk_18.Datepicker);
  }
};
__chunk_5.use(Plugin);

exports.BDatepicker = __chunk_18.Datepicker;
exports.default = Plugin;
