/** @type {import('next').NextConfig} */

const withImages = require("next-images");
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = withImages({
  esModule: true,
});


const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}