"use strict";
exports.id = 775;
exports.ids = [775];
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

/***/ 9775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "PerpetualOffer": () => (/* binding */ PerpetualOffer),
  "default": () => (/* binding */ PerpetualOffer_PerpetualOffer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mgmresorts/wcl-core"
var wcl_core_ = __webpack_require__(1771);
// EXTERNAL MODULE: external "@mgmresorts/wcl-styled"
var wcl_styled_ = __webpack_require__(3294);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(825);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);
;// CONCATENATED MODULE: ./src/common/api/useGetPerpetualOffer.tsx


const GET_PERPETUAL_OFFER = (external_graphql_tag_default())`
  query GetPerpetualOffer($region: String, $propertyId: String!, $onlyPoPrograms: Boolean) {
    customerRoomOffers(region: $region, propertyId: $propertyId, onlyPoPrograms: $onlyPoPrograms) {
      programDetails {
        name
        descriptions {
          short
        }
      }
    }
  }
`;
const useGetPerpetualOffer = (variables)=>(0,client_.useQuery)(GET_PERPETUAL_OFFER, {
        ssr: false,
        variables: {
            ...variables
        }
    })
;

// EXTERNAL MODULE: ./src/common/types/GenericErrorMessage.ts
var GenericErrorMessage = __webpack_require__(8991);
;// CONCATENATED MODULE: ./src/components/PerpetualOffer/PerpetualOffer.style.tsx


const StyledPerpetualOffer = (0,wcl_styled_.styled)(wcl_core_.ProductPromoCard)`
  margin-top: ${wcl_styled_.$spacingMedium};

  &.offer-wrapper {
    box-shadow: none;
    padding: 0;
  }
`;

;// CONCATENATED MODULE: ./src/components/PerpetualOffer/PerpetualOffer.tsx






// import { useErrorMessage } from '../../common/context/ErrorMessageContext';

// import { ConfigContext } from '../../common/ui/ConfigContext/ConfigContext';

const PerpetualOffer = ({ useErrorMessage , ConfigContext  })=>{
    const { property  } = (0,external_react_.useContext)(ConfigContext);
    const { data , loading , error  } = useGetPerpetualOffer({
        onlyPoPrograms: false,
        propertyId: (0,wcl_styled_.getPropertyIdByPropertySlug)(property),
        region: 'ALL'
    });
    const { 0: heading , 1: setHeading  } = (0,external_react_.useState)('');
    const { 0: description , 1: setDescription  } = (0,external_react_.useState)('');
    const { setErrorMessageById  } = useErrorMessage();
    if (error) setErrorMessageById(GenericErrorMessage/* GenericErrorMessageId.UnknownError */.d.UnknownError);
    (0,external_react_.useEffect)(()=>{
        if (data && (data.customerRoomOffers || []).length) {
            const { programDetails  } = data.customerRoomOffers[0];
            if (programDetails) {
                const { name , descriptions  } = programDetails;
                const short = descriptions === null || descriptions === void 0 ? void 0 : descriptions.short;
                setHeading(name);
                setDescription(short);
            }
        }
    }, [
        data
    ]);
    return !loading && heading && description ? /*#__PURE__*/ jsx_runtime_.jsx(StyledPerpetualOffer, {
        icon: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.FreeCancellationIcon, {
            color: wcl_styled_.$indigo,
            height: 30
        }),
        superText: heading,
        headline_HTML: `<h6>${description}</h6>`,
        className: "offer-wrapper"
    }) : null;
};
/* harmony default export */ const PerpetualOffer_PerpetualOffer = (PerpetualOffer);
PerpetualOffer.displayName = 'PerpetualOffer';


/***/ })

};
;