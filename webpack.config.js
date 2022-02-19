const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const dotenv = require('dotenv')

module.exports = (env) => {
    //환경변수를 통한 개발 상용 분리
    if(env.NODE_ENV === 'development'){
        dotenv.config({path: './dev.env'})
    }else if(env.NODE_ENV === 'production'){
        dotenv.config({path: './prod.env'})
    }

    const isDevelopment = process.env.NODE_ENV === "development";

    return {
        mode: isDevelopment ? "development" : "production",
        entry: {
            main :"./src/client.js",
        },

        devServer: {
            hot : true,
            port : "9000",
        },

        output: {
            path: isDevelopment ? path.resolve(__dirname, "buildDev") : path.resolve(__dirname, "build"), //required absolute path
            filename: "[name].bundle.js"
        },
        module: {
            //모듈 관련 설정
            rules: [
                // Babel 파일 로더 설정
                {
                    test: /\.m?js$/i,
                    exclude: /node_modules/,
                    use: {
                        loader:'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "public/template/index.ejs",

                // minify: true,

                meta: {
                    'description': 'To Do List'
                },

                //사용자 정의 옵션(index.ejs 파일에 넘겨줌)
                templateParameters: {
                    lang : "ko",
                    title : "To Do"
                }
            }),

            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: [
                    '**/*',
                    //clean build folder
                    isDevelopment ? path.resolve(__dirname, 'buildDev/**/*') : path.resolve(__dirname, 'build/**/*')
                ]
            })
        ]
    }
}