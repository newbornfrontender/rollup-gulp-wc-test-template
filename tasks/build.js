import { series } from 'gulp';

import { CLEAN } from './clean';
import { STYLE } from './style';
import { COMPILE } from './compile';
import { BUNDLE } from './bundle';
import { UGLIFY } from './uglify';

export const BUILD = series(CLEAN, STYLE, COMPILE, BUNDLE, UGLIFY);
