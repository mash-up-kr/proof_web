/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["hooks", "design-system"]);

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withTM(nextConfig)


