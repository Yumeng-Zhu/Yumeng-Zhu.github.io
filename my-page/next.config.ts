/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/Yumeng-Zhu.github.io' : '',
  assetPrefix: isGithubPages ? '/Yumeng-Zhu.github.io' : '',
};

module.exports = nextConfig;
