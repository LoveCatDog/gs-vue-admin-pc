const path = require('path')

function resolve(dir) {
    return path.join(__dirname, './', dir)
}

module.exports = {
    chainWebpack: config => {
        config.plugin('define').tap(args => {
            const argv = process.argv
            const icourt = argv[argv.indexOf('--icourt-mode') + 1]

            args[0]['process.env'].MODE = `"${icourt}"`

            return args
        })
        // svg rule loader
        const svgRule = config.module.rule('svg') // 找到svg-loader
        svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
        svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
        svgRule // 添加svg新的loader处理
            .test(/\.svg$/)
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]',
            })

        // 修改images loader 添加svg处理
        const imagesRule = config.module.rule('images')
        imagesRule.exclude.add(resolve('src/icons'))
        config.module
            .rule('images')
            .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
    },
    configureWebpack: {
        devServer: {
            open: process.platform === 'darwin', //serve启动是否自动打开浏览器 后面代表：标识node.js 进程运行其上的操作系统平台
            host: '0.0.0.0', //代表本地ip及localhost
            port: 8080, //监听请求的端口号
            https: false, //是否采用https访问  默认http
            hotOnly: false, //是否启用模块热替换
            proxy: { //设置代理
                '/api': {
                    //http://jsonplaceholder.typicode.com
                    //
                    target: 'http://47.106.148.93:8106',
                    secure: false //如果采用https
                }
            },
            before: app => {}
        },
    },
}