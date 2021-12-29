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

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 2748:
/***/ ((module) => {

module.exports = require("luxon");

/***/ }),

/***/ 7809:
/***/ ((module) => {

module.exports = require("memoize-one");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 2587:
/***/ ((module) => {

module.exports = require("next-shared-logic");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 2042:
/***/ ((module) => {

module.exports = require("polished");

/***/ }),

/***/ 6247:
/***/ ((module) => {

module.exports = require("raf-throttle");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3649:
/***/ ((module) => {

module.exports = require("react-dates");

/***/ }),

/***/ 7073:
/***/ ((module) => {

module.exports = require("react-dates/initialize");

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
    ["./TestComp"]: ()=>__webpack_require__.e(/* import() */ 280).then(__webpack_require__.bind(__webpack_require__, 2280))
    ,
    ["./pages-map"]: ()=>__webpack_require__.e(/* import() */ 869).then(__webpack_require__.bind(__webpack_require__, 2869))
    ,
    ["./Itinerary"]: ()=>__webpack_require__.e(/* import() */ 219).then(__webpack_require__.bind(__webpack_require__, 8219))
    ,
    ["./Trips"]: ()=>__webpack_require__.e(/* import() */ 702).then(__webpack_require__.bind(__webpack_require__, 4702))
    ,
    ["./BookingWidgetWrapper"]: ()=>Promise.all(/* import() */[__webpack_require__.e(222), __webpack_require__.e(418)]).then(__webpack_require__.bind(__webpack_require__, 2418))
    ,
    ["./FeaturedTrip"]: ()=>Promise.all(/* import() */[__webpack_require__.e(222), __webpack_require__.e(739)]).then(__webpack_require__.bind(__webpack_require__, 4739))
};
const exposes = ({
    "sharedModules": [],
    "federatedModules": [
        {
            "remote": "trips",
            "entry": "static/chunks/remoteEntry.js",
            "sharedModules": [
                {
                    "chunks": [
                        "static/chunks/163.9771455bc47fcdf5-fed.js"
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
                        "static/chunks/380.6e8d53c11d48f76d-fed.js"
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
                        "static/chunks/647.89078cf9200811d4-fed.js"
                    ],
                    "provides": [
                        {
                            "shareScope": "default",
                            "shareKey": "@mgmresorts/wcl-utils",
                            "requiredVersion": "^1.5.1",
                            "strictVersion": false,
                            "singleton": true,
                            "eager": false
                        }
                    ]
                },
                {
                    "chunks": [
                        "static/chunks/694.8eb1e30a52a543ea-fed.js"
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
                        "static/chunks/885.2dd94a5aa23961cd-fed.js"
                    ],
                    "provides": [
                        {
                            "shareScope": "default",
                            "shareKey": "@mgmresorts/wcl-core",
                            "requiredVersion": "=1.27.7",
                            "strictVersion": false,
                            "singleton": true,
                            "eager": false
                        }
                    ]
                },
                {
                    "chunks": [
                        "static/chunks/935.7a1f208fa2280dd6-fed.js"
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
                "./TestComp": [
                    {
                        "chunks": [
                            "static/chunks/188.65e086608b0eb207-fed.js"
                        ],
                        "sharedModules": []
                    }
                ],
                "./pages-map": [
                    {
                        "chunks": [
                            "static/chunks/111.39bb3e46ba1a8cc9-fed.js"
                        ],
                        "sharedModules": []
                    }
                ],
                "./Itinerary": [
                    {
                        "chunks": [
                            "static/chunks/110.1f5ef0b04f02bab7-fed.js"
                        ],
                        "sharedModules": []
                    }
                ],
                "./Trips": [
                    {
                        "chunks": [
                            "static/chunks/606.21a3a137aa7aca5e-fed.js"
                        ],
                        "sharedModules": []
                    }
                ],
                "./BookingWidgetWrapper": [
                    {
                        "chunks": [
                            "static/chunks/472.1e0cefbec5d162d6-fed.js"
                        ],
                        "sharedModules": [
                            {
                                "chunks": [
                                    "static/chunks/380.6e8d53c11d48f76d-fed.js"
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
                                    "static/chunks/647.89078cf9200811d4-fed.js"
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
                                    "static/chunks/694.8eb1e30a52a543ea-fed.js"
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
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/885.2dd94a5aa23961cd-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/935.7a1f208fa2280dd6-fed.js"
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
                                "chunks": [
                                    "static/chunks/380.6e8d53c11d48f76d-fed.js"
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
                                    "static/chunks/647.89078cf9200811d4-fed.js"
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
                                    "static/chunks/694.8eb1e30a52a543ea-fed.js"
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
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/885.2dd94a5aa23961cd-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/935.7a1f208fa2280dd6-fed.js"
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
                                "chunks": [
                                    "static/chunks/380.6e8d53c11d48f76d-fed.js"
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
                                    "static/chunks/647.89078cf9200811d4-fed.js"
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
                                    "static/chunks/694.8eb1e30a52a543ea-fed.js"
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
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/885.2dd94a5aa23961cd-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/935.7a1f208fa2280dd6-fed.js"
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
                                "chunks": [
                                    "static/chunks/380.6e8d53c11d48f76d-fed.js"
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
                                    "static/chunks/647.89078cf9200811d4-fed.js"
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
                                    "static/chunks/694.8eb1e30a52a543ea-fed.js"
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
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/885.2dd94a5aa23961cd-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/935.7a1f208fa2280dd6-fed.js"
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
                                "chunks": [
                                    "static/chunks/380.6e8d53c11d48f76d-fed.js"
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
                                    "static/chunks/647.89078cf9200811d4-fed.js"
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
                                    "static/chunks/694.8eb1e30a52a543ea-fed.js"
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
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/885.2dd94a5aa23961cd-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/935.7a1f208fa2280dd6-fed.js"
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
                "./FeaturedTrip": [
                    {
                        "chunks": [
                            "static/chunks/546.d4a045e1098e82c6-fed.js"
                        ],
                        "sharedModules": [
                            {
                                "chunks": [
                                    "static/chunks/68.29fa8d3d45657f4a-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/163.9771455bc47fcdf5-fed.js"
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
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/694.8eb1e30a52a543ea-fed.js"
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
                                    "static/chunks/885.2dd94a5aa23961cd-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/68.29fa8d3d45657f4a-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/163.9771455bc47fcdf5-fed.js"
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
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/694.8eb1e30a52a543ea-fed.js"
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
                                    "static/chunks/885.2dd94a5aa23961cd-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/68.29fa8d3d45657f4a-fed.js"
                                ],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/163.9771455bc47fcdf5-fed.js"
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
                                "chunks": [],
                                "provides": []
                            },
                            {
                                "chunks": [
                                    "static/chunks/694.8eb1e30a52a543ea-fed.js"
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
                                    "static/chunks/885.2dd94a5aa23961cd-fed.js"
                                ],
                                "provides": []
                            }
                        ]
                    }
                ]
            }
        }
    ]
}).federatedModules.find((f)=>f.remote === "trips"
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