import './chunk-fca733e9.js';
import './helpers.js';
import './chunk-8ed29c41.js';
import { r as registerComponent, u as use } from './chunk-cca88db8.js';
import { T as Tooltip } from './chunk-feda1a80.js';
export { T as BTooltip } from './chunk-feda1a80.js';

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, Tooltip);
  }
};
use(Plugin);

export default Plugin;
