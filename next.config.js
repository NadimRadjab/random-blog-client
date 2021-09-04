const isProd = process.env.NODE_ENV === "production";
module.exports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : "",
};
