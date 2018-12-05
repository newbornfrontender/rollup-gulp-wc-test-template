import { src, dest } from 'gulp';
import del from 'del';
import { obj } from 'through2';
import { minify } from 'terser';

export const clean = () => {
  return del(['public/*.js', '!public/index.html']);
};

export const uglify = () => {
  return src('public/*.js')
    .pipe(
      obj(function(chunk, enc, callback) {
        if (chunk.isBuffer()) {
          const code = chunk.contents.toString();
          const options = {};

          chunk.contents = Buffer.from(minify(code, options).code);
        }

        callback(null, chunk);
      }),
    )
    .pipe(dest('public'));
};
