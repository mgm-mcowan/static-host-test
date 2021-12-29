"use strict";
exports.id = 326;
exports.ids = [326];
exports.modules = {

/***/ 6326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "MlifeRewards": () => (/* binding */ MlifeRewards),
  "default": () => (/* binding */ MlifeRewards_MlifeRewards)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mgmresorts/wcl-core"
var wcl_core_ = __webpack_require__(1771);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/common/analytics/useClickEvent.ts + 1 modules
var useClickEvent = __webpack_require__(7474);
// EXTERNAL MODULE: ./src/common/types/GenericErrorMessage.ts
var GenericErrorMessage = __webpack_require__(8991);
// EXTERNAL MODULE: ./src/next/router.ts
var router = __webpack_require__(6292);
// EXTERNAL MODULE: external "@mgmresorts/wcl-styled"
var wcl_styled_ = __webpack_require__(3294);
// EXTERNAL MODULE: external "@mgmresorts/wcl-utils"
var wcl_utils_ = __webpack_require__(4753);
;// CONCATENATED MODULE: ./src/utils/url.ts


function isSSR() {
    return !window || !document || !document.body || !!(window && window.SSR_MODE);
}
function getProperty(param) {
    const stringParam = ((0,wcl_utils_.parseStringParam)(param) || '').toLowerCase();
    // Attempt to match with dev or uat
    const match = stringParam.match(/dev-(.*)/) || stringParam.match(/uat-(.*)/);
    if (match) {
        // If there is a match, then return the property slug
        return match[1];
    } else if ([
        'dev',
        'uat'
    ].includes(stringParam)) {
        // If the param is dev or uat, default to mgmresorts
        return 'mgmresorts';
    }
    // In any other case, we are in prod, so we must return the param as is
    return stringParam;
}
function cleanPropertyParam(param) {
    const property = getProperty(param);
    return property === 'www' ? 'mgmresorts' : wcl_styled_.propertySlugs.includes(property) ? property : undefined;
}
function getHost() {
    var ref;
    const host = window === null || window === void 0 ? void 0 : (ref = window.location) === null || ref === void 0 ? void 0 : ref.host;
    return isSSR() || !host ? '' : host;
}
function getUrlParts() {
    const host = getHost();
    const parts = host.split('.');
    // if we have an odd URL, bail
    if (parts.length < 3 || parts.length > 4) {
        return {
            property: undefined,
            domain: undefined,
            tld: undefined
        };
    }
    if ([
        'staging',
        'preprod'
    ].includes(parts[0])) {
        // if we have the base without a property staging.mgmresorts.com (drop the staging part)
        if (parts.length === 3) {
            return {
                property: 'mgmresorts',
                domain: parts[1],
                tld: parts[2]
            };
        }
        // remove the proceeding portion of the URL (staging or preprod)
        parts.shift();
    }
    return {
        property: cleanPropertyParam(parts[0]),
        domain: parts[1],
        tld: parts[2]
    };
}

;// CONCATENATED MODULE: ./src/common/useDerivedPropertySlug.ts


function parsePropertyFromHost(domain = 'mgmresorts', tld = 'com') {
    const { property , domain: _domain , tld: _tld  } = getUrlParts();
    if (domain === _domain && (_tld === null || _tld === void 0 ? void 0 : _tld.startsWith(tld))) {
        return property;
    }
    return undefined;
}
function parsePropertyFromQuery(query) {
    return cleanPropertyParam(query === null || query === void 0 ? void 0 : query.property);
}
function deriveProperty(query) {
    return parsePropertyFromHost() || parsePropertyFromQuery(query) || 'mgmresorts';
}
const useDerivedPropertySlug = ()=>{
    const { query  } = (0,router/* useRouter */.t)();
    return deriveProperty(query);
};

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(825);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);
;// CONCATENATED MODULE: ./src/common/api/useGetMlifeRewards.tsx


const GET_MLIFEREWARDS_QUERY = (external_graphql_tag_default())`
  # prettier-ignore
  query GetMlifeRewards {
    me {
      memberships {
        ... on MlifeMembership {
          customerBalances(filter: { filterNullSiteName: true }) {
            tier {
              currentTier: tierName
              currentTierCredits: tierCredits
              expirationDate: tierExpirationDate(format: "MM/dd/yyyy")
              creditToNextTier
              nextTier
              minTierCreditsForCurrentTier
              minTierCreditsForNextTier
            }
            balance {
              freePlayValues: xtraCreditBalancesLocal {
                siteId
                propertyBalance: xtraCreditBalanceLocal
                propertyName: siteName
              }
              freePlayAnywhere: xtraCreditBalanceGlobal
              pointPlay: pointBalance
              expressComps
              freePlay
              giftPoints
              slotDollars
            }
          }
        }
      }
    }
  }
`;
const useMlifeRewards = ()=>{
    return (0,client_.useQuery)(GET_MLIFEREWARDS_QUERY, {
        fetchPolicy: 'network-only',
        ssr: false
    });
};

// EXTERNAL MODULE: ./src/utils/formatter.ts
var formatter = __webpack_require__(6038);
;// CONCATENATED MODULE: ./src/components/MlifeRewards/MlifeRewards.style.tsx



const StyledGridColumn = (0,wcl_styled_.styled)(wcl_core_.GridColumn)`
  ${wcl_styled_.css`
    h4,
    strong {
      font-weight: 500;
    }

    [data-testid='IconText'] {
      ${wcl_styled_.media.minLg`
        min-height: 260px;
      `}
    }

    > div > div {
      padding: 0;
    }

    &.text-align-end {
      text-align: end;
    }

    .credits-earned,
    .widget-balance {
      span {
        color: ${(p)=>p.theme.colors.interface
};
      }
    }

    .widget-balance {
      font-size: 1rem;
    }

    .credits-expire-date {
      color: ${wcl_styled_.$darkGrey};
    }

    &.tier-card {
      padding: ${wcl_styled_.$spacingXSmall};
      margin-top: 40px;
      align-items: center;
      max-width: 250px;

      * {
        padding-left: ${wcl_styled_.$spacingXSmall};
      }

      &.current-tier {
        border: 1px solid #4957f4;
        border-radius: 10px;
      }

      .tier-img {
        margin-bottom: ${wcl_styled_.$spacingXtraLarge};
        padding: 0;
      }
    }

    .tier-content {
      font-weight: 400;
      color: ${wcl_styled_.$darkGrey};
      margin-top: 18px;

      &-item {
        display: list-item;
        margin-top: ${wcl_styled_.$spacingMedium};
        margin-left: ${wcl_styled_.$spacingMedium};
      }
    }
  `}
`;
const Heading32 = (0,wcl_styled_.styled)(wcl_core_.Heading35)`
  font-size: 32px;
`;
const StyledLine = wcl_styled_.styled.div`
  height: 1px;
  background-color: ${wcl_styled_.$lightestGrey};
  margin-top: ${wcl_styled_.$spacingMedium};
  margin-bottom: ${wcl_styled_.$spacingXtraLarge};
`;
const Text20 = (0,wcl_styled_.styled)(wcl_core_.Text16)`
  font-size: 20px;
`;
const StyledProductPromoCard = (0,wcl_styled_.styled)(wcl_core_.ProductPromoCard)`
  margin-bottom: ${wcl_styled_.$spacingXtraLarge};

  .member__message-description {
    color: ${wcl_styled_.$white};

    * {
      margin: 0;
    }
  }
`;

;// CONCATENATED MODULE: ./src/components/MlifeRewards/MlifeRewards.tsx

/* eslint-disable @next/next/no-img-element */ /* eslint-disable import/order */ 







const MlifeRewards = ({ memberMessage , useErrorMessage , ...props })=>{
    var ref12, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10;
    const viewport = (0,external_react_.useContext)(wcl_core_.ViewportContext);
    const trackClickEvent = (0,useClickEvent/* useClickEvent */.v)();
    const property = useDerivedPropertySlug();
    const { setErrorMessageById  } = useErrorMessage();
    const { 0: rewardsBalances , 1: setRewardsBalances  } = (0,external_react_.useState)();
    const { 0: progressBarPercent , 1: setProgressBarPercent  } = (0,external_react_.useState)(0);
    const { 0: propertyBalance , 1: setPropertyBalance  } = (0,external_react_.useState)();
    const { 0: totalBalance , 1: setTotalBalance  } = (0,external_react_.useState)();
    const { 0: modalOpen , 1: setModalOpen  } = (0,external_react_.useState)(false);
    const { 0: isCurrentTierNOIR , 1: setIsCurrentTierNOIR  } = (0,external_react_.useState)(false);
    const { 0: isNextTierNOIR , 1: setIsNextTierNOIR  } = (0,external_react_.useState)(false);
    const { 0: isCreditsBelowMinimum , 1: setIsCreditsBelowMinimum  } = (0,external_react_.useState)(false);
    const { 0: isMaximumTierEarned , 1: setIsMaximumTierEarned  } = (0,external_react_.useState)(false);
    const { loading: rewardsLoading , data: rewardsData , error: rewardsError  } = useMlifeRewards();
    const openAllTierBenefitsModal = (0,external_react_.useCallback)(()=>{
        trackClickEvent({
            eventName: `account – m life rewards  – view tier benefits`,
            title: `view all tier benefits`
        });
        setModalOpen(true);
    }, [
        trackClickEvent
    ]);
    const trackRewardRulesClick = (0,external_react_.useCallback)(()=>{
        trackClickEvent({
            eventName: `account – m life rewards  – reward rules`,
            title: `learn more – m life reward rules`
        });
    }, [
        trackClickEvent
    ]);
    const handlePromoCardOnClick = ()=>{
        var ref, ref11;
        trackClickEvent({
            eventName: 'account - m life rewards - hero message',
            title: (memberMessage === null || memberMessage === void 0 ? void 0 : (ref = memberMessage.messagePrimaryCTADisplayText) === null || ref === void 0 ? void 0 : ref.toLowerCase()) || '',
            notificationMessage: memberMessage === null || memberMessage === void 0 ? void 0 : (ref11 = memberMessage.messageDescription) === null || ref11 === void 0 ? void 0 : ref11.toString()
        });
        if (memberMessage === null || memberMessage === void 0 ? void 0 : memberMessage.messagePrimaryCTATarget) {
            window.location.href = `https://static.mgmresorts.com${memberMessage.messagePrimaryCTATarget}`;
        }
    };
    const memberMessageDescription = ()=>{
        return `<div class='member__message-description'>${memberMessage === null || memberMessage === void 0 ? void 0 : memberMessage.messageDescription}</div>`;
    };
    const memberMessageIcon = ()=>{
        return(/*#__PURE__*/ jsx_runtime_.jsx("img", {
            alt: "message-icon",
            src: `https://static.mgmresorts.com${memberMessage === null || memberMessage === void 0 ? void 0 : memberMessage.messageIcon}`
        }));
    };
    (0,external_react_.useEffect)(()=>{
        var ref, ref13, ref14, ref15, ref16, ref17, ref18, ref19, ref20, ref21, ref22, ref23;
        const customerBalances = (rewardsData === null || rewardsData === void 0 ? void 0 : (ref = rewardsData.me) === null || ref === void 0 ? void 0 : ref.memberships) && ((ref14 = rewardsData === null || rewardsData === void 0 ? void 0 : (ref13 = rewardsData.me) === null || ref13 === void 0 ? void 0 : ref13.memberships[0]) === null || ref14 === void 0 ? void 0 : ref14.customerBalances) || {
        };
        setRewardsBalances(customerBalances);
        const currentTierData = props.tierData[customerBalances === null || customerBalances === void 0 ? void 0 : (ref15 = customerBalances.tier) === null || ref15 === void 0 ? void 0 : ref15.currentTier];
        const nextTierData = props.tierData[currentTierData === null || currentTierData === void 0 ? void 0 : currentTierData.nextTier];
        const currentTierCreditBalance = Number(customerBalances === null || customerBalances === void 0 ? void 0 : (ref16 = customerBalances.tier) === null || ref16 === void 0 ? void 0 : ref16.currentTierCredits);
        const minTierCreditsForCurrentTier = Number((customerBalances === null || customerBalances === void 0 ? void 0 : (ref17 = customerBalances.tier) === null || ref17 === void 0 ? void 0 : ref17.minTierCreditsForCurrentTier) ?? (currentTierData === null || currentTierData === void 0 ? void 0 : currentTierData.minCredits));
        const minTierCreditsForNextTier = Number((customerBalances === null || customerBalances === void 0 ? void 0 : (ref18 = customerBalances.tier) === null || ref18 === void 0 ? void 0 : ref18.minTierCreditsForNextTier) ?? (nextTierData === null || nextTierData === void 0 ? void 0 : nextTierData.minCredits));
        const currentTierNOIR = (customerBalances === null || customerBalances === void 0 ? void 0 : (ref19 = customerBalances.tier) === null || ref19 === void 0 ? void 0 : ref19.currentTier) === 'NOIR';
        const nextTierNOIR = (customerBalances === null || customerBalances === void 0 ? void 0 : (ref20 = customerBalances.tier) === null || ref20 === void 0 ? void 0 : ref20.nextTier) === 'NOIR';
        let progressPercentage = 0;
        if (!currentTierNOIR && currentTierCreditBalance < minTierCreditsForCurrentTier) {
            setIsCreditsBelowMinimum(true);
            progressPercentage = currentTierCreditBalance / minTierCreditsForCurrentTier * 100;
        } else {
            progressPercentage = (currentTierCreditBalance - minTierCreditsForCurrentTier) / (minTierCreditsForNextTier - minTierCreditsForCurrentTier) * 100;
        }
        if (currentTierNOIR || nextTierNOIR && currentTierCreditBalance >= minTierCreditsForCurrentTier) {
            setProgressBarPercent(100);
            setIsMaximumTierEarned(true);
        } else if (progressPercentage > 0) {
            setProgressBarPercent(progressPercentage);
        } else {
            setProgressBarPercent(1.5);
        }
        const _totalBalance = (customerBalances === null || customerBalances === void 0 ? void 0 : (ref21 = customerBalances.balance) === null || ref21 === void 0 ? void 0 : ref21.freePlayAnywhere) || 0;
        const _propertyBalance = (customerBalances === null || customerBalances === void 0 ? void 0 : (ref22 = customerBalances.balance) === null || ref22 === void 0 ? void 0 : (ref23 = ref22.freePlayValues) === null || ref23 === void 0 ? void 0 : ref23.filter((freePlay)=>freePlay.propertyBalance
        )) || [];
        // TODO: Revisit this condition
        // if (property === 'borgata') {
        //   _propertyBalance = _propertyBalance.filter(freePlay => freePlay.siteId !== '19');
        // }
        if (!_propertyBalance.length) {
            setTotalBalance(_totalBalance);
            setPropertyBalance(undefined);
        } else if (_propertyBalance.length && !_totalBalance) {
            setTotalBalance(undefined);
            setPropertyBalance(_propertyBalance);
        } else {
            setTotalBalance(_totalBalance);
            setPropertyBalance(_propertyBalance);
        }
        setIsCurrentTierNOIR(currentTierNOIR);
        setIsNextTierNOIR(nextTierNOIR);
    }, [
        property,
        props.tierData,
        rewardsData
    ]);
    if (rewardsLoading) {
        return(/*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.EmptyState, {
            loading: true
        }));
    }
    if (rewardsError) setErrorMessageById(GenericErrorMessage/* GenericErrorMessageId.ContactMemberServices */.d.ContactMemberServices);
    if (!rewardsBalances) {
        return null;
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            memberMessage && /*#__PURE__*/ jsx_runtime_.jsx(StyledProductPromoCard, {
                icon: memberMessageIcon(),
                headline: (memberMessage === null || memberMessage === void 0 ? void 0 : memberMessage.messageTitle) || '',
                description_HTML: memberMessageDescription(),
                primaryButton: {
                    label: (memberMessage === null || memberMessage === void 0 ? void 0 : memberMessage.messagePrimaryCTADisplayText) || '',
                    onClick: handlePromoCardOnClick,
                    shape: 'pill',
                    size: 'small',
                    variant: 'secondary'
                },
                gradient: true
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(wcl_core_.GridContainer, {
                className: "no-padding",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(wcl_core_.GridRow, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledGridColumn, {
                                "data-testid": "current-tier",
                                cols: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Heading32, {
                                        className: "tier-status margin-bottom-8",
                                        children: rewardsBalances === null || rewardsBalances === void 0 ? void 0 : (ref12 = rewardsBalances.tier) === null || ref12 === void 0 ? void 0 : ref12.currentTier
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Text16, {
                                        className: "current-tier-label margin-bottom-8",
                                        children: isCurrentTierNOIR ? 'Maximum Tier' : 'Current Tier'
                                    })
                                ]
                            }),
                            !isCurrentTierNOIR && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledGridColumn, {
                                "data-testid": "next-tier",
                                cols: 6,
                                className: "text-align-end",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Heading32, {
                                        className: "tier-status margin-bottom-8",
                                        children: rewardsBalances === null || rewardsBalances === void 0 ? void 0 : (ref1 = rewardsBalances.tier) === null || ref1 === void 0 ? void 0 : ref1.nextTier
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Text16, {
                                        className: "next-tier-label margin-bottom-8",
                                        children: isNextTierNOIR ? 'By Invitation Only' : 'Next Tier'
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(StyledGridColumn, {
                                "data-testid": "progress-bar",
                                cols: 12,
                                className: "margin-bottom-16",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.ProgressBar, {
                                    percentComplete: progressBarPercent,
                                    color: "linear-gradient(250.93deg, #4957F4 28.64%, #6B49F4 69.77%), #F8F8F8"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(StyledGridColumn, {
                                cols: 6,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Text12, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Button, {
                                        role: "link",
                                        shape: "inline",
                                        size: "inherit",
                                        label: "View All Tier Benefits",
                                        onClick: openAllTierBenefitsModal
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledGridColumn, {
                                "data-testid": "tier-credits-earned",
                                cols: 6,
                                className: "text-align-end",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(wcl_core_.Text12, {
                                        className: "credits-earned",
                                        children: [
                                            "Tier Credits Earned:",
                                            ' ',
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "current-tier-credits",
                                                children: formatter/* numberFormatter.format */.V2.format(rewardsBalances === null || rewardsBalances === void 0 ? void 0 : (ref2 = rewardsBalances.tier) === null || ref2 === void 0 ? void 0 : ref2.currentTierCredits)
                                            }),
                                            !isMaximumTierEarned && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "next-tier-credits",
                                                children: `\u00A0/\u00A0${formatter/* numberFormatter.format */.V2.format(isCreditsBelowMinimum ? rewardsBalances === null || rewardsBalances === void 0 ? void 0 : (ref3 = rewardsBalances.tier) === null || ref3 === void 0 ? void 0 : ref3.minTierCreditsForCurrentTier : rewardsBalances === null || rewardsBalances === void 0 ? void 0 : (ref4 = rewardsBalances.tier) === null || ref4 === void 0 ? void 0 : ref4.minTierCreditsForNextTier)}`
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Text10, {
                                        "data-testid": "tier-credits-expiration",
                                        className: "credits-expire-date",
                                        children: isCreditsBelowMinimum ? 'To Maintain Current Tier' : `Credits Expire: ${rewardsBalances === null || rewardsBalances === void 0 ? void 0 : (ref5 = rewardsBalances.tier) === null || ref5 === void 0 ? void 0 : ref5.expirationDate}`
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(StyledGridColumn, {
                                cols: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(StyledLine, {
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(wcl_core_.GridRow, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(StyledGridColumn, {
                                "data-testid": "points-play",
                                cols: viewport.minLg ? 4 : 12,
                                className: viewport.minLg ? '' : 'margin-bottom-16',
                                children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.IconText, {
                                    title: "Points",
                                    description: "Earn points playing slots then convert them to FREEPLAY\xae without leaving your favorite slot machine!",
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        alt: "PointPlay",
                                        src: "/account/images/slots.svg"
                                    }),
                                    footerTextHTML: `<div class='widget-balance'>
                <strong>Balance:</strong> <span>${formatter/* numberFormatter.format */.V2.format((rewardsBalances === null || rewardsBalances === void 0 ? void 0 : (ref6 = rewardsBalances.balance) === null || ref6 === void 0 ? void 0 : ref6.pointPlay) || 0)}</span>
              </div>`,
                                    border: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(StyledGridColumn, {
                                "data-testid": "express-comps",
                                cols: viewport.minLg ? 4 : 12,
                                className: viewport.minLg ? '' : 'margin-bottom-16',
                                children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.IconText, {
                                    title: "Express Comps™",
                                    description: "The fastest and most convenient way for you to comp yourself at MGM Resorts International hotels, dining outlets, or entertainment venues.",
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        alt: "ExpressComps",
                                        src: "/account/images/dining.svg"
                                    }),
                                    footerTextHTML: `<div class='widget-balance'>
                <strong>Balance:</strong> <span>${formatter/* currencyFormatter.format */.oB.format((rewardsBalances === null || rewardsBalances === void 0 ? void 0 : (ref7 = rewardsBalances.balance) === null || ref7 === void 0 ? void 0 : ref7.expressComps) || 0)}</span>
              </div>`,
                                    border: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(StyledGridColumn, {
                                "data-testid": "holiday-shoppe",
                                cols: viewport.minLg ? 4 : 12,
                                className: viewport.minLg ? '' : 'margin-bottom-16',
                                children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.IconText, {
                                    title: "Holiday Gift Shoppe Points",
                                    description: `Holiday Gift Shoppe is Las Vegas' premiere shopping spree where you can redeem Gift Points for exceptional merchandise: Gift Cards, FREEPLAY, and more!`,
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        alt: "GiftPoints",
                                        src: "/account/images/holiday.svg"
                                    }),
                                    footerTextHTML: `<div class='widget-balance'>
                <strong>Balance:</strong> <span>${formatter/* numberFormatter.format */.V2.format((rewardsBalances === null || rewardsBalances === void 0 ? void 0 : (ref8 = rewardsBalances.balance) === null || ref8 === void 0 ? void 0 : ref8.giftPoints) || 0)}</span>
              </div>`,
                                    border: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(StyledGridColumn, {
                                "data-testid": "slot-dollars",
                                cols: viewport.minLg ? 4 : 12,
                                className: viewport.minLg ? '' : 'margin-bottom-16',
                                style: {
                                    marginTop: viewport.minLg ? 32 : 0
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.IconText, {
                                    title: "Borgata Slot Dollars \xa9 + Bonus Slot Dollars",
                                    description: "Unique to the Borgata property. Earn slot dollars at the slot on property. These can also convert to future slot play.",
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        alt: "Borgata slot dollars",
                                        src: "/account/images/slots.svg"
                                    }),
                                    footerTextHTML: `<div class='widget-balance'>
                <strong>Balance:</strong> <span>${formatter/* currencyFormatterWithNoFractions.format */.Pe.format(rewardsBalances === null || rewardsBalances === void 0 ? void 0 : (ref9 = rewardsBalances.balance) === null || ref9 === void 0 ? void 0 : ref9.slotDollars)}</span>
              </div>`,
                                    border: true
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridRow, {
                        style: {
                            marginTop: viewport.minLg ? 32 : 16
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(StyledGridColumn, {
                            "data-testid": "free-play",
                            cols: 12,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Freeplay, {
                                title: "FREEPLAY\xae",
                                description: "As an M life Rewards member, you qualify for exclusive FREEPLAY promotions and offers from participating casinos. Slide your card into your favorite slot machine to view your current FREEPLAY balance – then play on the house. It’s like electronic cash that you can use to play all the slots you love!",
                                icon: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    alt: "FreePlay",
                                    src: "/account/images/freeplay.svg"
                                }),
                                border: true,
                                ...totalBalance !== undefined ? {
                                    totalBalance: formatter/* numberFormatter.format */.V2.format(totalBalance || 0)
                                } : {
                                },
                                propertyBalance: propertyBalance
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(wcl_core_.GridRow, {
                        "data-testid": "authored-text",
                        style: {
                            marginTop: 40
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(StyledGridColumn, {
                                cols: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Heading35, {
                                    children: "M life Reward Rules"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(StyledGridColumn, {
                                cols: 12,
                                style: {
                                    marginTop: 16
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Text16, {
                                    children: "Yes, There are a few rules to follow. Click below for full program rules."
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(StyledGridColumn, {
                                cols: 12,
                                style: {
                                    marginTop: 32
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Button, {
                                    "data-testid": "learn-more",
                                    variant: "primary",
                                    shape: "square",
                                    size: "small",
                                    label: "Learn more",
                                    onClick: trackRewardRulesClick,
                                    href: "https://www.mgmresorts.com/en/mlife-rewards-program/program-rules.html"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Modal, {
                closeOnBackdropClick: true,
                closeOnEsc: true,
                ...props,
                open: modalOpen,
                onClose: ()=>setModalOpen(false)
                ,
                children: /*#__PURE__*/ jsx_runtime_.jsx(MlifeAllTierBenefits, {
                    allTierBenefits: props.allTierBenefits,
                    currentTier: rewardsBalances === null || rewardsBalances === void 0 ? void 0 : (ref10 = rewardsBalances.tier) === null || ref10 === void 0 ? void 0 : ref10.currentTier
                })
            })
        ]
    }));
};
const MlifeAllTierBenefits = ({ allTierBenefits , currentTier  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Heading45, {
                "data-testid": "tier-benefits",
                children: "M life Tier Benefits"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridContainer, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridRow, {
                    children: allTierBenefits.length && allTierBenefits.map((tier, index)=>{
                        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledGridColumn, {
                            "data-testid": "current-tier",
                            cols: 3,
                            className: `tier-card ${currentTier === tier.tierName ? 'current-tier' : ''}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    alt: "tier-img",
                                    className: "tier-img",
                                    src: `/account/images/${tier.tierName.toLowerCase()}-d.svg`
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Text20, {
                                    className: "font-weight-600 margin-bottom-8",
                                    children: tier.tierName
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Text16, {
                                    children: tier.points
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(wcl_core_.Text16, {
                                    className: "tier-content",
                                    children: [
                                        index === 0 ? 'Includes:' : `Includes everything from ${allTierBenefits[index - 1].tierName} Tier, plus:`,
                                        tier.benefits.length && tier.benefits.map((benefit, benefitIndex)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "tier-content-item",
                                                children: benefit
                                            }, benefitIndex)
                                        )
                                    ]
                                })
                            ]
                        }, index));
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Button, {
                style: {
                    display: 'flex',
                    margin: 'auto',
                    width: 'fit-content',
                    marginTop: 80,
                    marginBottom: 32
                },
                shape: "inline",
                size: "inherit",
                label: "Full Tier Benefits",
                href: "https://www.mgmresorts.com/en/mlife-rewards-program/tiers.html"
            })
        ]
    }));
};
/* harmony default export */ const MlifeRewards_MlifeRewards = (MlifeRewards);
MlifeRewards.propTypes = {
};



/***/ })

};
;