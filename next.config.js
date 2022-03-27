/** @type {import('next').NextConfig} */

const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");

module.exports = withCss(withPurgeCss());

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

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  return {
    props: {},
  }
}