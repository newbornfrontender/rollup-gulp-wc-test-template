import '@babel/polyfill';

import { CLEAN } from './tasks/clean';
import { START } from './tasks/start';
import { BUILD } from './tasks/build';

export const clean = CLEAN;
export const start = START;
export const build = BUILD;
