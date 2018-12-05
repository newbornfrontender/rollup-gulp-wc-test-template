import { src, dest } from 'gulp';
import { obj } from 'through2';
import { minify } from 'terser';

const paths = {
  from: 'public/*.js',
  to: 'public',
};

const OPTIONS = {};

export const UGLIFY = () =>
  src(paths.from)
    .pipe(
      obj((chunk, enc, callback) => {
        if (chunk.isBuffer()) {
          const code = chunk.contents.toString();
          const options = OPTIONS;

          chunk.contents = Buffer.from(minify(code, options).code);
        }

        callback(null, chunk);
      }),
    )
    .pipe(dest(paths.to));
