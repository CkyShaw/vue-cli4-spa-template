module.exports = {
	presets: [
		[
			'@vue/cli-plugin-babel/preset',
			{
				useBuiltIns: 'entry'
			}
		]
	],
	plugins: [
		// import 暂时不支持本地按需引入
		/*[
			'import',
			{
				libraryName: 'ant-design-vue',
				libraryDirectory: 'es',
				style: true
			}
		],*/
		/*[
			'component',
			{
				libraryName: 'element-ui',
				styleLibraryName: 'theme-chalk'
			}
		],*/
		// iview 按需引入接入体积优化有问题
		/*[
			'import',
			{
				libraryName: 'view-design',
				libraryDirectory: 'src/components',
				style: false
			},
			'view-design'
		]*/
	]
}
