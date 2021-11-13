'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-6e9edcee.js');
require('./helpers.js');
require('./chunk-9103eeda.js');
require('./chunk-ce9f10eb.js');
require('./chunk-1beca555.js');
var __chunk_5 = require('./chunk-13e039f5.js');
var __chunk_17 = require('./chunk-8c89197f.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_5.registerComponent(Vue, __chunk_17.Select);
  }
};
__chunk_5.use(Plugin);

exports.BSelect = __chunk_17.Select;
exports.default = Plugin;
