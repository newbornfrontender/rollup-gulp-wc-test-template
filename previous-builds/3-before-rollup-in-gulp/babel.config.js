module.exports = {
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
