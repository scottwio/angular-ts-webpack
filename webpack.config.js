module.exports = {
	resolve: {
		extensions: ['', '.webpack.js', '.web.js', '.ts',  '.js']
	},
	entry: {
		libs: [
			'angular/angular.js',
			'angular-ui-router/release/angular-ui-router.js'
		],
		app: [
			'./public/app/app.ts'
		]
	},
	devServer: {
    contentBase: "./public"
  },
	devtool: 'sourcemap',
	output: {
		path: 'public/',
		filename: '[name].js',
		sourceMapFilename: '[name].js.map',
		chunkFilename: '[id].chunk.js'
	},
	module: {
		loaders: [
			{ test: /\.ts$/, loader: 'awesome-typescript-loader' },
			{ test: /\.html$/, loader: 'raw' },
			{ test: /\.css$/, loader: 'style!css' }
		]
	}
};