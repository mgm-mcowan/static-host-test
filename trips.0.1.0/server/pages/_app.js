"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next-shared-logic"
var external_next_shared_logic_ = __webpack_require__(2587);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-dates/initialize"
const initialize_namespaceObject = require("react-dates/initialize");
;// CONCATENATED MODULE: external "react-ssr-prepass"
const external_react_ssr_prepass_namespaceObject = require("react-ssr-prepass");
var external_react_ssr_prepass_default = /*#__PURE__*/__webpack_require__.n(external_react_ssr_prepass_namespaceObject);
// EXTERNAL MODULE: ./remotes.js
var remotes = __webpack_require__(5760);
;// CONCATENATED MODULE: ./pages/_app.tsx







// import * as Sentry from '@sentry/react';
// import { Integrations } from '@sentry/tracing';


if (false) {}
// import { FontStyles } from '../src/common/theme/fonts';
// import { AppWrapper } from '../src/app/AppWrapper';
// import { PageProps } from '../src/next/PageProps';
// TODO: Test Sentry implementation for local and federated pages.
// if (process.env.SENTRY_DSN && process.env.APP_ENV) {
//   Sentry.init({
//     dsn: process.env.SENTRY_DSN,
//     environment: process.env.APP_ENV,
//     integrations: [new Integrations.BrowserTracing()],
//     tracesSampleRate: process.env.APP_ENV === 'prod' ? 0.05 : 0,
//   });
// }
// TODO : federating font syles fail. Fix this
// const FontStyles = federatedComponent('shell', './FontStyles');
const AppWrapper = (0,external_next_shared_logic_.federatedComponent)('shell', './AppWrapper');
const _app_remotes = Object.assign({
}, remotes.remotePaths);
function MyApp({ Component , pageProps , federatedComponentsCtx  }) {
    const federatedContext = (0,external_next_shared_logic_.getOrCreateFederatedComponentCtx)({
        remotes: _app_remotes
    }, federatedComponentsCtx);
    const { pageTitle , ...props } = pageProps;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_next_shared_logic_.federatedComponentsContext.Provider, {
        value: federatedContext,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: pageTitle || 'MGM Resorts | My Account'
                    }),
                    federatedContext.chunks.map((chunk)=>chunk.endsWith('.css') ? /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "stylesheet",
                            href: chunk
                        }, chunk) : null
                    )
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(AppWrapper, {
                ...props,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            }),
            federatedContext.chunks.map((chunk)=>chunk.endsWith('.js') ? /*#__PURE__*/ jsx_runtime_.jsx("script", {
                    "data-bull": "t",
                    async: true,
                    src: chunk
                }, chunk) : null
            )
        ]
    }));
}
MyApp.getInitialProps = async (appContext)=>{
    // Get Props and Federated Context for MFE
    const [appProps, federatedComponentsCtx] = await Promise.all([
        app["default"].getInitialProps(appContext),
        (0,external_next_shared_logic_.getOrCreateFederatedComponentCtx)({
            remotes: _app_remotes
        },  false ? 0 : null), 
    ]);
    const props = {
        ...appProps,
        federatedComponentsCtx
    };
    // SSR
    if (true) {
        external_react_ssr_prepass_default()(/*#__PURE__*/ jsx_runtime_.jsx(appContext.AppTree, {
            ...props
        }));
        await Promise.all(Array.from(federatedComponentsCtx.promises.values()));
    }
    // SSR
    if (true) {
        appContext.ctx.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');
    }
    return props;
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 2587:
/***/ ((module) => {

module.exports = require("next-shared-logic");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [544,760], () => (__webpack_exec__(1317)));
module.exports = __webpack_exports__;

})();