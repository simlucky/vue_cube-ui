var path = require('path');
module.exports = {
    // 根路径
    publicPath: './',

    outputDir: '../dist',
    assetsDir: 'assets',

    // 是否eslint保存检测，有效值 false||true||'error'
    lintOnSave: false,

    devServer: {
		open: true,
		port: 8023,
		https: false,
		hotOnly: false,
	},

    configureWebpack: config => {
		if (process.env.NODE_ENV === 'production') {
			// 为生产环境修改配置...
		} else {
			// 为开发环境修改配置...
		}
		Object.assign(config, {
			resolve: {
				alias: {
					'vue$': 'vue/dist/vue.esm.js',
					'@': path.resolve('src'),
					'assets': path.resolve('src/assets'),
					'components': path.resolve('src/components'),
					'api': path.resolve('src/api'),
					'utils': path.resolve('src/utils'),
					'store': path.resolve('src/store'),
					'router': path.resolve('src/router')
				}
			}
		})
	},

    //取消生成map文件
    productionSourceMap: false,

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': [
            './src/theme'
          ]
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: true
      }
    }
}
