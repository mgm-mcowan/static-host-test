"use strict";
exports.id = 222;
exports.ids = [222];
exports.modules = {

/***/ 7474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "v": () => (/* binding */ useClickEvent)
});

// EXTERNAL MODULE: external "@mgmresorts/web-analytics"
var web_analytics_ = __webpack_require__(9844);
;// CONCATENATED MODULE: ./src/common/analytics/AnalyticsService.ts

const { AnalyticsServiceProvider , useAnalyticsService  } = (0,web_analytics_.analyticsServiceInitializer)({
});


;// CONCATENATED MODULE: ./src/common/analytics/useClickEvent.ts

function useClickEvent(prefix) {
    const { trackSatellite , setDigitalData  } = useAnalyticsService();
    const clickEventPrefix = prefix ?? 'acct';
    const trackClickEvent = ({ eventName , title , notificationMessage , eventAttributes ={
    }  })=>{
        setDigitalData('event', [
            {
                eventInfo: {
                    eventName
                },
                attributes: {
                    title,
                    ...notificationMessage ? {
                        notificationMessage
                    } : {
                    },
                    ...eventAttributes
                }
            }, 
        ]);
        trackSatellite(`${clickEventPrefix}_clickevent`);
    };
    return trackClickEvent;
}


/***/ }),

/***/ 6274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gm": () => (/* binding */ isRoomMetadata),
/* harmony export */   "DV": () => (/* binding */ isDiningMetadata),
/* harmony export */   "UD": () => (/* binding */ isShowMetadata)
/* harmony export */ });
/* unused harmony export BookingStatus */
var BookingStatus1;

(function(BookingStatus) {
    BookingStatus["Booked"] = 'BOOKED';
    BookingStatus["Cancelled"] = 'CANCELLED';
    BookingStatus["Modified"] = 'MODIFIED';
})(BookingStatus1 || (BookingStatus1 = {
}));
var BookingDomain1;
(function(BookingDomain) {
    BookingDomain["Room"] = 'ROOM';
    BookingDomain["Show"] = 'SHOW';
    BookingDomain["Dining"] = 'DINING';
})(BookingDomain1 || (BookingDomain1 = {
}));
var ProductDetailType1;
(function(ProductDetailType) {
    ProductDetailType["Room"] = 'RoomProductDetails';
    ProductDetailType["Show"] = 'ShowProductDetails';
    ProductDetailType["Dining"] = 'DiningProductDetails';
})(ProductDetailType1 || (ProductDetailType1 = {
}));
const isRoom = (obj)=>{
    return !!obj.roomDetails;
};
const isRoomMetadata = (obj)=>{
    return obj.bookingDomain === BookingDomain1.Room && isRoom(obj.product);
};
const isDining = (obj)=>{
    return !!obj.restaurantDetails;
};
const isDiningMetadata = (obj)=>{
    return obj.bookingDomain === BookingDomain1.Dining && isDining(obj.product);
};
const isShowMetadata = (obj)=>{
    return obj.bookingDomain === BookingDomain1.Show;
};


/***/ }),

/***/ 8134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "kT": () => (/* binding */ calculateLengthOfDateRange),
  "W$": () => (/* binding */ getNumberOfDaysBeforeArrival),
  "eh": () => (/* binding */ getNumberOfDaysBeforeDate),
  "Aj": () => (/* binding */ getPropertyNameFromReservation),
  "S$": () => (/* binding */ getReservationDetailsKey),
  "d5": () => (/* binding */ getReservationImageUrl),
  "z0": () => (/* binding */ getReservationResortTitle),
  "cA": () => (/* binding */ getReservationStayDates),
  "rd": () => (/* binding */ getReservationType),
  "Yp": () => (/* binding */ getReservationsOnDisplay),
  "Li": () => (/* binding */ getRestaurantDetails),
  "RT": () => (/* binding */ isValidTrip),
  "i8": () => (/* binding */ parseTripsData),
  "bS": () => (/* binding */ passZero),
  "ar": () => (/* binding */ sortNonRoomReservationsByDate),
  "nH": () => (/* binding */ sortTripsByDate)
});

// UNUSED EXPORTS: calculateLengthOfRoomReservation, createDynamicRoomBookingLink, getPastVars, getReservationAttributes, getReservationDates, getReservationTimeStr, getUpcomingVars

// EXTERNAL MODULE: external "@mgmresorts/wcl-styled"
var wcl_styled_ = __webpack_require__(3294);
// EXTERNAL MODULE: external "luxon"
var external_luxon_ = __webpack_require__(2748);
;// CONCATENATED MODULE: ./src/common/types/PastTripInterval.ts
var PastTripInterval1;

(function(PastTripInterval) {
    PastTripInterval["Past3Months"] = 'Past 3 Months';
    PastTripInterval["Past6Months"] = 'Past 6 Months';
    PastTripInterval["PastYear"] = 'Past Year';
    PastTripInterval["AllTrips"] = 'All Trips';
})(PastTripInterval1 || (PastTripInterval1 = {
}));

// EXTERNAL MODULE: ./src/common/types/Trip.ts
var Trip = __webpack_require__(6274);
;// CONCATENATED MODULE: ./src/components/helpers.ts




const parseTripsData = (data)=>data && data.me && data.me.trips ? data.me.trips : []
;
const isValidTrip = (trip)=>{
    if (!(trip === null || trip === void 0 ? void 0 : trip.productsMetadata)) return false;
    const { productsMetadata: reservations  } = trip;
    const roomReservations = reservations.filter(Trip/* isRoomMetadata */.Gm);
    const diningReservations = reservations.filter(Trip/* isDiningMetadata */.DV);
    const showReservations = reservations.filter(Trip/* isShowMetadata */.UD);
    return roomReservations.length + diningReservations.length + showReservations.length > 0;
};
const getUpcomingVars = ()=>{
    const now = DateTime.now().toUTC();
    return {
        tripsFilter: {
            startDate: now.toISODate(),
            endDate: now.plus({
                years: 2
            }).toISODate()
        }
    };
};
const getDateFromInterval = ({ now , interval  })=>{
    if (interval === PastTripInterval.Past3Months) return now.minus({
        months: 3
    });
    if (interval === PastTripInterval.Past6Months) return now.minus({
        months: 6
    });
    if (interval === PastTripInterval.PastYear) return now.minus({
        year: 1
    });
    return DateTime.fromISO('2020-05-01'); // All Trips, aka May 2020 and beyond
};
const getPastVars = ({ interval =PastTripInterval.Past3Months  } = {
})=>{
    const now = DateTime.now().toUTC();
    return {
        tripsFilter: {
            startDate: getDateFromInterval({
                now,
                interval
            }).toISODate(),
            endDate: now.toISODate()
        }
    };
};
const createDynamicRoomBookingLink = ({ region , resortId , checkInDate , checkOutDate  })=>{
    return `${process.env.ROOM_BOOKING_URL}?region=${region}&resort=${resortId}&checkIn=${checkInDate}&checkOut=${checkOutDate}`;
};
const getReservationDetailsKey = (reservation)=>{
    if ((0,Trip/* isRoomMetadata */.Gm)(reservation)) return 'roomDetails';
    if ((0,Trip/* isDiningMetadata */.DV)(reservation)) return 'restaurantDetails';
    return 'showDetails';
};
const getPropertyNameFromReservation = (reservation)=>reservation.product[getReservationDetailsKey(reservation)].property.name
;
const getReservationType = (reservation)=>{
    if ((0,Trip/* isRoomMetadata */.Gm)(reservation)) return 'room';
    if ((0,Trip/* isDiningMetadata */.DV)(reservation)) return 'dining';
    return 'show';
};
const getRestaurantDetails = (reservation)=>{
    const { product , numGuests: numberOfGuests  } = reservation;
    return {
        name: product[getReservationDetailsKey(reservation)].name,
        numberOfGuests
    };
};
const getReservationImageUrl = (reservation)=>{
    var ref, ref1, ref2;
    const url = (ref = reservation.product[getReservationDetailsKey(reservation)]) === null || ref === void 0 ? void 0 : (ref1 = ref.images) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.overview) === null || ref2 === void 0 ? void 0 : ref2.url;
    return url ?? '';
};
const getReservationResortTitle = (reservation)=>reservation.product[getReservationDetailsKey(reservation)].property.name
;
const calculateLengthOfRoomReservation = ({ product: { checkInDate , checkOutDate  }  })=>DateTime.fromISO(checkOutDate).diff(DateTime.fromISO(checkInDate), 'days').as('days')
;
const calculateLengthOfDateRange = ({ startDate , endDate  })=>external_luxon_.DateTime.fromISO(endDate).diff(external_luxon_.DateTime.fromISO(startDate), 'days').as('days')
;
const getReservationTimeStr = (reservation)=>{
    if ((0,Trip/* isDiningMetadata */.DV)(reservation)) return reservation.product.reservationDateTime;
    return reservation.product.eventDateTime;
};
/**
 * See: https://mgmdigitalventures.atlassian.net/browse/ACCT-1430
 *
 * Adobe reporting platform is not accepting '0' numeric values,
 * thus I was requested to pass 'zero' instead.
 */ const passZero = (number)=>number === 0 ? 'zero' : number
;
const getNumberOfDaysBeforeDate = (dateStr)=>Math.ceil(external_luxon_.DateTime.fromISO(dateStr, {
        zone: 'utc'
    }).toLocal().diffNow().as('days'))
;
const getNumberOfDaysBeforeArrival = (reservation)=>getNumberOfDaysBeforeDate((0,Trip/* isRoomMetadata */.Gm)(reservation) ? reservation.product.checkInDate : getReservationTimeStr(reservation))
;
const getReservationDates = (reservation)=>{
    if (isRoomMetadata(reservation)) {
        const { product: { checkInDate , checkOutDate  } ,  } = reservation;
        return {
            checkInDate,
            checkOutDate
        };
    }
    const reservationDate = DateTime.fromISO(getReservationTimeStr(reservation), {
        zone: 'utc'
    }).toISODate();
    return {
        checkInDate: reservationDate,
        checkOutDate: reservationDate
    };
};
const getReservationAttributes = (reservation)=>{
    const attributes = {
        propertyName: getPropertyNameFromReservation(reservation),
        reservationNumber: reservation.confirmationNumber,
        reservationType: getReservationType(reservation),
        numberOfGuests: reservation.numGuests,
        numberOfDaysBeforeArrival: passZero(getNumberOfDaysBeforeArrival(reservation))
    };
    if (isRoomMetadata(reservation)) {
        attributes['roomType'] = reservation.product.roomDetails.name;
        attributes['numberOfNights'] = passZero(calculateLengthOfRoomReservation(reservation));
    }
    if (isDiningMetadata(reservation)) {
        attributes['restaurantName'] = reservation.product.restaurantDetails.name;
    }
    if (isShowMetadata(reservation)) {
        attributes['showName'] = reservation.product.showDetails.name;
    }
    return attributes;
};
const isToday = (day)=>day.hasSame(external_luxon_.DateTime.local(), 'day')
;
const isSameYear = (day)=>day.hasSame(external_luxon_.DateTime.local(), 'year')
;
const formatDate = (day)=>day.toFormat(`MMM d${isSameYear(day) ? '' : ', yyyy'}`)
;
const getRoomReservationStayDates = ({ reservation , isPast  })=>{
    const { product: { checkInDate , checkOutDate  } ,  } = reservation;
    /**
   * `checkInDate` and `checkOutDate` are just dates (not times),
   * so we don't convert to local time.
   */ const checkIn = external_luxon_.DateTime.fromISO(checkInDate);
    const checkOut = external_luxon_.DateTime.fromISO(checkOutDate);
    const formattedStartDate = isToday(checkIn) ? 'Today' : formatDate(checkIn);
    const formattedEndDate = isToday(checkOut) ? 'Today' : formatDate(checkOut);
    return {
        formattedStartDate,
        formattedEndDate,
        arrowColor: isPast && wcl_styled_.$grey
    };
};
const getShowOrDiningReservationStayDates = (reservation)=>{
    const dateTimeStr = (0,Trip/* isDiningMetadata */.DV)(reservation) ? reservation.product.reservationDateTime : reservation.product.eventDateTime;
    const dateTime = external_luxon_.DateTime.fromISO(dateTimeStr, {
        zone: 'utc'
    }).toLocal();
    return {
        dateLabel: (0,Trip/* isDiningMetadata */.DV)(reservation) ? 'Date & Time' : 'Showtime',
        reservationDate: isToday(dateTime) ? 'Today' : dateTime.toLocaleString({
            month: 'short',
            weekday: 'long',
            day: 'numeric'
        }),
        reservationTime: dateTime.toFormat('h:mm a ZZZZ')
    };
};
const getReservationStayDates = ({ reservation , isPast  })=>(0,Trip/* isRoomMetadata */.Gm)(reservation) ? getRoomReservationStayDates({
        reservation,
        isPast
    }) : getShowOrDiningReservationStayDates(reservation)
;
const sortNonRoomReservationsByDate = (reservations)=>[
        ...reservations
    ].sort((a, b)=>getReservationTimeStr(a).localeCompare(getReservationTimeStr(b))
    )
;
const getReservationsOnDisplay = ({ productsMetadata: reservations  })=>{
    const roomReservations = reservations.filter(Trip/* isRoomMetadata */.Gm);
    if (roomReservations.length > 0) return roomReservations;
    if (reservations.length === 0) return [];
    if (reservations.length === 1) return reservations;
    return sortNonRoomReservationsByDate(reservations);
};
const sortTripsByDate = (trips)=>[
        ...trips
    ].sort((a, b)=>a.startDate.localeCompare(b.startDate)
    )
;


/***/ })

};
;