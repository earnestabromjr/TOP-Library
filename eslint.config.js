module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: ["eslint:recommended"],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: "module",
	},
	plugins: [],
	rules: {
		"no-console": "off",
		"no-debugger": "off",
		"no-unused-vars": "warn",
		"no-undef": "error",
	},
};
