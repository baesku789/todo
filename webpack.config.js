const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
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

        devtool: isDevelopment && 'eval', //source map 생성

        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
            modules: [path.resolve(__dirname,'/src'), 'node_modules'],

            //절대 경로 설정
            alias: {
                "@Components" : path.resolve(__dirname, 'src/page/components')
            }
        },

        entry: {
            main :"./src/client.tsx",
        },

        devServer: {
            hot : true,
            port : "9000",
            historyApiFallback : true // 404 발생시 index.html 반환
        },

        output: {
            path: isDevelopment ? path.resolve(__dirname, "buildDev") : path.resolve(__dirname, "build"), //required absolute path
            filename: "[name].bundle.js",
            assetModuleFilename: "'images/[name][ext]"
        },
        module: {
            //모듈 관련 설정
            rules: [
                // Babel 파일 로더 설정
                {
                    test: /\.jsx?$/i,
                    exclude: /node_modules/,
                    use: {
                        loader:'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                    }
                },
                // TypeScript 로더 설정
                {
                    test: /\.tsx?$/i,
                    exclude: /node_modules/,
                    use: {
                        loader: "ts-loader",
                        options: {
                            //성능 향상
                            transpileOnly : true
                        }
                    }
                },
                // SCSS 파일 로더 설정
                {
                    test: /\.s[ac]ss$/i,
                    exclude: /node_modules/,
                    use: [
                        // Creates `style` nodes from JS strings
                        isDevelopment ? MiniCssExtractPlugin.loader : "style-loader",
                        // Translates CSS into CommonJS
                        {
                            loader: "css-loader",
                            options: {
                                modules :{
                                    //css module
                                    localIdentName: isDevelopment ? "[name]__[local]__[hash:base64:5]" : "[hash:base64]"
                                }
                            }
                        },
                        // Compiles Sass to CSS
                        "sass-loader",
                    ],
                },
                {
                    test:/\.png/,
                    type: "asset/resource"
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "public/template/index.ejs",

                minify: !isDevelopment && true,

                //정적인 값은 여기서 설정 나머지 ejs 파일로
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
                    path.resolve(__dirname, 'buildDev/**/*'),
                    path.resolve(__dirname, 'build/**/*')
                ]
            }),

            new MiniCssExtractPlugin(),
            new ForkTsCheckerWebpackPlugin({
                async : false,
                devServer : isDevelopment,
            })
        ],
    }
}