
// JcSwiper: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './jc-swiper.core.js';
import {
  JcSwiper
} from './jc-swiper.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    JcSwiper
  ], opts);
}
