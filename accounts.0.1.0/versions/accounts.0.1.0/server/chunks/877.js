"use strict";
exports.id = 877;
exports.ids = [877];
exports.modules = {

/***/ 8991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ GenericErrorMessageId1)
/* harmony export */ });
var GenericErrorMessageId1;

(function(GenericErrorMessageId) {
    GenericErrorMessageId["UnknownError"] = 'unknown-error';
    GenericErrorMessageId["ContactMemberServices"] = 'contact-member-services';
    GenericErrorMessageId["ContactReservationsMgmri"] = 'contact-reservations-mgmri';
})(GenericErrorMessageId1 || (GenericErrorMessageId1 = {
}));


/***/ }),

/***/ 6292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ useRouter)
/* harmony export */ });
/* unused harmony export useAsPathWithoutPropertySlug */
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
// eslint-disable-next-line no-restricted-imports


// Router wrapper around NextJs router. This is because if we are on localhost, we need to include
// the property slug when redirecting to a page. However, if the application is running on deployed
// environment then Akamai takes care of hiding the property slug.
// The wrapper exposes a push and replace function that centralizes this logic.
function useRouter() {
    const nextRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const replace = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback((url)=>{
        if (location.origin === 'http://localhost:3000') {
            return nextRouter.replace({
                pathname: `/[propertySlug]${url.pathname}`,
                query: {
                    ...url.query || {
                    },
                    propertySlug: nextRouter.query.propertySlug
                }
            });
        }
        // Remove the property slug from the query object
        const { propertySlug , ...query } = url.query || {
        }; // eslint-disable-line @typescript-eslint/no-unused-vars
        return nextRouter.replace({
            pathname: url.pathname,
            query
        });
    }, [
        nextRouter
    ]);
    const push = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback((url)=>{
        if (location.origin === 'http://localhost:3000') {
            return nextRouter.push({
                pathname: `/[propertySlug]${url.pathname}`,
                query: {
                    ...url.query || {
                    },
                    propertySlug: nextRouter.query.propertySlug
                }
            });
        }
        // Remove the property slug from the query object
        const { propertySlug , ...query } = url.query || {
        }; // eslint-disable-line @typescript-eslint/no-unused-vars
        return nextRouter.push({
            pathname: url.pathname,
            query
        });
    }, [
        nextRouter
    ]);
    // Memoize router to avoid re rendering
    const router = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(()=>({
            ...nextRouter,
            replace,
            push
        })
    , [
        nextRouter,
        replace,
        push
    ]);
    return router;
}
/**
 * Drops the propertySlug from the current path
 */ function useAsPathWithoutPropertySlug() {
    const { asPath , query  } = useNextRouter() || {
        query: {
        }
    };
    const propertySlug = query.propertySlug;
    if (propertySlug) {
        const path = asPath.replace(new RegExp(`/${propertySlug}(.*)/`), '$1');
        return path === '' ? '/' : path;
    }
    return asPath;
}


/***/ }),

/***/ 6038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "oB": () => (/* binding */ currencyFormatter),
/* harmony export */   "Pe": () => (/* binding */ currencyFormatterWithNoFractions),
/* harmony export */   "V2": () => (/* binding */ numberFormatter)
/* harmony export */ });
const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});
const currencyFormatterWithNoFractions = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
});
const numberFormatter = new Intl.NumberFormat('en-IN');


/***/ })

};
;