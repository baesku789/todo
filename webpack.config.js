const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const dotenv = require('dotenv')

//환경변수 세팅
dotenv.config({path: './.env'})

module.exports = {
    entry: {
        main :"./src/client.js",
    },

    devServer: {
        hot : true,
        port : "9000",
    },

    output: {
        path: path.resolve(__dirname, "build"), //required absolute path
        filename: "[name].bundle.js"
    },
    module: {
        //모듈 관련 설정
        rules: [
            //모듈 설정 규칙 (로더설정, 파서옵션 등)
            {

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
                path.resolve(__dirname, 'build/**/*')
            ]
        })
    ]
}