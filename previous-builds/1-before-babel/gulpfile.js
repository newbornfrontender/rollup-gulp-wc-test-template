const { src, dest } = require('gulp');

// gulp del
// -----------------------------------------------------------------------------

const del = require('del');

exports.clean = () => {
  return del(['public/*.js', '!public/index.html']);
};

// gulp terser
// -----------------------------------------------------------------------------

const { obj } = require('through2');
const { minify } = require('terser');

// task('terser', () => {
//   return src('public/*.js')
//     .pipe(
//       obj(function(chunk, enc, callback) {
//         const file = chunk.contents.toString('utf8');
//         const option = {};
//         const result = minify(file, option);

//         chunk.contents =
//           'from' in Buffer ? Buffer.from(result.code) : new Buffer(result.code);

//         this.push(chunk);

//         return callback();
//       }),
//     )
//     .pipe(dest('public'));
// });

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
