"use strict";
exports.id = 760;
exports.ids = [760];
exports.modules = {

/***/ 5760:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const defaultBasePath = '/account';
const SHELL_PATH = `http://localhost:3000${defaultBasePath}`;
const TRIPS_PATH = `http://localhost:3002${defaultBasePath}`;
const ACCOUNTS_PATH = `${defaultBasePath}`;
const { name  } = __webpack_require__(4147);
const remotes = {
    shell: 'shell',
    trips: 'trips',
    accounts: 'accounts'
};
const exposes = {
    // TODO: for POC , we make pages available in shell app dont federate the page, due to limitation with SSG
    //  './:propertySlug/accounts': './pages/[propertySlug]/accounts',
    './pages-map': './pages-map.ts',
    './TestComp': './src/components/TestComp.tsx',
    // Analytics
    './Wallet': './src/components/Wallet.tsx',
    // Migration - Pages
    './Dashboard': './src/components/Dashboard/Dashboard.tsx',
    './Rewards': './src/components/MlifeRewards/MlifeRewards.tsx',
    './WinLoss': './src/components/WinLossStatement/WinLossStatement.tsx',
    './Profile': './src/components/Profile/Profile.tsx',
    './Preferences': './src/components/Preferences/Preferences.tsx',
    // Migration - Components
    './PerpetualOffer': './src/components/PerpetualOffer/PerpetualOffer.tsx'
};
// Either this or the remotes object can be used. Difference TBD.
const remoteInjects = {
    shell: `shell@${SHELL_PATH}/_next/static/chunks/remoteEntry.js?${Date.now()}`,
    trips: `trips@${TRIPS_PATH}/_next/static/chunks/remoteEntry.js?${Date.now()}`,
    accounts: `accounts@${ACCOUNTS_PATH}/_next/static/chunks/remoteEntry.js?${Date.now()}`
};
const remotePaths = {
    shell: {
        apiPath: `${SHELL_PATH}/api`,
        entry: `${SHELL_PATH}/_next/static/chunks/remoteEntry.js`,
        prerender: `${SHELL_PATH}/api/federated-prerender`,
        publicPath: `${SHELL_PATH}/_next/`
    },
    accounts: {
        apiPath: `${ACCOUNTS_PATH}/api`,
        entry: `${ACCOUNTS_PATH}/_next/static/chunks/remoteEntry.js`,
        prerender: `${ACCOUNTS_PATH}/api/federated-prerender`,
        publicPath: `${ACCOUNTS_PATH}/_next/`
    },
    trips: {
        apiPath: `${TRIPS_PATH}/api`,
        entry: `${TRIPS_PATH}/_next/static/chunks/remoteEntry.js`,
        prerender: `${TRIPS_PATH}/api/federated-prerender`,
        publicPath: `${TRIPS_PATH}/_next/`
    }
};
module.exports = {
    name,
    remotes,
    defaultBasePath,
    exposes,
    remoteInjects,
    remotePaths
};


/***/ }),

/***/ 4147:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"accounts","private":true,"version":"0.1.0","scripts":{"dev":"next dev -p 3001","build":"next build","start":"next start -p 3001","lint":"next lint","version":"node version.js","build:version":"next build && npm run version"},"dependencies":{"@apollo/client":"^3.2.0","@graphql-codegen/cli":"1.15.0","@mgmresorts/mgm-auth-js-sdk":"2.5.7","@mgmresorts/wcl-core":"1.23.3","@mgmresorts/wcl-styled":"1.9.0","@mgmresorts/wcl-utils":"1.5.1","@mgmresorts/web-analytics":"1.0.2","@sentry/react":"^6.13.3","@sentry/tracing":"6.13.3","apollo-link-error":"^1.1.13","apollo-link-rest":"^0.8.0-beta.0","apollo-link-retry":"^2.2.16","fetch-ponyfill":"7.1.0","fs-extra":"10.0.0","graphql":"^15.3.0","graphql-anywhere":"^4.2.7","graphql-tag":"^2.11.0","js-cookie":"^2.2.1","lodash":"4.17.21","luxon":"2.1.1","next":"12.0.4","next-shared-logic":"file:../shared/","prop-types":"^15.7.2","query-string":"7.0.1","react":"17.0.2","react-dates":"21.8.0","react-dom":"17.0.2","react-ssr-prepass":"1.4.0","react-tabs":"^3.2.3","react-to-print":"2.14.2","styled-components":"5.3.3","uuid":"8.3.2"},"devDependencies":{"@graphql-codegen/cli":"1.15.0","@graphql-codegen/fragment-matcher":"2.0.1","@graphql-codegen/introspection":"1.18.2","@graphql-codegen/typed-document-node":"1.18.9","@graphql-codegen/typescript-graphql-files-modules":"1.18.1","@graphql-codegen/typescript-operations":"1.18.3","@graphql-codegen/typescript-resolvers":"1.19.5","@graphql-typed-document-node/core":"3.1.0","@mgmresorts/eslint-config":"2.2.0","@module-federation/nextjs-mf":"3.2.0","@next/eslint-plugin-next":"12.0.4","@storybook/react":"^6.2.1","@testing-library/react":"^10.0.1","@types/enzyme":"3.10.10","@types/graphql":"^14.5.0","@types/jest":"^25.1.4","@types/js-cookie":"3.0.1","@types/lodash":"4.14.177","@types/luxon":"^2.0.7","@types/node":"16.11.10","@types/react":"17.0.37","@types/react-dates":"21.8.3","@types/react-tabs":"2.3.3","@types/styled-components":"5.1.16","@types/uuid":"8.3.3","@typescript-eslint/eslint-plugin":"^2.25.0","@typescript-eslint/parser":"^2.25.0","enzyme":"^3.11.0","enzyme-adapter-react-16":"^1.15.3","eslint":"7","eslint-config-airbnb-typescript":"^9.0.0","eslint-config-next":"12.0.4","eslint-config-prettier":"^6.10.1","eslint-import-resolver-typescript":"^2.3.0","eslint-plugin-cypress":"^2.11.1","eslint-plugin-eslint-comments":"^3.2.0","eslint-plugin-filenames":"^1.3.2","eslint-plugin-import":"^2.22.0","eslint-plugin-jest":"^23.20.0","eslint-plugin-jsx-a11y":"^6.4.1","eslint-plugin-promise":"^4.2.1","eslint-plugin-react":"^7.19.0","eslint-plugin-react-hooks":"^4.1.0","eslint-plugin-unicorn":"^21.0.0","eslint-plugin-unused-imports":"^0.1.3","jest":"^25.2.3","next-compose-plugins":"2.2.1","typescript":"4.5.2","webpack":"5.64.4","webpack-federated-stats-plugin":"2.0.8","webpack-merge":"5.8.0"}}');

/***/ })

};
;