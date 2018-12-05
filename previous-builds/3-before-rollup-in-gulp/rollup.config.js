import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: 'lib/my-app.js',
  output: {
    format: 'es',
    dir: 'public',
  },
  plugins: [nodeResolve()],
  experimentalCodeSplitting: true,
};
