"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _document)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(6859);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "styled-components"
const external_styled_components_namespaceObject = require("styled-components");
// EXTERNAL MODULE: ./remotes.js
var remotes = __webpack_require__(5760);
;// CONCATENATED MODULE: ./pages/_document.tsx




// Module Federation

// import { getStaticUrlAsset } from '../src/common/getStaticUrlAsset';
// import { AdobeLaunchScript } from '../src/components/AdobeLaunchScript/AdobeLaunchScript';
class AppDocument extends next_document["default"] {
    static async getInitialProps(ctx) {
        const { renderPage  } = ctx;
        // Collect all styles on this page during SSR,
        // and inject them to the document's <head>
        const sheet = new external_styled_components_namespaceObject.ServerStyleSheet();
        const page = await renderPage((App)=>(props)=>sheet.collectStyles(/*#__PURE__*/ jsx_runtime_.jsx(App, {
                    ...props
                }))
        );
        const styles = sheet.getStyleElement();
        //TODO : Check this
        const initialProps = await next_document["default"].getInitialProps(ctx);
        return Promise.resolve({
            ...page,
            styles,
            ...initialProps
        });
    }
    render() {
        const timeStamp = Date.now();
        //TODO Check this
        const faviconUrl = '/images/favicon.ico'; //getStaticUrlAsset('/images/favicon.ico');
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Html, {
            lang: "en",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_document.Head, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: faviconUrl
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: Object.entries(remotes.remotePaths).map(([remote, config])=>/*#__PURE__*/ jsx_runtime_.jsx("script", {
                                    "data-webpack": remote,
                                    src: config.entry + `?${timeStamp}`
                                }, remote)
                            )
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.Main, {
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.NextScript, {
                        })
                    ]
                })
            ]
        }));
    }
}
/* harmony default export */ const _document = (AppDocument);


/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,859,760], () => (__webpack_exec__(391)));
module.exports = __webpack_exports__;

})();