const { override, fixBabelImports, addWebpackAlias, addLessLoader } = require('customize-cra');
// const rewireReactHotLoader = require('react-app-rewire-hot-loader');

const path = require('path');
module.exports = override(
    fixBabelImports("import", { libraryName: 'antd', libraryDirectory: 'es', style: true }),
    addWebpackAlias({ ['@']: path.resolve(__dirname, "./src")}),
    addLessLoader({
       javascriptEnabled: true,
       modifyVars: { '@primary-color': '#1f80ff' },
     }),
    (config, env) => {
    //  config = rewireReactHotLoader(config, env)
     if (env === 'production') {
        config.devtool = false;
      }
     return config
   },
);
