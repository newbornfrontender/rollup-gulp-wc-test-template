import { src, dest } from 'gulp';
import { obj } from 'through2';
import { transform } from '@babel/core';

const paths = {
  from: 'src/**/*.js',
  to: 'lib',
};

const OPTIONS = {
  presets: [
    [
      '@babel/env',
      {
        modules: false,
        targets: {
          esmodules: true,
        },
      },
    ],
  ],
  plugins: ['@babel/plugin-syntax-dynamic-import'],
};

export const COMPILE = () =>
  src(paths.from)
    .pipe(
      obj((chunk, enc, callback) => {
        if (chunk.isBuffer()) {
          const code = chunk.contents.toString();
          const options = OPTIONS;

          chunk.contents = Buffer.from(transform(code, options).code);
        }

        callback(null, chunk);
      }),
    )
    .pipe(dest(paths.to));
