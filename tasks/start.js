import { watch, series, parallel } from 'gulp';

import { CLEAN } from './clean';
import { STYLE } from './style';
import { COMPILE } from './compile';
import { BUNDLE } from './bundle';

export const START = series(CLEAN, () =>
  watch('src/**/*.{css,js}', parallel(STYLE, series(COMPILE, BUNDLE))),
);
