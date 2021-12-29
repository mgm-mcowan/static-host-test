"use strict";
exports.id = 984;
exports.ids = [984];
exports.modules = {

/***/ 4984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Preferences": () => (/* binding */ Preferences),
  "default": () => (/* binding */ Preferences_Preferences)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mgmresorts/wcl-core"
var wcl_core_ = __webpack_require__(1771);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/common/analytics/useClickEvent.ts + 1 modules
var useClickEvent = __webpack_require__(7474);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(825);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);
;// CONCATENATED MODULE: ./src/common/api/useGetOneTrustMagicLink.tsx


const GET_ONETRUST_MAGIC_LINK_QUERY = (external_graphql_tag_default())`
  # prettier-ignore
  query GetOneTrustMagicLink {
    me {
      oneTrustLink {
        magicLinkUri
      }
    }
  }
`;
const useGetOneTrustMagicLink = ()=>{
    return (0,client_.useQuery)(GET_ONETRUST_MAGIC_LINK_QUERY, {
        fetchPolicy: 'cache-first',
        ssr: false,
        notifyOnNetworkStatusChange: true
    });
};

// EXTERNAL MODULE: external "@mgmresorts/wcl-styled"
var wcl_styled_ = __webpack_require__(3294);
;// CONCATENATED MODULE: ./src/components/Preferences/Preferences.style.tsx


const StyledText16 = (0,wcl_styled_.styled)(wcl_core_.Text16)`
  font-weight: normal;
  margin-top: ${wcl_styled_.$spacingMedium};
  margin-bottom: ${wcl_styled_.$spacingXtraLarge};
`;

;// CONCATENATED MODULE: ./src/components/Preferences/Preferences.tsx






const Preferences = ()=>{
    const trackClickEvent = (0,useClickEvent/* useClickEvent */.v)();
    const { loading , data , error: prefError , refetch  } = useGetOneTrustMagicLink();
    const { 0: magicLink , 1: setMagicLink  } = (0,external_react_.useState)();
    const { 0: error , 1: setError  } = (0,external_react_.useState)(false);
    const retryButton = {
        label: 'Try Again',
        onClick: ()=>{
            setError(false);
            refetch();
        }
    };
    const trackManagePreferencesClick = (0,external_react_.useCallback)(()=>{
        trackClickEvent({
            eventName: 'account – preferences – manage preferences - click',
            title: 'manage preferences'
        });
    }, [
        trackClickEvent
    ]);
    (0,external_react_.useEffect)(()=>{
        if (!loading) {
            var ref, ref1;
            if (data === null || data === void 0 ? void 0 : (ref = data.me) === null || ref === void 0 ? void 0 : (ref1 = ref.oneTrustLink) === null || ref1 === void 0 ? void 0 : ref1.magicLinkUri) {
                setMagicLink(data.me.oneTrustLink.magicLinkUri);
                setError(false);
            } else {
                setError(true);
            }
        }
    }, [
        loading,
        data
    ]);
    (0,external_react_.useEffect)(()=>{
        setError(!!prefError);
    }, [
        prefError
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Heading28, {
                children: "Marketing"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(StyledText16, {
                "data-testid": "static-text",
                children: "Marketing preferences are controlled by our privacy and preferences vendor XXX Please click the link below to manage your prefereneces."
            }),
            error ? /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Alert, {
                type: "error",
                title: "Sorry, there was a system error. Please try again.",
                description: "",
                primaryButton: retryButton
            }) : /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Button, {
                "data-testid": "manage-preferences",
                as: "a",
                variant: "primary",
                shape: "square",
                label: "Manage Preferences",
                style: {
                    minWidth: '150px'
                },
                href: magicLink,
                onClick: trackManagePreferencesClick,
                target: "_blank",
                children: loading && /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.LoadingSpinner, {
                    "data-testid": "loader",
                    size: 20,
                    strokeWidth: 5,
                    color: "white"
                })
            })
        ]
    }));
};
/* harmony default export */ const Preferences_Preferences = (Preferences);


/***/ })

};
;