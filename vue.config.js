const path = require("path")

module.exports = {
    devServer: {
        proxy: {
            "/server": {//请求的路径     推荐
                target: "https://m.228.cn",//跨域要代理的地址
                changeOrigin: true
            }
        }
    },
    configureWebpack: {//值为一个 对象 作用：合并 
        resolve: {
            alias: {
                "@": path.join(__dirname, "./src"),//用@代替 了 ./src
                "@assets": path.join(__dirname, "./src/assets"),
                "@api": path.join(__dirname, "./src/api"),
                "@common": path.join(__dirname, "./src/common"),
                "@components": path.join(__dirname, "./src/components"),
                "@pages": path.join(__dirname, "./src/pages"),
                "@router": path.join(__dirname, "./src/router"),
                "@store": path.join(__dirname, "./src/store"),
                "@utils": path.join(__dirname, "./src/utils"),
            }
        }
    }
}