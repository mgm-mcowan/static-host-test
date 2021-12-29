"use strict";
exports.id = 474;
exports.ids = [474];
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


/***/ })

};
;