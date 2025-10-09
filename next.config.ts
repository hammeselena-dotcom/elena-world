/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export",
  basePath: isProd ? "/elena-world" : "",
  assetPrefix: isProd ? "/elena-world/" : "",
  images: { unoptimized: true },
  trailingSlash: true,
};
