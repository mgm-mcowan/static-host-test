"use strict";(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[55],{824:function(e,a,l){l.d(a,{v:function(){return u}});var t=(0,l(2496).r)({}),n=(t.AnalyticsServiceProvider,t.useAnalyticsService);function i(e,a,l){return a in e?Object.defineProperty(e,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[a]=l,e}function r(e){for(var a=1;a<arguments.length;a++){var l=null!=arguments[a]?arguments[a]:{},t=Object.keys(l);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(l).filter((function(e){return Object.getOwnPropertyDescriptor(l,e).enumerable})))),t.forEach((function(a){i(e,a,l[a])}))}return e}function u(e){var a=n(),l=a.trackSatellite,t=a.setDigitalData,i=null!==e&&void 0!==e?e:"acct";return function(e){var a=e.eventName,n=e.title,u=e.notificationMessage,o=e.eventAttributes;t("event",[{eventInfo:{eventName:a},attributes:r({title:n},u?{notificationMessage:u}:{},void 0===o?{}:o)}]),l("".concat(i,"_clickevent"))}}},3032:function(e,a,l){var t,n;l.d(a,{d:function(){return t}}),(n=t||(t={})).UnknownError="unknown-error",n.ContactMemberServices="contact-member-services",n.ContactReservationsMgmri="contact-reservations-mgmri"},8055:function(e,a,l){l.r(a),l.d(a,{Profile:function(){return ie},default:function(){return re}});var t=l(5893),n=l(5124),i=l(6736),r=l(824),u=l(1641),o=l(9989);function s(){var e,a,l=(e=['\n  # prettier-ignore\n  query GetProfile {\n    me {\n      mgmId\n      mlifeNumber\n      firstName\n      lastName\n      dateOfBirth(format: "MM/dd/yyyy")\n      memberships {\n        ...on MlifeMembership {\n          creditAccount\n        }\n      }\n      addresses: contactMethods(format: MOBILE) {\n        ... on Address {\n          street1\n          street2\n          city\n          state\n          country\n          postalCode\n          rel: type\n          preferred: isPrimary\n        }\n      }\n      emails: contactMethods(format: MOBILE) {\n        ... on Email {\n          email\n          rel: type\n          preferred: isPrimary\n        }\n      }\n      phones: contactMethods(format: MOBILE) {\n        ... on Phone {\n          number\n          rel: type\n          preferred: isPrimary\n        }\n      }\n    }\n  }\n'],a||(a=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(a)}})));return s=function(){return l},l}var d=(0,o.ZP)(s()),v=l(6323);function c(){var e,a,l=(e=["\n  # prettier-ignore\n  mutation UpdateProfile(\n    $email: String!\n    $phoneNumber: String\n    $country: String\n    $street1: String\n    $street2: String\n    $city: String\n    $state: String\n    $zipCode: String\n  ) {\n    updateCustomer(\n      input: {\n        emails: [\n          {\n            email: $email,\n            preferred: true,\n            type: PERSONAL\n          }\n        ]\n        addresses: [\n          {\n            type: HOME\n            street1: $street1\n            street2: $street2\n            city: $city\n            state: $state\n            country: $country\n            zipCode: $zipCode\n            preferred: true\n          }\n        ]\n        phoneNumbers: [\n          {\n            number: $phoneNumber\n            type: MOBILE\n            preferred: true\n          }\n        ]\n      }\n    ) {\n      success\n    }\n  }\n"],a||(a=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(a)}})));return c=function(){return l},l}var b=(0,o.ZP)(c());function p(e,a,l){return a in e?Object.defineProperty(e,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[a]=l,e}function m(e){for(var a=1;a<arguments.length;a++){var l=null!=arguments[a]?arguments[a]:{},t=Object.keys(l);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(l).filter((function(e){return Object.getOwnPropertyDescriptor(l,e).enumerable})))),t.forEach((function(a){p(e,a,l[a])}))}return e}var h=l(3032),f=l(8520),g=l.n(f),y=l(4544);function C(e,a,l,t,n,i,r){try{var u=e[i](r),o=u.value}catch(s){return void l(s)}u.done?a(o):Promise.resolve(o).then(t,n)}function S(e,a){for(var l=0;l<a.length;l++){var t=a[l];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var N=function(){function e(){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,e),this._mutex=Promise.resolve()}var a,l,t;return a=e,(l=[{key:"lock",value:function(){var e=function(){};return this._mutex=this._mutex.then((function(){return new Promise(e)})),new Promise((function(a){e=a}))}},{key:"acquire",value:function(e){return function(e){return function(){var a=this,l=arguments;return new Promise((function(t,n){var i=e.apply(a,l);function r(e){C(i,t,n,r,u,"next",e)}function u(e){C(i,t,n,r,u,"throw",e)}r(void 0)}))}}(g().mark((function a(){var l;return g().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,this.lock();case 2:return l=a.sent,a.prev=3,a.abrupt("return",e());case 5:return a.prev=5,l(),a.finish(5);case 8:case"end":return a.stop()}}),a,this,[[3,,5,8]])})).bind(this))()}}])&&S(a.prototype,l),t&&S(a,t),e}(),w=l(4155),M=function(e){return e[w.env.API_ENV||"dev"]};function x(e,a,l,t,n,i,r){try{var u=e[i](r),o=u.value}catch(s){return void l(s)}u.done?a(o):Promise.resolve(o).then(t,n)}function k(e,a,l){return a in e?Object.defineProperty(e,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[a]=l,e}var A,j="".concat(window.location.origin)+"/account",G={storageIdentifier:"web_account",supplementalSignOutUrl:M({dev:"https://dev-api.devtest.vegas/identity/rbapi-logout",uat:"https://uat-api.devtest.vegas/identity/rbapi-logout",qa4:"https://qa4-api.devtest.vegas/identity/rbapi-logout",preprod:"https://preprod-api.devtest.vegas/identity/rbapi-logout",preview:"https://preview-api.devtest.vegas/identity/rbapi-logout",prod:"https://api.mgmresorts.com/identity/rbapi-logout"}),tokenUrl:M({dev:"https://azdeapi-dev.mgmresorts.com/int/identity/authorization/v1/default/token",uat:"https://azdeapi-dev.mgmresorts.com/int/identity/authorization/v1/default/token",qa4:"https://azdeapi-dev.mgmresorts.com/int/identity/authorization/v1/default/token",preprod:"https://azdeapi-dev.mgmresorts.com/int/identity/authorization/v1/default/token",preview:"https://azdeapi-dev.mgmresorts.com/int/identity/authorization/v1/default/token",prod:"https://azdeapi.mgmresorts.com/identity/authorization/v1/default/token"}),userinfoUrl:M({dev:"https://azdeapi-dev.mgmresorts.com/int/identity/authorization/v1/default/userinfo",uat:"https://azdeapi-dev.mgmresorts.com/int/identity/authorization/v1/default/userinfo",qa4:"https://azdeapi-dev.mgmresorts.com/int/identity/authorization/v1/default/userinfo",preprod:"https://azdeapi-dev.mgmresorts.com/int/identity/authorization/v1/default/userinfo",preview:"https://azdeapi-dev.mgmresorts.com/int/identity/authorization/v1/default/userinfo",prod:"https://azdeapi.mgmresorts.com/identity/authorization/v1/default/userinfo"}),authorizeUrl:M({dev:"https://identity.devtest.vegas/oauth2/ausph7ezp3Gkkk8WN0h7/v1/authorize",uat:"https://identity.devtest.vegas/oauth2/ausph7ezp3Gkkk8WN0h7/v1/authorize",qa4:"https://identity.devtest.vegas/oauth2/ausph7ezp3Gkkk8WN0h7/v1/authorize",preprod:"https://identity.devtest.vegas/oauth2/ausph7ezp3Gkkk8WN0h7/v1/authorize",preview:"https://identity.devtest.vegas/oauth2/ausph7ezp3Gkkk8WN0h7/v1/authorize",prod:"https://identity.mgmresorts.com/oauth2/ausdz02gi5cZ8h8NP1t7/v1/authorize"}),clientId:M({dev:"mgm_app_web",uat:"mgm_app_web",qa4:"mgm_app_web",preprod:"mgm_app_web",preview:"mgm_app_web",prod:"mgm_app_web"}),issuer:M({dev:"https://identity.devtest.vegas/oauth2/ausph7ezp3Gkkk8WN0h7",uat:"https://identity.devtest.vegas/oauth2/ausph7ezp3Gkkk8WN0h7",qa4:"https://identity.devtest.vegas/oauth2/ausph7ezp3Gkkk8WN0h7",preprod:"https://identity.devtest.vegas/oauth2/ausph7ezp3Gkkk8WN0h7",preview:"https://identity.devtest.vegas/oauth2/ausph7ezp3Gkkk8WN0h7",prod:"https://identity.mgmresorts.com/oauth2/ausdz02gi5cZ8h8NP1t7"}),redirectUri:M({dev:"".concat(j,"/auth/login"),uat:"".concat(j,"/auth/login"),qa4:"".concat(j,"/auth/login"),preprod:"".concat(j,"/auth/login"),preview:"".concat(j,"/auth/login"),prod:"".concat(j,"/auth/login")}),postLogoutRedirectUri:M({dev:j,uat:j,qa4:j,preprod:j,preview:j,prod:j}),tokensAcceptedRedirectUri:M({dev:j,uat:j,qa4:j,preprod:j,preview:j,prod:j}),identityAuthOrigin:M({dev:"https://dev.devtest.vegas/identity",uat:"https://uat.devtest.vegas/identity",qa4:"https://qa4.devtest.vegas/identity",preprod:"https://preprod.devtest.vegas/identity",preview:"https://preprod.devtest.vegas/identity",prod:"https://www.mgmresorts.com/identity"}),scopes:["profile:create","profile:read","profile:update","loyalty:balances:read","loyalty:comments:read","loyalty:linkedprofiles:read","loyalty:profile:create","loyalty:profile:read","loyalty:profile:update","loyalty:promos:read","loyalty:stopcodes:read","loyalty:taxinfo:read","offline_access","openid","itinerary:read","trip:read","rooms.availability:read","rooms.reservation:read","cart:create","cart:read","cart:update","email","itinerary:create","myvegas.code:read","openid","payments.tokenization:tokenize","profile","profile:create","rooms.availability:read","rooms.program:read","rooms.reservation.charges:read","rooms.reservation:create","rooms.reservation:read","rooms.reservation:update","booking.room.resv:search","payments.storage:save"]},z=function(e){return function(e){for(var a=1;a<arguments.length;a++){var l=null!=arguments[a]?arguments[a]:{},t=Object.keys(l);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(l).filter((function(e){return Object.getOwnPropertyDescriptor(l,e).enumerable})))),t.forEach((function(a){k(e,a,l[a])}))}return e}({},G,void 0===e?{}:e)},P=new N,I=(A=g().mark((function e(){return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.acquire((function(){return window.__ACCOUNT_AUTH_CLIENT||(window.__ACCOUNT_AUTH_CLIENT=new y.MGMAuth(z())),window.__ACCOUNT_AUTH_CLIENT}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})),[{value:"AF",label:"Afghanistan"},{value:"AX",label:"\xc5land Islands"},{value:"AL",label:"Albania"},{value:"DZ",label:"Algeria"},{value:"AS",label:"American Samoa"},{value:"AD",label:"Andorra"},{value:"AO",label:"Angola"},{value:"AI",label:"Anguilla"},{value:"AQ",label:"Antarctica"},{value:"AG",label:"Antigua and Barbuda"},{value:"AR",label:"Argentina"},{value:"AM",label:"Armenia"},{value:"AW",label:"Aruba"},{value:"AU",label:"Australia"},{value:"AT",label:"Austria"},{value:"AZ",label:"Azerbaijan"},{value:"BS",label:"Bahamas"},{value:"BH",label:"Bahrain"},{value:"FQ",label:"Baker Island"},{value:"BD",label:"Bangladesh"},{value:"BB",label:"Barbados"},{value:"BY",label:"Belarus"},{value:"BE",label:"Belgium"},{value:"BZ",label:"Belize"},{value:"BJ",label:"Benin"},{value:"BM",label:"Bermuda"},{value:"BT",label:"Bhutan"},{value:"BO",label:"Bolivia"},{value:"BQ",label:"Bonaire, Sint Eustatius and Saba"},{value:"BA",label:"Bosnia and Herzegovina"},{value:"BW",label:"Botswana"},{value:"BV",label:"Bouvet Island"},{value:"BR",label:"Brazil"},{value:"IO",label:"British Indian Ocean Territory"},{value:"BN",label:"Brunei Darussalam"},{value:"BG",label:"Bulgaria"},{value:"BF",label:"Burkina Faso"},{value:"BI",label:"Burundi"},{value:"KH",label:"Cambodia"},{value:"CM",label:"Cameroon"},{value:"CA",label:"Canada"},{value:"CV",label:"Cape Verde"},{value:"KY",label:"Cayman Islands"},{value:"CF",label:"Central African Republic"},{value:"TD",label:"Chad"},{value:"CL",label:"Chile"},{value:"CN",label:"China"},{value:"CX",label:"Christmas Island"},{value:"IP",label:"Clipperton Island"},{value:"CC",label:"Cocos (Keeling) Islands"},{value:"CO",label:"Colombia"},{value:"KM",label:"Comoros"},{value:"CG",label:"Congo"},{value:"CD",label:"Congo, The Democratic Republic of the"},{value:"CK",label:"Cook Islands"},{value:"CR",label:"Costa Rica"},{value:"HR",label:"Croatia"},{value:"CU",label:"Cuba"},{value:"CW",label:"Cura\xc7ao"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"CI",label:"C\xf4te D'Ivoire"},{value:"DK",label:"Denmark"},{value:"DJ",label:"Djibouti"},{value:"DM",label:"Dominica"},{value:"DO",label:"Dominican Republic"},{value:"EC",label:"Ecuador"},{value:"EG",label:"Egypt"},{value:"SV",label:"El Salvador"},{value:"GQ",label:"Equatorial Guinea"},{value:"ER",label:"Eritrea"},{value:"EE",label:"Estonia"},{value:"ET",label:"Ethiopia"},{value:"EU",label:"Europa Island"},{value:"FK",label:"Falkland Islands (Malvinas)"},{value:"FO",label:"Faroe Islands"},{value:"FJ",label:"Fiji"},{value:"FI",label:"Finland"},{value:"FR",label:"France"},{value:"GF",label:"French Guiana"},{value:"PF",label:"French Polynesia"},{value:"TF",label:"French Southern Territories"},{value:"GA",label:"Gabon"},{value:"GM",label:"Gambia"},{value:"GZ",label:"Gaza Strip"},{value:"GE",label:"Georgia"},{value:"DE",label:"Germany"},{value:"GH",label:"Ghana"},{value:"GI",label:"Gibraltar"},{value:"GO",label:"Glorioso Islands"},{value:"GR",label:"Greece"},{value:"GL",label:"Greenland"},{value:"GD",label:"Grenada"},{value:"GP",label:"Guadeloupe"},{value:"GU",label:"Guam"},{value:"GT",label:"Guatemala"},{value:"GG",label:"Guernsey"},{value:"GN",label:"Guinea"},{value:"GW",label:"Guinea-Bissau"},{value:"GY",label:"Guyana"},{value:"HT",label:"Haiti"},{value:"HM",label:"Heard Island and McDonald Islands"},{value:"VA",label:"Holy See (Vatican City)"},{value:"HN",label:"Honduras"},{value:"HK",label:"Hong Kong"},{value:"HQ",label:"Howland Island"},{value:"HU",label:"Hungary"},{value:"IS",label:"Iceland"},{value:"IN",label:"India"},{value:"ID",label:"Indonesia"},{value:"IR",label:"Iran, Islamic Republic of"},{value:"IQ",label:"Iraq"},{value:"IE",label:"Ireland"},{value:"IM",label:"Isle of Man"},{value:"IL",label:"Israel"},{value:"IT",label:"Italy"},{value:"JM",label:"Jamaica"},{value:"JN",label:"Jan Mayen"},{value:"JP",label:"Japan"},{value:"DQ",label:"Jarvis Island"},{value:"JE",label:"Jersey"},{value:"JQ",label:"Johnston Atoll"},{value:"JO",label:"Jordan"},{value:"JU",label:"Juan de Nova Island"},{value:"KZ",label:"Kazakhstan"},{value:"KE",label:"Kenya"},{value:"KQ",label:"Kingman Reef"},{value:"KI",label:"Kiribati"},{value:"XK",label:"Kosovo"},{value:"KW",label:"Kuwait"},{value:"KG",label:"Kyrgyzstan"},{value:"LA",label:"Lao People's Democratic Republic"},{value:"LV",label:"Latvia"},{value:"LB",label:"Lebanon"},{value:"LS",label:"Lesotho"},{value:"LR",label:"Liberia"},{value:"LY",label:"Libya"},{value:"LI",label:"Liechtenstein"},{value:"LT",label:"Lithuania"},{value:"LU",label:"Luxembourg"},{value:"MO",label:"Macao"},{value:"MK",label:"Macedonia, the Former Yugoslav Republic of"},{value:"MG",label:"Madagascar"},{value:"MW",label:"Malawi"},{value:"MY",label:"Malaysia"},{value:"MV",label:"Maldives"},{value:"ML",label:"Mali"},{value:"MT",label:"Malta"},{value:"MH",label:"Marshall Islands"},{value:"MQ",label:"Martinique"},{value:"MR",label:"Mauritania"},{value:"MU",label:"Mauritius"},{value:"YT",label:"Mayotte"},{value:"MX",label:"Mexico"},{value:"FM",label:"Micronesia, Federated States of"},{value:"MD",label:"Moldova, Republic of"},{value:"MC",label:"Monaco"},{value:"MN",label:"Mongolia"},{value:"ME",label:"Montenegro"},{value:"MS",label:"Montserrat"},{value:"MA",label:"Morocco"},{value:"MZ",label:"Mozambique"},{value:"MM",label:"Myanmar"},{value:"NA",label:"Namibia"},{value:"NR",label:"Nauru"},{value:"NP",label:"Nepal"},{value:"NL",label:"Netherlands"},{value:"AN",label:"Netherlands Antilles"},{value:"NC",label:"New Caledonia"},{value:"NZ",label:"New Zealand"},{value:"NI",label:"Nicaragua"},{value:"NE",label:"Niger"},{value:"NG",label:"Nigeria"},{value:"NU",label:"Niue"},{value:"NF",label:"Norfolk Island"},{value:"KP",label:"North Korea, Democratic People's Republic of"},{value:"MP",label:"Northern Mariana Islands"},{value:"NO",label:"Norway"},{value:"OM",label:"Oman"},{value:"PK",label:"Pakistan"},{value:"PW",label:"Palau"},{value:"PS",label:"Palestinian Territory, Occupied"},{value:"LQ",label:"Palmyra Atoll"},{value:"PA",label:"Panama"},{value:"PG",label:"Papua New Guinea"},{value:"PY",label:"Paraguay"},{value:"PE",label:"Peru"},{value:"PH",label:"Philippines"},{value:"PN",label:"Pitcairn"},{value:"PL",label:"Poland"},{value:"PT",label:"Portugal"},{value:"PR",label:"Puerto Rico"},{value:"QA",label:"Qatar"},{value:"RO",label:"Romania"},{value:"RU",label:"Russian Federation"},{value:"RW",label:"Rwanda"},{value:"RE",label:"R\xe9union"},{value:"BL",label:"Saint Barth\xc9lemy"},{value:"SH",label:"Saint Helena, Ascension and Tristan Da Cunha"},{value:"KN",label:"Saint Kitts and Nevis"},{value:"LC",label:"Saint Lucia"},{value:"MF",label:"Saint Martin (French part)"},{value:"PM",label:"Saint Pierre and Miquelon"},{value:"VC",label:"Saint Vincent and the Grenadines"},{value:"WS",label:"Samoa"},{value:"SM",label:"San Marino"},{value:"ST",label:"Sao Tome and Principe"},{value:"SA",label:"Saudi Arabia"},{value:"SN",label:"Senegal"},{value:"RS",label:"Serbia"},{value:"SC",label:"Seychelles"},{value:"SL",label:"Sierra Leone"},{value:"SG",label:"Singapore"},{value:"SX",label:"Sint Maarten (Dutch part)"},{value:"SK",label:"Slovakia"},{value:"SI",label:"Slovenia"},{value:"SB",label:"Solomon Islands"},{value:"SO",label:"Somalia"},{value:"ZA",label:"South Africa"},{value:"GS",label:"South Georgia and the South Sandwich Islands"},{value:"KR",label:"South Korea, Republic of"},{value:"SS",label:"South Sudan"},{value:"ES",label:"Spain"},{value:"LK",label:"Sri Lanka"},{value:"SD",label:"Sudan"},{value:"SR",label:"Suriname"},{value:"SJ",label:"Svalbard and Jan Mayen"},{value:"SZ",label:"Swaziland"},{value:"SE",label:"Sweden"},{value:"CH",label:"Switzerland"},{value:"SY",label:"Syrian Arab Republic"},{value:"TW",label:"Taiwan"},{value:"TJ",label:"Tajikistan"},{value:"TZ",label:"Tanzania, United Republic of"},{value:"TH",label:"Thailand"},{value:"TL",label:"Timor-Leste"},{value:"TG",label:"Togo"},{value:"TK",label:"Tokelau"},{value:"TO",label:"Tonga"},{value:"TT",label:"Trinidad and Tobago"},{value:"TE",label:"Tromelin Island"},{value:"TN",label:"Tunisia"},{value:"TR",label:"Turkey"},{value:"TM",label:"Turkmenistan"},{value:"TC",label:"Turks and Caicos Islands"},{value:"TV",label:"Tuvalu"},{value:"UG",label:"Uganda"},{value:"UA",label:"Ukraine"},{value:"AE",label:"United Arab Emirates"},{value:"GB",label:"United Kingdom"},{value:"US",label:"United States"},{value:"UM",label:"United States Minor Outlying Islands"},{value:"UY",label:"Uruguay"},{value:"UZ",label:"Uzbekistan"},{value:"VU",label:"Vanuatu"},{value:"VE",label:"Venezuela, Bolivarian Republic of"},{value:"VN",label:"Viet Nam"},{value:"VI",label:"Virgin Islands US"},{value:"VG",label:"Virgin Islands, British"},{value:"WQ",label:"Wake Island"},{value:"WF",label:"Wallis and Futuna"},{value:"WE",label:"West Bank"},{value:"EH",label:"Western Sahara"},{value:"YE",label:"Yemen"},{value:"ZM",label:"Zambia"},{value:"ZW",label:"Zimbabwe"}]),O={US:[{value:"AL",label:"Alabama"},{value:"AK",label:"Alaska"},{value:"AZ",label:"Arizona"},{value:"AR",label:"Arkansas"},{value:"CA",label:"California"},{value:"CO",label:"Colorado"},{value:"CT",label:"Connecticut"},{value:"DE",label:"Delaware"},{value:"DC",label:"District of Columbia"},{value:"FL",label:"Florida"},{value:"GA",label:"Georgia"},{value:"HI",label:"Hawaii"},{value:"ID",label:"Idaho"},{value:"IL",label:"Illinois"},{value:"IN",label:"Indiana"},{value:"IA",label:"Iowa"},{value:"KS",label:"Kansas"},{value:"KY",label:"Kentucky"},{value:"LA",label:"Louisiana"},{value:"ME",label:"Maine"},{value:"MD",label:"Maryland"},{value:"MA",label:"Massachusetts"},{value:"MI",label:"Michigan"},{value:"MN",label:"Minnesota"},{value:"MS",label:"Mississippi"},{value:"MO",label:"Missouri"},{value:"MT",label:"Montana"},{value:"NE",label:"Nebraska"},{value:"NV",label:"Nevada"},{value:"NH",label:"New Hampshire"},{value:"NJ",label:"New Jersey"},{value:"NM",label:"New Mexico"},{value:"NY",label:"New York"},{value:"NC",label:"North Carolina"},{value:"ND",label:"North Dakota"},{value:"OH",label:"Ohio"},{value:"OK",label:"Oklahoma"},{value:"OR",label:"Oregon"},{value:"PA",label:"Pennsylvania"},{value:"RI",label:"Rhode Island"},{value:"SC",label:"South Carolina"},{value:"SD",label:"South Dakota"},{value:"TN",label:"Tennessee"},{value:"TX",label:"Texas"},{value:"UT",label:"Utah"},{value:"VT",label:"Vermont"},{value:"VA",label:"Virginia"},{value:"WA",label:"Washington"},{value:"WV",label:"West Virginia"},{value:"WI",label:"Wisconsin"},{value:"WY",label:"Wyoming"}],CA:[{value:"AB",label:"Alberta"},{value:"BC",label:"British Colombia"},{value:"MB",label:"Manitoba"},{value:"NB",label:"New Brunswick"},{value:"NL",label:"Newfoundland and Labrador"},{value:"NT",label:"Northwest Territories"},{value:"NS",label:"Nova Scotia"},{value:"NU",label:"Nunavut"},{value:"ON",label:"Ontario"},{value:"PE",label:"Prince Edward Island"},{value:"QC",label:"Quebec"},{value:"SK",label:"Saskatchewan"},{value:"YT",label:"Yukon"}]},B=l(3035);function T(e,a){return a||(a=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(a)}}))}function R(){var e=T(["\n  margin-bottom: 0;\n  margin-top: ",";\n"]);return R=function(){return e},e}function E(){var e=T(["\n  ","\n"]);return E=function(){return e},e}function L(){var e=T(["\n  > div {\n    ","\n\n    .profile__change-password-button {\n      font-size: ",";\n      width: fit-content;\n      float: right;\n    }\n  }\n"]);return L=function(){return e},e}function U(){var e=T(["\n  > div > div {\n    ","\n  }\n"]);return U=function(){return e},e}function D(){var e=T(["\n  margin-bottom: ",";\n  color: ",";\n"]);return D=function(){return e},e}function F(){var e=T(["\n  width: 100%;\n  margin-bottom: 80px;\n"]);return F=function(){return e},e}function V(){var e=T(["\n  margin-top: 40px;\n"]);return V=function(){return e},e}function _(){var e=T(["\n  margin-top: 32px;\n"]);return _=function(){return e},e}function K(){var e=T(["\n  margin-bottom: ",";\n  display: inline-flex;\n  align-items: center;\n\n  .profile__success-message {\n    margin-left: ",";\n  }\n"]);return K=function(){return e},e}var H=(0,B.css)(R(),B.$spacingMedium),W=(0,B.styled)(n.Input)(E(),H),Z=(0,B.styled)(n.GridColumn)(L(),H,B.$paragraph),q=(0,B.styled)(n.Select)(U(),H),$=(0,B.styled)(n.Text10)(D(),B.$spacingXSmall,B.$dark),J=B.styled.form(F()),Y=(0,B.styled)(n.GridRow)(V()),Q=(0,B.styled)(n.GridRow)(_()),X=B.styled.div(K(),B.$spacingXtraLarge,B.$spacingXSmall),ee=["United States","Canada"],ae={email:{required:{value:!0,message:"Email address is required."},pattern:{value:"^[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\\.){1,125}[a-zA-Z]{2,63}$",message:"Email address is invalid."}},phoneNumber:{maxlength:{value:16,message:"Phone Number must be between 10 and 16 characters."},pattern:{value:"^[0-9 +-.]{10,16}$",message:"Phone Number is invalid."}},state:{custom:{stateDropdownRequired:{isValid:function(e){var a=!0;return ee.includes(e.country)&&(a=e.state.length>0),a},message:"State/Province is required."},stateDropdownPattern:{isValid:function(e){var a=!0;return ee.includes(e.country)&&(a=RegExp("^[a-zA-Z]{2}$").test(e.state)),a},message:"State/Province is invalid."},stateInputMaxlength:{isValid:function(e){var a=!0;return!ee.includes(e.country)&&e.state&&(a=e.state.length<=30),a},message:"State/Province must be between 1 and 30 characters."},stateInputPattern:{isValid:function(e){var a=!0;return ee.includes(e.country)||(a=RegExp(/^[A-Za-z0-9.\-\\/+=_ !$\\*?@#,']{1,30}$/).test(e.state)),a},message:"State/Province is invalid."}}},zipCode:{custom:{zipCodeInputRequired:{isValid:function(e){var a=!0;return ee.includes(e.country)&&(a=e.zipCode.length>0),a},message:"Zip / Postal Code is required."},zipCodeInputPattern1:{isValid:function(e){var a=!0;if(ee.includes(e.country)){var l=e.country===ee[0]?/^\d{5}(-\d{4})?$/:/^[ABCEGHJKLMNPRSTVXYabceghjklmnprstvxy]{1}\d{1}[A-Z]{1} *\d{1}[A-Za-z]{1}\d{1}$/;a=RegExp(l).test(e.zipCode)}return a},message:"Zip / Postal Code is invalid."},zipCodeInputPattern2:{isValid:function(e){var a=!0;return!ee.includes(e.country)&&e.zipCode&&(a=RegExp(/^[A-Za-z0-9]{4,9}$/).test(e.zipCode)),a},message:"Zip / Postal Code is invalid."},zipCodeInputLength:{isValid:function(e){var a=!0;return!ee.includes(e.country)&&e.zipCode&&(a=e.zipCode.length>=4&&e.zipCode.length<=9),a},message:"Zip / Postal Code must be between 4 and 9 characters."}}}};function le(e,a,l){return a in e?Object.defineProperty(e,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[a]=l,e}function te(e){for(var a=1;a<arguments.length;a++){var l=null!=arguments[a]?arguments[a]:{},t=Object.keys(l);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(l).filter((function(e){return Object.getOwnPropertyDescriptor(l,e).enumerable})))),t.forEach((function(a){le(e,a,l[a])}))}return e}function ne(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var l=[],t=!0,n=!1,i=void 0;try{for(var r,u=e[Symbol.iterator]();!(t=(r=u.next()).done)&&(l.push(r.value),!a||l.length!==a);t=!0);}catch(o){n=!0,i=o}finally{try{t||null==u.return||u.return()}finally{if(n)throw i}}return l}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ie=function(e){var a,l,o,s=e.useErrorMessage,c=function(e){var a=e.initialValues,l=e.submitCallback,t=e.validations,n=(0,i.useState)(a||{}),r=n[0],u=n[1],o=(0,i.useState)(!1),s=o[0],d=o[1],v=(0,i.useState)({}),c=v[0],b=v[1],h=(0,i.useState)(!1),f=h[0],g=h[1],y=(0,i.useCallback)((function(e){e&&e.preventDefault(),l&&l(e)}),[l]),C=(0,i.useCallback)((function(e,a){a&&("function"===typeof a.persist&&a.persist(),u((function(l){return m({},l,p({},a.target.id,e))})),d(!0),g(!1))}),[]),S=(0,i.useCallback)((function(e){if(t){var a,l,n=!0,i={},u=r[e],o=t[e];n&&(null===o||void 0===o||null===(a=o.required)||void 0===a?void 0:a.value)&&!u&&(n=!1,i[e]=null===o||void 0===o||null===(l=o.required)||void 0===l?void 0:l.message);var s=null===o||void 0===o?void 0:o.maxlength;n&&(null===s||void 0===s?void 0:s.value)&&u.length>s.value&&(n=!1,i[e]=s.message);var d=null===o||void 0===o?void 0:o.pattern;n&&u&&(null===d||void 0===d?void 0:d.value)&&!RegExp(d.value).test(u)&&(n=!1,i[e]=d.message);var v=null===o||void 0===o?void 0:o.custom;for(var p in v){var h=v[p];if(n&&(null===h||void 0===h?void 0:h.isValid)&&!h.isValid(r)){n=!1,i[e]=h.message;break}}if(!n&&i)b((function(e){return m({},e,i)}));else{var f=m({},c);delete f[e],b(f||{})}}}),[c,t,r]),N=(0,i.useCallback)((function(){var e={};if(t)for(var a in t){var l,n,i=r[a],u=t[a],o=!0;o&&(null===u||void 0===u||null===(l=u.required)||void 0===l?void 0:l.value)&&!i&&(o=!1,e[a]=null===u||void 0===u||null===(n=u.required)||void 0===n?void 0:n.message);var s=null===u||void 0===u?void 0:u.maxlength;o&&(null===s||void 0===s?void 0:s.value)&&i.length>s.value&&(o=!1,e[a]=s.message);var d=null===u||void 0===u?void 0:u.pattern;o&&i&&(null===d||void 0===d?void 0:d.value)&&!RegExp(d.value).test(i)&&(o=!1,e[a]=d.message);var v=null===u||void 0===u?void 0:u.custom;for(var c in v){var p=v[c];if(o&&(null===p||void 0===p?void 0:p.isValid)&&!p.isValid(r)){o=!1,e[a]=p.message;break}}}b(e)}),[t,r]),w=(0,i.useMemo)((function(){var e=Object.keys(c);return!(0===e.length||e.every((function(e){return""===c[e]})))}),[c]);return{handleChange:C,handleSubmit:y,values:r,setValues:u,hasFormChanged:s,setHasFormChanged:d,errors:c,validateField:S,validateFields:N,hasInvalidFields:w,isUpdateSuccess:f,setIsUpdateSuccess:g}}({initialValues:{firstName:"",lastName:"",phoneNumber:"",email:"",dateOfBirth:"",country:"",address1:"",address2:"",city:"",state:"",zipCode:"",countryCode:""},validations:ae}),f=c.values,g=c.setValues,y=c.handleChange,C=c.hasFormChanged,S=c.setHasFormChanged,N=c.errors,w=c.validateField,M=c.validateFields,x=c.hasInvalidFields,k=c.isUpdateSuccess,A=c.setIsUpdateSuccess,j=(0,i.useState)({}),z=j[0],P=j[1],B=(0,i.useContext)(n.ViewportContext),T=(0,i.useState)(!1),R=T[0],E=T[1],L=(0,r.v)(),U=s().setErrorMessageById,D=(0,u.a)(d,{fetchPolicy:"network-only",ssr:!1}),F=D.loading,V=D.data,_=D.error,K=ne((0,v.D)(b),2),H=K[0],le=K[1].loading,ie=(0,i.useMemo)((function(){return ee.includes(f.country)}),[f.country]),re=(0,i.useCallback)((function(e){var a=I.find((function(a){return a.value===e}))||{},l=a.value,t=void 0===l?"":l,n=a.label,i=void 0===n?"":n;g((function(e){return te({},e,{country:i,countryCode:t})})),S(!0)}),[S,g]),ue=(0,i.useCallback)((function(e){y(e,{target:{id:"state"}}),w("state")}),[y,w]),oe=(0,i.useCallback)((function(e){L({eventName:"account \u2013 my profile \u2013 profile changes",title:"save changes - profile",eventAttributes:{saveChangesState:e}})}),[L]),se=(0,i.useCallback)((function(e){var a,l;(null===e||void 0===e||null===(a=e.data)||void 0===a||null===(l=a.updateCustomer)||void 0===l?void 0:l.success)&&(oe("success"),A(!0),P(f),S(!1),window.scrollTo({top:0,behavior:"smooth"}))}),[f,S,A,oe]),de=(0,i.useCallback)((function(e){oe("fail"),e&&U(h.d.ContactMemberServices)}),[oe,U]),ve=(0,i.useCallback)((function(e){if(e&&e.preventDefault(),U(null),M(),!x){var a={email:f.email};f.phoneNumber&&(a.phoneNumber=f.phoneNumber),f.address1&&(a.street1=f.address1),f.address2&&(a.street2=f.address2),f.countryCode&&(a.country=f.countryCode),f.city&&(a.city=f.city),f.state&&(a.state=f.state),f.zipCode&&(a.zipCode=f.zipCode),H({variables:a}).then((function(e){return se(e)}),(function(e){return de(e)}))}}),[x,f,H,M,se,de,U]),ce=(0,i.useCallback)((function(){g(z),S(!1),U(null),A(!1)}),[g,z,S,U,A]),be=(0,i.useCallback)((function(e){var a,l,t,n,i,r=(null===(l=null===(a=e.phones)||void 0===a?void 0:a.find((function(e){return e.preferred&&"Phone"===e.__typename})))||void 0===l?void 0:l.number)||"",u=(null===(n=null===(t=e.emails)||void 0===t?void 0:t.find((function(e){return e.preferred&&"Email"===e.__typename})))||void 0===n?void 0:n.email)||"",o=(null===(i=e.addresses)||void 0===i?void 0:i.find((function(e){return e.preferred&&"Address"===e.__typename})))||{},s=I.find((function(e){return e.value===(null===o||void 0===o?void 0:o.country)}))||{},d=s.value,v=void 0===d?"":d,c=s.label,b=void 0===c?"":c;return{firstName:e.firstName||"",lastName:e.lastName||"",phoneNumber:r,email:u,dateOfBirth:e.dateOfBirth||"",country:b,address1:(null===o||void 0===o?void 0:o.street1)||"",address2:(null===o||void 0===o?void 0:o.street2)||"",city:(null===o||void 0===o?void 0:o.city)||"",state:(null===o||void 0===o?void 0:o.state)||"",zipCode:(null===o||void 0===o?void 0:o.postalCode)||"",countryCode:v}}),[]),pe=(0,i.useMemo)((function(){return"".concat(G.identityAuthOrigin,"/change-password")}),[]);return(0,i.useEffect)((function(){if(V&&V.me){var e,a,l=te({},be(V.me));E(!!(null===(a=null===(e=V.me)||void 0===e?void 0:e.memberships[0])||void 0===a?void 0:a.creditAccount)),g(l),P(l)}}),[V,g,be]),F?(0,t.jsx)(n.EmptyState,{loading:!0}):(_&&U(h.d.ContactMemberServices),(0,t.jsxs)(J,{onSubmit:ve,children:[R&&(0,t.jsx)("div",{style:{marginBottom:24},children:(0,t.jsx)(n.Alert,{type:"info",description:'M life Rewards members with casino credit may not make profile changes online. Please contact Member Services at <a href="tel:866-761-7111">866.761.7111</a>'})}),k&&(0,t.jsxs)(X,{children:[(0,t.jsx)(n.FreeCancellationIcon,{color:"blue",height:30}),(0,t.jsx)(n.Text16,{className:"profile__success-message",children:"Your profile changes have been saved"})]}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.GridRow,{children:(0,t.jsx)(n.GridColumn,{cols:12,children:(0,t.jsx)(n.Text16,{children:"Guest Information"})})}),(0,t.jsx)(n.GridRow,{children:(0,t.jsx)(n.GridColumn,{cols:12,children:(0,t.jsx)(W,{id:"firstName",label:"First Name",value:f.firstName,type:"text",disabled:!0})})}),(0,t.jsx)(n.GridRow,{children:(0,t.jsx)(n.GridColumn,{cols:12,children:(0,t.jsx)(W,{id:"lastName",label:"Last Name",value:f.lastName,type:"text",disabled:!0})})}),(0,t.jsx)(n.GridRow,{children:(0,t.jsx)(n.GridColumn,{cols:12,children:(0,t.jsx)(W,{id:"email",label:"Email Address",value:f.email,error:null===N||void 0===N?void 0:N.email,type:"email",onChange:y,disabled:R||le,onBlur:function(){return w("email")}})})}),(0,t.jsx)(n.GridRow,{children:(0,t.jsx)(n.GridColumn,{cols:12,children:(0,t.jsx)(W,{id:"phoneNumber",label:"Phone Number (optional)",value:f.phoneNumber,error:null===N||void 0===N?void 0:N.phoneNumber,type:"tel",onChange:y,disabled:R||le,onBlur:function(){return w("phoneNumber")}})})}),(0,t.jsx)(n.GridRow,{children:(0,t.jsx)(Z,{cols:2,indent:10,children:(0,t.jsx)("div",{children:(0,t.jsx)(n.Button,{className:"profile__change-password-button",variant:"primary",shape:"inline",size:"large",label:"Change Password",fullWidth:!0,href:pe})})})}),(0,t.jsxs)(n.GridRow,{children:[(0,t.jsx)(Z,{cols:12,children:(0,t.jsx)(n.Heading20,{children:"Birthday"})}),(0,t.jsx)(n.GridColumn,{cols:4,children:(0,t.jsx)(W,{id:"birthMonth",label:"Month",value:(null===(a=f.dateOfBirth)||void 0===a?void 0:a.split("/")[0])||"",type:"number",disabled:!0})}),(0,t.jsx)(n.GridColumn,{cols:4,children:(0,t.jsx)(W,{id:"birthDay",label:"Day",value:(null===(l=f.dateOfBirth)||void 0===l?void 0:l.split("/")[1])||"",type:"number",disabled:!0})}),(0,t.jsx)(n.GridColumn,{cols:4,children:(0,t.jsx)(W,{id:"birthYear",label:"Year",value:(null===(o=f.dateOfBirth)||void 0===o?void 0:o.split("/")[2])||"",type:"number",disabled:!0})}),(0,t.jsx)(n.GridColumn,{cols:12,children:(0,t.jsx)($,{children:"M life Rewards Members must be at least 21 years of age"})})]}),(0,t.jsx)(n.GridRow,{children:(0,t.jsx)(Z,{cols:12,children:(0,t.jsx)(n.Heading20,{children:"Address (optional)"})})}),(0,t.jsx)(n.GridRow,{children:(0,t.jsx)(n.GridColumn,{cols:12,children:(0,t.jsx)(q,{id:"country",label:"Country",value:f.country,error:null===N||void 0===N?void 0:N.country,onChange:re,options:I,disabled:R||le,maxHeight:500})})}),(0,t.jsx)(n.GridRow,{children:(0,t.jsx)(n.GridColumn,{cols:12,children:(0,t.jsx)(W,{id:"address1",label:"Address Line 1",value:f.address1,error:null===N||void 0===N?void 0:N.address1,type:"text",onChange:y,disabled:R||le})})}),(0,t.jsx)(n.GridRow,{children:(0,t.jsx)(n.GridColumn,{cols:12,children:(0,t.jsx)(W,{id:"address2",label:"Address Line 2",value:f.address2,error:null===N||void 0===N?void 0:N.address2,type:"text",onChange:y,disabled:R||le})})}),(0,t.jsx)(n.GridRow,{children:(0,t.jsx)(n.GridColumn,{cols:12,children:(0,t.jsx)(W,{id:"city",label:"City",value:f.city,error:null===N||void 0===N?void 0:N.city,type:"text",onChange:y,disabled:R||le})})}),(0,t.jsx)(n.GridRow,{children:(0,t.jsx)(n.GridColumn,{cols:12,children:ie?(0,t.jsx)(q,{id:"state",label:"State",value:f.state,error:null===N||void 0===N?void 0:N.state,onChange:ue,options:O[f.countryCode],disabled:R||le,maxHeight:500}):(0,t.jsx)(W,{id:"state",label:"State",value:f.state,error:null===N||void 0===N?void 0:N.state,type:"text",onChange:y,disabled:R||le,onBlur:function(){return w("state")}})})}),(0,t.jsx)(n.GridRow,{children:(0,t.jsx)(n.GridColumn,{cols:12,children:(0,t.jsx)(W,{id:"zipCode",label:"Zip/Postal Code",value:f.zipCode,error:null===N||void 0===N?void 0:N.zipCode,type:"text",onChange:y,disabled:R||le,onBlur:function(){return w("zipCode")}})})}),C&&!R&&(0,t.jsx)(t.Fragment,{children:B.minLg?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Y,{children:(0,t.jsx)(n.Button,{variant:"primary",shape:"pill",size:"large",label:"Save Changes",fullWidth:!0,disabled:x,type:"submit",loading:le})}),(0,t.jsx)(Q,{children:(0,t.jsx)(n.Button,{variant:"primary",shape:"inline",size:"large",label:"Cancel Changes",fullWidth:!0,onClick:ce,disabled:le})})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Q,{children:(0,t.jsx)(n.Button,{variant:"primary",shape:"inline",size:"large",label:"Cancel Changes",fullWidth:!0,onClick:ce,disabled:le})}),(0,t.jsx)(Y,{children:(0,t.jsx)(n.Button,{variant:"primary",shape:"pill",size:"large",label:"Save Changes",fullWidth:!0,disabled:x,type:"submit",loading:le})})]})})]})]}))},re=ie}}]);