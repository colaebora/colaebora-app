const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Remove existing rules about SVG and inject our own
  config.module.rules = config.module.rules.map((rule) => {
    if (rule.oneOf) {
      let hasModified = false;

      const newRule = {
        ...rule,
        oneOf: rule.oneOf.map((oneOfRule) => {
          if (oneOfRule.test && oneOfRule.test.toString().includes('svg')) {
            hasModified = true;
            const test = oneOfRule.test.toString().replace('|svg', '');
            return { ...oneOfRule, test: new RegExp(test) };
          }
          return oneOfRule;
        }),
      };

      // Add new rule to use svgr
      // Place at the beginning so that the default loader doesn't catch it
      if (hasModified) {
        newRule.oneOf.unshift({
          test: /\.svg$/,
          exclude: /node_modules/,
          use: [
            {
              loader: '@svgr/webpack',
            },
          ],
        });
      }

      return newRule;
    }
    return rule;
  });

  // TODO find a cleaner solution that does not depend on the
  // deprecated react-google-maps (write an equivalent for @react-google-maps/api?)
  config.resolve.alias['react-native-maps'] = 'react-native-web-maps';

  return config;
};
