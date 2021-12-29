"use strict";(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[425],{824:function(e,n,t){t.d(n,{v:function(){return l}});var r=(0,t(2496).r)({}),i=(r.AnalyticsServiceProvider,r.useAnalyticsService);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}function l(e){var n=i(),t=n.trackSatellite,r=n.setDigitalData,o=null!==e&&void 0!==e?e:"acct";return function(e){var n=e.eventName,i=e.title,l=e.notificationMessage,s=e.eventAttributes;r("event",[{eventInfo:{eventName:n},attributes:a({title:i},l?{notificationMessage:l}:{},void 0===s?{}:s)}]),t("".concat(o,"_clickevent"))}}},3032:function(e,n,t){var r,i;t.d(n,{d:function(){return r}}),(i=r||(r={})).UnknownError="unknown-error",i.ContactMemberServices="contact-member-services",i.ContactReservationsMgmri="contact-reservations-mgmri"},8425:function(e,n,t){t.r(n),t.d(n,{MlifeRewards:function(){return D},default:function(){return R}});var r=t(5893),i=t(5124),o=t(6736),a=t(824),l=t(3032),s=t(5068),c=t(3035),u=t(6745);function d(e){var n=function(e){var n=((0,u.parseStringParam)(e)||"").toLowerCase(),t=n.match(/dev-(.*)/)||n.match(/uat-(.*)/);return t?t[1]:["dev","uat"].includes(n)?"mgmresorts":n}(e);return"www"===n?"mgmresorts":c.propertySlugs.includes(n)?n:void 0}function m(){var e,n=null===window||void 0===window||null===(e=window.location)||void 0===e?void 0:e.host;return!window||!document||!document.body||window&&window.SSR_MODE||!n?"":n}function p(e,n){var t=void 0===e?"mgmresorts":e,r=void 0===n?"com":n,i=function(){var e=m().split(".");if(e.length<3||e.length>4)return{property:void 0,domain:void 0,tld:void 0};if(["staging","preprod"].includes(e[0])){if(3===e.length)return{property:"mgmresorts",domain:e[1],tld:e[2]};e.shift()}return{property:d(e[0]),domain:e[1],tld:e[2]}}(),o=i.property,a=i.domain,l=i.tld;if(t===a&&(null===l||void 0===l?void 0:l.startsWith(r)))return o}function g(e){return p()||function(e){return d(null===e||void 0===e?void 0:e.property)}(e)||"mgmresorts"}var v=t(1641);function f(){var e,n,t=(e=['\n  # prettier-ignore\n  query GetMlifeRewards {\n    me {\n      memberships {\n        ... on MlifeMembership {\n          customerBalances(filter: { filterNullSiteName: true }) {\n            tier {\n              currentTier: tierName\n              currentTierCredits: tierCredits\n              expirationDate: tierExpirationDate(format: "MM/dd/yyyy")\n              creditToNextTier\n              nextTier\n              minTierCreditsForCurrentTier\n              minTierCreditsForNextTier\n            }\n            balance {\n              freePlayValues: xtraCreditBalancesLocal {\n                siteId\n                propertyBalance: xtraCreditBalanceLocal\n                propertyName: siteName\n              }\n              freePlayAnywhere: xtraCreditBalanceGlobal\n              pointPlay: pointBalance\n              expressComps\n              freePlay\n              giftPoints\n              slotDollars\n            }\n          }\n        }\n      }\n    }\n  }\n'],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return f=function(){return t},t}var y=(0,t(9989).ZP)(f()),h=t(5634);function x(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function b(){var e=x(["\n        min-height: 260px;\n      "]);return b=function(){return e},e}function w(){var e=x(["\n    h4,\n    strong {\n      font-weight: 500;\n    }\n\n    [data-testid='IconText'] {\n      ","\n    }\n\n    > div > div {\n      padding: 0;\n    }\n\n    &.text-align-end {\n      text-align: end;\n    }\n\n    .credits-earned,\n    .widget-balance {\n      span {\n        color: ",";\n      }\n    }\n\n    .widget-balance {\n      font-size: 1rem;\n    }\n\n    .credits-expire-date {\n      color: ",";\n    }\n\n    &.tier-card {\n      padding: ",";\n      margin-top: 40px;\n      align-items: center;\n      max-width: 250px;\n\n      * {\n        padding-left: ",";\n      }\n\n      &.current-tier {\n        border: 1px solid #4957f4;\n        border-radius: 10px;\n      }\n\n      .tier-img {\n        margin-bottom: ",";\n        padding: 0;\n      }\n    }\n\n    .tier-content {\n      font-weight: 400;\n      color: ",";\n      margin-top: 18px;\n\n      &-item {\n        display: list-item;\n        margin-top: ",";\n        margin-left: ",";\n      }\n    }\n  "]);return w=function(){return e},e}function j(){var e=x(["\n  ","\n"]);return j=function(){return e},e}function T(){var e=x(["\n  font-size: 32px;\n"]);return T=function(){return e},e}function C(){var e=x(["\n  height: 1px;\n  background-color: ",";\n  margin-top: ",";\n  margin-bottom: ",";\n"]);return C=function(){return e},e}function O(){var e=x(["\n  font-size: 20px;\n"]);return O=function(){return e},e}function P(){var e=x(["\n  margin-bottom: ",";\n\n  .member__message-description {\n    color: ",";\n\n    * {\n      margin: 0;\n    }\n  }\n"]);return P=function(){return e},e}var S=(0,c.styled)(i.GridColumn)(j(),(0,c.css)(w(),c.media.minLg(b()),(function(e){return e.theme.colors.interface}),c.$darkGrey,c.$spacingXSmall,c.$spacingXSmall,c.$spacingXtraLarge,c.$darkGrey,c.$spacingMedium,c.$spacingMedium)),N=(0,c.styled)(i.Heading35)(T()),B=c.styled.div(C(),c.$lightestGrey,c.$spacingMedium,c.$spacingXtraLarge),M=(0,c.styled)(i.Text16)(O()),L=(0,c.styled)(i.ProductPromoCard)(P(),c.$spacingXtraLarge,c.$white);function E(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){E(e,n,t[n])}))}return e}function F(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var D=function(e){var n,t,c,u,d,m,p,f,x,b,w,j=e.memberMessage,T=e.useErrorMessage,C=F(e,["memberMessage","useErrorMessage"]),O=(0,o.useContext)(i.ViewportContext),P=(0,a.v)(),M=g((0,s.t)().query),E=T().setErrorMessageById,D=(0,o.useState)(),R=D[0],G=D[1],A=(0,o.useState)(0),q=A[0],$=A[1],z=(0,o.useState)(),V=z[0],H=z[1],_=(0,o.useState)(),U=_[0],Y=_[1],X=(0,o.useState)(!1),W=X[0],Z=X[1],J=(0,o.useState)(!1),K=J[0],Q=J[1],ee=(0,o.useState)(!1),ne=ee[0],te=ee[1],re=(0,o.useState)(!1),ie=re[0],oe=re[1],ae=(0,o.useState)(!1),le=ae[0],se=ae[1],ce=(0,v.a)(y,{fetchPolicy:"network-only",ssr:!1}),ue=ce.loading,de=ce.data,me=ce.error,pe=(0,o.useCallback)((function(){P({eventName:"account \u2013 m life rewards  \u2013 view tier benefits",title:"view all tier benefits"}),Z(!0)}),[P]),ge=(0,o.useCallback)((function(){P({eventName:"account \u2013 m life rewards  \u2013 reward rules",title:"learn more \u2013 m life reward rules"})}),[P]);return(0,o.useEffect)((function(){var e,n,t,r,i,o,a,l,s,c,u,d,m=(null===de||void 0===de||null===(e=de.me)||void 0===e?void 0:e.memberships)&&(null===(t=null===de||void 0===de||null===(n=de.me)||void 0===n?void 0:n.memberships[0])||void 0===t?void 0:t.customerBalances)||{};G(m);var p,g,v=C.tierData[null===m||void 0===m||null===(r=m.tier)||void 0===r?void 0:r.currentTier],f=C.tierData[null===v||void 0===v?void 0:v.nextTier],y=Number(null===m||void 0===m||null===(i=m.tier)||void 0===i?void 0:i.currentTierCredits),h=Number(null!==(p=null===m||void 0===m||null===(o=m.tier)||void 0===o?void 0:o.minTierCreditsForCurrentTier)&&void 0!==p?p:null===v||void 0===v?void 0:v.minCredits),x=Number(null!==(g=null===m||void 0===m||null===(a=m.tier)||void 0===a?void 0:a.minTierCreditsForNextTier)&&void 0!==g?g:null===f||void 0===f?void 0:f.minCredits),b="NOIR"===(null===m||void 0===m||null===(l=m.tier)||void 0===l?void 0:l.currentTier),w="NOIR"===(null===m||void 0===m||null===(s=m.tier)||void 0===s?void 0:s.nextTier),j=0;!b&&y<h?(oe(!0),j=y/h*100):j=(y-h)/(x-h)*100,b||w&&y>=h?($(100),se(!0)):$(j>0?j:1.5);var T=(null===m||void 0===m||null===(c=m.balance)||void 0===c?void 0:c.freePlayAnywhere)||0,O=(null===m||void 0===m||null===(u=m.balance)||void 0===u||null===(d=u.freePlayValues)||void 0===d?void 0:d.filter((function(e){return e.propertyBalance})))||[];O.length?O.length&&!T?(Y(void 0),H(O)):(Y(T),H(O)):(Y(T),H(void 0)),Q(b),te(w)}),[M,C.tierData,de]),ue?(0,r.jsx)(i.EmptyState,{loading:!0}):(me&&E(l.d.ContactMemberServices),R?(0,r.jsxs)(r.Fragment,{children:[j&&(0,r.jsx)(L,{icon:(0,r.jsx)("img",{alt:"message-icon",src:"https://static.mgmresorts.com".concat(null===j||void 0===j?void 0:j.messageIcon)}),headline:(null===j||void 0===j?void 0:j.messageTitle)||"",description_HTML:"<div class='member__message-description'>".concat(null===j||void 0===j?void 0:j.messageDescription,"</div>"),primaryButton:{label:(null===j||void 0===j?void 0:j.messagePrimaryCTADisplayText)||"",onClick:function(){var e,n;P({eventName:"account - m life rewards - hero message",title:(null===j||void 0===j||null===(e=j.messagePrimaryCTADisplayText)||void 0===e?void 0:e.toLowerCase())||"",notificationMessage:null===j||void 0===j||null===(n=j.messageDescription)||void 0===n?void 0:n.toString()}),(null===j||void 0===j?void 0:j.messagePrimaryCTATarget)&&(window.location.href="https://static.mgmresorts.com".concat(j.messagePrimaryCTATarget))},shape:"pill",size:"small",variant:"secondary"},gradient:!0}),(0,r.jsxs)(i.GridContainer,{className:"no-padding",children:[(0,r.jsxs)(i.GridRow,{children:[(0,r.jsxs)(S,{"data-testid":"current-tier",cols:6,children:[(0,r.jsx)(N,{className:"tier-status margin-bottom-8",children:null===R||void 0===R||null===(n=R.tier)||void 0===n?void 0:n.currentTier}),(0,r.jsx)(i.Text16,{className:"current-tier-label margin-bottom-8",children:K?"Maximum Tier":"Current Tier"})]}),!K&&(0,r.jsxs)(S,{"data-testid":"next-tier",cols:6,className:"text-align-end",children:[(0,r.jsx)(N,{className:"tier-status margin-bottom-8",children:null===R||void 0===R||null===(t=R.tier)||void 0===t?void 0:t.nextTier}),(0,r.jsx)(i.Text16,{className:"next-tier-label margin-bottom-8",children:ne?"By Invitation Only":"Next Tier"})]}),(0,r.jsx)(S,{"data-testid":"progress-bar",cols:12,className:"margin-bottom-16",children:(0,r.jsx)(i.ProgressBar,{percentComplete:q,color:"linear-gradient(250.93deg, #4957F4 28.64%, #6B49F4 69.77%), #F8F8F8"})}),(0,r.jsx)(S,{cols:6,children:(0,r.jsx)(i.Text12,{children:(0,r.jsx)(i.Button,{role:"link",shape:"inline",size:"inherit",label:"View All Tier Benefits",onClick:pe})})}),(0,r.jsxs)(S,{"data-testid":"tier-credits-earned",cols:6,className:"text-align-end",children:[(0,r.jsxs)(i.Text12,{className:"credits-earned",children:["Tier Credits Earned:"," ",(0,r.jsx)("span",{className:"current-tier-credits",children:h.V2.format(null===R||void 0===R||null===(c=R.tier)||void 0===c?void 0:c.currentTierCredits)}),!le&&(0,r.jsx)("span",{className:"next-tier-credits",children:"\xa0/\xa0".concat(h.V2.format(ie?null===R||void 0===R||null===(u=R.tier)||void 0===u?void 0:u.minTierCreditsForCurrentTier:null===R||void 0===R||null===(d=R.tier)||void 0===d?void 0:d.minTierCreditsForNextTier))})]}),(0,r.jsx)(i.Text10,{"data-testid":"tier-credits-expiration",className:"credits-expire-date",children:ie?"To Maintain Current Tier":"Credits Expire: ".concat(null===R||void 0===R||null===(m=R.tier)||void 0===m?void 0:m.expirationDate)})]}),(0,r.jsx)(S,{cols:12,children:(0,r.jsx)(B,{})})]}),(0,r.jsxs)(i.GridRow,{children:[(0,r.jsx)(S,{"data-testid":"points-play",cols:O.minLg?4:12,className:O.minLg?"":"margin-bottom-16",children:(0,r.jsx)(i.IconText,{title:"Points",description:"Earn points playing slots then convert them to FREEPLAY\xae without leaving your favorite slot machine!",icon:(0,r.jsx)("img",{alt:"PointPlay",src:"/account/images/slots.svg"}),footerTextHTML:"<div class='widget-balance'>\n                <strong>Balance:</strong> <span>".concat(h.V2.format((null===R||void 0===R||null===(p=R.balance)||void 0===p?void 0:p.pointPlay)||0),"</span>\n              </div>"),border:!0})}),(0,r.jsx)(S,{"data-testid":"express-comps",cols:O.minLg?4:12,className:O.minLg?"":"margin-bottom-16",children:(0,r.jsx)(i.IconText,{title:"Express Comps\u2122",description:"The fastest and most convenient way for you to comp yourself at MGM Resorts International hotels, dining outlets, or entertainment venues.",icon:(0,r.jsx)("img",{alt:"ExpressComps",src:"/account/images/dining.svg"}),footerTextHTML:"<div class='widget-balance'>\n                <strong>Balance:</strong> <span>".concat(h.oB.format((null===R||void 0===R||null===(f=R.balance)||void 0===f?void 0:f.expressComps)||0),"</span>\n              </div>"),border:!0})}),(0,r.jsx)(S,{"data-testid":"holiday-shoppe",cols:O.minLg?4:12,className:O.minLg?"":"margin-bottom-16",children:(0,r.jsx)(i.IconText,{title:"Holiday Gift Shoppe Points",description:"Holiday Gift Shoppe is Las Vegas' premiere shopping spree where you can redeem Gift Points for exceptional merchandise: Gift Cards, FREEPLAY, and more!",icon:(0,r.jsx)("img",{alt:"GiftPoints",src:"/account/images/holiday.svg"}),footerTextHTML:"<div class='widget-balance'>\n                <strong>Balance:</strong> <span>".concat(h.V2.format((null===R||void 0===R||null===(x=R.balance)||void 0===x?void 0:x.giftPoints)||0),"</span>\n              </div>"),border:!0})}),(0,r.jsx)(S,{"data-testid":"slot-dollars",cols:O.minLg?4:12,className:O.minLg?"":"margin-bottom-16",style:{marginTop:O.minLg?32:0},children:(0,r.jsx)(i.IconText,{title:"Borgata Slot Dollars \xa9 + Bonus Slot Dollars",description:"Unique to the Borgata property. Earn slot dollars at the slot on property. These can also convert to future slot play.",icon:(0,r.jsx)("img",{alt:"Borgata slot dollars",src:"/account/images/slots.svg"}),footerTextHTML:"<div class='widget-balance'>\n                <strong>Balance:</strong> <span>".concat(h.Pe.format(null===R||void 0===R||null===(b=R.balance)||void 0===b?void 0:b.slotDollars),"</span>\n              </div>"),border:!0})})]}),(0,r.jsx)(i.GridRow,{style:{marginTop:O.minLg?32:16},children:(0,r.jsx)(S,{"data-testid":"free-play",cols:12,children:(0,r.jsx)(i.Freeplay,k({title:"FREEPLAY\xae",description:"As an M life Rewards member, you qualify for exclusive FREEPLAY promotions and offers from participating casinos. Slide your card into your favorite slot machine to view your current FREEPLAY balance \u2013 then play on the house. It\u2019s like electronic cash that you can use to play all the slots you love!",icon:(0,r.jsx)("img",{alt:"FreePlay",src:"/account/images/freeplay.svg"}),border:!0},void 0!==U?{totalBalance:h.V2.format(U||0)}:{},{propertyBalance:V}))})}),(0,r.jsxs)(i.GridRow,{"data-testid":"authored-text",style:{marginTop:40},children:[(0,r.jsx)(S,{cols:12,children:(0,r.jsx)(i.Heading35,{children:"M life Reward Rules"})}),(0,r.jsx)(S,{cols:12,style:{marginTop:16},children:(0,r.jsx)(i.Text16,{children:"Yes, There are a few rules to follow. Click below for full program rules."})}),(0,r.jsx)(S,{cols:12,style:{marginTop:32},children:(0,r.jsx)(i.Button,{"data-testid":"learn-more",variant:"primary",shape:"square",size:"small",label:"Learn more",onClick:ge,href:"https://www.mgmresorts.com/en/mlife-rewards-program/program-rules.html"})})]})]}),(0,r.jsx)(i.Modal,k({closeOnBackdropClick:!0,closeOnEsc:!0},C,{open:W,onClose:function(){return Z(!1)},children:(0,r.jsx)(I,{allTierBenefits:C.allTierBenefits,currentTier:null===R||void 0===R||null===(w=R.tier)||void 0===w?void 0:w.currentTier})}))]}):null)},I=function(e){var n=e.allTierBenefits,t=e.currentTier;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Heading45,{"data-testid":"tier-benefits",children:"M life Tier Benefits"}),(0,r.jsx)(i.GridContainer,{children:(0,r.jsx)(i.GridRow,{children:n.length&&n.map((function(e,o){return(0,r.jsxs)(S,{"data-testid":"current-tier",cols:3,className:"tier-card ".concat(t===e.tierName?"current-tier":""),children:[(0,r.jsx)("img",{alt:"tier-img",className:"tier-img",src:"/account/images/".concat(e.tierName.toLowerCase(),"-d.svg")}),(0,r.jsx)(M,{className:"font-weight-600 margin-bottom-8",children:e.tierName}),(0,r.jsx)(i.Text16,{children:e.points}),(0,r.jsxs)(i.Text16,{className:"tier-content",children:[0===o?"Includes:":"Includes everything from ".concat(n[o-1].tierName," Tier, plus:"),e.benefits.length&&e.benefits.map((function(e,n){return(0,r.jsx)("div",{className:"tier-content-item",children:e},n)}))]})]},o)}))})}),(0,r.jsx)(i.Button,{style:{display:"flex",margin:"auto",width:"fit-content",marginTop:80,marginBottom:32},shape:"inline",size:"inherit",label:"Full Tier Benefits",href:"https://www.mgmresorts.com/en/mlife-rewards-program/tiers.html"})]})},R=D;D.propTypes={}},5068:function(e,n,t){t.d(n,{t:function(){return c}});var r=t(2598),i=t(6736),o=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function c(){var e=(0,r.useRouter)(),n=o().useCallback((function(n){if("http://localhost:3000"===location.origin)return e.replace({pathname:"/[propertySlug]".concat(n.pathname),query:l({},n.query||{},{propertySlug:e.query.propertySlug})});var t=n.query||{},r=(t.propertySlug,s(t,["propertySlug"]));return e.replace({pathname:n.pathname,query:r})}),[e]),t=o().useCallback((function(n){if("http://localhost:3000"===location.origin)return e.push({pathname:"/[propertySlug]".concat(n.pathname),query:l({},n.query||{},{propertySlug:e.query.propertySlug})});var t=n.query||{},r=(t.propertySlug,s(t,["propertySlug"]));return e.push({pathname:n.pathname,query:r})}),[e]);return o().useMemo((function(){return l({},e,{replace:n,push:t})}),[e,n,t])}},5634:function(e,n,t){t.d(n,{oB:function(){return r},Pe:function(){return i},V2:function(){return o}});var r=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),i=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0,minimumFractionDigits:0}),o=new Intl.NumberFormat("en-IN")}}]);