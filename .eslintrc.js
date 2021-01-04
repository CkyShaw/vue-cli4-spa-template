module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-unused-vars': ['off', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
		'vue/no-unused-vars': 'off',
		'no-useless-escape': 'off',
		'no-undef': 'off'
	}
}
