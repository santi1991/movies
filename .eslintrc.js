/* eslint-disable sonarjs/no-duplicate-string */
module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:import/warnings',
		'plugin:sonarjs/recommended',
		'@react-native-community/eslint-config',
		'eslint-config-prettier'
	],
	plugins: ['react', 'react-native', 'react-hooks', 'sonarjs'],
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		'react-native/react-native': true,
	},
	rules: {
		'prettier/prettier': 'off',
		'react-native/no-unused-styles': 'warn',
		'react-native/no-inline-styles': 'off',
		'react-native/no-raw-text': ['off', {  //warn
			skip: ['CustomText']
		}],
		'react-native/no-single-element-style-arrays': 'warn',
		'no-console': 'off',
		'no-unused-vars': 'warn',
		'no-debugger': 'warn',
		'no-var': 'error',
		'indent': ['error', 'tab', {
			'SwitchCase': 1,
			'ignoreComments': true,
			'ObjectExpression': 1,
			'ArrayExpression': 1
		}],
		'semi': ['warn', 'always'],
		'prefer-const': ['warn', {
			'destructuring': 'all'
		}],
		'comma-dangle': ['warn', {
			'arrays': 'only-multiline',
			'objects': 'only-multiline',
			'imports': 'only-multiline',
			'exports': 'only-multiline',
			'functions': 'never'
		}],
		'quotes': ['warn', 'single', { 'allowTemplateLiterals': true }],
		'no-duplicate-imports': 'error',
		'space-before-blocks': ['warn', 'always'],
		'array-bracket-spacing': ['warn', 'never'],
		'array-bracket-newline': ['warn', 'consistent'],
		'object-curly-spacing': ['warn', 'always'],
		'object-curly-newline': ['warn', { 'consistent': true }],
		'jsx-quotes': ['warn', 'prefer-single'],
		'max-len': ['warn', { 'code': 180 }],
		'brace-style': ['warn', 'stroustrup', { 'allowSingleLine': true }],
		'react/prop-types': 'off', // "warn" 
		'react/no-unused-prop-types': 'warn',
		'react/jsx-key': 'error',
		'react/jsx-equals-spacing': [2, 'never'],
		'react/no-direct-mutation-state': 'error',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'sonarjs/no-duplicate-string': 'warn',
		'sonarjs/cognitive-complexity': 'warn'
	},
};
