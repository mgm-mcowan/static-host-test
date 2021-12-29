"use strict";
exports.id = 132;
exports.ids = [132];
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

/***/ 7132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Profile": () => (/* binding */ Profile),
  "default": () => (/* binding */ Profile_Profile)
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
;// CONCATENATED MODULE: ./src/common/api/useGetProfile.tsx


const GET_PROFILE_QUERY = (external_graphql_tag_default())`
  # prettier-ignore
  query GetProfile {
    me {
      mgmId
      mlifeNumber
      firstName
      lastName
      dateOfBirth(format: "MM/dd/yyyy")
      memberships {
        ...on MlifeMembership {
          creditAccount
        }
      }
      addresses: contactMethods(format: MOBILE) {
        ... on Address {
          street1
          street2
          city
          state
          country
          postalCode
          rel: type
          preferred: isPrimary
        }
      }
      emails: contactMethods(format: MOBILE) {
        ... on Email {
          email
          rel: type
          preferred: isPrimary
        }
      }
      phones: contactMethods(format: MOBILE) {
        ... on Phone {
          number
          rel: type
          preferred: isPrimary
        }
      }
    }
  }
`;
const useGetProfile = ()=>{
    return (0,client_.useQuery)(GET_PROFILE_QUERY, {
        fetchPolicy: 'network-only',
        ssr: false
    });
};

;// CONCATENATED MODULE: ./src/common/api/useUpdateProfile.tsx


const UPDATE_PROFILE_QUERY = (external_graphql_tag_default())`
  # prettier-ignore
  mutation UpdateProfile(
    $email: String!
    $phoneNumber: String
    $country: String
    $street1: String
    $street2: String
    $city: String
    $state: String
    $zipCode: String
  ) {
    updateCustomer(
      input: {
        emails: [
          {
            email: $email,
            preferred: true,
            type: PERSONAL
          }
        ]
        addresses: [
          {
            type: HOME
            street1: $street1
            street2: $street2
            city: $city
            state: $state
            country: $country
            zipCode: $zipCode
            preferred: true
          }
        ]
        phoneNumbers: [
          {
            number: $phoneNumber
            type: MOBILE
            preferred: true
          }
        ]
      }
    ) {
      success
    }
  }
`;
const useUpdateProfile = ()=>{
    return (0,client_.useMutation)(UPDATE_PROFILE_QUERY);
};

;// CONCATENATED MODULE: ./src/common/hooks/useForm.tsx

const useForm = ({ initialValues , submitCallback , validations  })=>{
    const { 0: values1 , 1: setValues  } = (0,external_react_.useState)(initialValues || {
    });
    const { 0: hasFormChanged , 1: setHasFormChanged  } = (0,external_react_.useState)(false);
    const { 0: errors1 , 1: setErrors  } = (0,external_react_.useState)({
    });
    const { 0: isUpdateSuccess , 1: setIsUpdateSuccess  } = (0,external_react_.useState)(false);
    const handleSubmit = (0,external_react_.useCallback)((event)=>{
        if (event) event.preventDefault();
        if (submitCallback) submitCallback(event);
    }, [
        submitCallback
    ]);
    const handleChange = (0,external_react_.useCallback)((value, event)=>{
        if (event) {
            if (typeof event.persist === 'function') {
                event.persist();
            }
            setValues((values)=>({
                    ...values,
                    [event.target.id]: value
                })
            );
            setHasFormChanged(true);
            setIsUpdateSuccess(false);
        }
    }, []);
    const validateField = (0,external_react_.useCallback)((field)=>{
        if (validations) {
            var ref;
            let valid = true;
            const newErrors = {
            };
            const value = values1[field];
            const validation = validations[field];
            // REQUIRED
            if (valid && (validation === null || validation === void 0 ? void 0 : (ref = validation.required) === null || ref === void 0 ? void 0 : ref.value) && !value) {
                var ref1;
                valid = false;
                newErrors[field] = validation === null || validation === void 0 ? void 0 : (ref1 = validation.required) === null || ref1 === void 0 ? void 0 : ref1.message;
            }
            // MAXLENGTH
            const maxlength = validation === null || validation === void 0 ? void 0 : validation.maxlength;
            if (valid && (maxlength === null || maxlength === void 0 ? void 0 : maxlength.value) && value.length > maxlength.value) {
                valid = false;
                newErrors[field] = maxlength.message;
            }
            // PATTERN
            const pattern = validation === null || validation === void 0 ? void 0 : validation.pattern;
            if (valid && value && (pattern === null || pattern === void 0 ? void 0 : pattern.value) && !RegExp(pattern.value).test(value)) {
                valid = false;
                newErrors[field] = pattern.message;
            }
            // CUSTOM
            const customValidations = validation === null || validation === void 0 ? void 0 : validation.custom;
            for(const key in customValidations){
                const custom = customValidations[key];
                if (valid && (custom === null || custom === void 0 ? void 0 : custom.isValid) && !custom.isValid(values1)) {
                    valid = false;
                    newErrors[field] = custom.message;
                    break;
                }
            }
            if (!valid && newErrors) {
                setErrors((errors)=>({
                        ...errors,
                        ...newErrors
                    })
                );
            } else {
                const oldErrors = {
                    ...errors1
                };
                delete oldErrors[field];
                setErrors(oldErrors || {
                });
            }
        }
    }, [
        errors1,
        validations,
        values1
    ]);
    const validateFields = (0,external_react_.useCallback)(()=>{
        const newErrors = {
        };
        if (validations) {
            for(const field in validations){
                var ref;
                const value = values1[field];
                const validation = validations[field];
                let valid = true;
                // REQUIRED
                if (valid && (validation === null || validation === void 0 ? void 0 : (ref = validation.required) === null || ref === void 0 ? void 0 : ref.value) && !value) {
                    var ref2;
                    valid = false;
                    newErrors[field] = validation === null || validation === void 0 ? void 0 : (ref2 = validation.required) === null || ref2 === void 0 ? void 0 : ref2.message;
                }
                // MAXLENGTH
                const maxlength = validation === null || validation === void 0 ? void 0 : validation.maxlength;
                if (valid && (maxlength === null || maxlength === void 0 ? void 0 : maxlength.value) && value.length > maxlength.value) {
                    valid = false;
                    newErrors[field] = maxlength.message;
                }
                // PATTERN
                const pattern = validation === null || validation === void 0 ? void 0 : validation.pattern;
                if (valid && value && (pattern === null || pattern === void 0 ? void 0 : pattern.value) && !RegExp(pattern.value).test(value)) {
                    valid = false;
                    newErrors[field] = pattern.message;
                }
                // CUSTOM
                const customValidations = validation === null || validation === void 0 ? void 0 : validation.custom;
                for(const key in customValidations){
                    const custom = customValidations[key];
                    if (valid && (custom === null || custom === void 0 ? void 0 : custom.isValid) && !custom.isValid(values1)) {
                        valid = false;
                        newErrors[field] = custom.message;
                        break;
                    }
                }
            }
        }
        setErrors(newErrors);
    }, [
        validations,
        values1
    ]);
    const hasInvalidFields = (0,external_react_.useMemo)(()=>{
        const fields = Object.keys(errors1);
        const valid = fields.length === 0 || fields.every((field)=>errors1[field] === ''
        );
        return !valid;
    }, [
        errors1
    ]);
    return {
        handleChange,
        handleSubmit,
        values: values1,
        setValues,
        hasFormChanged,
        setHasFormChanged,
        errors: errors1,
        validateField,
        validateFields,
        hasInvalidFields,
        isUpdateSuccess,
        setIsUpdateSuccess
    };
};

// EXTERNAL MODULE: ./src/common/types/GenericErrorMessage.ts
var GenericErrorMessage = __webpack_require__(8991);
// EXTERNAL MODULE: external "@mgmresorts/mgm-auth-js-sdk"
var mgm_auth_js_sdk_ = __webpack_require__(6576);
;// CONCATENATED MODULE: ./src/utils/Mutex.ts
class Mutex {
    lock() {
        let begin = ()=>{
        };
        this._mutex = this._mutex.then(()=>{
            return new Promise(begin);
        });
        return new Promise((resolve)=>{
            begin = resolve;
        });
    }
    async acquire(fn) {
        const unlock = await this.lock();
        try {
            return fn();
        } finally{
            unlock();
        }
    }
    constructor(){
        this._mutex = Promise.resolve();
    }
}

;// CONCATENATED MODULE: ./src/utils/selectValueByApiEnv.ts
const getApiEnv = ()=>process.env.API_ENV || 'dev'
;
const selectValueByApiEnv = (data)=>data[getApiEnv()]
;

;// CONCATENATED MODULE: ./src/utils/window.ts
const window_windowDefined = ()=>"undefined" !== 'undefined'
;

;// CONCATENATED MODULE: ./src/config/config.auth.ts




const host = window_windowDefined() ? `${window.location.origin}` : 'http://localhost:3000';
const clientUrl = host + "/account";
const defaultAuthConfig = {
    storageIdentifier: 'web_account',
    supplementalSignOutUrl: selectValueByApiEnv({
        dev: 'https://dev-api.devtest.vegas/identity/rbapi-logout',
        uat: 'https://uat-api.devtest.vegas/identity/rbapi-logout',
        qa4: 'https://qa4-api.devtest.vegas/identity/rbapi-logout',
        preprod: 'https://preprod-api.devtest.vegas/identity/rbapi-logout',
        preview: 'https://preview-api.devtest.vegas/identity/rbapi-logout',
        prod: 'https://api.mgmresorts.com/identity/rbapi-logout'
    }),
    tokenUrl: selectValueByApiEnv({
        dev: 'https://azdeapi-dev.mgmresorts.com/int/identity/authorization/v1/default/token',
        uat: 'https://azdeapi-dev.mgmresorts.com/int/identity/authorization/v1/default/token',
        qa4: 'https://azdeapi-dev.mgmresorts.com/int/identity/authorization/v1/default/token',
        preprod: 'https://azdeapi-dev.mgmresorts.com/int/identity/authorization/v1/default/token',
        preview: 'https://azdeapi-dev.mgmresorts.com/int/identity/authorization/v1/default/token',
        prod: 'https://azdeapi.mgmresorts.com/identity/authorization/v1/default/token'
    }),
    userinfoUrl: selectValueByApiEnv({
        dev: 'https://azdeapi-dev.mgmresorts.com/int/identity/authorization/v1/default/userinfo',
        uat: 'https://azdeapi-dev.mgmresorts.com/int/identity/authorization/v1/default/userinfo',
        qa4: 'https://azdeapi-dev.mgmresorts.com/int/identity/authorization/v1/default/userinfo',
        preprod: 'https://azdeapi-dev.mgmresorts.com/int/identity/authorization/v1/default/userinfo',
        preview: 'https://azdeapi-dev.mgmresorts.com/int/identity/authorization/v1/default/userinfo',
        prod: 'https://azdeapi.mgmresorts.com/identity/authorization/v1/default/userinfo'
    }),
    authorizeUrl: selectValueByApiEnv({
        dev: 'https://identity.devtest.vegas/oauth2/ausph7ezp3Gkkk8WN0h7/v1/authorize',
        uat: 'https://identity.devtest.vegas/oauth2/ausph7ezp3Gkkk8WN0h7/v1/authorize',
        qa4: 'https://identity.devtest.vegas/oauth2/ausph7ezp3Gkkk8WN0h7/v1/authorize',
        preprod: 'https://identity.devtest.vegas/oauth2/ausph7ezp3Gkkk8WN0h7/v1/authorize',
        preview: 'https://identity.devtest.vegas/oauth2/ausph7ezp3Gkkk8WN0h7/v1/authorize',
        prod: 'https://identity.mgmresorts.com/oauth2/ausdz02gi5cZ8h8NP1t7/v1/authorize'
    }),
    clientId: selectValueByApiEnv({
        dev: 'mgm_app_web',
        uat: 'mgm_app_web',
        qa4: 'mgm_app_web',
        preprod: 'mgm_app_web',
        preview: 'mgm_app_web',
        prod: 'mgm_app_web'
    }),
    issuer: selectValueByApiEnv({
        dev: 'https://identity.devtest.vegas/oauth2/ausph7ezp3Gkkk8WN0h7',
        uat: 'https://identity.devtest.vegas/oauth2/ausph7ezp3Gkkk8WN0h7',
        qa4: 'https://identity.devtest.vegas/oauth2/ausph7ezp3Gkkk8WN0h7',
        preprod: 'https://identity.devtest.vegas/oauth2/ausph7ezp3Gkkk8WN0h7',
        preview: 'https://identity.devtest.vegas/oauth2/ausph7ezp3Gkkk8WN0h7',
        prod: 'https://identity.mgmresorts.com/oauth2/ausdz02gi5cZ8h8NP1t7'
    }),
    redirectUri: selectValueByApiEnv({
        dev: `${clientUrl}/auth/login`,
        uat: `${clientUrl}/auth/login`,
        qa4: `${clientUrl}/auth/login`,
        preprod: `${clientUrl}/auth/login`,
        preview: `${clientUrl}/auth/login`,
        prod: `${clientUrl}/auth/login`
    }),
    postLogoutRedirectUri: selectValueByApiEnv({
        dev: clientUrl,
        uat: clientUrl,
        qa4: clientUrl,
        preprod: clientUrl,
        preview: clientUrl,
        prod: clientUrl
    }),
    tokensAcceptedRedirectUri: selectValueByApiEnv({
        dev: clientUrl,
        uat: clientUrl,
        qa4: clientUrl,
        preprod: clientUrl,
        preview: clientUrl,
        prod: clientUrl
    }),
    identityAuthOrigin: selectValueByApiEnv({
        dev: 'https://dev.devtest.vegas/identity',
        uat: 'https://uat.devtest.vegas/identity',
        qa4: 'https://qa4.devtest.vegas/identity',
        preprod: 'https://preprod.devtest.vegas/identity',
        preview: 'https://preprod.devtest.vegas/identity',
        prod: 'https://www.mgmresorts.com/identity'
    }),
    scopes: [
        // ACCOUNT
        'profile:create',
        'profile:read',
        'profile:update',
        'loyalty:balances:read',
        'loyalty:comments:read',
        'loyalty:linkedprofiles:read',
        'loyalty:profile:create',
        'loyalty:profile:read',
        'loyalty:profile:update',
        'loyalty:promos:read',
        'loyalty:stopcodes:read',
        'loyalty:taxinfo:read',
        'offline_access',
        'openid',
        // TRIPS
        'itinerary:read',
        'trip:read',
        'rooms.availability:read',
        'rooms.reservation:read',
        // RES MGMT
        'cart:create',
        'cart:read',
        'cart:update',
        'email',
        'itinerary:create',
        'myvegas.code:read',
        'openid',
        'payments.tokenization:tokenize',
        'profile',
        'profile:create',
        'rooms.availability:read',
        'rooms.program:read',
        'rooms.reservation.charges:read',
        'rooms.reservation:create',
        'rooms.reservation:read',
        'rooms.reservation:update',
        // ROOM BOOKING
        'booking.room.resv:search',
        // WALLET
        'payments.storage:save', 
    ]
};
const buildAuthConfig = (overrides = {
})=>{
    return {
        ...defaultAuthConfig,
        ...overrides
    };
};
const authMutex = new Mutex();
const getAuthClientSync = ()=>window.__ACCOUNT_AUTH_CLIENT
;
const getAuthClient = async ()=>{
    // eslint-disable-next-line no-return-await
    return await authMutex.acquire(()=>{
        if (!windowDefined()) return new MGMAuth(buildAuthConfig());
        if (!window.__ACCOUNT_AUTH_CLIENT) {
            window.__ACCOUNT_AUTH_CLIENT = new MGMAuth(buildAuthConfig());
        }
        return window.__ACCOUNT_AUTH_CLIENT;
    });
};

;// CONCATENATED MODULE: ./src/config/countries.ts
const countries = [
    {
        value: 'AF',
        label: 'Afghanistan'
    },
    {
        value: 'AX',
        label: '\xc5land Islands'
    },
    {
        value: 'AL',
        label: 'Albania'
    },
    {
        value: 'DZ',
        label: 'Algeria'
    },
    {
        value: 'AS',
        label: 'American Samoa'
    },
    {
        value: 'AD',
        label: 'Andorra'
    },
    {
        value: 'AO',
        label: 'Angola'
    },
    {
        value: 'AI',
        label: 'Anguilla'
    },
    {
        value: 'AQ',
        label: 'Antarctica'
    },
    {
        value: 'AG',
        label: 'Antigua and Barbuda'
    },
    {
        value: 'AR',
        label: 'Argentina'
    },
    {
        value: 'AM',
        label: 'Armenia'
    },
    {
        value: 'AW',
        label: 'Aruba'
    },
    {
        value: 'AU',
        label: 'Australia'
    },
    {
        value: 'AT',
        label: 'Austria'
    },
    {
        value: 'AZ',
        label: 'Azerbaijan'
    },
    {
        value: 'BS',
        label: 'Bahamas'
    },
    {
        value: 'BH',
        label: 'Bahrain'
    },
    {
        value: 'FQ',
        label: 'Baker Island'
    },
    {
        value: 'BD',
        label: 'Bangladesh'
    },
    {
        value: 'BB',
        label: 'Barbados'
    },
    {
        value: 'BY',
        label: 'Belarus'
    },
    {
        value: 'BE',
        label: 'Belgium'
    },
    {
        value: 'BZ',
        label: 'Belize'
    },
    {
        value: 'BJ',
        label: 'Benin'
    },
    {
        value: 'BM',
        label: 'Bermuda'
    },
    {
        value: 'BT',
        label: 'Bhutan'
    },
    {
        value: 'BO',
        label: 'Bolivia'
    },
    {
        value: 'BQ',
        label: 'Bonaire, Sint Eustatius and Saba'
    },
    {
        value: 'BA',
        label: 'Bosnia and Herzegovina'
    },
    {
        value: 'BW',
        label: 'Botswana'
    },
    {
        value: 'BV',
        label: 'Bouvet Island'
    },
    {
        value: 'BR',
        label: 'Brazil'
    },
    {
        value: 'IO',
        label: 'British Indian Ocean Territory'
    },
    {
        value: 'BN',
        label: 'Brunei Darussalam'
    },
    {
        value: 'BG',
        label: 'Bulgaria'
    },
    {
        value: 'BF',
        label: 'Burkina Faso'
    },
    {
        value: 'BI',
        label: 'Burundi'
    },
    {
        value: 'KH',
        label: 'Cambodia'
    },
    {
        value: 'CM',
        label: 'Cameroon'
    },
    {
        value: 'CA',
        label: 'Canada'
    },
    {
        value: 'CV',
        label: 'Cape Verde'
    },
    {
        value: 'KY',
        label: 'Cayman Islands'
    },
    {
        value: 'CF',
        label: 'Central African Republic'
    },
    {
        value: 'TD',
        label: 'Chad'
    },
    {
        value: 'CL',
        label: 'Chile'
    },
    {
        value: 'CN',
        label: 'China'
    },
    {
        value: 'CX',
        label: 'Christmas Island'
    },
    {
        value: 'IP',
        label: 'Clipperton Island'
    },
    {
        value: 'CC',
        label: 'Cocos (Keeling) Islands'
    },
    {
        value: 'CO',
        label: 'Colombia'
    },
    {
        value: 'KM',
        label: 'Comoros'
    },
    {
        value: 'CG',
        label: 'Congo'
    },
    {
        value: 'CD',
        label: 'Congo, The Democratic Republic of the'
    },
    {
        value: 'CK',
        label: 'Cook Islands'
    },
    {
        value: 'CR',
        label: 'Costa Rica'
    },
    {
        value: 'HR',
        label: 'Croatia'
    },
    {
        value: 'CU',
        label: 'Cuba'
    },
    {
        value: 'CW',
        label: 'Cura\xc7ao'
    },
    {
        value: 'CY',
        label: 'Cyprus'
    },
    {
        value: 'CZ',
        label: 'Czech Republic'
    },
    {
        value: 'CI',
        label: "C\xf4te D'Ivoire"
    },
    {
        value: 'DK',
        label: 'Denmark'
    },
    {
        value: 'DJ',
        label: 'Djibouti'
    },
    {
        value: 'DM',
        label: 'Dominica'
    },
    {
        value: 'DO',
        label: 'Dominican Republic'
    },
    {
        value: 'EC',
        label: 'Ecuador'
    },
    {
        value: 'EG',
        label: 'Egypt'
    },
    {
        value: 'SV',
        label: 'El Salvador'
    },
    {
        value: 'GQ',
        label: 'Equatorial Guinea'
    },
    {
        value: 'ER',
        label: 'Eritrea'
    },
    {
        value: 'EE',
        label: 'Estonia'
    },
    {
        value: 'ET',
        label: 'Ethiopia'
    },
    {
        value: 'EU',
        label: 'Europa Island'
    },
    {
        value: 'FK',
        label: 'Falkland Islands (Malvinas)'
    },
    {
        value: 'FO',
        label: 'Faroe Islands'
    },
    {
        value: 'FJ',
        label: 'Fiji'
    },
    {
        value: 'FI',
        label: 'Finland'
    },
    {
        value: 'FR',
        label: 'France'
    },
    {
        value: 'GF',
        label: 'French Guiana'
    },
    {
        value: 'PF',
        label: 'French Polynesia'
    },
    {
        value: 'TF',
        label: 'French Southern Territories'
    },
    {
        value: 'GA',
        label: 'Gabon'
    },
    {
        value: 'GM',
        label: 'Gambia'
    },
    {
        value: 'GZ',
        label: 'Gaza Strip'
    },
    {
        value: 'GE',
        label: 'Georgia'
    },
    {
        value: 'DE',
        label: 'Germany'
    },
    {
        value: 'GH',
        label: 'Ghana'
    },
    {
        value: 'GI',
        label: 'Gibraltar'
    },
    {
        value: 'GO',
        label: 'Glorioso Islands'
    },
    {
        value: 'GR',
        label: 'Greece'
    },
    {
        value: 'GL',
        label: 'Greenland'
    },
    {
        value: 'GD',
        label: 'Grenada'
    },
    {
        value: 'GP',
        label: 'Guadeloupe'
    },
    {
        value: 'GU',
        label: 'Guam'
    },
    {
        value: 'GT',
        label: 'Guatemala'
    },
    {
        value: 'GG',
        label: 'Guernsey'
    },
    {
        value: 'GN',
        label: 'Guinea'
    },
    {
        value: 'GW',
        label: 'Guinea-Bissau'
    },
    {
        value: 'GY',
        label: 'Guyana'
    },
    {
        value: 'HT',
        label: 'Haiti'
    },
    {
        value: 'HM',
        label: 'Heard Island and McDonald Islands'
    },
    {
        value: 'VA',
        label: 'Holy See (Vatican City)'
    },
    {
        value: 'HN',
        label: 'Honduras'
    },
    {
        value: 'HK',
        label: 'Hong Kong'
    },
    {
        value: 'HQ',
        label: 'Howland Island'
    },
    {
        value: 'HU',
        label: 'Hungary'
    },
    {
        value: 'IS',
        label: 'Iceland'
    },
    {
        value: 'IN',
        label: 'India'
    },
    {
        value: 'ID',
        label: 'Indonesia'
    },
    {
        value: 'IR',
        label: 'Iran, Islamic Republic of'
    },
    {
        value: 'IQ',
        label: 'Iraq'
    },
    {
        value: 'IE',
        label: 'Ireland'
    },
    {
        value: 'IM',
        label: 'Isle of Man'
    },
    {
        value: 'IL',
        label: 'Israel'
    },
    {
        value: 'IT',
        label: 'Italy'
    },
    {
        value: 'JM',
        label: 'Jamaica'
    },
    {
        value: 'JN',
        label: 'Jan Mayen'
    },
    {
        value: 'JP',
        label: 'Japan'
    },
    {
        value: 'DQ',
        label: 'Jarvis Island'
    },
    {
        value: 'JE',
        label: 'Jersey'
    },
    {
        value: 'JQ',
        label: 'Johnston Atoll'
    },
    {
        value: 'JO',
        label: 'Jordan'
    },
    {
        value: 'JU',
        label: 'Juan de Nova Island'
    },
    {
        value: 'KZ',
        label: 'Kazakhstan'
    },
    {
        value: 'KE',
        label: 'Kenya'
    },
    {
        value: 'KQ',
        label: 'Kingman Reef'
    },
    {
        value: 'KI',
        label: 'Kiribati'
    },
    {
        value: 'XK',
        label: 'Kosovo'
    },
    {
        value: 'KW',
        label: 'Kuwait'
    },
    {
        value: 'KG',
        label: 'Kyrgyzstan'
    },
    {
        value: 'LA',
        label: "Lao People's Democratic Republic"
    },
    {
        value: 'LV',
        label: 'Latvia'
    },
    {
        value: 'LB',
        label: 'Lebanon'
    },
    {
        value: 'LS',
        label: 'Lesotho'
    },
    {
        value: 'LR',
        label: 'Liberia'
    },
    {
        value: 'LY',
        label: 'Libya'
    },
    {
        value: 'LI',
        label: 'Liechtenstein'
    },
    {
        value: 'LT',
        label: 'Lithuania'
    },
    {
        value: 'LU',
        label: 'Luxembourg'
    },
    {
        value: 'MO',
        label: 'Macao'
    },
    {
        value: 'MK',
        label: 'Macedonia, the Former Yugoslav Republic of'
    },
    {
        value: 'MG',
        label: 'Madagascar'
    },
    {
        value: 'MW',
        label: 'Malawi'
    },
    {
        value: 'MY',
        label: 'Malaysia'
    },
    {
        value: 'MV',
        label: 'Maldives'
    },
    {
        value: 'ML',
        label: 'Mali'
    },
    {
        value: 'MT',
        label: 'Malta'
    },
    {
        value: 'MH',
        label: 'Marshall Islands'
    },
    {
        value: 'MQ',
        label: 'Martinique'
    },
    {
        value: 'MR',
        label: 'Mauritania'
    },
    {
        value: 'MU',
        label: 'Mauritius'
    },
    {
        value: 'YT',
        label: 'Mayotte'
    },
    {
        value: 'MX',
        label: 'Mexico'
    },
    {
        value: 'FM',
        label: 'Micronesia, Federated States of'
    },
    {
        value: 'MD',
        label: 'Moldova, Republic of'
    },
    {
        value: 'MC',
        label: 'Monaco'
    },
    {
        value: 'MN',
        label: 'Mongolia'
    },
    {
        value: 'ME',
        label: 'Montenegro'
    },
    {
        value: 'MS',
        label: 'Montserrat'
    },
    {
        value: 'MA',
        label: 'Morocco'
    },
    {
        value: 'MZ',
        label: 'Mozambique'
    },
    {
        value: 'MM',
        label: 'Myanmar'
    },
    {
        value: 'NA',
        label: 'Namibia'
    },
    {
        value: 'NR',
        label: 'Nauru'
    },
    {
        value: 'NP',
        label: 'Nepal'
    },
    {
        value: 'NL',
        label: 'Netherlands'
    },
    {
        value: 'AN',
        label: 'Netherlands Antilles'
    },
    {
        value: 'NC',
        label: 'New Caledonia'
    },
    {
        value: 'NZ',
        label: 'New Zealand'
    },
    {
        value: 'NI',
        label: 'Nicaragua'
    },
    {
        value: 'NE',
        label: 'Niger'
    },
    {
        value: 'NG',
        label: 'Nigeria'
    },
    {
        value: 'NU',
        label: 'Niue'
    },
    {
        value: 'NF',
        label: 'Norfolk Island'
    },
    {
        value: 'KP',
        label: "North Korea, Democratic People's Republic of"
    },
    {
        value: 'MP',
        label: 'Northern Mariana Islands'
    },
    {
        value: 'NO',
        label: 'Norway'
    },
    {
        value: 'OM',
        label: 'Oman'
    },
    {
        value: 'PK',
        label: 'Pakistan'
    },
    {
        value: 'PW',
        label: 'Palau'
    },
    {
        value: 'PS',
        label: 'Palestinian Territory, Occupied'
    },
    {
        value: 'LQ',
        label: 'Palmyra Atoll'
    },
    {
        value: 'PA',
        label: 'Panama'
    },
    {
        value: 'PG',
        label: 'Papua New Guinea'
    },
    {
        value: 'PY',
        label: 'Paraguay'
    },
    {
        value: 'PE',
        label: 'Peru'
    },
    {
        value: 'PH',
        label: 'Philippines'
    },
    {
        value: 'PN',
        label: 'Pitcairn'
    },
    {
        value: 'PL',
        label: 'Poland'
    },
    {
        value: 'PT',
        label: 'Portugal'
    },
    {
        value: 'PR',
        label: 'Puerto Rico'
    },
    {
        value: 'QA',
        label: 'Qatar'
    },
    {
        value: 'RO',
        label: 'Romania'
    },
    {
        value: 'RU',
        label: 'Russian Federation'
    },
    {
        value: 'RW',
        label: 'Rwanda'
    },
    {
        value: 'RE',
        label: 'R\xe9union'
    },
    {
        value: 'BL',
        label: 'Saint Barth\xc9lemy'
    },
    {
        value: 'SH',
        label: 'Saint Helena, Ascension and Tristan Da Cunha'
    },
    {
        value: 'KN',
        label: 'Saint Kitts and Nevis'
    },
    {
        value: 'LC',
        label: 'Saint Lucia'
    },
    {
        value: 'MF',
        label: 'Saint Martin (French part)'
    },
    {
        value: 'PM',
        label: 'Saint Pierre and Miquelon'
    },
    {
        value: 'VC',
        label: 'Saint Vincent and the Grenadines'
    },
    {
        value: 'WS',
        label: 'Samoa'
    },
    {
        value: 'SM',
        label: 'San Marino'
    },
    {
        value: 'ST',
        label: 'Sao Tome and Principe'
    },
    {
        value: 'SA',
        label: 'Saudi Arabia'
    },
    {
        value: 'SN',
        label: 'Senegal'
    },
    {
        value: 'RS',
        label: 'Serbia'
    },
    {
        value: 'SC',
        label: 'Seychelles'
    },
    {
        value: 'SL',
        label: 'Sierra Leone'
    },
    {
        value: 'SG',
        label: 'Singapore'
    },
    {
        value: 'SX',
        label: 'Sint Maarten (Dutch part)'
    },
    {
        value: 'SK',
        label: 'Slovakia'
    },
    {
        value: 'SI',
        label: 'Slovenia'
    },
    {
        value: 'SB',
        label: 'Solomon Islands'
    },
    {
        value: 'SO',
        label: 'Somalia'
    },
    {
        value: 'ZA',
        label: 'South Africa'
    },
    {
        value: 'GS',
        label: 'South Georgia and the South Sandwich Islands'
    },
    {
        value: 'KR',
        label: 'South Korea, Republic of'
    },
    {
        value: 'SS',
        label: 'South Sudan'
    },
    {
        value: 'ES',
        label: 'Spain'
    },
    {
        value: 'LK',
        label: 'Sri Lanka'
    },
    {
        value: 'SD',
        label: 'Sudan'
    },
    {
        value: 'SR',
        label: 'Suriname'
    },
    {
        value: 'SJ',
        label: 'Svalbard and Jan Mayen'
    },
    {
        value: 'SZ',
        label: 'Swaziland'
    },
    {
        value: 'SE',
        label: 'Sweden'
    },
    {
        value: 'CH',
        label: 'Switzerland'
    },
    {
        value: 'SY',
        label: 'Syrian Arab Republic'
    },
    {
        value: 'TW',
        label: 'Taiwan'
    },
    {
        value: 'TJ',
        label: 'Tajikistan'
    },
    {
        value: 'TZ',
        label: 'Tanzania, United Republic of'
    },
    {
        value: 'TH',
        label: 'Thailand'
    },
    {
        value: 'TL',
        label: 'Timor-Leste'
    },
    {
        value: 'TG',
        label: 'Togo'
    },
    {
        value: 'TK',
        label: 'Tokelau'
    },
    {
        value: 'TO',
        label: 'Tonga'
    },
    {
        value: 'TT',
        label: 'Trinidad and Tobago'
    },
    {
        value: 'TE',
        label: 'Tromelin Island'
    },
    {
        value: 'TN',
        label: 'Tunisia'
    },
    {
        value: 'TR',
        label: 'Turkey'
    },
    {
        value: 'TM',
        label: 'Turkmenistan'
    },
    {
        value: 'TC',
        label: 'Turks and Caicos Islands'
    },
    {
        value: 'TV',
        label: 'Tuvalu'
    },
    {
        value: 'UG',
        label: 'Uganda'
    },
    {
        value: 'UA',
        label: 'Ukraine'
    },
    {
        value: 'AE',
        label: 'United Arab Emirates'
    },
    {
        value: 'GB',
        label: 'United Kingdom'
    },
    {
        value: 'US',
        label: 'United States'
    },
    {
        value: 'UM',
        label: 'United States Minor Outlying Islands'
    },
    {
        value: 'UY',
        label: 'Uruguay'
    },
    {
        value: 'UZ',
        label: 'Uzbekistan'
    },
    {
        value: 'VU',
        label: 'Vanuatu'
    },
    {
        value: 'VE',
        label: 'Venezuela, Bolivarian Republic of'
    },
    {
        value: 'VN',
        label: 'Viet Nam'
    },
    {
        value: 'VI',
        label: 'Virgin Islands US'
    },
    {
        value: 'VG',
        label: 'Virgin Islands, British'
    },
    {
        value: 'WQ',
        label: 'Wake Island'
    },
    {
        value: 'WF',
        label: 'Wallis and Futuna'
    },
    {
        value: 'WE',
        label: 'West Bank'
    },
    {
        value: 'EH',
        label: 'Western Sahara'
    },
    {
        value: 'YE',
        label: 'Yemen'
    },
    {
        value: 'ZM',
        label: 'Zambia'
    },
    {
        value: 'ZW',
        label: 'Zimbabwe'
    }, 
];

;// CONCATENATED MODULE: ./src/config/states.ts
const states = {
    US: [
        {
            value: 'AL',
            label: 'Alabama'
        },
        {
            value: 'AK',
            label: 'Alaska'
        },
        {
            value: 'AZ',
            label: 'Arizona'
        },
        {
            value: 'AR',
            label: 'Arkansas'
        },
        {
            value: 'CA',
            label: 'California'
        },
        {
            value: 'CO',
            label: 'Colorado'
        },
        {
            value: 'CT',
            label: 'Connecticut'
        },
        {
            value: 'DE',
            label: 'Delaware'
        },
        {
            value: 'DC',
            label: 'District of Columbia'
        },
        {
            value: 'FL',
            label: 'Florida'
        },
        {
            value: 'GA',
            label: 'Georgia'
        },
        {
            value: 'HI',
            label: 'Hawaii'
        },
        {
            value: 'ID',
            label: 'Idaho'
        },
        {
            value: 'IL',
            label: 'Illinois'
        },
        {
            value: 'IN',
            label: 'Indiana'
        },
        {
            value: 'IA',
            label: 'Iowa'
        },
        {
            value: 'KS',
            label: 'Kansas'
        },
        {
            value: 'KY',
            label: 'Kentucky'
        },
        {
            value: 'LA',
            label: 'Louisiana'
        },
        {
            value: 'ME',
            label: 'Maine'
        },
        {
            value: 'MD',
            label: 'Maryland'
        },
        {
            value: 'MA',
            label: 'Massachusetts'
        },
        {
            value: 'MI',
            label: 'Michigan'
        },
        {
            value: 'MN',
            label: 'Minnesota'
        },
        {
            value: 'MS',
            label: 'Mississippi'
        },
        {
            value: 'MO',
            label: 'Missouri'
        },
        {
            value: 'MT',
            label: 'Montana'
        },
        {
            value: 'NE',
            label: 'Nebraska'
        },
        {
            value: 'NV',
            label: 'Nevada'
        },
        {
            value: 'NH',
            label: 'New Hampshire'
        },
        {
            value: 'NJ',
            label: 'New Jersey'
        },
        {
            value: 'NM',
            label: 'New Mexico'
        },
        {
            value: 'NY',
            label: 'New York'
        },
        {
            value: 'NC',
            label: 'North Carolina'
        },
        {
            value: 'ND',
            label: 'North Dakota'
        },
        {
            value: 'OH',
            label: 'Ohio'
        },
        {
            value: 'OK',
            label: 'Oklahoma'
        },
        {
            value: 'OR',
            label: 'Oregon'
        },
        {
            value: 'PA',
            label: 'Pennsylvania'
        },
        {
            value: 'RI',
            label: 'Rhode Island'
        },
        {
            value: 'SC',
            label: 'South Carolina'
        },
        {
            value: 'SD',
            label: 'South Dakota'
        },
        {
            value: 'TN',
            label: 'Tennessee'
        },
        {
            value: 'TX',
            label: 'Texas'
        },
        {
            value: 'UT',
            label: 'Utah'
        },
        {
            value: 'VT',
            label: 'Vermont'
        },
        {
            value: 'VA',
            label: 'Virginia'
        },
        {
            value: 'WA',
            label: 'Washington'
        },
        {
            value: 'WV',
            label: 'West Virginia'
        },
        {
            value: 'WI',
            label: 'Wisconsin'
        },
        {
            value: 'WY',
            label: 'Wyoming'
        }, 
    ],
    CA: [
        {
            value: 'AB',
            label: 'Alberta'
        },
        {
            value: 'BC',
            label: 'British Colombia'
        },
        {
            value: 'MB',
            label: 'Manitoba'
        },
        {
            value: 'NB',
            label: 'New Brunswick'
        },
        {
            value: 'NL',
            label: 'Newfoundland and Labrador'
        },
        {
            value: 'NT',
            label: 'Northwest Territories'
        },
        {
            value: 'NS',
            label: 'Nova Scotia'
        },
        {
            value: 'NU',
            label: 'Nunavut'
        },
        {
            value: 'ON',
            label: 'Ontario'
        },
        {
            value: 'PE',
            label: 'Prince Edward Island'
        },
        {
            value: 'QC',
            label: 'Quebec'
        },
        {
            value: 'SK',
            label: 'Saskatchewan'
        },
        {
            value: 'YT',
            label: 'Yukon'
        }, 
    ]
};

// EXTERNAL MODULE: external "@mgmresorts/wcl-styled"
var wcl_styled_ = __webpack_require__(3294);
;// CONCATENATED MODULE: ./src/components/Profile/Profile.style.tsx


const commonFieldStyles = wcl_styled_.css`
  margin-bottom: 0;
  margin-top: ${wcl_styled_.$spacingMedium};
`;
const StyledInput = (0,wcl_styled_.styled)(wcl_core_.Input)`
  ${commonFieldStyles}
`;
const StyledGridColumn = (0,wcl_styled_.styled)(wcl_core_.GridColumn)`
  > div {
    ${commonFieldStyles}

    .profile__change-password-button {
      font-size: ${wcl_styled_.$paragraph};
      width: fit-content;
      float: right;
    }
  }
`;
const StyledSelect = (0,wcl_styled_.styled)(wcl_core_.Select)`
  > div > div {
    ${commonFieldStyles}
  }
`;
const StyledText10 = (0,wcl_styled_.styled)(wcl_core_.Text10)`
  margin-bottom: ${wcl_styled_.$spacingXSmall};
  color: ${wcl_styled_.$dark};
`;
const StyledForm = wcl_styled_.styled.form`
  width: 100%;
  margin-bottom: 80px;
`;
const SaveChangesGridRow = (0,wcl_styled_.styled)(wcl_core_.GridRow)`
  margin-top: 40px;
`;
const CancelChangesGridRow = (0,wcl_styled_.styled)(wcl_core_.GridRow)`
  margin-top: 32px;
`;
const StyledConfirmation = wcl_styled_.styled.div`
  margin-bottom: ${wcl_styled_.$spacingXtraLarge};
  display: inline-flex;
  align-items: center;

  .profile__success-message {
    margin-left: ${wcl_styled_.$spacingXSmall};
  }
`;

;// CONCATENATED MODULE: ./src/components/Profile/ProfileValidationRules.ts
const CountriesWithStatesOrProvinces = [
    'United States',
    'Canada'
];
const ProfileValidationRules = {
    email: {
        required: {
            value: true,
            message: 'Email address is required.'
        },
        pattern: {
            value: '^[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\\.){1,125}[a-zA-Z]{2,63}$',
            message: 'Email address is invalid.'
        }
    },
    phoneNumber: {
        maxlength: {
            value: 16,
            message: 'Phone Number must be between 10 and 16 characters.'
        },
        pattern: {
            value: '^[0-9 +-.]{10,16}$',
            message: 'Phone Number is invalid.'
        }
    },
    state: {
        custom: {
            stateDropdownRequired: {
                isValid: (values)=>{
                    let valid = true;
                    if (CountriesWithStatesOrProvinces.includes(values.country)) {
                        valid = values.state.length > 0;
                    }
                    return valid;
                },
                message: 'State/Province is required.'
            },
            stateDropdownPattern: {
                isValid: (values)=>{
                    let valid = true;
                    if (CountriesWithStatesOrProvinces.includes(values.country)) {
                        valid = RegExp('^[a-zA-Z]{2}$').test(values.state);
                    }
                    return valid;
                },
                message: 'State/Province is invalid.'
            },
            stateInputMaxlength: {
                isValid: (values)=>{
                    let valid = true;
                    if (!CountriesWithStatesOrProvinces.includes(values.country) && values.state) {
                        valid = values.state.length <= 30;
                    }
                    return valid;
                },
                message: 'State/Province must be between 1 and 30 characters.'
            },
            stateInputPattern: {
                isValid: (values)=>{
                    let valid = true;
                    if (!CountriesWithStatesOrProvinces.includes(values.country)) {
                        valid = RegExp(/^[A-Za-z0-9.\-\\/+=_ !$\\*?@#,']{1,30}$/).test(values.state);
                    }
                    return valid;
                },
                message: 'State/Province is invalid.'
            }
        }
    },
    zipCode: {
        custom: {
            zipCodeInputRequired: {
                isValid: (values)=>{
                    let valid = true;
                    if (CountriesWithStatesOrProvinces.includes(values.country)) {
                        valid = values.zipCode.length > 0;
                    }
                    return valid;
                },
                message: 'Zip / Postal Code is required.'
            },
            zipCodeInputPattern1: {
                // US & Canada
                isValid: (values)=>{
                    let valid = true;
                    if (CountriesWithStatesOrProvinces.includes(values.country)) {
                        const regex = values.country === CountriesWithStatesOrProvinces[0] ? /^\d{5}(-\d{4})?$/ : /^[ABCEGHJKLMNPRSTVXYabceghjklmnprstvxy]{1}\d{1}[A-Z]{1} *\d{1}[A-Za-z]{1}\d{1}$/;
                        valid = RegExp(regex).test(values.zipCode);
                    }
                    return valid;
                },
                message: 'Zip / Postal Code is invalid.'
            },
            zipCodeInputPattern2: {
                // Rest of world
                isValid: (values)=>{
                    let valid = true;
                    if (!CountriesWithStatesOrProvinces.includes(values.country) && values.zipCode) {
                        valid = RegExp(/^[A-Za-z0-9]{4,9}$/).test(values.zipCode);
                    }
                    return valid;
                },
                message: 'Zip / Postal Code is invalid.'
            },
            zipCodeInputLength: {
                // Rest of world
                isValid: (values)=>{
                    let valid = true;
                    if (!CountriesWithStatesOrProvinces.includes(values.country) && values.zipCode) {
                        valid = values.zipCode.length >= 4 && values.zipCode.length <= 9;
                    }
                    return valid;
                },
                message: 'Zip / Postal Code must be between 4 and 9 characters.'
            }
        }
    }
};

;// CONCATENATED MODULE: ./src/components/Profile/Profile.tsx









// import { useErrorMessage } from '../../common/context/ErrorMessageContext';




const Profile = ({ useErrorMessage  })=>{
    var ref4, ref1, ref2;
    const defaultProfileData = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        dateOfBirth: '',
        country: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipCode: '',
        countryCode: ''
    };
    const { values: inputs , setValues: setInputs , handleChange , hasFormChanged , setHasFormChanged , errors , validateField , validateFields , hasInvalidFields , isUpdateSuccess , setIsUpdateSuccess ,  } = useForm({
        initialValues: defaultProfileData,
        validations: ProfileValidationRules
    });
    const { 0: initialProfileData , 1: setInitialProfileData  } = (0,external_react_.useState)({
    });
    const viewport = (0,external_react_.useContext)(wcl_core_.ViewportContext);
    const { 0: isCasinoCreditCustomer , 1: setIsCasinoCreditCustomer  } = (0,external_react_.useState)(false);
    const trackClickEvent = (0,useClickEvent/* useClickEvent */.v)();
    const { setErrorMessageById  } = useErrorMessage();
    const { loading: profileLoading , data: profileData , error: getProfileError  } = useGetProfile();
    const [updateProfile, { loading: updateProfileLoading  }] = useUpdateProfile();
    const displayStateDropdown = (0,external_react_.useMemo)(()=>{
        return CountriesWithStatesOrProvinces.includes(inputs.country);
    }, [
        inputs.country
    ]);
    const handleCountryChange = (0,external_react_.useCallback)((value)=>{
        const { value: countryCode = '' , label: country1 = ''  } = countries.find((country)=>country.value === value
        ) || {
        };
        setInputs((prevInputs)=>({
                ...prevInputs,
                country: country1,
                countryCode
            })
        );
        setHasFormChanged(true);
    }, [
        setHasFormChanged,
        setInputs
    ]);
    const handleStateChange = (0,external_react_.useCallback)((value)=>{
        /** TODO: add event param in onChange event and onBlur event prop in wcl Select component */ handleChange(value, {
            target: {
                id: 'state'
            }
        });
        validateField('state');
    }, [
        handleChange,
        validateField
    ]);
    const trackUpdateProfileState = (0,external_react_.useCallback)((saveChangesState)=>{
        trackClickEvent({
            eventName: 'account – my profile – profile changes',
            title: 'save changes - profile',
            eventAttributes: {
                saveChangesState
            }
        });
    }, [
        trackClickEvent
    ]);
    const handleUpdateProfileSuccess = (0,external_react_.useCallback)((response)=>{
        var ref, ref3;
        if (response === null || response === void 0 ? void 0 : (ref = response.data) === null || ref === void 0 ? void 0 : (ref3 = ref.updateCustomer) === null || ref3 === void 0 ? void 0 : ref3.success) {
            trackUpdateProfileState('success');
            setIsUpdateSuccess(true);
            setInitialProfileData(inputs);
            setHasFormChanged(false);
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }, [
        inputs,
        setHasFormChanged,
        setIsUpdateSuccess,
        trackUpdateProfileState
    ]);
    const handleUpdateProfileError = (0,external_react_.useCallback)((error)=>{
        trackUpdateProfileState('fail');
        if (error) setErrorMessageById(GenericErrorMessage/* GenericErrorMessageId.ContactMemberServices */.d.ContactMemberServices);
    }, [
        trackUpdateProfileState,
        setErrorMessageById
    ]);
    const handleSaveChanges = (0,external_react_.useCallback)((event)=>{
        if (event) event.preventDefault();
        setErrorMessageById(null);
        validateFields();
        if (hasInvalidFields) return;
        const variables = {
            email: inputs.email
        };
        if (inputs.phoneNumber) {
            variables.phoneNumber = inputs.phoneNumber;
        }
        if (inputs.address1) {
            variables.street1 = inputs.address1;
        }
        if (inputs.address2) {
            variables.street2 = inputs.address2;
        }
        if (inputs.countryCode) {
            variables.country = inputs.countryCode;
        }
        if (inputs.city) {
            variables.city = inputs.city;
        }
        if (inputs.state) {
            variables.state = inputs.state;
        }
        if (inputs.zipCode) {
            variables.zipCode = inputs.zipCode;
        }
        updateProfile({
            variables
        }).then((response)=>handleUpdateProfileSuccess(response)
        , (error)=>handleUpdateProfileError(error)
        );
    }, [
        hasInvalidFields,
        inputs,
        updateProfile,
        validateFields,
        handleUpdateProfileSuccess,
        handleUpdateProfileError,
        setErrorMessageById, 
    ]);
    const handleCancelChanges = (0,external_react_.useCallback)(()=>{
        setInputs(initialProfileData);
        setHasFormChanged(false);
        setErrorMessageById(null);
        setIsUpdateSuccess(false);
    }, [
        setInputs,
        initialProfileData,
        setHasFormChanged,
        setErrorMessageById,
        setIsUpdateSuccess
    ]);
    const transformResponse = (0,external_react_.useCallback)((response)=>{
        var ref, ref5, ref6, ref7, ref8;
        const phoneNumber = ((ref5 = (ref = response.phones) === null || ref === void 0 ? void 0 : ref.find((phone)=>phone.preferred && phone.__typename === 'Phone'
        )) === null || ref5 === void 0 ? void 0 : ref5.number) || '';
        const email1 = ((ref7 = (ref6 = response.emails) === null || ref6 === void 0 ? void 0 : ref6.find((email)=>email.preferred && email.__typename === 'Email'
        )) === null || ref7 === void 0 ? void 0 : ref7.email) || '';
        const address1 = ((ref8 = response.addresses) === null || ref8 === void 0 ? void 0 : ref8.find((address)=>address.preferred && address.__typename === 'Address'
        )) || {
        };
        const { value: countryCode = '' , label: country2 = ''  } = countries.find((country)=>{
            return country.value === (address1 === null || address1 === void 0 ? void 0 : address1.country);
        }) || {
        };
        return {
            firstName: response.firstName || '',
            lastName: response.lastName || '',
            phoneNumber,
            email: email1,
            dateOfBirth: response.dateOfBirth || '',
            country: country2,
            address1: (address1 === null || address1 === void 0 ? void 0 : address1.street1) || '',
            address2: (address1 === null || address1 === void 0 ? void 0 : address1.street2) || '',
            city: (address1 === null || address1 === void 0 ? void 0 : address1.city) || '',
            state: (address1 === null || address1 === void 0 ? void 0 : address1.state) || '',
            zipCode: (address1 === null || address1 === void 0 ? void 0 : address1.postalCode) || '',
            countryCode
        };
    }, []);
    const changePasswordUrl = (0,external_react_.useMemo)(()=>{
        return `${defaultAuthConfig.identityAuthOrigin}/change-password`;
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (profileData && profileData.me) {
            var ref, ref9;
            const profile = {
                ...transformResponse(profileData.me)
            };
            setIsCasinoCreditCustomer(!!((ref9 = (ref = profileData.me) === null || ref === void 0 ? void 0 : ref.memberships[0]) === null || ref9 === void 0 ? void 0 : ref9.creditAccount));
            setInputs(profile);
            setInitialProfileData(profile);
        }
    }, [
        profileData,
        setInputs,
        transformResponse
    ]);
    if (profileLoading) return(/*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.EmptyState, {
        loading: true
    }));
    if (getProfileError) setErrorMessageById(GenericErrorMessage/* GenericErrorMessageId.ContactMemberServices */.d.ContactMemberServices);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledForm, {
        onSubmit: handleSaveChanges,
        children: [
            isCasinoCreditCustomer && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    marginBottom: 24
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Alert, {
                    type: "info",
                    description: "M life Rewards members with casino credit may not make profile changes online. Please contact Member Services at <a href=\"tel:866-761-7111\">866.761.7111</a>"
                })
            }),
            isUpdateSuccess && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledConfirmation, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.FreeCancellationIcon, {
                        color: "blue",
                        height: 30
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Text16, {
                        className: "profile__success-message",
                        children: "Your profile changes have been saved"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridRow, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridColumn, {
                            cols: 12,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Text16, {
                                children: "Guest Information"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridRow, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridColumn, {
                            cols: 12,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(StyledInput, {
                                id: "firstName",
                                label: "First Name",
                                value: inputs.firstName,
                                type: "text",
                                disabled: true
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridRow, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridColumn, {
                            cols: 12,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(StyledInput, {
                                id: "lastName",
                                label: "Last Name",
                                value: inputs.lastName,
                                type: "text",
                                disabled: true
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridRow, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridColumn, {
                            cols: 12,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(StyledInput, {
                                id: "email",
                                label: "Email Address",
                                value: inputs.email,
                                error: errors === null || errors === void 0 ? void 0 : errors.email,
                                type: "email",
                                onChange: handleChange,
                                disabled: isCasinoCreditCustomer || updateProfileLoading,
                                onBlur: ()=>validateField('email')
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridRow, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridColumn, {
                            cols: 12,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(StyledInput, {
                                id: "phoneNumber",
                                label: "Phone Number (optional)",
                                value: inputs.phoneNumber,
                                error: errors === null || errors === void 0 ? void 0 : errors.phoneNumber,
                                type: "tel",
                                onChange: handleChange,
                                disabled: isCasinoCreditCustomer || updateProfileLoading,
                                onBlur: ()=>validateField('phoneNumber')
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridRow, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(StyledGridColumn, {
                            cols: 2,
                            indent: 10,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Button, {
                                    className: "profile__change-password-button",
                                    variant: "primary",
                                    shape: "inline",
                                    size: "large",
                                    label: "Change Password",
                                    fullWidth: true,
                                    href: changePasswordUrl
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(wcl_core_.GridRow, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(StyledGridColumn, {
                                cols: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Heading20, {
                                    children: "Birthday"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridColumn, {
                                cols: 4,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(StyledInput, {
                                    id: "birthMonth",
                                    label: "Month",
                                    value: ((ref4 = inputs.dateOfBirth) === null || ref4 === void 0 ? void 0 : ref4.split('/')[0]) || '',
                                    type: "number",
                                    disabled: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridColumn, {
                                cols: 4,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(StyledInput, {
                                    id: "birthDay",
                                    label: "Day",
                                    value: ((ref1 = inputs.dateOfBirth) === null || ref1 === void 0 ? void 0 : ref1.split('/')[1]) || '',
                                    type: "number",
                                    disabled: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridColumn, {
                                cols: 4,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(StyledInput, {
                                    id: "birthYear",
                                    label: "Year",
                                    value: ((ref2 = inputs.dateOfBirth) === null || ref2 === void 0 ? void 0 : ref2.split('/')[2]) || '',
                                    type: "number",
                                    disabled: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridColumn, {
                                cols: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(StyledText10, {
                                    children: "M life Rewards Members must be at least 21 years of age"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridRow, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(StyledGridColumn, {
                            cols: 12,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Heading20, {
                                children: "Address (optional)"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridRow, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridColumn, {
                            cols: 12,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(StyledSelect, {
                                id: "country",
                                label: "Country",
                                value: inputs.country,
                                error: errors === null || errors === void 0 ? void 0 : errors.country,
                                onChange: handleCountryChange,
                                options: countries,
                                disabled: isCasinoCreditCustomer || updateProfileLoading,
                                maxHeight: 500
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridRow, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridColumn, {
                            cols: 12,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(StyledInput, {
                                id: "address1",
                                label: "Address Line 1",
                                value: inputs.address1,
                                error: errors === null || errors === void 0 ? void 0 : errors.address1,
                                type: "text",
                                onChange: handleChange,
                                disabled: isCasinoCreditCustomer || updateProfileLoading
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridRow, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridColumn, {
                            cols: 12,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(StyledInput, {
                                id: "address2",
                                label: "Address Line 2",
                                value: inputs.address2,
                                error: errors === null || errors === void 0 ? void 0 : errors.address2,
                                type: "text",
                                onChange: handleChange,
                                disabled: isCasinoCreditCustomer || updateProfileLoading
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridRow, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridColumn, {
                            cols: 12,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(StyledInput, {
                                id: "city",
                                label: "City",
                                value: inputs.city,
                                error: errors === null || errors === void 0 ? void 0 : errors.city,
                                type: "text",
                                onChange: handleChange,
                                disabled: isCasinoCreditCustomer || updateProfileLoading
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridRow, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridColumn, {
                            cols: 12,
                            children: displayStateDropdown ? /*#__PURE__*/ jsx_runtime_.jsx(StyledSelect, {
                                id: "state",
                                label: "State",
                                value: inputs.state,
                                error: errors === null || errors === void 0 ? void 0 : errors.state,
                                onChange: handleStateChange,
                                options: states[inputs.countryCode],
                                disabled: isCasinoCreditCustomer || updateProfileLoading,
                                // onBlur={() => validateField('state')}
                                maxHeight: 500
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(StyledInput, {
                                id: "state",
                                label: "State",
                                value: inputs.state,
                                error: errors === null || errors === void 0 ? void 0 : errors.state,
                                type: "text",
                                onChange: handleChange,
                                disabled: isCasinoCreditCustomer || updateProfileLoading,
                                onBlur: ()=>validateField('state')
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridRow, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridColumn, {
                            cols: 12,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(StyledInput, {
                                id: "zipCode",
                                label: "Zip/Postal Code",
                                value: inputs.zipCode,
                                error: errors === null || errors === void 0 ? void 0 : errors.zipCode,
                                type: "text",
                                onChange: handleChange,
                                disabled: isCasinoCreditCustomer || updateProfileLoading,
                                onBlur: ()=>validateField('zipCode')
                            })
                        })
                    }),
                    hasFormChanged && !isCasinoCreditCustomer && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: viewport.minLg ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(SaveChangesGridRow, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Button, {
                                        variant: "primary",
                                        shape: "pill",
                                        size: "large",
                                        label: "Save Changes",
                                        fullWidth: true,
                                        disabled: hasInvalidFields,
                                        type: "submit",
                                        loading: updateProfileLoading
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(CancelChangesGridRow, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Button, {
                                        variant: "primary",
                                        shape: "inline",
                                        size: "large",
                                        label: "Cancel Changes",
                                        fullWidth: true,
                                        onClick: handleCancelChanges,
                                        disabled: updateProfileLoading
                                    })
                                })
                            ]
                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(CancelChangesGridRow, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Button, {
                                        variant: "primary",
                                        shape: "inline",
                                        size: "large",
                                        label: "Cancel Changes",
                                        fullWidth: true,
                                        onClick: handleCancelChanges,
                                        disabled: updateProfileLoading
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(SaveChangesGridRow, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Button, {
                                        variant: "primary",
                                        shape: "pill",
                                        size: "large",
                                        label: "Save Changes",
                                        fullWidth: true,
                                        disabled: hasInvalidFields,
                                        type: "submit",
                                        loading: updateProfileLoading
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const Profile_Profile = (Profile);



/***/ })

};
;