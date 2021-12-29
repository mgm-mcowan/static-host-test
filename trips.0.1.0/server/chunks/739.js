"use strict";
exports.id = 739;
exports.ids = [739];
exports.modules = {

/***/ 4739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "FeaturedTrip": () => (/* binding */ FeaturedTrip),
  "default": () => (/* binding */ FeaturedTrip_FeaturedTrip)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mgmresorts/wcl-core"
var wcl_core_ = __webpack_require__(1771);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/common/analytics/useClickEvent.ts + 1 modules
var useClickEvent = __webpack_require__(7474);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: ./src/common/api/useGetTrips.tsx

var TripsQueryType1;

(function(TripsQueryType) {
    TripsQueryType["All"] = 'ALL';
    TripsQueryType["Future"] = 'FUTURE';
    TripsQueryType["Past"] = 'PAST';
})(TripsQueryType1 || (TripsQueryType1 = {
}));
const GET_TRIPS = client_.gql`
  query getTrips($tripsFilter: CustomerTripSearchFilter) {
    me {
      id
      trips(tripSearchFilter: $tripsFilter) {
        tripId
        tripName
        location
        startDate
        endDate
        productsMetadata {
          bookingDomain
          confirmationNumber
          propertyId
          status
          hidden
          numGuests
          product {
            __typename
            ... on RoomProductDetails {
              isOTA
              operaState
              checkInDate
              checkOutDate
              roomDetails {
                name
                property {
                  regionName
                  name
                }
                images {
                  overview {
                    url
                  }
                }
              }
            }

            ... on DiningProductDetails {
              restaurantId
              reservationDateTime
              restaurantDetails {
                name
                property {
                  name
                  regionName
                }
                images {
                  overview {
                    url
                  }
                }
              }
            }

            ... on ShowProductDetails {
              showId
              showEventId
              eventDateTime
              showDetails {
                name
                property {
                  name
                  regionName
                }
                images {
                  overview {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
const useGetTrips = (vars)=>(0,client_.useQuery)(GET_TRIPS, {
        variables: {
            ...vars
        }
    })
;
const useGetTripsLazy = ()=>useLazyQuery(GET_TRIPS, {
        ssr: false
    })
;

;// CONCATENATED MODULE: ./src/common/types/GenericErrorMessage.ts
var GenericErrorMessageId1;

(function(GenericErrorMessageId) {
    GenericErrorMessageId["UnknownError"] = 'unknown-error';
    GenericErrorMessageId["ContactMemberServices"] = 'contact-member-services';
    GenericErrorMessageId["ContactReservationsMgmri"] = 'contact-reservations-mgmri';
})(GenericErrorMessageId1 || (GenericErrorMessageId1 = {
}));

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/next/router.ts
// eslint-disable-next-line no-restricted-imports


// Router wrapper around NextJs router. This is because if we are on localhost, we need to include
// the property slug when redirecting to a page. However, if the application is running on deployed
// environment then Akamai takes care of hiding the property slug.
// The wrapper exposes a push and replace function that centralizes this logic.
function useRouter() {
    const nextRouter = (0,router_.useRouter)();
    const replace = external_react_default().useCallback((url)=>{
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
    const push = external_react_default().useCallback((url)=>{
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
    const router = external_react_default().useMemo(()=>({
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

// EXTERNAL MODULE: ./src/common/types/Trip.ts
var Trip = __webpack_require__(6274);
// EXTERNAL MODULE: ./src/components/helpers.ts + 1 modules
var helpers = __webpack_require__(8134);
// EXTERNAL MODULE: external "@mgmresorts/wcl-styled"
var wcl_styled_ = __webpack_require__(3294);
;// CONCATENATED MODULE: ./src/components/Trips/TripCard/TripCard.style.tsx


const StyledContainer = wcl_styled_.styled.div`
  margin-top: ${wcl_styled_.$spacingXtraLarge};

  ${wcl_styled_.media.md`
    margin-top: 2.75rem;
  `}
`;
const StyledHeading = (0,wcl_styled_.styled)(wcl_core_.Heading28)`
  margin-bottom: ${wcl_styled_.$spacingXtraLarge};
`;

;// CONCATENATED MODULE: ./src/components/Trips/TripCard/TripCardContent.tsx
const tripCardContent = {
    buttonHideDetailsLabel: '',
    buttonShowDetailsLabel: '',
    reservationClickLabel: '',
    reservationClickConfirmationModal: {
        title: '',
        description: '',
        primaryButtonLabel: '',
        secondaryButtonLabel: ''
    },
    failureConfirmationModal: {
        title: '',
        description: '',
        primaryButtonLabel: '',
        secondaryButtonLabel: ''
    },
    reservationConfirmationNumberLabel: '',
    numberOfGuestsLabel: 'Guests',
    secondaryGuestNameLabel: '',
    secondaryGuestReservationNumberLabel: '',
    startDateLabel: 'Check In',
    endDateLabel: 'Check Out'
};

;// CONCATENATED MODULE: ./src/components/Trips/TripCard/createParams.tsx






const getActionItems = ({ isPast , action  })=>[
        {
            action,
            actionLabel: 'View Itinerary',
            shape: isPast ? 'inline' : 'pill',
            icon: isPast && /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.ForwardIcon, {
            }),
            size: 'small',
            variant: 'primary'
        }, 
    ]
;
const getRoomDetails = (reservations)=>reservations.map((res)=>({
            name: res.product.roomDetails.name,
            numberOfGuests: res.numGuests
        })
    )
;
const createReservationThumbnailProps = ({ reservations , staticUrl , isMobile  })=>{
    if (reservations.length < 2) return;
    const nonRoomReservations = reservations.filter((r)=>!(0,Trip/* isRoomMetadata */.Gm)(r)
    );
    if (nonRoomReservations.length === 0) return;
    const sortedNonRoomReservations = (0,helpers/* sortNonRoomReservationsByDate */.ar)(nonRoomReservations);
    const roomReservations = reservations.filter(Trip/* isRoomMetadata */.Gm);
    let startThumbnails = 0;
    let endThumbnails = 4;
    /**
   * If there are no room reservations,
   * then we want to skip the first reservation in
   * the thumbnails list because we will already be showing it
   * at the top of the card.
   */ if (roomReservations.length === 0) {
        startThumbnails += 1;
        endThumbnails += 1;
    }
    if (isMobile) {
        endThumbnails -= 1;
    }
    const displayedThumbs = sortedNonRoomReservations.slice(startThumbnails, endThumbnails);
    const hiddenReservations = sortedNonRoomReservations.slice(endThumbnails);
    // eslint-disable-next-line consistent-return
    return {
        sectionMessage: {
            labelHTML: hiddenReservations.length > 0 ? `+ ${hiddenReservations.length} more` : '',
            align: 'right'
        },
        image: displayedThumbs.map((res)=>{
            return {
                url: `${staticUrl}${res.product[(0,helpers/* getReservationDetailsKey */.S$)(res)].images.overview.url}`
            };
        })
    };
};
const createTripCardContent = (reservation)=>{
    if ((0,Trip/* isShowMetadata */.UD)(reservation)) {
        return {
            ...tripCardContent,
            numberOfGuestsLabel: 'Tickets'
        };
    }
    return tripCardContent;
};
const createRoomReservationCardProps = ({ trip , isPast , staticUrl , isMobile , onClick ,  })=>{
    const { tripId , location , productsMetadata: reservations  } = trip;
    const reservation = (0,helpers/* getReservationsOnDisplay */.Yp)(trip)[0];
    const roomReservations = reservations.filter(Trip/* isRoomMetadata */.Gm);
    const content = createTripCardContent(reservation);
    const reservationThumbnails = createReservationThumbnailProps({
        reservations,
        staticUrl,
        isMobile
    });
    return {
        itemId: tripId,
        regionTitle: location,
        content,
        roomDetails: (0,Trip/* isRoomMetadata */.Gm)(reservation) && getRoomDetails(roomReservations),
        /**
     * restaurantDetails prop is inappropriately named
     * and applies to BOTH dining and show reservations
     */ restaurantDetails: !(0,Trip/* isRoomMetadata */.Gm)(reservation) && (0,helpers/* getRestaurantDetails */.Li)(reservation),
        imageSrc: `${staticUrl}${(0,helpers/* getReservationImageUrl */.d5)(reservation)}`,
        resortTitle: (0,helpers/* getReservationResortTitle */.z0)(reservation),
        actionItems: getActionItems({
            isPast,
            tripId,
            action: onClick
        }),
        stayDates: (0,helpers/* getReservationStayDates */.cA)({
            reservation,
            isPast
        }),
        reservationThumbnails
    };
};

;// CONCATENATED MODULE: ./src/components/Trips/TripCard/TripCard.tsx





// import { ConfigContext } from '../../../common/ui/ConfigContext/ConfigContext';




const TripCard = ({ trip , isPast =false , ConfigContext  })=>{
    const router = useRouter();
    const viewport = (0,external_react_.useContext)(wcl_core_.ViewportContext);
    const { staticUrl  } = (0,external_react_.useContext)(ConfigContext);
    const trackClickEvent = (0,useClickEvent/* useClickEvent */.v)('trips');
    const onClick = ()=>{
        const reservationsOnDisplay = (0,helpers/* getReservationsOnDisplay */.Yp)(trip);
        if (!(reservationsOnDisplay === null || reservationsOnDisplay === void 0 ? void 0 : reservationsOnDisplay[0])) return;
        const reservation = reservationsOnDisplay[0];
        const eventAttributes = {
            propertyName: (0,helpers/* getPropertyNameFromReservation */.Aj)(reservation),
            reservationNumber: reservation.confirmationNumber,
            reservationType: (0,helpers/* getReservationType */.rd)(reservation),
            daysBeforeArrival: (0,helpers/* passZero */.bS)((0,helpers/* getNumberOfDaysBeforeArrival */.W$)(reservation))
        };
        if ((0,Trip/* isRoomMetadata */.Gm)(reservation)) eventAttributes['roomType'] = reservation.product.roomDetails.name;
        if ((0,Trip/* isShowMetadata */.UD)(reservation)) eventAttributes['showName'] = reservation.product.showDetails.name;
        if ((0,Trip/* isDiningMetadata */.DV)(reservation)) eventAttributes['restaurantName'] = reservation.product.restaurantDetails.name;
        trackClickEvent({
            eventName: 'trips - view itinerary - click',
            title: 'view itinerary',
            eventAttributes
        });
        setTimeout(()=>{
            router.push({
                pathname: `/itinerary/`,
                query: {
                    trip_id: trip.tripId
                }
            });
        }, 400);
    };
    const reservationCardProps = createRoomReservationCardProps({
        trip,
        isPast,
        staticUrl,
        isMobile: !viewport.minMd,
        onClick
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx(StyledContainer, {
        "data-testid": "trip-card",
        children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.RoomReservationCard, {
            ...reservationCardProps
        })
    }));
};

;// CONCATENATED MODULE: ./src/components/Trips/FeaturedTrip/FeaturedTrip.style.tsx


const FeaturedTrip_style_StyledHeading = (0,wcl_styled_.styled)(wcl_core_.Heading35)`
  margin-bottom: ${wcl_styled_.$spacingSmall};
  font-size: ${wcl_styled_.$heading5};
  cursor: pointer;

  ${wcl_styled_.media.minMd`
    font-size: 35px;
    margin-bottom: 14px;
  `};
`;
const StyledText = (0,wcl_styled_.styled)(wcl_core_.Text16)`
  font-weight: 400;
  line-height: 1.5;
`;
const StyledTextContainer = wcl_styled_.styled.div`
  margin-bottom: ${wcl_styled_.$spacingXtraLarge};
`;
const StyledButtonContainer = wcl_styled_.styled.div`
  margin: ${wcl_styled_.$spacingXSmallSmall};
`;
const StyledImageContainer = wcl_styled_.styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
  cursor: pointer;
`;
const StyledGridRow = (0,wcl_styled_.styled)(wcl_core_.GridRow)`
  display: flex;
  flex-direction: column;
  margin: 0;

  ${wcl_styled_.media.minMd`
    flex-direction: row;
  `}
`;
const StyledGridColumn1 = (0,wcl_styled_.styled)(wcl_core_.GridColumn)`
  flex: 1;
  max-width: none;
  margin-top: ${wcl_styled_.$spacingLarge};
  margin-bottom: ${wcl_styled_.$spacingLarge};
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${wcl_styled_.media.minMd`
    padding: 3rem;
    margin-top: 24px;
    margin-bottom: 0;
  `}
`;
const StyledGridColumn2 = (0,wcl_styled_.styled)(wcl_core_.GridColumn)`
  padding: 0;
  min-width: 100%;

  ${wcl_styled_.media.minMd`
    min-width: 40%;
  `}
`;

;// CONCATENATED MODULE: ./src/components/Trips/FeaturedTrip/FeaturedTrip.tsx

/* eslint-disable import/order */ 



// import { useErrorMessage } from '../../../common/context/ErrorMessageContext';





const FeaturedTrip = ({ title , description , action , imageUrl , useErrorMessage  })=>{
    var ref;
    const trackClickEvent = (0,useClickEvent/* useClickEvent */.v)();
    const { url , variant , shape , label  } = action;
    const router = useRouter();
    const { loading , data , error  } = useGetTrips({
        tripsFilter: {
            queryType: TripsQueryType1.Future
        }
    });
    const trips = (0,external_react_.useMemo)(()=>(0,helpers/* parseTripsData */.i8)(data).filter(helpers/* isValidTrip */.RT)
    , [
        data
    ]);
    const trip = (ref = (0,helpers/* sortTripsByDate */.nH)(trips)) === null || ref === void 0 ? void 0 : ref[0];
    const { setErrorMessageById  } = useErrorMessage();
    if (error) setErrorMessageById(GenericErrorMessageId1.UnknownError);
    const sendToTrips = ()=>{
        trackClickEvent({
            eventName: 'account - view my trips - click',
            title: 'view my trips'
        });
        setTimeout(()=>router.push({
                pathname: url
            })
        , 400);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledGridRow, {
        className: "CardMain",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledGridColumn1, {
                className: "CardContent",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(FeaturedTrip_style_StyledHeading, {
                        role: "link",
                        onClick: sendToTrips,
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(StyledTextContainer, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(StyledText, {
                            children: description
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(StyledButtonContainer, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Button, {
                            variant: variant,
                            shape: shape,
                            role: "link",
                            onClick: sendToTrips,
                            children: label
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledGridColumn2, {
                children: [
                    loading && /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.EmptyState, {
                        loading: true
                    }),
                    !loading && trip && /*#__PURE__*/ jsx_runtime_.jsx(TripCard, {
                        trip: trip,
                        ConfigContext: wcl_core_.ConfigContext
                    }, trip.tripId),
                    !loading && !trip && /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.AspectRatioBox, {
                        ratio: 16 / 9,
                        style: {
                            borderRadius: '8px',
                            height: '100%',
                            width: '100%'
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(StyledImageContainer, {
                            onClick: sendToTrips,
                            "data-testid": "CalendarImage",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Image, {
                                src: imageUrl,
                                alt: "Calendar Image",
                                withLoadingAnimation: true
                            })
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const FeaturedTrip_FeaturedTrip = (FeaturedTrip);


/***/ })

};
;