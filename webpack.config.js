const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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

        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss']
        },

        entry: {
            main :"./src/client.ts",
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
                    test: /\.jsx?$/i,
                    exclude: /node_modules/,
                    use: {
                        loader:'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react', "@babel/preset-typescript"]
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
                    use: [
                        // Creates `style` nodes from JS strings
                        isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader",
                    ],
                },
                // 모든 '.js' 출력 파일은 'source-map-loader'에서 다시 처리한 소스 맵이 있습니다.
                {
                    enforce: "pre",
                    test: /\.js$/,
                    loader: "source-map-loader"
                },
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
            }),

            new MiniCssExtractPlugin()
        ],

        // 경로가 다음 중 하나와 일치하는 모듈을 가져올 때,
        // 해당 전역 변수가 있다고 가정하고 사용합니다.
        // 브라우저가 빌드간에 라이브러리를 캐시 할 수 있도록
        // 모든 의존성을 묶지 않아도 되기 때문에 중요합니다.
        externals: {
            "react": "React",
            "react-dom": "ReactDOM"
        }
    }
}