"use strict";
(() => {
var exports = {};
exports.id = 172;
exports.ids = [172];
exports.modules = {

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 6576:
/***/ ((module) => {

module.exports = require("@mgmresorts/mgm-auth-js-sdk");

/***/ }),

/***/ 1771:
/***/ ((module) => {

module.exports = require("@mgmresorts/wcl-core");

/***/ }),

/***/ 3294:
/***/ ((module) => {

module.exports = require("@mgmresorts/wcl-styled");

/***/ }),

/***/ 4753:
/***/ ((module) => {

module.exports = require("@mgmresorts/wcl-utils");

/***/ }),

/***/ 9844:
/***/ ((module) => {

module.exports = require("@mgmresorts/web-analytics");

/***/ }),

/***/ 825:
/***/ ((module) => {

module.exports = require("graphql-tag");

/***/ }),

/***/ 2587:
/***/ ((module) => {

module.exports = require("next-shared-logic");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 53:
/***/ ((module) => {

module.exports = require("react-to-print");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ nextFederatedPrerender)
});

;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-dom/server"
const server_namespaceObject = require("react-dom/server");
;// CONCATENATED MODULE: ./__federated-prerender.js



const requestMap = {
    ["./pages-map"]: ()=>__webpack_require__.e(/* import() */ 869).then(__webpack_require__.bind(__webpack_require__, 2869))
    ,
    ["./TestComp"]: ()=>__webpack_require__.e(/* import() */ 280).then(__webpack_require__.bind(__webpack_require__, 2280))
    ,
    ["./Wallet"]: ()=>__webpack_require__.e(/* import() */ 677).then(__webpack_require__.bind(__webpack_require__, 7677))
    ,
    ["./Dashboard"]: ()=>Promise.all(/* import() */[__webpack_require__.e(474), __webpack_require__.e(877), __webpack_require__.e(814)]).then(__webpack_require__.bind(__webpack_require__, 7814))
    ,
    ["./Rewards"]: ()=>Promise.all(/* import() */[__webpack_require__.e(474), __webpack_require__.e(877), __webpack_require__.e(326)]).then(__webpack_require__.bind(__webpack_require__, 6326))
    ,
    ["./WinLoss"]: ()=>__webpack_require__.e(/* import() */ 109).then(__webpack_require__.bind(__webpack_require__, 3109))
    ,
    ["./Profile"]: ()=>Promise.all(/* import() */[__webpack_require__.e(474), __webpack_require__.e(132)]).then(__webpack_require__.bind(__webpack_require__, 7132))
    ,
    ["./Preferences"]: ()=>Promise.all(/* import() */[__webpack_require__.e(474), __webpack_require__.e(984)]).then(__webpack_require__.bind(__webpack_require__, 4984))
    ,
    ["./PerpetualOffer"]: ()=>__webpack_require__.e(/* import() */ 775).then(__webpack_require__.bind(__webpack_require__, 9775))
};
const exposes = ({
    "sharedModules": [],
    "federatedModules": [
        {
            "remote": "accounts",
            "entry": "static/chunks/remoteEntry.js",
            "sharedModules": [
                {
                    "chunks": [
                        "static/chunks/163.6da94071da02625f-fed.js"
                    ],
                    "provides": [
                        {
                            "shareScope": "default",
                            "shareKey": "next/router",
                            "requiredVersion": "false",
                            "strictVersion": false,
                            "singleton": true,
                            "eager": false
                        }
                    ]
                },
                {
                    "chunks": [
                        "static/chunks/210.70141cf71a2db308-fed.js"
                    ],
                    "provides": [
                        {
                            "shareScope": "default",
                            "shareKey": "@mgmresorts/mgm-auth-js-sdk",
                            "requiredVersion": "=2.5.7",
                            "strictVersion": false,
                            "singleton": true,
                            "eager": false
                        }
                    ]
                },
                {
                    "chunks": [
                        "static/chunks/380.426127ee0416a75b-fed.js"
                    ],
                    "provides": [
                        {
                            "shareScope": "default",
                            "shareKey": "next-shared-logic",
                            "requiredVersion": "=file:../shared/",
                            "strictVersion": false,
                            "singleton": true,
                            "eager": false
                        }
                    ]
                },
                {
                    "chunks": [
                        "static/chunks/647.48676b79c724908c-fed.js"
                    ],
                    "provides": [
                        {
                            "shareScope": "default",
                            "shareKey": "@mgmresorts/wcl-utils",
                            "requiredVersion": "=1.5.1",
                            "strictVersion": false,
                            "singleton": true,
                            "eager": false
                        }
                    ]
                },
                {
                    "chunks": [
                        "static/chunks/694.34da273815293cd6-fed.js"
                    ],
                    "provides": [
                        {
                            "shareScope": "default",
                            "shareKey": "@mgmresorts/wcl-styled",
                            "requiredVersion": "=1.9.0",
                            "strictVersion": false,
                            "singleton": true,
                            "eager": false
                        }
                    ]
                },
                {
                    "chunks": [
                        "static/chunks/885.d85285e0095ae40a-fed.js"
                    ],
                    "provides": [
                        {
                            "shareScope": "default",
                            "shareKey": "@mgmresorts/wcl-core",
                            "requiredVersion": "=1.23.3",
                            "strictVersion": false,
                            "singleton": true,
                            "eager": false
                        }
                    ]
                },
                {
                    "chunks": [
                        "static/chunks/935.b1605ea9a80deacf-fed.js"
                    ],
                    "provides": [
                        {
                            "shareScope": "default",
                            "shareKey": "react-dom",
                            "requiredVersion": "false",
                            "strictVersion": false,
                            "singleton": true,
                            "eager": false
                        }
                    ]
                }
            ],
            "exposes": {
                "./pages-map": [
                    {
                        "chunks": [
                            "static/chunks/111.894f02e2fd608fad-fed.js"
                        ],
                        "sharedModules": []
                    }
                ],
                "./TestComp": [
                    {
                        "chunks": [
                            "static/chunks/188.897046d71f308752-fed.js"
                        ],
                        "sharedModules": []
                    }
                ],
                "./Wallet": [
                    {
                        "chunks": [
                            "static/chunks/349.5c3aa2e6d82b2f3a-fed.js"
                        ],
                        "sharedModules": []
                    }
                ],
                "./Dashboard": [
                    {
                        "chunks": [
                            "static/chunks/13.99ba9e27bb0accd4-fed.js"
                        ],
                        "sharedModules": [
                            {
                                "chunks": [
                                    "static/chunks/68.a2037de46e66e09b-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/163.6da94071da02625f-fed.js"
                                ],
                                "provides": [
                                    {
                                        "shareScope": "default",
                                        "shareKey": "next/router",
                                        "requiredVersion": "false",
                                        "strictVersion": false,
                                        "singleton": true,
                                        "eager": false
                                    }
                                ]
                            },
                            {
                                "chunks": [
                                    "static/chunks/380.426127ee0416a75b-fed.js"
                                ],
                                "provides": [
                                    {
                                        "shareScope": "default",
                                        "shareKey": "next-shared-logic",
                                        "requiredVersion": "=file:../shared/",
                                        "strictVersion": false,
                                        "singleton": true,
                                        "eager": false
                                    }
                                ]
                            },
                            {
                                "chunks": [
                                    "static/chunks/520.b0125503fbef15a7-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/647.48676b79c724908c-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/694.34da273815293cd6-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/885.d85285e0095ae40a-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/68.a2037de46e66e09b-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/163.6da94071da02625f-fed.js"
                                ],
                                "provides": [
                                    {
                                        "shareScope": "default",
                                        "shareKey": "next/router",
                                        "requiredVersion": "false",
                                        "strictVersion": false,
                                        "singleton": true,
                                        "eager": false
                                    }
                                ]
                            },
                            {
                                "chunks": [
                                    "static/chunks/380.426127ee0416a75b-fed.js"
                                ],
                                "provides": [
                                    {
                                        "shareScope": "default",
                                        "shareKey": "next-shared-logic",
                                        "requiredVersion": "=file:../shared/",
                                        "strictVersion": false,
                                        "singleton": true,
                                        "eager": false
                                    }
                                ]
                            },
                            {
                                "chunks": [
                                    "static/chunks/520.b0125503fbef15a7-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/647.48676b79c724908c-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/694.34da273815293cd6-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/885.d85285e0095ae40a-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/68.a2037de46e66e09b-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/163.6da94071da02625f-fed.js"
                                ],
                                "provides": [
                                    {
                                        "shareScope": "default",
                                        "shareKey": "next/router",
                                        "requiredVersion": "false",
                                        "strictVersion": false,
                                        "singleton": true,
                                        "eager": false
                                    }
                                ]
                            },
                            {
                                "chunks": [
                                    "static/chunks/380.426127ee0416a75b-fed.js"
                                ],
                                "provides": [
                                    {
                                        "shareScope": "default",
                                        "shareKey": "next-shared-logic",
                                        "requiredVersion": "=file:../shared/",
                                        "strictVersion": false,
                                        "singleton": true,
                                        "eager": false
                                    }
                                ]
                            },
                            {
                                "chunks": [
                                    "static/chunks/520.b0125503fbef15a7-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/647.48676b79c724908c-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/694.34da273815293cd6-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/885.d85285e0095ae40a-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/68.a2037de46e66e09b-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/163.6da94071da02625f-fed.js"
                                ],
                                "provides": [
                                    {
                                        "shareScope": "default",
                                        "shareKey": "next/router",
                                        "requiredVersion": "false",
                                        "strictVersion": false,
                                        "singleton": true,
                                        "eager": false
                                    }
                                ]
                            },
                            {
                                "chunks": [
                                    "static/chunks/380.426127ee0416a75b-fed.js"
                                ],
                                "provides": [
                                    {
                                        "shareScope": "default",
                                        "shareKey": "next-shared-logic",
                                        "requiredVersion": "=file:../shared/",
                                        "strictVersion": false,
                                        "singleton": true,
                                        "eager": false
                                    }
                                ]
                            },
                            {
                                "chunks": [
                                    "static/chunks/520.b0125503fbef15a7-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/647.48676b79c724908c-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/694.34da273815293cd6-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/885.d85285e0095ae40a-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/68.a2037de46e66e09b-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/163.6da94071da02625f-fed.js"
                                ],
                                "provides": [
                                    {
                                        "shareScope": "default",
                                        "shareKey": "next/router",
                                        "requiredVersion": "false",
                                        "strictVersion": false,
                                        "singleton": true,
                                        "eager": false
                                    }
                                ]
                            },
                            {
                                "chunks": [
                                    "static/chunks/380.426127ee0416a75b-fed.js"
                                ],
                                "provides": [
                                    {
                                        "shareScope": "default",
                                        "shareKey": "next-shared-logic",
                                        "requiredVersion": "=file:../shared/",
                                        "strictVersion": false,
                                        "singleton": true,
                                        "eager": false
                                    }
                                ]
                            },
                            {
                                "chunks": [
                                    "static/chunks/520.b0125503fbef15a7-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/647.48676b79c724908c-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/694.34da273815293cd6-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/885.d85285e0095ae40a-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/68.a2037de46e66e09b-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/163.6da94071da02625f-fed.js"
                                ],
                                "provides": [
                                    {
                                        "shareScope": "default",
                                        "shareKey": "next/router",
                                        "requiredVersion": "false",
                                        "strictVersion": false,
                                        "singleton": true,
                                        "eager": false
                                    }
                                ]
                            },
                            {
                                "chunks": [
                                    "static/chunks/380.426127ee0416a75b-fed.js"
                                ],
                                "provides": [
                                    {
                                        "shareScope": "default",
                                        "shareKey": "next-shared-logic",
                                        "requiredVersion": "=file:../shared/",
                                        "strictVersion": false,
                                        "singleton": true,
                                        "eager": false
                                    }
                                ]
                            },
                            {
                                "chunks": [
                                    "static/chunks/520.b0125503fbef15a7-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/647.48676b79c724908c-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/694.34da273815293cd6-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/885.d85285e0095ae40a-fed.js"
                                ],
                                "provides": []
                            }
                        ]
                    }
                ],
                "./Rewards": [
                    {
                        "chunks": [
                            "static/chunks/425.bebd98098054773d-fed.js"
                        ],
                        "sharedModules": [
                            {
                                "chunks": [
                                    "static/chunks/68.a2037de46e66e09b-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/163.6da94071da02625f-fed.js"
                                ],
                                "provides": [
                                    {
                                        "shareScope": "default",
                                        "shareKey": "next/router",
                                        "requiredVersion": "false",
                                        "strictVersion": false,
                                        "singleton": true,
                                        "eager": false
                                    }
                                ]
                            },
                            {
                                "chunks": [
                                    "static/chunks/520.b0125503fbef15a7-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/647.48676b79c724908c-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/694.34da273815293cd6-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/885.d85285e0095ae40a-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/68.a2037de46e66e09b-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/163.6da94071da02625f-fed.js"
                                ],
                                "provides": [
                                    {
                                        "shareScope": "default",
                                        "shareKey": "next/router",
                                        "requiredVersion": "false",
                                        "strictVersion": false,
                                        "singleton": true,
                                        "eager": false
                                    }
                                ]
                            },
                            {
                                "chunks": [
                                    "static/chunks/520.b0125503fbef15a7-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/647.48676b79c724908c-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/694.34da273815293cd6-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/885.d85285e0095ae40a-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/68.a2037de46e66e09b-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/163.6da94071da02625f-fed.js"
                                ],
                                "provides": [
                                    {
                                        "shareScope": "default",
                                        "shareKey": "next/router",
                                        "requiredVersion": "false",
                                        "strictVersion": false,
                                        "singleton": true,
                                        "eager": false
                                    }
                                ]
                            },
                            {
                                "chunks": [
                                    "static/chunks/520.b0125503fbef15a7-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/647.48676b79c724908c-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/694.34da273815293cd6-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/885.d85285e0095ae40a-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/68.a2037de46e66e09b-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/163.6da94071da02625f-fed.js"
                                ],
                                "provides": [
                                    {
                                        "shareScope": "default",
                                        "shareKey": "next/router",
                                        "requiredVersion": "false",
                                        "strictVersion": false,
                                        "singleton": true,
                                        "eager": false
                                    }
                                ]
                            },
                            {
                                "chunks": [
                                    "static/chunks/520.b0125503fbef15a7-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/647.48676b79c724908c-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/694.34da273815293cd6-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/885.d85285e0095ae40a-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/68.a2037de46e66e09b-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/163.6da94071da02625f-fed.js"
                                ],
                                "provides": [
                                    {
                                        "shareScope": "default",
                                        "shareKey": "next/router",
                                        "requiredVersion": "false",
                                        "strictVersion": false,
                                        "singleton": true,
                                        "eager": false
                                    }
                                ]
                            },
                            {
                                "chunks": [
                                    "static/chunks/520.b0125503fbef15a7-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/647.48676b79c724908c-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/694.34da273815293cd6-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/885.d85285e0095ae40a-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/68.a2037de46e66e09b-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/163.6da94071da02625f-fed.js"
                                ],
                                "provides": [
                                    {
                                        "shareScope": "default",
                                        "shareKey": "next/router",
                                        "requiredVersion": "false",
                                        "strictVersion": false,
                                        "singleton": true,
                                        "eager": false
                                    }
                                ]
                            },
                            {
                                "chunks": [
                                    "static/chunks/520.b0125503fbef15a7-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/647.48676b79c724908c-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/694.34da273815293cd6-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/885.d85285e0095ae40a-fed.js"
                                ],
                                "provides": []
                            }
                        ]
                    }
                ],
                "./WinLoss": [
                    {
                        "chunks": [
                            "static/chunks/316.0ecb909bce40fbe4-fed.js"
                        ],
                        "sharedModules": [
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/647.48676b79c724908c-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/694.34da273815293cd6-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/885.d85285e0095ae40a-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/935.b1605ea9a80deacf-fed.js"
                                ],
                                "provides": [
                                    {
                                        "shareScope": "default",
                                        "shareKey": "react-dom",
                                        "requiredVersion": "false",
                                        "strictVersion": false,
                                        "singleton": true,
                                        "eager": false
                                    }
                                ]
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/647.48676b79c724908c-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/694.34da273815293cd6-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/885.d85285e0095ae40a-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/935.b1605ea9a80deacf-fed.js"
                                ],
                                "provides": [
                                    {
                                        "shareScope": "default",
                                        "shareKey": "react-dom",
                                        "requiredVersion": "false",
                                        "strictVersion": false,
                                        "singleton": true,
                                        "eager": false
                                    }
                                ]
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/647.48676b79c724908c-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/694.34da273815293cd6-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/885.d85285e0095ae40a-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/935.b1605ea9a80deacf-fed.js"
                                ],
                                "provides": [
                                    {
                                        "shareScope": "default",
                                        "shareKey": "react-dom",
                                        "requiredVersion": "false",
                                        "strictVersion": false,
                                        "singleton": true,
                                        "eager": false
                                    }
                                ]
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/647.48676b79c724908c-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/694.34da273815293cd6-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/885.d85285e0095ae40a-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/935.b1605ea9a80deacf-fed.js"
                                ],
                                "provides": [
                                    {
                                        "shareScope": "default",
                                        "shareKey": "react-dom",
                                        "requiredVersion": "false",
                                        "strictVersion": false,
                                        "singleton": true,
                                        "eager": false
                                    }
                                ]
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/647.48676b79c724908c-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/694.34da273815293cd6-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/885.d85285e0095ae40a-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/935.b1605ea9a80deacf-fed.js"
                                ],
                                "provides": [
                                    {
                                        "shareScope": "default",
                                        "shareKey": "react-dom",
                                        "requiredVersion": "false",
                                        "strictVersion": false,
                                        "singleton": true,
                                        "eager": false
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "./Profile": [
                    {
                        "chunks": [
                            "static/chunks/55.f9f35754de03756c-fed.js"
                        ],
                        "sharedModules": [
                            {
                                "chunks": [
                                    "static/chunks/210.70141cf71a2db308-fed.js"
                                ],
                                "provides": [
                                    {
                                        "shareScope": "default",
                                        "shareKey": "@mgmresorts/mgm-auth-js-sdk",
                                        "requiredVersion": "=2.5.7",
                                        "strictVersion": false,
                                        "singleton": true,
                                        "eager": false
                                    }
                                ]
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/694.34da273815293cd6-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/885.d85285e0095ae40a-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/210.70141cf71a2db308-fed.js"
                                ],
                                "provides": [
                                    {
                                        "shareScope": "default",
                                        "shareKey": "@mgmresorts/mgm-auth-js-sdk",
                                        "requiredVersion": "=2.5.7",
                                        "strictVersion": false,
                                        "singleton": true,
                                        "eager": false
                                    }
                                ]
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/694.34da273815293cd6-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/885.d85285e0095ae40a-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/210.70141cf71a2db308-fed.js"
                                ],
                                "provides": [
                                    {
                                        "shareScope": "default",
                                        "shareKey": "@mgmresorts/mgm-auth-js-sdk",
                                        "requiredVersion": "=2.5.7",
                                        "strictVersion": false,
                                        "singleton": true,
                                        "eager": false
                                    }
                                ]
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/694.34da273815293cd6-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/885.d85285e0095ae40a-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/210.70141cf71a2db308-fed.js"
                                ],
                                "provides": [
                                    {
                                        "shareScope": "default",
                                        "shareKey": "@mgmresorts/mgm-auth-js-sdk",
                                        "requiredVersion": "=2.5.7",
                                        "strictVersion": false,
                                        "singleton": true,
                                        "eager": false
                                    }
                                ]
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/694.34da273815293cd6-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/885.d85285e0095ae40a-fed.js"
                                ],
                                "provides": []
                            }
                        ]
                    }
                ],
                "./Preferences": [
                    {
                        "chunks": [
                            "static/chunks/875.a9b79398f58ca2b5-fed.js"
                        ],
                        "sharedModules": [
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/694.34da273815293cd6-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/885.d85285e0095ae40a-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/694.34da273815293cd6-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/885.d85285e0095ae40a-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/694.34da273815293cd6-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/885.d85285e0095ae40a-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/694.34da273815293cd6-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/885.d85285e0095ae40a-fed.js"
                                ],
                                "provides": []
                            }
                        ]
                    }
                ],
                "./PerpetualOffer": [
                    {
                        "chunks": [
                            "static/chunks/793.41a8d375b92b29bd-fed.js"
                        ],
                        "sharedModules": [
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/694.34da273815293cd6-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/885.d85285e0095ae40a-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/694.34da273815293cd6-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/885.d85285e0095ae40a-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/694.34da273815293cd6-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/885.d85285e0095ae40a-fed.js"
                                ],
                                "provides": []
                            }
                        ]
                    }
                ]
            }
        }
    ]
}).federatedModules.find((f)=>f.remote === "accounts"
).exposes;
function getChunksForExposed(exposed) {
    return exposes[exposed].reduce((p, c)=>{
        p.push(...c.chunks);
        return p;
    }, []);
}
async function nextFederatedPrerender(req, res) {
    if (req.method !== "POST") {
        res.status(405);
        res.send();
        return;
    }
    const mod = req.body.module;
    if (!requestMap[mod]) {
        res.status(404);
        res.send();
        return;
    }
    try {
        const chunks = getChunksForExposed(mod);
        let Component = await requestMap[mod]();
        Component = Component && Component.default || Component;
        const html = (0,server_namespaceObject.renderToStaticMarkup)(/*#__PURE__*/ (0,external_react_.createElement)(Component, req.body.props, `‌children‌`));
        res.status(200);
        res.json({
            chunks,
            html
        });
    } catch (err) {
        console.error(err);
        res.status(500);
        res.send();
        return;
    }
};

;// CONCATENATED MODULE: ./pages/api/federated-prerender.ts
// @ts-expect-error nextjs-mf plugin generates this



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8964));
module.exports = __webpack_exports__;

})();