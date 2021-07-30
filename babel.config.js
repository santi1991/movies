const presets = [
	'module:metro-react-native-babel-preset',
];

const plugins = [
	[
		'module:react-native-dotenv', {
			'moduleName': '@env',
			'path': '.env',
			'blocklist': null,
			'allowlist': null,
			'safe': false,
			'allowUndefined': false,
			'verbose': false
		}
	]
];

// module.exports = function (api) {
//   // presets: ['module:metro-react-native-babel-preset'],
// 	api.cache(true);
// 	return {
// 		presets,
// 		plugins
// 	};
// };

// --> works
// module.exports = {
// 	presets: ['module:metro-react-native-babel-preset'],
// 	plugins: [
// 		['module:react-native-dotenv', {
// 			'moduleName': '@env',
// 			'path': '.env',
// 			'blacklist': null,
// 			'whitelist': null,
// 			'safe': true,
// 			'allowUndefined': true
// 		}]
// 	]
// };
module.exports = {
	presets,
	plugins
};

