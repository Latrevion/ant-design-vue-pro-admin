const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        bypass: function (req, res) {
          if (req.headers.accept.indexOf("html") !== -1) {
            console.log("Skipping proxy for browser request.");
            return "/index.html";
          } else if (process.env.MOCk !== "none") {
            const name = req.path.split("/api/")[1].split("/").join("_");
            const mock = require(`./mock/${name}`);
            const result = mock(req.method);
            //清理缓存
            delete require.cache[require.resolve(`./mock/${name}`)];
            return res.send(result);
          }
        },
      },
    },
  },
});
