const { src, dest } = require('gulp');
const del = require('del');
const { obj } = require('through2');
const { minify } = require('terser');

exports.clean = () => {
  return del(['lib', 'public/*.js', '!public/index.html']);
};

exports.uglify = () => {
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
