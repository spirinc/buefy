'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-6e9edcee.js');
require('./helpers.js');
require('./chunk-9103eeda.js');
require('./chunk-ce9f10eb.js');
require('./chunk-1beca555.js');
var __chunk_5 = require('./chunk-13e039f5.js');
require('./chunk-2a0395ef.js');
var __chunk_7 = require('./chunk-4f6748dc.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_5.registerComponent(Vue, __chunk_7.Autocomplete);
  }
};
__chunk_5.use(Plugin);

exports.BAutocomplete = __chunk_7.Autocomplete;
exports.default = Plugin;
