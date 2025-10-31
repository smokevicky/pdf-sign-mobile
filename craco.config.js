// craco.config.js
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@atoms': path.resolve(__dirname, 'src/components/atoms/index.ts'),
      '@molecules': path.resolve(__dirname, 'src/components/molecules/index.ts'),
      '@pages': path.resolve(__dirname, 'src/components/pages/index.ts'),
      '@store': path.resolve(__dirname, 'src/store/index.ts'),
    },
  },
};
