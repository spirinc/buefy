'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-6e9edcee.js');
require('./helpers.js');
require('./chunk-9103eeda.js');
var __chunk_5 = require('./chunk-13e039f5.js');
require('./chunk-12b0083e.js');
require('./chunk-ae7e641a.js');
var __chunk_15 = require('./chunk-6bb82aef.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_5.registerComponent(Vue, __chunk_15.Dropdown);
    __chunk_5.registerComponent(Vue, __chunk_15.DropdownItem);
  }
};
__chunk_5.use(Plugin);

exports.BDropdown = __chunk_15.Dropdown;
exports.BDropdownItem = __chunk_15.DropdownItem;
exports.default = Plugin;
