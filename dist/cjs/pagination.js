'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-6e9edcee.js');
require('./helpers.js');
require('./chunk-9103eeda.js');
require('./chunk-1beca555.js');
var __chunk_5 = require('./chunk-13e039f5.js');
var __chunk_25 = require('./chunk-9e0384c3.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_5.registerComponent(Vue, __chunk_25.Pagination);
    __chunk_5.registerComponent(Vue, __chunk_25.PaginationButton);
  }
};
__chunk_5.use(Plugin);

exports.BPagination = __chunk_25.Pagination;
exports.BPaginationButton = __chunk_25.PaginationButton;
exports.default = Plugin;
