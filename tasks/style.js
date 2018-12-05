import postcss from 'postcss';
import postcssLoadConfig from 'postcss-load-config';
import { readFileSync, writeFile } from 'fs';

const filename = 'index.css';

const paths = {
  from: `src/${filename}`,
  to: `public/${filename}`,
};

const ctx = {
  env: process.env.NODE_ENV,
};

export const STYLE = () =>
  postcssLoadConfig(ctx).then(({ plugins }) =>
    postcss(plugins)
      .process(readFileSync(paths.from), { from: paths.from, to: paths.to })
      .then(({ css }) => writeFile(paths.to, css, () => true)),
  );
