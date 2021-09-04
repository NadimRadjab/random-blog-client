const isProd = process.env.NODE_ENV === "production";
module.exports = {
  basePath: "/random-blog-client",
  assetPrefix: isProd ? "/random-blog-client" : "",
};
