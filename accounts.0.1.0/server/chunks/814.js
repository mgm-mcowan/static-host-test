"use strict";
exports.id = 814;
exports.ids = [814];
exports.modules = {

/***/ 7814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Dashboard": () => (/* binding */ Dashboard),
  "default": () => (/* binding */ Dashboard_Dashboard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mgmresorts/wcl-core"
var wcl_core_ = __webpack_require__(1771);
// EXTERNAL MODULE: external "@mgmresorts/wcl-styled"
var wcl_styled_ = __webpack_require__(3294);
// EXTERNAL MODULE: external "next-shared-logic"
var external_next_shared_logic_ = __webpack_require__(2587);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/common/analytics/useClickEvent.ts + 1 modules
var useClickEvent = __webpack_require__(7474);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(825);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);
;// CONCATENATED MODULE: ./src/common/api/useGetHotelOffers.tsx


const GET_HOTEL_OFFERS = (external_graphql_tag_default())`
  query GetHotelOffers($region: String, $propertyId: String!, $onlyPoPrograms: Boolean) {
    customerRoomOffers(region: $region, propertyId: $propertyId, onlyPoPrograms: $onlyPoPrograms) {
      corporateRatePlanDetails {
        id
        name
        images {
          tile {
            url
          }
        }
        descriptions {
          long
        }
      }
      type
    }
  }
`;
const useGetHotelOffers = (variables)=>(0,client_.useQuery)(GET_HOTEL_OFFERS, {
        ssr: false,
        variables: {
            ...variables
        }
    })
;

// EXTERNAL MODULE: ./src/common/types/GenericErrorMessage.ts
var GenericErrorMessage = __webpack_require__(8991);
;// CONCATENATED MODULE: ./src/config/hyatt-tier-codes.ts
const HyattTierCodes = [
    'tier_hyatt_Success'
];
const HyattTierMessages = {
    tier_hyatt_Success: {
        description: 'Thank you for providing your World of Hyatt tier information. Please allow up to 24 hours for your M life Rewards account to update.',
        primaryActionLabel: 'Got it'
    }
};

// EXTERNAL MODULE: ./src/next/router.ts
var router = __webpack_require__(6292);
;// CONCATENATED MODULE: ./src/components/HotelOffers/HotelOffers.style.tsx

const StyledWrapper = wcl_styled_.styled.div`
  margin-top: ${wcl_styled_.$spacingXtraLarge};

  ${wcl_styled_.media.minMd`
    margin-top: 56px;
  `}

  ${wcl_styled_.media.minLg`
    margin-top: 40px;
  `}
`;
const StyledHeadingWrapper = wcl_styled_.styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${wcl_styled_.$spacingLarge};

  ${wcl_styled_.media.md`
    margin-bottom: ${wcl_styled_.$spacingMedium}
  `}
`;
const StyledOffersWrapper = wcl_styled_.styled.div`
  display: flex;

  ${wcl_styled_.media.maxSm`
    overflow-x: scroll;
  `}
`;
const StyledOffer = wcl_styled_.styled.div`
  margin-right: ${wcl_styled_.$spacingMedium};
  max-width: 264px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  min-width: 215px;

  ${wcl_styled_.media.md`
    min-width: 300px;
  `}

  ${wcl_styled_.media.minLg`
    margin-right: ${wcl_styled_.$spacingXtraLarge};
  `}

  &:last-child {
    margin-right: 0;
  }
`;
const StyledButtonWrapper = wcl_styled_.styled.div`
  text-align: center;
  margin-top: 40px;
  max-width: 856px;
`;

;// CONCATENATED MODULE: ./src/components/HotelOffers/HotelOffersData.tsx
const offerCardData = {
    spacing: 'medium',
    imageAspectRatio: '16 / 9',
    subtitle: 'Multiple Resorts',
    actions: [
        {
            variant: 'primary',
            label: 'Book Offer',
            shape: 'square',
            size: 'large'
        }, 
    ]
};

;// CONCATENATED MODULE: ./src/components/HotelOffers/HotelOffers.tsx







const HotelOffers = ({ offers  })=>{
    const { maxLg  } = (0,external_react_.useContext)(wcl_core_.ViewportContext);
    const { push  } = (0,router/* useRouter */.t)();
    const trackClickEvent = (0,useClickEvent/* useClickEvent */.v)();
    const modifiedOffers = offers.slice(0, 3).map(({ type , corporateRatePlanDetails  }, index)=>{
        var ref;
        const { id , name: title , descriptions , images  } = corporateRatePlanDetails;
        const url = images === null || images === void 0 ? void 0 : (ref = images.tile) === null || ref === void 0 ? void 0 : ref.url;
        const description = descriptions === null || descriptions === void 0 ? void 0 : descriptions.long;
        const bookOfferUrl = type === 'PROGRAM' ? `/hotel-offer-id/${id}` : `/redirect/hotel-multi-offer-id/${id}`;
        const bookOfferAction = [
            {
                ...offerCardData.actions[0],
                onClick: ()=>{
                    trackClickEvent({
                        eventName: 'account - book offer - click',
                        title: 'book offer',
                        eventAttributes: {
                            numberOfOffers: offers.length,
                            offerSelected: title,
                            offerSelectPosition: `${index + 1} of 3`,
                            propertyName: 'Multiple Resorts',
                            offerDetails: description
                        }
                    });
                    setTimeout(()=>{
                        push({
                            pathname: bookOfferUrl
                        });
                    }, 200);
                }
            }, 
        ];
        return {
            ...offerCardData,
            actions: bookOfferAction,
            bookOfferUrl,
            title,
            description,
            image: {
                url: `${"undefined/static"}${url}`
            }
        };
    });
    const trackViewAllOffersClick = ()=>{
        trackClickEvent({
            eventName: `account - view all offers - click`,
            title: 'view all offers',
            eventAttributes: {
                numberOfOffers: offers.length
            }
        });
        setTimeout(()=>{
            window.location.href = 'https://www.mgmresorts.com/en/offers.html';
        }, 200);
    };
    const ButtonEl = /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Button, {
        "data-testid": "view-all-offers-cta",
        className: "font-weight-500",
        role: "link",
        shape: "inline",
        size: "inherit",
        label: maxLg ? 'View All' : 'View All Offers',
        onClick: trackViewAllOffersClick
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledWrapper, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(StyledHeadingWrapper, {
                "data-testid": "section-heading",
                "data-view-offers-url": "https://www.mgmresorts.com/en/offers.html",
                children: maxLg ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Heading20, {
                            children: "Hotel Offers"
                        }),
                        ButtonEl
                    ]
                }) : /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Heading35, {
                    children: "Hotel Offers"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(StyledOffersWrapper, {
                "data-testid": "offer-wrapper",
                children: modifiedOffers.map((offer, index)=>{
                    return(/*#__PURE__*/ jsx_runtime_.jsx(StyledOffer, {
                        "data-testid": "offer-section",
                        "data-offer-url": offer.bookOfferUrl,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Card, {
                            ...offer
                        })
                    }, index));
                })
            }),
            !maxLg && /*#__PURE__*/ jsx_runtime_.jsx(StyledButtonWrapper, {
                children: ButtonEl
            })
        ]
    }));
};
HotelOffers.displayName = 'HotelOffers';

// EXTERNAL MODULE: external "@mgmresorts/wcl-utils"
var wcl_utils_ = __webpack_require__(4753);
;// CONCATENATED MODULE: ./src/common/api/useGetLastTripEarnings.tsx


const GET_LAST_TRIP_EARNINGS = (external_graphql_tag_default())`
  query GetLastTripEarnings($siteId: String!) {
    me {
      memberships {
        ... on MlifeMembership {
          playerLastTripEarnings(siteId: $siteId) {
            tripStartDate
            tripEndDate
            ecAmount
            slotDollarAmount
          }
        }
      }
    }
  }
`;
const useGetLastTripEarnings = (variables)=>(0,client_.useQuery)(GET_LAST_TRIP_EARNINGS, {
        ssr: false,
        variables: {
            ...variables
        }
    })
;

// EXTERNAL MODULE: ./src/utils/formatter.ts
var formatter = __webpack_require__(6038);
;// CONCATENATED MODULE: ./src/common/theme/colors.ts
const $dustyGrey = '#969696';
const $royalBlue = '#6c49f4';

;// CONCATENATED MODULE: ./src/components/LastTripStatement/LastTripStatement.style.tsx



const StyledHeading = (0,wcl_styled_.styled)(wcl_core_.Heading28)`
  margin-top: ${wcl_styled_.$spacingXSmall};
`;
const StyledDescription = (0,wcl_styled_.styled)(wcl_core_.Text16)`
  font-weight: normal;
  color: ${wcl_styled_.$dark};
  margin: ${wcl_styled_.$spacingXSmall} 0;
`;
const StyledDates = wcl_styled_.styled.span`
  color: ${$royalBlue};
`;
const StyledLine = wcl_styled_.styled.div`
  height: 1px;
  width: 100%;
  background-color: ${wcl_styled_.$lightestGrey};
  margin: ${wcl_styled_.$spacingLarge} auto 40px;
`;
const StyledButton = (0,wcl_styled_.styled)(wcl_core_.Button)`
  margin-top: ${wcl_styled_.$spacingLarge};
`;
const StyledCardContainer = wcl_styled_.styled.div`
  display: flex;
  margin-top: ${wcl_styled_.$spacingMedium};
`;
const StyledCard = wcl_styled_.styled.div`
  border: 1px solid ${wcl_styled_.$lighestGrey3};
  min-width: 230px;
  min-height: 218px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:first-child {
    margin-right: 20px;
  }
`;
const StyledText16 = (0,wcl_styled_.styled)(wcl_core_.Text16)`
  color: ${$dustyGrey};
`;
const StyledText18 = (0,wcl_styled_.styled)(wcl_core_.Text)`
  font-size: 18px;
  margin-bottom: ${wcl_styled_.$spacingXSmall};

  &.amount-color {
    color: ${$royalBlue};
  }
`;
const StyledLoaderWrapper = wcl_styled_.styled.div`
  padding: 40px;
  display: flex;
  justify-content: center;
`;

;// CONCATENATED MODULE: ./src/components/LastTripStatement/LastTripStatement.tsx

/* eslint-disable @next/next/no-img-element */ 





const LastTripStatement = ()=>{
    // TODO: Need to get the dynamic site id and replace here
    const { data , loading  } = useGetLastTripEarnings({
        siteId: '19'
    });
    const { 0: lastTripData , 1: setLastTripData  } = (0,external_react_.useState)();
    (0,external_react_.useEffect)(()=>{
        var ref, ref1;
        if (data === null || data === void 0 ? void 0 : (ref = data.me) === null || ref === void 0 ? void 0 : (ref1 = ref.memberships) === null || ref1 === void 0 ? void 0 : ref1.length) {
            const { memberships  } = data.me;
            const { playerLastTripEarnings  } = memberships[0];
            setLastTripData(playerLastTripEarnings);
        }
    }, [
        data
    ]);
    if (loading) {
        return(/*#__PURE__*/ jsx_runtime_.jsx(StyledLoaderWrapper, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.LoadingSpinner, {
            })
        }));
    }
    return lastTripData ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "last-trip-statement",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(StyledHeading, {
                children: "Last trip statement"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledDescription, {
                children: [
                    "On your last Borgata visit",
                    ' ',
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledDates, {
                        children: [
                            (0,wcl_utils_.formatDate)(lastTripData.tripStartDate, {
                                monthFormat: 'MMMDDYYYY'
                            }),
                            " -",
                            ' ',
                            (0,wcl_utils_.formatDate)(lastTripData.tripEndDate, {
                                monthFormat: 'MMMDDYYYY'
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledCardContainer, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledCard, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                alt: "tier-img",
                                className: "tier-img",
                                src: `/account/images/dining.svg`
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledText18, {
                                className: `ec-amount ${lastTripData.ecAmount > 0 ? 'amount-color' : ''}`,
                                children: [
                                    lastTripData.ecAmount ? '+' : '',
                                    formatter/* currencyFormatter.format */.oB.format(lastTripData.ecAmount || 0)
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(StyledText16, {
                                children: "Express Comps™"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledCard, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                alt: "tier-img",
                                className: "tier-img",
                                src: `/account/images/slots.svg`
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledText18, {
                                className: `dollar-amount ${lastTripData.slotDollarAmount > 0 ? 'amount-color' : ''}`,
                                children: [
                                    lastTripData.slotDollarAmount ? '+' : '',
                                    formatter/* currencyFormatter.format */.oB.format(lastTripData.slotDollarAmount || 0)
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(StyledText16, {
                                children: "Borgata Slot Dollars \xa9"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(StyledButton, {
                "data-testid": "view-rewards-balance",
                variant: "primary",
                shape: "square",
                size: "large",
                label: "View rewards balance",
                href: "/account/borgata/rewards"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(StyledLine, {
            })
        ]
    }) : null;
};
LastTripStatement.displayName = 'LastTripStatement';

;// CONCATENATED MODULE: ./src/components/Dashboard/Dashboard.style.tsx


const StyledProductPromoCard = (0,wcl_styled_.styled)(wcl_core_.ProductPromoCard)`
  margin-bottom: ${wcl_styled_.$spacingXtraLarge};

  .member__message-description {
    color: ${wcl_styled_.$white};

    * {
      margin: 0;
    }
  }
`;
const StyledDivider = wcl_styled_.styled.div`
  background: ${(p)=>p.theme.colors.lightGrey
};
  height: 1px;
  margin: ${wcl_styled_.$spacingLarge} 0 0;

  ${wcl_styled_.media.minLg`
    margin-top: ${wcl_styled_.$spacingXtraLarge};
  `}
`;
const StyledFeaturedItemContainer = wcl_styled_.styled.div`
  padding-top: ${wcl_styled_.$spacingMedium};

  ${wcl_styled_.media.minLg`
    padding: 80px 10px 0;
  `}
`;
const Dashboard_style_StyledLoaderWrapper = wcl_styled_.styled.div`
  padding: 40px;
  display: flex;
  justify-content: center;
`;

;// CONCATENATED MODULE: ./src/components/Dashboard/Dashboard.tsx









// import { ConfigContext } from '../../common/ui/ConfigContext/ConfigContext';





// import { BookingWidgetWrapper } from '../Trips/BookingWidget/BookingWidgetWrapper';
// import { FeaturedTrip } from '../Trips/FeaturedTrip';
// Migration
const BookingWidgetWrapper = (0,external_next_shared_logic_.federatedComponent)('trips', './BookingWidgetWrapper');
const FeaturedTrip = (0,external_next_shared_logic_.federatedComponent)('trips', './FeaturedTrip');
const Dashboard = ({ staticSections , regions , memberMessage , useErrorMessage , ConfigContext  })=>{
    const trackClickEvent = (0,useClickEvent/* useClickEvent */.v)();
    const { push , query  } = (0,router/* useRouter */.t)();
    const { errorCode  } = query || {
        errorCode: ''
    };
    const { 0: showHyattTierModal , 1: setShowHyattTierModal  } = (0,external_react_.useState)(false);
    const { property  } = (0,external_react_.useContext)(ConfigContext);
    const { data: offersList , loading: loadingOffers , error: offersError ,  } = useGetHotelOffers({
        onlyPoPrograms: false,
        propertyId: (0,wcl_styled_.getPropertyIdByPropertySlug)(property),
        region: 'ALL'
    });
    const { 0: offers , 1: setOffers  } = (0,external_react_.useState)([]);
    const { setErrorMessageById  } = useErrorMessage();
    if (offersError) setErrorMessageById(GenericErrorMessage/* GenericErrorMessageId.UnknownError */.d.UnknownError);
    (0,external_react_.useEffect)(()=>{
        if (offersList && (offersList.customerRoomOffers || []).length) {
            const offersData = offersList.customerRoomOffers.filter((offer)=>!!offer.corporateRatePlanDetails
            );
            setOffers(offersData);
        }
    }, [
        offersList
    ]);
    (0,external_react_.useEffect)(()=>{
        setShowHyattTierModal(HyattTierCodes.includes(errorCode));
    }, [
        errorCode
    ]);
    const hyattTierModalProps = (0,external_react_.useMemo)(()=>{
        const hyattTierMessage = HyattTierMessages[errorCode];
        return {
            description: (hyattTierMessage === null || hyattTierMessage === void 0 ? void 0 : hyattTierMessage.description) || '',
            primaryAction: {
                label: (hyattTierMessage === null || hyattTierMessage === void 0 ? void 0 : hyattTierMessage.primaryActionLabel) || ''
            },
            onDismiss: ()=>setShowHyattTierModal(false)
            ,
            onSubmit: ()=>setShowHyattTierModal(false)
        };
    }, [
        errorCode,
        setShowHyattTierModal
    ]);
    const addClickTracker = (staticSection, analyticsCallback, title)=>{
        var ref;
        if (!(staticSection === null || staticSection === void 0 ? void 0 : (ref = staticSection.mainAction) === null || ref === void 0 ? void 0 : ref.url) || !analyticsCallback) return staticSection;
        const { url  } = staticSection.mainAction;
        const onClick = ()=>{
            analyticsCallback();
            setTimeout(()=>{
                if (title.toLowerCase() === 'offers') {
                    window.location.href = url;
                } else {
                    push({
                        pathname: url
                    });
                }
            }, 200);
        };
        return {
            ...staticSection,
            mainAction: {
                ...staticSection.mainAction,
                url: undefined,
                onClick
            }
        };
    };
    const trackStaticSectionClickEvent = (section)=>trackClickEvent({
            eventName: `account - view my ${section} - click`,
            title: `view my ${section}`
        })
    ;
    const staticSectionClickTrackerMap = {
        'M life Rewards new': ()=>trackStaticSectionClickEvent('rewards')
        ,
        Offers: ()=>trackStaticSectionClickEvent('offers')
    };
    const modifiedStaticSections = offers.length ? staticSections.filter((section)=>section.title !== 'Offers'
    ) : staticSections.map((section)=>addClickTracker(section, staticSectionClickTrackerMap[section.title], section.title)
    );
    const handlePromoCardOnClick = ()=>{
        var ref, ref1;
        trackClickEvent({
            eventName: 'account - home - hero message',
            title: (memberMessage === null || memberMessage === void 0 ? void 0 : (ref = memberMessage.messagePrimaryCTADisplayText) === null || ref === void 0 ? void 0 : ref.toLowerCase()) || '',
            notificationMessage: memberMessage === null || memberMessage === void 0 ? void 0 : (ref1 = memberMessage.messageDescription) === null || ref1 === void 0 ? void 0 : ref1.toString()
        });
        if (memberMessage === null || memberMessage === void 0 ? void 0 : memberMessage.messagePrimaryCTATarget) {
            window.location.href = `https://static.mgmresorts.com${memberMessage.messagePrimaryCTATarget}`;
        }
    };
    const memberMessageDescription = ()=>{
        return `<div class='member__message-description'>${memberMessage === null || memberMessage === void 0 ? void 0 : memberMessage.messageDescription}</div>`;
    };
    // eslint-disable-next-line @next/next/no-img-element
    const memberMessageIcon = ()=>{
        return(/*#__PURE__*/ jsx_runtime_.jsx("img", {
            alt: "message-icon",
            src: `https://static.mgmresorts.com${memberMessage === null || memberMessage === void 0 ? void 0 : memberMessage.messageIcon}`
        }));
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.ConfirmModal, {
                open: showHyattTierModal,
                ...hyattTierModalProps
            }),
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
            property === 'borgata' && /*#__PURE__*/ jsx_runtime_.jsx(LastTripStatement, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BookingWidgetWrapper, {
                regions: regions,
                renderPerpetualOffer: true,
                analyticsEventPrefix: "acct",
                analyticsEventName: "account – home – view rooms",
                // Migration
                useErrorMessage: useErrorMessage,
                ConfigContext: ConfigContext
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(StyledDivider, {
            }),
            loadingOffers && /*#__PURE__*/ jsx_runtime_.jsx(Dashboard_style_StyledLoaderWrapper, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.LoadingSpinner, {
                })
            }),
            !loadingOffers && offers.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(HotelOffers, {
                offers: offers
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: modifiedStaticSections.map((staticSection, index)=>{
                    return(/*#__PURE__*/ jsx_runtime_.jsx(StyledFeaturedItemContainer, {
                        "data-testid": staticSection.testId,
                        children: staticSection.title === 'Trips' ? // <div>Trip :)</div>
                        /*#__PURE__*/ jsx_runtime_.jsx(FeaturedTrip, {
                            title: staticSection.title,
                            description: staticSection.description,
                            action: staticSection.mainAction,
                            imageUrl: staticSection.imageUrl,
                            // Migration
                            useErrorMessage: useErrorMessage,
                            ConfigContext: ConfigContext
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.FeaturedItem, {
                            ...staticSection
                        })
                    }, index));
                })
            })
        ]
    }));
};
/* harmony default export */ const Dashboard_Dashboard = (Dashboard);
Dashboard.defaultProps = {
    staticSections: []
};
Dashboard.propTypes = {
    staticSections: (external_prop_types_default()).array
};
Dashboard.displayName = 'Dashboard';


/***/ })

};
;