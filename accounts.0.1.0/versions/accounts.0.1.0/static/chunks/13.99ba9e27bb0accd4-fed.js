(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[13],{824:function(e,n,t){"use strict";t.d(n,{v:function(){return c}});var r=(0,t(2496).r)({}),i=(r.AnalyticsServiceProvider,r.useAnalyticsService);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}function c(e){var n=i(),t=n.trackSatellite,r=n.setDigitalData,o=null!==e&&void 0!==e?e:"acct";return function(e){var n=e.eventName,i=e.title,c=e.notificationMessage,u=e.eventAttributes;r("event",[{eventInfo:{eventName:n},attributes:a({title:i},c?{notificationMessage:c}:{},void 0===u?{}:u)}]),t("".concat(o,"_clickevent"))}}},3032:function(e,n,t){"use strict";var r,i;t.d(n,{d:function(){return r}}),(i=r||(r={})).UnknownError="unknown-error",i.ContactMemberServices="contact-member-services",i.ContactReservationsMgmri="contact-reservations-mgmri"},13:function(e,n,t){"use strict";t.r(n),t.d(n,{Dashboard:function(){return Ee},default:function(){return Le}});var r=t(5893),i=t(5124),o=t(3035),a=t(9395),c=t(5697),u=t.n(c),s=t(6736),l=t(824),f=t(1641),m=t(9989);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){p(e,n,t[n])}))}return e}function g(){var e,n,t=(e=["\n  query GetHotelOffers($region: String, $propertyId: String!, $onlyPoPrograms: Boolean) {\n    customerRoomOffers(region: $region, propertyId: $propertyId, onlyPoPrograms: $onlyPoPrograms) {\n      corporateRatePlanDetails {\n        id\n        name\n        images {\n          tile {\n            url\n          }\n        }\n        descriptions {\n          long\n        }\n      }\n      type\n    }\n  }\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return g=function(){return t},t}var v=(0,m.ZP)(g()),y=t(3032),b=["tier_hyatt_Success"],h={tier_hyatt_Success:{description:"Thank you for providing your World of Hyatt tier information. Please allow up to 24 hours for your M life Rewards account to update.",primaryActionLabel:"Got it"}},O=t(5068);function x(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function j(){var e=x(["\n    margin-top: 56px;\n  "]);return j=function(){return e},e}function w(){var e=x(["\n    margin-top: 40px;\n  "]);return w=function(){return e},e}function P(){var e=x(["\n  margin-top: ",";\n\n  ","\n\n  ","\n"]);return P=function(){return e},e}function S(){var e=x(["\n    margin-bottom: ","\n  "]);return S=function(){return e},e}function k(){var e=x(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: ",";\n\n  ","\n"]);return k=function(){return e},e}function D(){var e=x(["\n    overflow-x: scroll;\n  "]);return D=function(){return e},e}function C(){var e=x(["\n  display: flex;\n\n  ","\n"]);return C=function(){return e},e}function T(){var e=x(["\n    min-width: 300px;\n  "]);return T=function(){return e},e}function M(){var e=x(["\n    margin-right: ",";\n  "]);return M=function(){return e},e}function A(){var e=x(["\n  margin-right: ",";\n  max-width: 264px;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  min-width: 215px;\n\n  ","\n\n  ","\n\n  &:last-child {\n    margin-right: 0;\n  }\n"]);return A=function(){return e},e}function E(){var e=x(["\n  text-align: center;\n  margin-top: 40px;\n  max-width: 856px;\n"]);return E=function(){return e},e}var L=o.styled.div(P(),o.$spacingXtraLarge,o.media.minMd(j()),o.media.minLg(w())),$=o.styled.div(k(),o.$spacingLarge,o.media.md(S(),o.$spacingMedium)),I=o.styled.div(C(),o.media.maxSm(D())),N=o.styled.div(A(),o.$spacingMedium,o.media.md(T()),o.media.minLg(M(),o.$spacingXtraLarge)),R=o.styled.div(E()),_={spacing:"medium",imageAspectRatio:"16 / 9",subtitle:"Multiple Resorts",actions:[{variant:"primary",label:"Book Offer",shape:"square",size:"large"}]};function q(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){q(e,n,t[n])}))}return e}var B=function(e){var n=e.offers,t=(0,s.useContext)(i.ViewportContext).maxLg,o=(0,O.t)().push,a=(0,l.v)(),c=n.slice(0,3).map((function(e,t){var r,i=e.type,c=e.corporateRatePlanDetails,u=c.id,s=c.name,l=c.descriptions,f=c.images,m=null===f||void 0===f||null===(r=f.tile)||void 0===r?void 0:r.url,p=null===l||void 0===l?void 0:l.long,d="PROGRAM"===i?"/hotel-offer-id/".concat(u):"/redirect/hotel-multi-offer-id/".concat(u),g=[z({},_.actions[0],{onClick:function(){a({eventName:"account - book offer - click",title:"book offer",eventAttributes:{numberOfOffers:n.length,offerSelected:s,offerSelectPosition:"".concat(t+1," of 3"),propertyName:"Multiple Resorts",offerDetails:p}}),setTimeout((function(){o({pathname:d})}),200)}})];return z({},_,{actions:g,bookOfferUrl:d,title:s,description:p,image:{url:"".concat("undefined/static").concat(m)}})})),u=(0,r.jsx)(i.Button,{"data-testid":"view-all-offers-cta",className:"font-weight-500",role:"link",shape:"inline",size:"inherit",label:t?"View All":"View All Offers",onClick:function(){a({eventName:"account - view all offers - click",title:"view all offers",eventAttributes:{numberOfOffers:n.length}}),setTimeout((function(){window.location.href="https://www.mgmresorts.com/en/offers.html"}),200)}});return(0,r.jsxs)(L,{children:[(0,r.jsx)($,{"data-testid":"section-heading","data-view-offers-url":"https://www.mgmresorts.com/en/offers.html",children:t?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Heading20,{children:"Hotel Offers"}),u]}):(0,r.jsx)(i.Heading35,{children:"Hotel Offers"})}),(0,r.jsx)(I,{"data-testid":"offer-wrapper",children:c.map((function(e,n){return(0,r.jsx)(N,{"data-testid":"offer-section","data-offer-url":e.bookOfferUrl,children:(0,r.jsx)(i.Card,z({},e))},n)}))}),!t&&(0,r.jsx)(R,{children:u})]})};B.displayName="HotelOffers";var F=t(6745);function U(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function H(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){U(e,n,t[n])}))}return e}function Y(){var e,n,t=(e=["\n  query GetLastTripEarnings($siteId: String!) {\n    me {\n      memberships {\n        ... on MlifeMembership {\n          playerLastTripEarnings(siteId: $siteId) {\n            tripStartDate\n            tripEndDate\n            ecAmount\n            slotDollarAmount\n          }\n        }\n      }\n    }\n  }\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return Y=function(){return t},t}var G=(0,m.ZP)(Y()),X=t(5634),V="#6c49f4";function W(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function Z(){var e=W(["\n  margin-top: ",";\n"]);return Z=function(){return e},e}function J(){var e=W(["\n  font-weight: normal;\n  color: ",";\n  margin: "," 0;\n"]);return J=function(){return e},e}function K(){var e=W(["\n  color: ",";\n"]);return K=function(){return e},e}function Q(){var e=W(["\n  height: 1px;\n  width: 100%;\n  background-color: ",";\n  margin: "," auto 40px;\n"]);return Q=function(){return e},e}function ee(){var e=W(["\n  margin-top: ",";\n"]);return ee=function(){return e},e}function ne(){var e=W(["\n  display: flex;\n  margin-top: ",";\n"]);return ne=function(){return e},e}function te(){var e=W(["\n  border: 1px solid ",";\n  min-width: 230px;\n  min-height: 218px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  &:first-child {\n    margin-right: 20px;\n  }\n"]);return te=function(){return e},e}function re(){var e=W(["\n  color: ",";\n"]);return re=function(){return e},e}function ie(){var e=W(["\n  font-size: 18px;\n  margin-bottom: ",";\n\n  &.amount-color {\n    color: ",";\n  }\n"]);return ie=function(){return e},e}function oe(){var e=W(["\n  padding: 40px;\n  display: flex;\n  justify-content: center;\n"]);return oe=function(){return e},e}var ae=(0,o.styled)(i.Heading28)(Z(),o.$spacingXSmall),ce=(0,o.styled)(i.Text16)(J(),o.$dark,o.$spacingXSmall),ue=o.styled.span(K(),V),se=o.styled.div(Q(),o.$lightestGrey,o.$spacingLarge),le=(0,o.styled)(i.Button)(ee(),o.$spacingLarge),fe=o.styled.div(ne(),o.$spacingMedium),me=o.styled.div(te(),o.$lighestGrey3),pe=(0,o.styled)(i.Text16)(re(),"#969696"),de=(0,o.styled)(i.Text)(ie(),o.$spacingXSmall,V),ge=o.styled.div(oe()),ve=function(){var e,n=(e={siteId:"19"},(0,f.a)(G,{ssr:!1,variables:H({},e)})),t=n.data,o=n.loading,a=(0,s.useState)(),c=a[0],u=a[1];return(0,s.useEffect)((function(){var e,n;if(null===t||void 0===t||null===(e=t.me)||void 0===e||null===(n=e.memberships)||void 0===n?void 0:n.length){var r=t.me.memberships[0].playerLastTripEarnings;u(r)}}),[t]),o?(0,r.jsx)(ge,{children:(0,r.jsx)(i.LoadingSpinner,{})}):c?(0,r.jsxs)("div",{className:"last-trip-statement",children:[(0,r.jsx)(ae,{children:"Last trip statement"}),(0,r.jsxs)(ce,{children:["On your last Borgata visit"," ",(0,r.jsxs)(ue,{children:[(0,F.formatDate)(c.tripStartDate,{monthFormat:"MMMDDYYYY"})," -"," ",(0,F.formatDate)(c.tripEndDate,{monthFormat:"MMMDDYYYY"})]})]}),(0,r.jsxs)(fe,{children:[(0,r.jsxs)(me,{children:[(0,r.jsx)("img",{alt:"tier-img",className:"tier-img",src:"/account/images/dining.svg"}),(0,r.jsxs)(de,{className:"ec-amount ".concat(c.ecAmount>0?"amount-color":""),children:[c.ecAmount?"+":"",X.oB.format(c.ecAmount||0)]}),(0,r.jsx)(pe,{children:"Express Comps\u2122"})]}),(0,r.jsxs)(me,{children:[(0,r.jsx)("img",{alt:"tier-img",className:"tier-img",src:"/account/images/slots.svg"}),(0,r.jsxs)(de,{className:"dollar-amount ".concat(c.slotDollarAmount>0?"amount-color":""),children:[c.slotDollarAmount?"+":"",X.oB.format(c.slotDollarAmount||0)]}),(0,r.jsx)(pe,{children:"Borgata Slot Dollars \xa9"})]})]}),(0,r.jsx)(le,{"data-testid":"view-rewards-balance",variant:"primary",shape:"square",size:"large",label:"View rewards balance",href:"/account/borgata/rewards"}),(0,r.jsx)(se,{})]}):null};function ye(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function be(){var e=ye(["\n  margin-bottom: ",";\n\n  .member__message-description {\n    color: ",";\n\n    * {\n      margin: 0;\n    }\n  }\n"]);return be=function(){return e},e}function he(){var e=ye(["\n    margin-top: ",";\n  "]);return he=function(){return e},e}function Oe(){var e=ye(["\n  background: ",";\n  height: 1px;\n  margin: "," 0 0;\n\n  ","\n"]);return Oe=function(){return e},e}function xe(){var e=ye(["\n    padding: 80px 10px 0;\n  "]);return xe=function(){return e},e}function je(){var e=ye(["\n  padding-top: ",";\n\n  ","\n"]);return je=function(){return e},e}function we(){var e=ye(["\n  padding: 40px;\n  display: flex;\n  justify-content: center;\n"]);return we=function(){return e},e}ve.displayName="LastTripStatement";var Pe=(0,o.styled)(i.ProductPromoCard)(be(),o.$spacingXtraLarge,o.$white),Se=o.styled.div(Oe(),(function(e){return e.theme.colors.lightGrey}),o.$spacingLarge,o.media.minLg(he(),o.$spacingXtraLarge)),ke=o.styled.div(je(),o.$spacingMedium,o.media.minLg(xe())),De=o.styled.div(we());function Ce(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Te(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){Ce(e,n,t[n])}))}return e}var Me=(0,a.federatedComponent)("trips","./BookingWidgetWrapper"),Ae=(0,a.federatedComponent)("trips","./FeaturedTrip"),Ee=function(e){var n,t=e.staticSections,a=e.regions,c=e.memberMessage,u=e.useErrorMessage,m=e.ConfigContext,p=(0,l.v)(),g=(0,O.t)(),x=g.push,j=(g.query||{errorCode:""}).errorCode,w=(0,s.useState)(!1),P=w[0],S=w[1],k=(0,s.useContext)(m).property,D=(n={onlyPoPrograms:!1,propertyId:(0,o.getPropertyIdByPropertySlug)(k),region:"ALL"},(0,f.a)(v,{ssr:!1,variables:d({},n)})),C=D.data,T=D.loading,M=D.error,A=(0,s.useState)([]),E=A[0],L=A[1],$=u().setErrorMessageById;M&&$(y.d.UnknownError),(0,s.useEffect)((function(){if(C&&(C.customerRoomOffers||[]).length){var e=C.customerRoomOffers.filter((function(e){return!!e.corporateRatePlanDetails}));L(e)}}),[C]),(0,s.useEffect)((function(){S(b.includes(j))}),[j]);var I=(0,s.useMemo)((function(){var e=h[j];return{description:(null===e||void 0===e?void 0:e.description)||"",primaryAction:{label:(null===e||void 0===e?void 0:e.primaryActionLabel)||""},onDismiss:function(){return S(!1)},onSubmit:function(){return S(!1)}}}),[j,S]),N=function(e){return p({eventName:"account - view my ".concat(e," - click"),title:"view my ".concat(e)})},R={"M life Rewards new":function(){return N("rewards")},Offers:function(){return N("offers")}},_=E.length?t.filter((function(e){return"Offers"!==e.title})):t.map((function(e){return function(e,n,t){var r;if(!(null===e||void 0===e||null===(r=e.mainAction)||void 0===r?void 0:r.url)||!n)return e;var i=e.mainAction.url;return Te({},e,{mainAction:Te({},e.mainAction,{url:void 0,onClick:function(){n(),setTimeout((function(){"offers"===t.toLowerCase()?window.location.href=i:x({pathname:i})}),200)}})})}(e,R[e.title],e.title)}));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.ConfirmModal,Te({open:P},I)),c&&(0,r.jsx)(Pe,{icon:(0,r.jsx)("img",{alt:"message-icon",src:"https://static.mgmresorts.com".concat(null===c||void 0===c?void 0:c.messageIcon)}),headline:(null===c||void 0===c?void 0:c.messageTitle)||"",description_HTML:"<div class='member__message-description'>".concat(null===c||void 0===c?void 0:c.messageDescription,"</div>"),primaryButton:{label:(null===c||void 0===c?void 0:c.messagePrimaryCTADisplayText)||"",onClick:function(){var e,n;p({eventName:"account - home - hero message",title:(null===c||void 0===c||null===(e=c.messagePrimaryCTADisplayText)||void 0===e?void 0:e.toLowerCase())||"",notificationMessage:null===c||void 0===c||null===(n=c.messageDescription)||void 0===n?void 0:n.toString()}),(null===c||void 0===c?void 0:c.messagePrimaryCTATarget)&&(window.location.href="https://static.mgmresorts.com".concat(c.messagePrimaryCTATarget))},shape:"pill",size:"small",variant:"secondary"},gradient:!0}),"borgata"===k&&(0,r.jsx)(ve,{}),(0,r.jsx)(Me,{regions:a,renderPerpetualOffer:!0,analyticsEventPrefix:"acct",analyticsEventName:"account \u2013 home \u2013 view rooms",useErrorMessage:u,ConfigContext:m}),(0,r.jsx)(Se,{}),T&&(0,r.jsx)(De,{children:(0,r.jsx)(i.LoadingSpinner,{})}),!T&&E.length>0&&(0,r.jsx)(B,{offers:E}),(0,r.jsx)("div",{children:_.map((function(e,n){return(0,r.jsx)(ke,{"data-testid":e.testId,children:"Trips"===e.title?(0,r.jsx)(Ae,{title:e.title,description:e.description,action:e.mainAction,imageUrl:e.imageUrl,useErrorMessage:u,ConfigContext:m}):(0,r.jsx)(i.FeaturedItem,Te({},e))},n)}))})]})},Le=Ee;Ee.defaultProps={staticSections:[]},Ee.propTypes={staticSections:u().array},Ee.displayName="Dashboard"},5068:function(e,n,t){"use strict";t.d(n,{t:function(){return s}});var r=t(2598),i=t(6736),o=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function s(){var e=(0,r.useRouter)(),n=o().useCallback((function(n){if("http://localhost:3000"===location.origin)return e.replace({pathname:"/[propertySlug]".concat(n.pathname),query:c({},n.query||{},{propertySlug:e.query.propertySlug})});var t=n.query||{},r=(t.propertySlug,u(t,["propertySlug"]));return e.replace({pathname:n.pathname,query:r})}),[e]),t=o().useCallback((function(n){if("http://localhost:3000"===location.origin)return e.push({pathname:"/[propertySlug]".concat(n.pathname),query:c({},n.query||{},{propertySlug:e.query.propertySlug})});var t=n.query||{},r=(t.propertySlug,u(t,["propertySlug"]));return e.push({pathname:n.pathname,query:r})}),[e]);return o().useMemo((function(){return c({},e,{replace:n,push:t})}),[e,n,t])}},5634:function(e,n,t){"use strict";t.d(n,{oB:function(){return r},Pe:function(){return i},V2:function(){return o}});var r=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),i=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0,minimumFractionDigits:0}),o=new Intl.NumberFormat("en-IN")},2703:function(e,n,t){"use strict";var r=t(414);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,n,t,i,o,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:o,resetWarningCache:i};return t.PropTypes=t,t}},5697:function(e,n,t){e.exports=t(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);