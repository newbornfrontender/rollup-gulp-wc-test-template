import { rollup } from 'rollup';
import nodeResolve from 'rollup-plugin-node-resolve';

export const BUNDLE = async () => {
  const bundle = await rollup({
    input: 'lib/index.js',
    plugins: [nodeResolve()],
    experimentalCodeSplitting: true,
  });

  await bundle.write({
    format: 'es',
    dir: 'public',
  });
};
