'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-6e9edcee.js');
require('./helpers.js');
require('./chunk-9103eeda.js');
var __chunk_5 = require('./chunk-13e039f5.js');
var __chunk_10 = require('./chunk-f8187871.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_5.registerComponent(Vue, __chunk_10.Image);
  }
};
__chunk_5.use(Plugin);

exports.BImage = __chunk_10.Image;
exports.default = Plugin;
