"use strict";
exports.id = 418;
exports.ids = [418];
exports.modules = {

/***/ 2418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "BookingWidgetWrapper": () => (/* binding */ BookingWidgetWrapper),
  "default": () => (/* binding */ BookingWidget_BookingWidgetWrapper)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mgmresorts/wcl-core"
var wcl_core_ = __webpack_require__(1771);
// EXTERNAL MODULE: external "next-shared-logic"
var external_next_shared_logic_ = __webpack_require__(2587);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/common/analytics/useClickEvent.ts + 1 modules
var useClickEvent = __webpack_require__(7474);
;// CONCATENATED MODULE: ./src/utils/helpers.ts
const slugify = (str)=>str.toLowerCase().trim().replace(/[^\s\w-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '')
;

// EXTERNAL MODULE: external "@mgmresorts/wcl-styled"
var wcl_styled_ = __webpack_require__(3294);
;// CONCATENATED MODULE: ./src/components/BookingWidget/BookingWidgetSelect/BookingWidgetSelect.styles.tsx

const StyledTriggerWrapper = wcl_styled_.styled.div`
  position: relative;
  border-right: 1px solid #979797;
`;
const StyledTrigger = wcl_styled_.styled.button`
  height: 116px;
  border: 0;
  padding: 24px;
  position: relative;
  cursor: pointer;
  background: ${wcl_styled_.$white};
  transition: 'background 0.2s';
  text-align: left;
  &:hover {
    background: #f7f7f7;
  }
  min-width: ${(props)=>props.variant === 'regions' ? '20vw' : props.variant === 'resorts' ? '20vw' : 'none'
};
  ${wcl_styled_.media.maxMd`min-width: auto`};
  border-radius: ${(props)=>props.variant === 'regions' ? '10px 0 0 10px' : 0
};
  max-width: 18vw;
  .label {
    text-transform: capitalize;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.33;
    letter-spacing: normal;
    color: ${wcl_styled_.$darkGrey};
    margin-bottom: 13px;
  }
  .input {
    font-size: 28px;
    ${wcl_styled_.media.maxMd`font-size:15px;`};
    font-weight: 500;
    line-height: 32px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: opacity 0.2s;
    text-align: ${(props)=>props.variant === 'guests' ? 'center' : 'left'
};
    color: ${(props)=>props.variant === 'guests' ? '#616161' : ''
};
  }
`;
const StyledDropdownMenu = wcl_styled_.styled.div`
  position: absolute;
  top: 101%;
  ${({ title  })=>title === 'booknow' && `left: 41% !important`
}
  left: ${({ variant  })=>variant === 'regions' ? '0' : variant === 'resorts' ? '20%' : '71%'
};
  border-radius: 10px;
  max-height: 0;
  margin: 1px 0 0 0;
  transition: max-height 0.3s ease;
  border-top-left-radius: 0;
  z-index: 5 !important;
  overflow-y: scroll !important;
  border: none;
  width: ${({ variant  })=>variant === 'guests' ? '197px' : 'max-content'
};
  max-height: 340px;
  max-width: ${({ variant  })=>variant === 'regions' ? '771px' : variant === 'resorts' ? '746px' : 'none'
};
  ${wcl_styled_.media.maxMd`max-width: 520px`};
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.12), 0 0 4px 0 rgba(0, 0, 0, 0.24);
  background-color: ${wcl_styled_.$white};
  left: auto;
  right: ${({ variant  })=>variant === 'guests' ? 0 : 'auto'
};
`;
const StyledDropdownList = wcl_styled_.styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: ${({ variant  })=>variant === 'regions' ? '25px 12px' : variant === 'resorts' ? '16px 14px' : '16px'
};
`;
const StyledDropdownListItem = wcl_styled_.styled.div`
  padding: ${({ variant  })=>variant === 'regions' ? '3px' : variant === '0' ? '16px 14px' : '0'
};
  margin: ${({ variant  })=>variant === 'regions' ? '6px' : variant === '0' ? '16px 14px' : '0'
};
  background-color: ${wcl_styled_.$white};
  border: ${({ variant  })=>variant === 'regions' ? '1px solid' : 'none'
};
  border-radius: 10px;
  width: ${({ variant  })=>variant === 'regions' ? 'auto' : variant === 'resorts' ? '33%' : '100%'
};
  border-color: ${({ active  })=>active ? wcl_styled_.$indigo : wcl_styled_.$white
};
  &:first-child {
    display: ${({ variant  })=>variant === 'resorts' ? 'block' : 'inherit'
};
    width: ${({ variant  })=>variant === 'resorts' && '100%'
};
    div {
      color: ${({ variant  })=>variant === 'resorts' && wcl_styled_.$indigo
};
    }
  }
  cursor: pointer;
`;
const StyledDropdownListItemInner = wcl_styled_.styled.div`
  width: ${({ variant  })=>variant === 'regions' ? '225px' : variant === 'resorts' ? 'auto' : '100%'
};
  height: ${({ variant  })=>variant === 'regions' ? '125px' : variant === 'resorts' ? 'auto' : '62px'
};
  border-radius: ${({ variant  })=>variant === 'regions' ? '10px' : variant === 'resorts' ? '10px' : '5px'
};
  background-color: ${({ active , variant , theme  })=>variant === 'regions' && wcl_styled_.$slightLightGrey || variant === 'guests' && active && theme.colors.interface || wcl_styled_.$white
};
  border: ${({ variant  })=>variant === 'guests' ? `1px solid ${wcl_styled_.$indigo}` : 'none'
};
  justify-content: ${({ variant  })=>variant === 'resorts' ? 'flex-start' : 'center'
};
  font-size: ${({ variant  })=>variant === 'regions' ? '25px' : variant === 'resorts' ? '20px' : '20px'
};
  font-weight: 500;
  color: ${({ variant , active  })=>variant === 'resorts' && active ? '#002b49' : variant === 'resorts' ? '#606060' : variant === 'guests' && active ? wcl_styled_.$white : variant === 'guests' ? wcl_styled_.$indigo : wcl_styled_.$white
};
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: ${({ variant  })=>variant === 'guests' ? '8px' : 0
};
  padding: ${({ variant  })=>variant === 'resorts' && '1rem'
};
`;

;// CONCATENATED MODULE: ./src/components/BookingWidget/BookingWidgetSelect/BookingWidgetSelect.tsx



const BookingWidgetSelect = ({ label , id , selectedLabel , variant ='' , onSelectClick , placeholder , children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledTriggerWrapper, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledTrigger, {
                id: id,
                type: "button",
                "aria-label": placeholder,
                "aria-haspopup": "true",
                onClick: onSelectClick,
                variant: variant,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "label",
                        children: label
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "input",
                        children: selectedLabel
                    })
                ]
            }),
            children
        ]
    }));
};

;// CONCATENATED MODULE: ./src/components/BookingWidget/BookingWidgetSelect/BookingWidgetSelect.types.ts


;// CONCATENATED MODULE: ./src/components/BookingWidget/BookingWidgetSelect/index.ts



// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
;// CONCATENATED MODULE: ./src/components/Calendar/CalendarConfig.tsx
const defaultCalendarConfig = {
    legalText: '* Plus nightly resort fee & applicable taxes',
    validations: {
        noArrival: {
            message: 'Arrivals are not accepted on %{date}. Please choose a different arrival date.',
            messageVariant: 'error',
            modal: {
                title: 'Removing Offer',
                text: 'The selected offer does not allow arrival on %{date}. To arrive on that date, you may remove the offer.',
                primaryButton: 'Keep Dates & Remove Offer',
                secondaryButton: 'Keep Offer & Remove Dates'
            }
        },
        maxStay: {
            numDays: 14,
            message: 'Unfortunately, you can only book stays shorter than 14 nights online. Please choose a shorter date range or call',
            messageActionText: {
                type: 'phoneNumber',
                text: '866.761.7111'
            },
            messageVariant: 'error'
        },
        soldOut: {
            message: 'Due to a sold out date, for your arrival date you must check out on the %{day}',
            messageVariant: 'error'
        },
        nonOfferDays: {
            message: `None of your selected dates include the selected offer.`,
            messageVariant: 'warning',
            modal: {
                title: 'Removing Offer',
                text: 'None of your selected dates include the selected offer. Are you sure you want continue without this offer?',
                primaryButton: 'Keep Dates & Remove Offer',
                secondaryButton: 'Keep Offer & Remove Dates'
            }
        },
        nonDPODays: {
            message: `Continue Adding Room at Best Available Rate?`,
            messageVariant: 'warning',
            modal: {
                title: 'Continue Adding Room at Best Available Rate?',
                text: "Your M life offers can't be redeemed for the selected dates. This may be a result of something else in your cart. You may continue with the best available rates for the current dates, or select dates that are eligible for your offers.",
                primaryButton: 'Got It'
            }
        },
        partialOfferDays: {
            message: `Some of your selected dates are not included in the selected offer.`,
            messageVariant: 'warning',
            modal: {
                title: 'Removing Offer',
                text: 'Some of your selected dates are not included in the selected offer. Are you sure you want continue without this offer?',
                primaryButton: 'Keep Dates & Remove Offer',
                secondaryButton: 'Keep Offer & Remove Dates'
            }
        },
        programStayLength: {
            message: `To book this offer, %{warningTemplate}.`,
            messageVariant: 'warning',
            modal: {
                title: 'Removing Offer',
                text: 'To book this offer, %{warningTemplate}. Would you like to continue without this offer?',
                primaryButton: 'Keep Dates & Remove Offer',
                secondaryButton: 'Keep Offer & Remove Dates'
            },
            minimumWarningTemplate: 'you must choose at least %{nights} offer nights',
            maximumWarningTemplate: 'your stay must be no more than %{nights} nights'
        },
        resortSoldout: {
            message: 'Resort you had selected is unavailable on the selected dates.',
            messageVariant: 'warning',
            modal: {
                title: 'Changing Dates',
                text: 'Resort you had selected is unavailable on the selected dates. Continuing will unselect the resort.',
                primaryButton: 'Confirm Dates & Change Resort',
                secondaryButton: 'Keep Resort & Change Dates'
            }
        },
        limitedRange: {
            message: 'The Selected offer is available %{range}. To book on other days, select a new offer.',
            messageVariant: 'info'
        }
    }
};

// EXTERNAL MODULE: external "@mgmresorts/wcl-utils"
var wcl_utils_ = __webpack_require__(4753);
// EXTERNAL MODULE: external "react-dates/initialize"
var initialize_ = __webpack_require__(7073);
;// CONCATENATED MODULE: ./src/components/Calendar/DateRangeInput/DateRangeInput.styles.tsx

const StyledMasked = wcl_styled_.styled.div`
  font-size: ${(p)=>p.fontSize
};
  font-weight: ${(p)=>p.fontWeight
};
  position: absolute;
  top: 26px;
  color: ${(p)=>p.theme.colors.interface
};
  ${(p)=>p.offset !== undefined ? wcl_styled_.css`
          right: ${p.offset}px;
        ` : wcl_styled_.css`
          left: 0;
        `
};
`;
const shrinkLabel = wcl_styled_.css`
  top: 4px;
  font-size: 10px;
  font-weight: 500;

  ${wcl_styled_.media.minLg`
    font-size: 12px;
  `};
`;
const StyledLabel = wcl_styled_.styled.div`
  position: absolute;
  top: 20px;
  font-size: 20px;
  ${wcl_styled_.media.maxMd`
  font-size: 15px;
  `};
  font-weight: 500;
  transition: top 0.3s ease, font-size 0.3s ease;

  ${(p)=>p.shrink && shrinkLabel
};
`;
const StyledStartDateLabel = (0,wcl_styled_.styled)(StyledLabel)`
  left: 0px;
`;
const StyledEndDateLabel = (0,wcl_styled_.styled)(StyledLabel)`
  right: 0px;
`;
const StyledContainerDateRangeInput = wcl_styled_.styled.div`
  position: relative;
  .DateRangePickerInput {
    display: flex;
    align-items: flex-end;

    ${(p)=>p.showUnderline && wcl_styled_.css`
        border-bottom: 1px solid ${p.theme.colors.lightGrey};
      `
};

    &_arrow_1 {
      display: flex;
    }
  }
  .DateInput {
    flex-grow: 1;
    margin: 0;
    padding: 0;
    background: #fff;
    position: relative;
    display: inline-block;
    width: 130px;
    vertical-align: middle;
  }
  .DateInput_input {
    width: 100%;
    line-height: 24px;
    background-color: #fff;
    padding: 11px 11px 9px;
    border: 0;

    font-size: 20px;
    ${wcl_styled_.media.maxSm`
      font-size: 16px;
    `};
    font-weight: 500;
    color: ${(p)=>p.theme.colors.interface
};
    ${(p)=>p.readOnly && wcl_styled_.css`
        cursor: default;
      `
};
  }
  .DateInput_input {
    border-bottom: none !important;
  }

  .DateInput_screenReaderMessage {
    border: 0;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  /* fix for IE11 and microsoft edge - those browsers add close button to input, we don't want it here and that rule is removing it
    specs: https://developer.mozilla.org/en-US/docs/Web/CSS/::-ms-clear
  */
  .DateInput_input::-ms-clear {
    display: none;
  }

  .DateInput_input#startDate {
    padding-left: 0px;
    ${(p)=>p.startDateMasked && wcl_styled_.css`
        color: ${p.theme.colors.lightGrey};
      `
};
    ${(p)=>p.errorStartDate && wcl_styled_.css`
        color: red;
      `
};
  }
  .DateInput_input#endDate {
    text-align: right;
    padding-right: 0px;
    ${(p)=>p.endDateMasked && wcl_styled_.css`
        color: ${p.theme.colors.lightGrey};
      `
}
    ${(p)=>p.errorEndDate && wcl_styled_.css`
        color: red;
      `
}
  }
`;
const StyledUnderline = wcl_styled_.styled.div`
  position: absolute;
  bottom: 0px;

  height: 2px;
  width: calc(50% - ${(p)=>p.arrowWidth / 2 + 32
}px);
  background-color: ${(p)=>p.hasError ? p.theme.colors.errorRed : p.theme.colors.interface
};
  transform: ${(p)=>p.showUnderline ? 'scaleX(1)' : 'scaleX(0)'
};
  transition: transform 0.3s ease, background-color 0.3s ease;
`;
const StyledStartDateUnderline = (0,wcl_styled_.styled)(StyledUnderline)`
  transform-origin: left;
  left: 0px;
`;
const StyledEndDateUnderline = (0,wcl_styled_.styled)(StyledUnderline)`
  transform-origin: right;
  right: 0px;
`;

;// CONCATENATED MODULE: ./src/components/Calendar/DateRangeInput/DateRangeInput.tsx







// eslint-disable-next-line @typescript-eslint/no-var-requires
const { DateRangePickerInputController  } = __webpack_require__(3649);
const ARROW_SIZE = 57;
const ArrowIconWithTheme = (0,wcl_styled_.withTheme)(({ theme  })=>/*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.LongArrowIcon, {
        color: theme.colors.interface,
        height: ARROW_SIZE
    })
);
const DateRangeInput = (props)=>{
    const { 0: state , 1: setState  } = (0,external_react_.useState)({
        startDateMasked: false,
        endDateMasked: false,
        lastValidValue: {
        },
        preventMobileFocus: false
    });
    // const _container = React.createRef<HTMLDivElement>();
    const _container = (0,external_react_.useRef)(null);
    const handleChange = (value)=>{
        const startDateCleared = (!value || !value.startDate) && props.value && props.value.startDate;
        const endDateCleared = (!value || !value.endDate) && props.value && props.value.endDate;
        if (startDateCleared || endDateCleared) {
            setState({
                ...state,
                lastValidValue: props.value
            });
        }
        const { startDate , endDate  } = value;
        props.onChange({
            startDate: startDate ? external_moment_default()(startDate).format('YYYY-MM-DD') : undefined,
            endDate: endDate ? external_moment_default()(endDate).format('YYYY-MM-DD') : undefined
        });
    };
    const handleOnFocusChange = (newFocus)=>{
        if (props.preventInputFocus || state.preventMobileFocus) {
            return;
        }
        props.onFocusChange(newFocus);
    };
    const { startDateMasked , endDateMasked , preventMobileFocus  } = state;
    const { value: value1 , readOnly , errorStartDate , errorEndDate , labelStartDate , labelEndDate , size , focusedInput , isFocused , isOutsideRange , showUnderline , preventInputFocus , variant ,  } = props;
    const startDateFocused = focusedInput === 'startDate' && !readOnly;
    const endDateFocused = focusedInput === 'endDate' && !readOnly;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledContainerDateRangeInput, {
        ref: _container,
        errorStartDate: errorStartDate,
        errorEndDate: errorEndDate,
        readOnly: readOnly,
        showUnderline: showUnderline,
        startDateMasked: startDateMasked,
        endDateMasked: endDateMasked,
        "data-testid": DateRangeInput.selector(),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(DateRangePickerInputController, {
                displayFormat: size === 'large' ? 'MMM D, YYYY' : 'MMM D',
                startDate: value1.startDate && external_moment_default()(value1.startDate),
                endDate: value1.endDate && external_moment_default()(value1.endDate),
                isFocused: !preventInputFocus && !preventMobileFocus && !readOnly && isFocused,
                isStartDateFocused: startDateFocused,
                isEndDateFocused: endDateFocused,
                startDateAriaLabel: labelStartDate,
                endDateAriaLabel: labelEndDate,
                readOnly: readOnly || preventInputFocus || preventMobileFocus,
                noBorder: true,
                startDatePlaceholderText: "",
                endDatePlaceholderText: "",
                onFocusChange: handleOnFocusChange,
                onDatesChange: handleChange,
                customArrowIcon: /*#__PURE__*/ jsx_runtime_.jsx(ArrowIconWithTheme, {
                }),
                isOutsideRange: isOutsideRange
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(StyledStartDateLabel, {
                onClick: ()=>handleOnFocusChange('startDate')
                ,
                shrink: Boolean(value1.startDate || startDateFocused),
                className: "StartDateLabel",
                children: labelStartDate
            }),
            variant !== 'BookingWidget' && /*#__PURE__*/ jsx_runtime_.jsx(StyledStartDateUnderline, {
                className: "StartDateUnderline",
                hasError: errorStartDate,
                showUnderline: startDateFocused || errorStartDate,
                arrowWidth: ARROW_SIZE
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(StyledEndDateLabel, {
                onClick: ()=>handleOnFocusChange('endDate')
                ,
                shrink: Boolean(value1.endDate || endDateFocused),
                className: "EndDateLabel",
                children: labelEndDate
            }),
            variant !== 'BookingWidget' && /*#__PURE__*/ jsx_runtime_.jsx(StyledEndDateUnderline, {
                className: "EndDateUnderline",
                hasError: errorEndDate,
                showUnderline: endDateFocused || errorEndDate,
                arrowWidth: ARROW_SIZE
            })
        ]
    }));
};
DateRangeInput.selector = (name = '')=>`DateRangeInput${name ? `:${name}` : ''}`
;
DateRangeInput.defaultProps = {
    isOutsideRange: ()=>false
    ,
    readOnly: false,
    errorStartDate: false,
    errorEndDate: false,
    labelStartDate: 'Check In',
    labelEndDate: 'Check Out',
    size: 'large',
    isFocused: false,
    showUnderline: true,
    value: {
    },
    noFocus: false
};

;// CONCATENATED MODULE: ./src/components/Calendar/DateRangeInput/index.ts


// EXTERNAL MODULE: external "memoize-one"
var external_memoize_one_ = __webpack_require__(7809);
var external_memoize_one_default = /*#__PURE__*/__webpack_require__.n(external_memoize_one_);
// EXTERNAL MODULE: external "react-dates"
var external_react_dates_ = __webpack_require__(3649);
// EXTERNAL MODULE: external "polished"
var external_polished_ = __webpack_require__(2042);
;// CONCATENATED MODULE: ./src/components/Calendar/DayCell/DayCell.styles.tsx


/**
 * StyledWrapper is here to provide white background
 * for semi-transparent background-color used in StyledWrapper2.
 */ const StyledWrapper = wcl_styled_.styled.div`
  ${wcl_styled_.preventTextSelect};
  ${wcl_styled_.preventDoubleTapToZoom};

  overflow: hidden;

  height: 100%;
  width: 100%;
  background-color: ${(p)=>p.theme.colors.white
};

  border-radius: ${(0,wcl_styled_.variant)('variant', {
    inactive: `4px`,
    'first-selection': '4px',
    'start-date': '4px 0 0 4px',
    'during-stay': '0',
    'end-date': '0 4px 4px 0',
    unavailable: '4px',
    error: '4px',
    'potential-error': '0',
    'potential-end-date-error': '0 4px 4px 0',
    'invalid-arrival-date-warning': '0',
    'invalid-arrival-date-error': '0'
})};
`;
const StyledWrapper2 = wcl_styled_.styled.div`
  border-radius: inherit;
  height: 100%;
  width: 100%;
  background-color: ${({ theme: { colors: { interface: color , errorRed , black  } ,  } ,  })=>(0,wcl_styled_.variant)('variant', {
        // Colors will overlap focus border which is fine for start and end dates
        // but we need to keep the majority of dates without a background color
        // in order to maintain the focus border styling.
        inactive: 'none',
        'first-selection': color,
        'start-date': color,
        'during-stay': (0,external_polished_.rgba)(color, 0.5),
        'end-date': color,
        unavailable: 'none',
        error: 'none',
        'potential-error': (0,external_polished_.rgba)(errorRed, 0.5),
        'potential-end-date-error': errorRed,
        'invalid-arrival-date-warning': (0,external_polished_.rgba)(black, 0.05),
        'invalid-arrival-date-error': (0,external_polished_.rgba)(black, 0.05)
    })
};
`;
const StyledHoverWrapper = wcl_styled_.styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 6px;
  border-radius: inherit;
    ${(p)=>p.hovering && !p.hasStartDate && p.variant === 'inactive' && wcl_styled_.css`
        color: ${p.theme.colors.white} !important;
      `
}

    background-color: ${({ theme: { colors: { interface: color , black , errorRed  } ,  } , hasStartDate , hovering ,  })=>hovering ? (0,wcl_styled_.variant)('variant', {
        inactive: hasStartDate ? (0,external_polished_.rgba)(color, 0.08) : color,
        'first-selection': color,
        'start-date': (0,external_polished_.rgba)(black, 0.08),
        'during-stay': (0,external_polished_.rgba)(black, 0.08),
        'end-date': (0,external_polished_.rgba)(black, 0.08),
        unavailable: 'none',
        error: (0,external_polished_.rgba)(color, 0.08),
        'potential-error': (0,external_polished_.rgba)(errorRed, 0.08),
        'potential-end-date-error': (0,external_polished_.rgba)(errorRed, 0.08),
        'invalid-arrival-date-warning': 'none',
        'invalid-arrival-date-error': 'none'
    }) : ''
};
  }
`;
const StyledOfferIndicator = wcl_styled_.styled.div`
  position: absolute;
  top: 3px;
  left: 3px;
  border-top-width: 6px;
  border-top-style: solid;
  border-top-color: ${({ theme: { colors: { black , white  } ,  } ,  })=>(0,wcl_styled_.variant)('variant', {
        inactive: (0,external_polished_.rgba)(black, 0.25),
        'first-selection': (0,external_polished_.rgba)(white, 0.5),
        'start-date': (0,external_polished_.rgba)(white, 0.5),
        'during-stay': (0,external_polished_.rgba)(black, 0.5),
        'end-date': white,
        unavailable: (0,external_polished_.rgba)(black, 0.2),
        error: (0,external_polished_.rgba)(black, 0.25),
        'potential-error': (0,external_polished_.rgba)(black, 0.25),
        'potential-end-date-error': white,
        'invalid-arrival-date-warning': (0,external_polished_.rgba)(black, 0.25),
        'invalid-arrival-date-error': (0,external_polished_.rgba)(black, 0.25)
    })
};
  border-right: 6px solid transparent;
`;
const StyledDay = wcl_styled_.styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme: { colors: { black , white , errorRed  } ,  } ,  })=>(0,wcl_styled_.variant)('variant', {
        inactive: black,
        'first-selection': white,
        'start-date': white,
        'during-stay': black,
        'end-date': white,
        unavailable: (0,external_polished_.rgba)(black, 0.2),
        error: errorRed,
        'potential-error': black,
        'potential-end-date-error': white,
        'invalid-arrival-date-warning': (0,external_polished_.rgba)(black, 0.6),
        'invalid-arrival-date-error': errorRed
    })
};}

  ${(p)=>p.hovering && p.variant === 'inactive' && !p.hasStartDate && wcl_styled_.css`
      color: ${p.theme.colors.white};
    `
}
`;
const StyledPrice = wcl_styled_.styled.div`
  ${(p)=>p.hidden && wcl_styled_.css`
      display: none;
    `
}

  transform: translateY(50%);
  opacity: 0;
  max-height: 0px;
  transition: transform 500ms ease-in-out, opacity 500ms ease-in-out, max-height 500ms ease-in-out;

  ${(p)=>p.status === 'entered' && wcl_styled_.css`
      max-height: 50px;
      transform: translateY(0%);
      opacity: 1;
    `
}

  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: ${({ withOffer , theme: { colors: { interface: interfaceColor , white , black , darkGrey  } ,  } ,  })=>(0,wcl_styled_.variant)('variant', {
        inactive: withOffer ? interfaceColor : darkGrey,
        'first-selection': white,
        'start-date': white,
        'during-stay': black,
        'end-date': interfaceColor,
        unavailable: (0,external_polished_.rgba)(black, 0.2),
        error: withOffer ? interfaceColor : darkGrey,
        'potential-error': black,
        'potential-end-date-error': white,
        'invalid-arrival-date-warning': interfaceColor,
        'invalid-arrival-date-error': interfaceColor
    })
};

  ${(p)=>p.hovering && p.variant === 'inactive' && !p.hasStartDate && wcl_styled_.css`
      color: ${p.theme.colors.white};
    `
}
`;

;// CONCATENATED MODULE: ./src/components/Calendar/DayCell/DayCell.tsx





/**
 * This component is going to be passed into react-dates,
 * react-dates is going to rerender it on every occasion so
 * it was wrapped with React.memo
 */ const DayCell = /*#__PURE__*/ external_react_default().memo(// 1-31 // examples: pre-formatted currency string (i.e. $200) or 'Comp'
({ date , price , variant , withOffer , hasStartDate , hovering  })=>{
    const { 0: animate , 1: setAnimate  } = (0,external_react_.useState)(false);
    const { 0: cachedPrice , 1: setCachedPrice  } = (0,external_react_.useState)('');
    (0,external_react_.useEffect)(()=>{
        if (price) {
            // If the  price has changed immediately then we changed to a resort
            // that already has prices fetched. We need to start the exiting animation
            // in this case. Then the cached price will update after the exit.
            if (cachedPrice && price !== cachedPrice) {
                setAnimate(false);
            } else {
                // If we have a new price we need to start the entering animation.
                setAnimate(true);
                setCachedPrice(price);
            }
        // If we don't have a price then the prices are currently fetching and
        // we need to start the exiting animation.
        } else {
            setAnimate(false);
        }
    }, [
        price,
        cachedPrice
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(StyledWrapper, {
        variant: variant,
        children: /*#__PURE__*/ jsx_runtime_.jsx(StyledWrapper2, {
            variant: variant,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledHoverWrapper, {
                hovering: hovering,
                variant: variant,
                hasStartDate: Boolean(hasStartDate),
                children: [
                    withOffer && variant !== 'unavailable' && /*#__PURE__*/ jsx_runtime_.jsx(StyledOfferIndicator, {
                        variant: variant
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(StyledDay, {
                        variant: variant,
                        hasStartDate: Boolean(hasStartDate),
                        hovering: Boolean(hovering),
                        children: (0,wcl_utils_.parseDay)(date)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(wcl_utils_.Transition, {
                        in: animate,
                        timeout: 300,
                        onExited: ()=>{
                            setCachedPrice(price || '');
                        },
                        children: (status)=>/*#__PURE__*/ jsx_runtime_.jsx(StyledPrice, {
                                withOffer: withOffer,
                                variant: variant,
                                hasStartDate: Boolean(hasStartDate),
                                hovering: Boolean(hovering),
                                hidden: Boolean(variant === 'end-date' || variant === 'unavailable'),
                                status: status,
                                children: cachedPrice || price
                            })
                    })
                ]
            })
        })
    }));
});
DayCell.displayName = 'DayCell'; // DayCell.selector = (date: string) => `${DayCell.displayName}:${date}`;

;// CONCATENATED MODULE: ./src/components/Calendar/DayCell/index.ts



;// CONCATENATED MODULE: ./src/components/Calendar/DateRangePicker/DateRangePicker.styles.tsx


const BUTTON_WIDTH = 36;
const BUTTON_HEIGHT = 32;
const CALENDAR_MARGIN = 13;
const StyledNav = wcl_styled_.styled.div`
  opacity: 1;
  transition: opacity 300ms ease-out;

  position: absolute;
  top: 24px;

  width: ${BUTTON_WIDTH}px;
  height: ${BUTTON_HEIGHT}px;

  border-radius: 4px;
  border: solid 1px ${(p)=>p.theme.colors.lightGrey
};
  background: white;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 100;
`;
const offsetCalc = (p)=>{
    const diffCellAndButton = p.cellWidth - BUTTON_WIDTH;
    const padding = diffCellAndButton / 2;
    return padding + CALENDAR_MARGIN;
};
const StyledNavPrev = (0,wcl_styled_.styled)(StyledNav)`
  left: ${offsetCalc}px;
`;
const StyledMobileNavPrev = wcl_styled_.styled.div`
  position: absolute;
  top: -20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const StyledNavNext = (0,wcl_styled_.styled)(StyledNav)`
  right: ${offsetCalc}px;
`;
const StyledButtonContainer = wcl_styled_.styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 20px 38px;
`;
const StyledCell = wcl_styled_.styled.div`
  height: ${(p)=>p.width
}px;
  width: ${(p)=>p.width
}px;
  margin: ${(p)=>p.orientation === 'vertical' ? '4px 0' : '0'
}px;
`;
const StyledMonthHeader = (0,wcl_styled_.styled)(wcl_core_.Heading20)`
  padding-top: 6px;
  padding-bottom: 20px;

  ${(p)=>p.isVertical && wcl_styled_.css`
      font-size: 15px;
      text-align: left;
    `
}
`;
const StyledWeekHeader = wcl_styled_.styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  display: flex;
`;
const StyledWeekHeaderDay = wcl_styled_.styled.li`
  font-size: 12px;
  font-weight: 500;
  color: ${(p)=>p.theme.colors.darkGrey
};
`;
/**
 * StyledOverrideContainer is used for Direct Overrides for
 * react-dates styles
 */ const StyledOverrideContainer = wcl_styled_.styled.div`
  height: 100%;
  width: ${(p)=>p.width ? `${p.width}px` : '100%'
};
  position: relative;

  .DayPicker_weekHeader {
    display: none;
  }
  .CalendarMonth_caption {
    padding-bottom: 9px;
    padding-top: 22px;
    font-size: 18px;
    text-align: center;
    caption-side: initial;
  }
  .CalendarMonthGrid__horizontal {
    left: -10px;
    .CalendarMonthGrid_month__horizontal {
      display: inline-block;
    }
    .CalendarMonthGrid_month__hidden {
      visibility: hidden;
    }
    .CalendarMonthGrid_month__hideForAnimation {
      position: absolute;
      z-index: -1;
      opacity: 0;
      pointer-events: none;
    }
  }

  .CalendarMonthGrid__vertical {
    .CalendarMonthGrid_month__hidden {
      visibility: hidden;
    }
  }

  .DayPicker.DayPicker_1.DayPicker__horizontal,
  .DayPicker.DayPicker_1.DayPicker__horizontal > div > div {
    max-width: 100%;
  }
  .DayPickerNavigation_button__disabled ${StyledNav} {
    opacity: 0.2;
  }
  .DayPickerNavigation_button {
    border: none;
  }

  .CalendarDay {
    background: none !important;
    border: none !important;
    padding: 0px !important;
  }

  ${(p)=>p.isVertical && wcl_styled_.css`
      padding-top: 40px;
      .CalendarMonth {
        padding: 0 !important;
      }
      .DayPicker_transitionContainer {
        height: auto !important;
      }
      .CalendarMonthGrid_month__hidden {
        height: 0px;
      }
      .DayPickerNavigation_nextButton__verticalDefault {
        display: none;
      }
      .DayPickerNavigation__verticalDefault {
        top: 0;
      }
    `
}
  ${(p)=>p.isVertical && !p.showPreviousButton && wcl_styled_.css`
      padding-top: 0px;
      .DayPickerNavigation {
        display: none;
      }
    `
}

  ${(p)=>p.isDisabled && wcl_styled_.css`
      opacity: 0.2;

      .CalendarDay {
        cursor: default;
      }

      .DayPickerNavigation {
        display: none;
      }
    `
}
`;

;// CONCATENATED MODULE: ./src/components/Calendar/DateRangePicker/DateRangePicker.tsx









// eslint-disable-next-line @typescript-eslint/no-var-requires
const throttle = __webpack_require__(6247);
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { CalendarDay  } = __webpack_require__(3649);
const TODAY = external_moment_default()();
const VERTICAL_ORIENTATION = 'vertical';
const HORIZONTAL_ORIENTATION = 'horizontal';
const MONTH_PADDING = 16;
const CONTAINER_PADDING = 0;
const momentToISO = (day)=>day.format('YYYY-MM-DD')
;
const DateRangePicker = (props1)=>{
    const _container = (0,external_react_.useRef)(null);
    const { 0: state , 1: setState  } = (0,external_react_.useState)({
        cellWidth: 30,
        extraMonths: 0,
        showPreviousButton: false
    });
    const _updateDimensions = ()=>{
        var ref;
        const { numberOfMonths , parentWidth  } = props1;
        const calendarWidth = parentWidth || (_container === null || _container === void 0 ? void 0 : (ref = _container.current) === null || ref === void 0 ? void 0 : ref.clientWidth) || 0;
        const numPadding = numberOfMonths > 1 ? numberOfMonths : numberOfMonths + 2;
        const calendarSpacing = numPadding * MONTH_PADDING;
        const monthWidth = calendarWidth - calendarSpacing;
        const cellWidth = monthWidth / 7;
        setState({
            ...state,
            cellWidth
        });
    };
    const _handleWindowResize = throttle(_updateDimensions);
    const _isHorizontal = ()=>{
        return props1.orientation === HORIZONTAL_ORIENTATION;
    };
    const _isVertical = ()=>{
        return props1.orientation === VERTICAL_ORIENTATION;
    };
    (0,external_react_.useEffect)(()=>{
        _updateDimensions();
        window.addEventListener('resize', _handleWindowResize);
        // If we are in the vertical orientation and the startDate is in a future month
        // then the calendar will default to that month with no way of going back.
        // This logic checks to see if that is the case and toggles the showPreviousButton
        // so the user can navigate back to the current date if they wish.
        const { value: { startDate  } ,  } = props1;
        if (startDate) {
            const now = external_moment_default()();
            const isSameMonth = external_moment_default()(startDate).isSame(now, 'months');
            const moreThanAMonthAway = external_moment_default()(startDate).diff(now, 'months');
            if (!isSameMonth || moreThanAMonthAway) {
                setState({
                    ...state,
                    showPreviousButton: true
                });
            }
        }
        // In the vertical orientation we want to hide any weeks that
        // are fully disabled because they are in the past.
        if (_isVertical()) {
            const calendar = _container && _container.current;
            const weeks = calendar ? Array.from(calendar.querySelectorAll('tr')) : [];
            weeks.forEach((week)=>{
                const days = Array.from(week.children);
                const weekIsFullyDisabled = days.every((day)=>{
                    const label = day.getAttribute('aria-label');
                    // If there is no label then there is no date which means we are
                    // either at the start or end of the month. Either way it counts
                    // as a disabled day.
                    if (!label) {
                        return true;
                    }
                    const disabled = label.includes('Not available.');
                    if (!disabled) {
                        return false;
                    }
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    const date = external_moment_default()(label.split('.')[1], 'dddd, MMMM D, YYYYY');
                    const inPast = date.isBefore(TODAY, 'day');
                    return inPast;
                });
                if (weekIsFullyDisabled) {
                    week.style.display = 'none';
                }
            });
        }
        return ()=>{
            window.removeEventListener('resize', _handleWindowResize);
            _handleWindowResize.cancel();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0,external_react_.useEffect)(()=>{
        throttle(_updateDimensions)();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props1.parentWidth
    ]);
    const _cellWidth = ()=>{
        const { numberOfMonths , customCellWidth  } = props1;
        const { cellWidth  } = state;
        if (customCellWidth) {
            return customCellWidth;
        }
        const width = cellWidth / numberOfMonths;
        // React Dates modifies the width of the day cells for vertical days which creates
        // huge padding in the calendar. We are reversing that here to make it more
        // consistent to the size of the container.
        const verticalWidth = Math.floor((_container.current && _container.current.clientWidth || 0 - CONTAINER_PADDING * 2) / 7);
        const correctedWidth = Math.floor(_isVertical() ? verticalWidth : numberOfMonths > 1 ? width : width * 1.1);
        return correctedWidth > 0 ? correctedWidth : 0;
    };
    const _calcDayCellVariant = (modifiers, day)=>{
        const { hasError , value , potentialErrorDay , isPotentialArrivalDay , isPotentialDepartureDay  } = props1;
        if (!modifiers) return 'inactive';
        const isEndDate = modifiers.has('selected-end') || modifiers.has('hovered') && modifiers.has('hovered-span');
        const isDuringStay = !hasError && (modifiers.has('selected-span') || modifiers.has('hovered-span'));
        // False by default
        const isPotentialErrorDay = potentialErrorDay && potentialErrorDay(day);
        // True by default
        const isPotentialArrivalDayResult = !isPotentialArrivalDay || isPotentialArrivalDay(day);
        const isPotentialDepartureDayResult = !isPotentialDepartureDay || isPotentialDepartureDay(day);
        switch(true){
            case modifiers.has('blocked-out-of-range'):
                return 'unavailable';
            case modifiers.has('has-error') && !isPotentialArrivalDayResult:
                return 'invalid-arrival-date-error';
            case modifiers.has('has-error'):
                return 'error';
            case modifiers.has('selected-start') && (Boolean(value.endDate) || modifiers.has('hovered-span')):
                return 'start-date';
            case modifiers.has('selected-start'):
                return 'first-selection';
            case isPotentialErrorDay && isEndDate:
                return 'potential-end-date-error';
            case isEndDate:
                return 'end-date';
            case isPotentialErrorDay && isDuringStay:
                return 'potential-error';
            case isDuringStay:
                return 'during-stay';
            case !isPotentialArrivalDayResult && !isPotentialDepartureDayResult:
                return 'invalid-arrival-date-warning';
            default:
                return 'inactive';
        }
    };
    const _handleIsDayDisabledMemo = external_memoize_one_default()((isDayDisabled)=>{
        return (day)=>{
            return Boolean(isDayDisabled && isDayDisabled(momentToISO(day)));
        };
    });
    // eslint-disable-next-line react/display-name
    const _renderCalendarDayMemo = external_memoize_one_default()(()=>(props)=>{
            return(/*#__PURE__*/ jsx_runtime_.jsx(CalendarDay, {
                ...props
            }));
        }
    );
    const renderCalendarDay = ()=>{
        return _renderCalendarDayMemo();
    };
    const handleIsDayDisabled = ()=>{
        const { isDayDisabled  } = props1;
        return _handleIsDayDisabledMemo(isDayDisabled);
    };
    const handleLoadMore = ()=>{
        var // wat: eslint bug
        // eslint-disable-next-line no-unused-expressions
        ref;
        if (props1.disabled) {
            return;
        }
        (ref = props1.onNavNextClick) === null || ref === void 0 ? void 0 : ref.call(props1);
        setState({
            ...state,
            extraMonths: state.extraMonths + 2
        });
    };
    const handleFocusChange = (focusedInput)=>{
        props1.onFocusChange(focusedInput || undefined);
    };
    const handleDatesChange = ({ startDate , endDate  })=>{
        if (props1.disabled) {
            return;
        }
        props1.onChange({
            startDate: startDate ? momentToISO(startDate) : undefined,
            endDate: endDate ? momentToISO(endDate) : undefined
        });
    };
    const handleNavPrevClick = ()=>{
        const { onNavPrevClick  } = props1;
        if (onNavPrevClick) onNavPrevClick();
    };
    const handleNavNextClick = ()=>{
        const { onNavNextClick  } = props1;
        if (onNavNextClick) onNavNextClick();
    };
    const renderDayContents = (day, modifiers)=>{
        const { getDayPrice , isOfferDay , isErrorDay , orientation , value , disabled  } = props1;
        if (!day) {
            return null;
        }
        const iso = momentToISO(day);
        if (isErrorDay && isErrorDay(iso) && modifiers) {
            modifiers.add('has-error');
        } else {
            modifiers.delete('has-error');
        }
        return(/*#__PURE__*/ jsx_runtime_.jsx(StyledCell, {
            orientation: orientation,
            width: _cellWidth(),
            children: /*#__PURE__*/ jsx_runtime_.jsx(DayCell, {
                "data-parent-testid": props1['data-parent-testid'],
                hovering: modifiers.has('hovered') && !disabled,
                date: iso,
                variant: _calcDayCellVariant(modifiers, iso),
                hasStartDate: Boolean(value.startDate),
                price: getDayPrice && getDayPrice(iso),
                withOffer: isOfferDay && isOfferDay(iso)
            }, iso)
        }));
    };
    const { firstDayOfWeek  } = props1;
    const renderMonthElement = (props)=>{
        const weekDayFormat = 'dd';
        const weekHeader = [];
        for(let i = 0; i < 7; i += 1){
            weekHeader.push(/*#__PURE__*/ jsx_runtime_.jsx(StyledWeekHeaderDay, {
                style: {
                    width: _cellWidth()
                },
                children: external_moment_default()().day((i + firstDayOfWeek) % 7).format(weekDayFormat)
            }, i));
        }
        // The following logic is to hide the `Show Previous` button
        // on the vertical layout if we ever get to the current month.
        // React-Dates loads one month ahead so if we are ever generating
        // the header for the month before the current month then we
        // are showing the current month. Thus we need to hide the
        // `Show Previous` button.
        if (props.month.isBefore(external_moment_default()(), 'month') && state.showPreviousButton) {
            setState({
                ...state,
                showPreviousButton: false
            });
        }
        const month = props.month.format('MMMM YYYY');
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            "data-testid": DateRangePicker.selector(month),
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(StyledMonthHeader, {
                    isVertical: _isVertical(),
                    children: month
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(StyledWeekHeader, {
                    children: weekHeader
                })
            ]
        }));
    };
    const { numberOfMonths: numberOfMonths1 = 1 , value: value1 = {
    } , focusedInput: focusedInput1 , disabled: disabled1 , calendarKey , parentWidth: parentWidth1  } = props1;
    const { extraMonths , showPreviousButton  } = state;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledOverrideContainer, {
        "data-testid": DateRangePicker.selector('DateRangePickerContainer'),
        ref: _container,
        isDisabled: disabled1,
        isVertical: _isVertical(),
        cellWidth: _cellWidth(),
        showPreviousButton: showPreviousButton,
        width: parentWidth1,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_dates_.DayPickerRangeController, {
                noBorder: true,
                hideKeyboardShortcutsPanel: true,
                daySize: _cellWidth(),
                isOutsideRange: handleIsDayDisabled(),
                // We are using `any` typing on the following line because
                // React Dates typed the `renderDayContent` prop to only accept
                // a function that uses the first argument `day` although in
                // the code it has a second argument `modifiers` exposed. This
                // second argument is critical for us to determine which DayCell
                // variant to render.
                renderDayContents: renderDayContents,
                renderCalendarDay: renderCalendarDay(),
                renderMonthElement: renderMonthElement,
                startDate: value1.startDate ? external_moment_default()(value1.startDate) : null,
                endDate: value1.endDate ? external_moment_default()(value1.endDate) : null,
                onDatesChange: handleDatesChange,
                // Using any here because typedef doesn't accept null, while it should
                focusedInput: focusedInput1 || null,
                onFocusChange: handleFocusChange,
                numberOfMonths: numberOfMonths1 + extraMonths,
                minDate: TODAY,
                initialVisibleMonth: ()=>value1 && value1.startDate ? external_moment_default()(value1.startDate) : external_moment_default()()
                ,
                orientation: _isHorizontal() ? HORIZONTAL_ORIENTATION : VERTICAL_ORIENTATION,
                onPrevMonthClick: handleNavPrevClick,
                onNextMonthClick: handleNavNextClick,
                navPrev: _isVertical() && showPreviousButton ? /*#__PURE__*/ jsx_runtime_.jsx(StyledMobileNavPrev, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Button, {
                        shape: "pill",
                        variant: "secondary",
                        label: "Load Previous"
                    })
                }) : /*#__PURE__*/ jsx_runtime_.jsx(StyledNavPrev, {
                    cellWidth: _cellWidth(),
                    "data-testid": "NavPrev",
                    tabIndex: 0,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.BackIcon, {
                    })
                }),
                navNext: _isVertical() ? undefined : /*#__PURE__*/ jsx_runtime_.jsx(StyledNavNext, {
                    cellWidth: _cellWidth(),
                    tabIndex: 0,
                    "data-testid": "NavNext",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.ForwardIcon, {
                    })
                })
            }, calendarKey),
            _isVertical() && /*#__PURE__*/ jsx_runtime_.jsx(StyledButtonContainer, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Button, {
                    shape: "pill",
                    variant: "secondary",
                    label: "Load More",
                    onClick: handleLoadMore
                })
            })
        ]
    }));
};
DateRangePicker.displayName = 'DateRangePicker';
DateRangePicker.defaultProps = {
    numberOfMonths: 1,
    orientation: 'horizontal',
    firstDayOfWeek: 0,
    value: {
    }
};
DateRangePicker.selector = (name = '')=>`DateRangePicker${name ? `:${name}` : ''}`
;

;// CONCATENATED MODULE: ./src/components/Calendar/DateRangePicker/index.ts


;// CONCATENATED MODULE: ./src/components/Calendar/DateRangePickerWithInput/DateRangePickerWithInput.styles.tsx

const StyledContainer = wcl_styled_.styled.div`
  ${(p)=>p.isVertical && wcl_styled_.css`
      height: 100%;
    `
};
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  ${wcl_styled_.media.md`
    padding: 0 52px;
  `};
`;
const StyledHeader = wcl_styled_.styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;
const StyledHeadingContainer = wcl_styled_.styled.div`
  display: flex;
`;
const StyledFooter = wcl_styled_.styled.div`
  background: white;
  transition: padding 0.3s;

  ${(p)=>p.vertical && (p.legalShowing || p.alertShowing) && wcl_styled_.css`
      box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.2);
      padding: 16px 16px calc(16px + env(safe-area-inset-bottom));
      margin-top: 12px;
    `
}
  ${(p)=>!p.vertical && (p.legalShowing || p.alertShowing || p.applyButtonShowing) && wcl_styled_.css`
      padding-bottom: 12px;
    `
}
  ${(p)=>!p.alertShowing && !p.vertical && !p.legalShowing && !p.applyButtonShowing && wcl_styled_.css`
      display: none;
    `
}
  ${(p)=>!p.legalShowing && !p.alertShowing && !p.applyButtonShowing && wcl_styled_.css`
      height: 0;
    `
}
`;
const StyledOffset = wcl_styled_.styled.div`
  padding-bottom: ${(p)=>p.offset && p.isVertical ? p.offset : 0
}px;
`;
const StyledFooterSection = wcl_styled_.styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 1em;
  ${(p)=>!p.vertical && !p.legalShowing && p.applyButtonShowing && wcl_styled_.css`
      justify-content: flex-end;
    `
}
`;
const StyledPickerContainer = wcl_styled_.styled.div`
  ${(p)=>p.isVertical ? wcl_styled_.css`
          display: flex;
          flex-grow: 1;
          background: white;
        ` : wcl_styled_.css`
          display: block;
          width: auto;
          overflow: hidden;
        `
}
`;
const StyledOfferIconContainer = wcl_styled_.styled.div`
  display: flex;
  align-items: center;
`;
const StyledOfferIconIndicator = wcl_styled_.styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-top-width: 6px;
  border-top-style: solid;
  border-right: 6px solid transparent;
`;
const StyledOfferIcon = wcl_styled_.styled.div`
  margin-left: 5px;
  position: relative;
  width: 16px;
  height: 16px;
  border: 1px solid #dfdfdf;
`;
const StyledNoArrivalIcon = wcl_styled_.styled.div`
  margin-left: 5px;
  position: relative;
  width: 16px;
  height: 16px;
  background-color: #f4f4f4;
`;
const StyledOfferNoArrivalContainer = wcl_styled_.styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
const StyledInputContainer = wcl_styled_.styled.div`
  width: 100%;
  display: block;
  position: relative;
`;
const StyledLegalContainer = wcl_styled_.styled.div`
  flex-grow: 1;
  flex-basis: 0;
  align-items: flex-end;
  display: flex;
  padding-left: 24px;
`;

;// CONCATENATED MODULE: ./src/components/Calendar/DateRangePickerWithInput/DateRangePickerWithInput.tsx








const DEFAULT_NAVBAR_HEIGHT = 52;
const LARGE_NAVBAR_HEIGHT = 72;
const X_LARGE_NAVBAR_HEIGHT = 76;
const getNavbarHeight = (viewport)=>{
    switch(viewport){
        case 'xl':
            return X_LARGE_NAVBAR_HEIGHT;
        case 'lg':
            return LARGE_NAVBAR_HEIGHT;
        default:
            return DEFAULT_NAVBAR_HEIGHT;
    }
};
const defaultApplyButton = ({ onClick , hidden  })=>{
    return hidden ? null : /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Button, {
        shape: "pill",
        onClick: onClick,
        label: "Apply"
    });
};
defaultApplyButton.displayName = 'DefaultApplyButton';
const getAlertDescriptionAction = ({ messageActionText , onMessageActionClick  })=>{
    if ((messageActionText === null || messageActionText === void 0 ? void 0 : messageActionText.type) === 'phoneNumber') return {
        text: messageActionText.text,
        href: `tel:${messageActionText.text}`
    };
    if ((messageActionText === null || messageActionText === void 0 ? void 0 : messageActionText.type) === 'text' && onMessageActionClick) return {
        text: messageActionText.text,
        onClick: onMessageActionClick
    };
    return undefined;
};
/**
 * [Documentation](https://mgmdigitalventures.atlassian.net/wiki/spaces/KB/pages/116031727/Date+Range+Input+with+Picker)
 */ const DateRangePickerWithInput = ({ className , disabled , focusedInput , toggleDatePicker =true , messageVariant , hasOfferDays , headerText , message , messageActionText , onApply , autoApply , showApplyButton , onChange , onFocusChange , onMessageActionClick , orientation , value , isDayDisabled , getDayPrice , isOfferDay , isErrorDay , hasError , showLegalText =true , legalText , applyButton , errorStartDate , errorEndDate , applyButtonOffset , preventInputFocus , loading , potentialErrorDay , isPotentialDepartureDay , isPotentialArrivalDay , initialVisibleMonth , onNavPrevClick , onNavNextClick , parentWidth , initialMonth , variant , 'data-parent-testid': dataParentTestId  })=>{
    const _container = (0,external_react_.useRef)(null);
    /**
   * There is a known issue within react-dates where when the value is updated,
   * it will not auto-advance the calendar to the selected dates if those dates are not
   * in the currently viewed month. The *only* solution is to force a re-render. :(
   * https://github.com/airbnb/react-dates/issues/48
   *
   * We do this by passing a key to the DateRangePicker.
   * By adding the currently selected month to the key of the days, on month change
   * it will force a re-render. This may cause a flicker of the calendar, but it is unavoidable.
   *
   * key = changes when external forces changes the value, or an onChange event occurs. This forces a re-render.
   */ const { 0: key , 1: setKey  } = (0,external_react_.useState)('calendarKey');
    (0,external_react_.useEffect)(()=>{
        let updatedKey = key;
        // We check for both the start and end date to prevent the calendar
        // from jumping on a person when they are trying to select a date range.
        if (value.startDate && value.endDate && !showApplyButton) {
            const targetValue = value.startDate;
            updatedKey = `calendarKey-${(0,wcl_utils_.parseMonthAsIntUnsafe)(targetValue)}`;
        } else if (!value.startDate && initialVisibleMonth && !initialMonth) {
            updatedKey = `calendarKey-${initialVisibleMonth().month()}`;
        }
        if (updatedKey !== key) {
            setKey(updatedKey);
        }
    }, [
        value.startDate,
        value.endDate,
        showApplyButton,
        key,
        initialVisibleMonth,
        initialMonth
    ]);
    /**
   * This is used to capture changes in the input for the purpose of
   * updating the calendar if the new (pending) start date is not in the same
   * month as the current viewable month. When the above effect fires on the actual onChange,
   * it will not trigger a second refresh.
   * !! NOTE !!: when nextStartDate is set, it forces initialViewableMonth to be undefined, as they collide.
   */ const { 0: nextStartDate , 1: setNextStartDate  } = (0,external_react_.useState)();
    (0,external_react_.useEffect)(()=>{
        if (nextStartDate) {
            const newKey = `calendarKey-${(0,wcl_utils_.parseMonthAsIntUnsafe)(nextStartDate)}`;
            if (newKey !== key) {
                setKey(newKey);
            }
        }
    }, [
        key,
        nextStartDate
    ]);
    (0,external_react_.useEffect)(()=>{
        // We are setting the endDate input's tabIndex to -1 as it does not need to be tabable.
        // Currently any tabbing through the input fields will keep the start date focused
        // and once a valid value is entered (either through typing of selecting from the picker)
        // the endDate input will automatically be focused. This is all a work around for react-dates
        // which does not give us direct access to the endDate input to control this directly.
        const containerNode = _container.current;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const endDate = containerNode.getElementsByTagName('input')[1];
        // eslint-disable-next-line no-unused-expressions
        endDate && endDate.setAttribute('tabIndex', '-1');
    });
    const handleInputChange = (0,external_react_.useCallback)((val)=>{
        if (val.startDate) {
            setNextStartDate(val.startDate);
        }
        return onChange(val);
    }, [
        onChange
    ]);
    const handlePickerChange = (0,external_react_.useCallback)((val)=>{
        return onChange(val);
    }, [
        onChange
    ]);
    const isVertical = orientation === 'vertical';
    const isHorizontal = orientation === 'horizontal';
    const { maxSm , maxMd , maxLg  } = (0,external_react_.useContext)(wcl_core_.ViewportContext);
    const zIndex = (0,external_react_.useContext)(wcl_core_.ZIndexContext);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledContainer, {
        className: className,
        isVertical: isVertical,
        variant: variant,
        ref: _container,
        "data-testid": DateRangePickerWithInput.selector('DateRangePickerWithInput'),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledHeader, {
                        className: "dates_label",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledHeadingContainer, {
                                children: [
                                    variant === 'BookingWidget' ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        style: {
                                            color: '#606060',
                                            fontSize: '15px'
                                        },
                                        children: headerText
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Heading20, {
                                        className: "header_text",
                                        children: headerText
                                    }),
                                    headerText && loading && /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.LoadingSpinner, {
                                        "data-testid": DateRangePickerWithInput.selector('loading-spinner'),
                                        size: 22
                                    })
                                ]
                            }),
                            hasOfferDays && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledOfferIconContainer, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Text10, {
                                        color: "#606060",
                                        children: "Offer:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(StyledOfferIcon, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(StyledOfferIconIndicator, {
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledOfferNoArrivalContainer, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Text10, {
                                                color: "#606060",
                                                children: "Non-Arrival:"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(StyledNoArrivalIcon, {
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.InactiveLayer, {
                        inactive: loading,
                        role: "listbox",
                        css: undefined,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_utils_.ConditionalWrapper, {
                            wrapIf: false,
                            wrapper: wcl_core_.FixedSticky,
                            wrapperProps: {
                                offset: {
                                    top: maxMd ? getNavbarHeight() : maxLg ? getNavbarHeight('lg') : getNavbarHeight('xl'),
                                    left: 16,
                                    right: 16
                                },
                                inTransformContainer: maxMd,
                                zIndex: zIndex - 1
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(StyledInputContainer, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(DateRangeInput, {
                                            value: value,
                                            size: maxSm ? 'small' : 'large',
                                            onChange: handleInputChange,
                                            preventInputFocus: preventInputFocus,
                                            onFocusChange: onFocusChange,
                                            focusedInput: focusedInput,
                                            isFocused: !!focusedInput,
                                            isOutsideRange: isDayDisabled,
                                            errorStartDate: errorStartDate,
                                            errorEndDate: errorEndDate,
                                            variant: variant,
                                            showUnderline: variant !== 'BookingWidget'
                                        })
                                    }),
                                    isHorizontal && showLegalText && /*#__PURE__*/ jsx_runtime_.jsx(StyledLegalContainer, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Text12, {
                                            color: "#606060",
                                            children: legalText
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            toggleDatePicker && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(wcl_core_.InactiveLayer, {
                inactive: loading,
                role: "listbox",
                css: undefined,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(StyledPickerContainer, {
                        isVertical: isVertical,
                        className: "picker_container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(DateRangePicker, {
                            "data-parent-testid": dataParentTestId,
                            calendarKey: key,
                            disabled: disabled,
                            value: value,
                            onChange: handlePickerChange,
                            focusedInput: focusedInput || 'startDate',
                            onFocusChange: onFocusChange,
                            numberOfMonths: orientation === 'default' ? 1 : 2,
                            orientation: isVertical ? 'vertical' : 'horizontal',
                            isDayDisabled: isDayDisabled,
                            getDayPrice: getDayPrice,
                            isOfferDay: isOfferDay,
                            hasError: hasError,
                            isErrorDay: isErrorDay,
                            potentialErrorDay: potentialErrorDay,
                            isPotentialDepartureDay: isPotentialDepartureDay,
                            isPotentialArrivalDay: isPotentialArrivalDay,
                            initialVisibleMonth: !nextStartDate ? initialVisibleMonth : undefined,
                            onNavPrevClick: onNavPrevClick,
                            onNavNextClick: onNavNextClick,
                            parentWidth: parentWidth
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(wcl_utils_.ConditionalWrapper, {
                        wrapIf: isVertical,
                        wrapper: wcl_core_.FixedSticky,
                        wrapperProps: {
                            forceFixed: isVertical,
                            offset: {
                                bottom: 0,
                                left: 0,
                                right: 0
                            },
                            inTransformContainer: maxMd,
                            zIndex: zIndex - 1
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledFooter, {
                            alertShowing: Boolean(message),
                            legalShowing: showLegalText && !isHorizontal,
                            vertical: isVertical,
                            applyButtonShowing: showApplyButton && !isHorizontal,
                            children: [
                                message && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    style: {
                                        padding: '0 0 12px 0'
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Alert, {
                                        type: messageVariant,
                                        description: message,
                                        descriptionAction: getAlertDescriptionAction({
                                            messageActionText,
                                            onMessageActionClick
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledFooterSection, {
                                    legalShowing: showLegalText,
                                    applyButtonShowing: showApplyButton,
                                    vertical: isVertical,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(StyledOffset, {
                                            offset: showApplyButton && applyButtonOffset ? applyButtonOffset : 0,
                                            isVertical: isVertical,
                                            children: !isHorizontal && showLegalText && /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Text12, {
                                                color: "#606060",
                                                children: legalText
                                            })
                                        }),
                                        (applyButton || defaultApplyButton)({
                                            value,
                                            hidden: !showApplyButton || !!autoApply,
                                            onClick () {
                                                if (onApply) {
                                                    onApply(value);
                                                }
                                            }
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    }));
};
DateRangePickerWithInput.displayName = 'DateRangePickerWithInput';
DateRangePickerWithInput.defaultProps = {
    orientation: 'default',
    messageVariant: 'info',
    hasOfferDays: false,
    headerText: '',
    legalText: '* Plus nightly resort fee & applicable taxes',
    showApplyButton: false,
    isDayDisabled: ()=>false
    ,
    preventInputFocus: false
};
DateRangePickerWithInput.selector = (name = '')=>`DateRangePickerWithInput${name ? `:${name}` : ''}`
;

;// CONCATENATED MODULE: ./src/components/Calendar/DateRangePickerWithInput/index.ts



;// CONCATENATED MODULE: ./src/components/Calendar/index.ts







;// CONCATENATED MODULE: ./src/components/BookingWidget/BookingWidget.styles.tsx


const StyledBookingWidgetBackground = wcl_styled_.styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
`;
const StyledBookingWidgetBgContainer = wcl_styled_.styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: ${(props)=>props.color ? props.color : ''
};
`;
const StyledImageContainer = wcl_styled_.styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: white;
`;
const StyledBookingWidgetContent = wcl_styled_.styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: nowrap;
  ${wcl_styled_.media.minMd`
  justify-content: center;
  `};
`;
const StyledBookingWidgetPromoLink = wcl_styled_.styled.a`
  z-index: 1;
  // position: absolute;
  min-height: 90px;
  width: 90%;
  ${(props)=>props.title === 'booknow' && `max-width : 450px`
};
  ${wcl_styled_.media.maxMd`width: 600px;`};
  ${wcl_styled_.media.maxSm`width: auto;`};
  ${wcl_styled_.media.minLg`bottom: 100%;`};
  ${wcl_styled_.media.maxMd`bottom: 56%;`};
  ${wcl_styled_.media.maxSm`bottom: 101%;`};
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: ${wcl_styled_.$white};
  padding: 24px 24px 0;
  display: flex;
  flex-direction: column;
  order: 0;
  justify-content: center;
  align-self: center;
  transition: all 0.2s;
  text-decoration: none;
  &:hover,
  &:focus {
    bottom: calc(50% + (#{$widget-height-lg} / 2) + 2px);
    background: #f7f7f7;
  }
  h3 {
    height: 24px;
    ${wcl_styled_.media.maxSm`height: auto`};
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: #002b49;
    margin-bottom: 2px;
  }
  p {
    color: ${wcl_styled_.$black};
    font-size: 12px;
    font-weight: 500;
    line-height: 1.67;
    margin: 0 0 15px;
    text-align: center;
  }
`;
const StyledBookingWidgetPromoDiv = wcl_styled_.styled.div`
  z-index: 1;
  position: absolute;
  bottom: 80%;
  min-width: 385px;
  min-height: 90px;
  max-width: 1060px;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: ${wcl_styled_.$white};
  padding: 24px 24px 0;
  display: flex;
  flex-direction: column;
  order: 0;
  justify-content: center;
  align-self: center;
  transition: all 0.2s;
  text-decoration: none;
`;
const StyledBookingWidgetContainer = wcl_styled_.styled.div`
  z-index: 2;
  height: 116px;
  border-radius: 10px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);
  background-color: ${wcl_styled_.$white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: nowrap;
  transition: border-bottom-left-radius 0.2s;

  &.dd-expanded {
    button#region {
      border-bottom-left-radius: ${({ variant  })=>variant === 'regions' ? 0 : '10px'
};
    }
  }
`;
const StyledSubmitButton = (0,wcl_styled_.styled)(wcl_core_.Button)`
  height: 100%;
`;
const StyledDatesPicker = wcl_styled_.styled.div`
  ${wcl_styled_.media.maxMd`max-width: 204px`};
  position: relative;
  border-right: 1px solid #979797;
  .BookingWidget__dates {
    overflow: inherit;
    padding: 10.5px 24px;
    div[role='listbox']:nth-child(3) {
      position: absolute !important;
      top: 101%;
      left: -28%;
      background-color: ${wcl_styled_.$white};
      width: 700px;
      border-radius: 0 0 10px 10px;
      box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.12), 0 0 4px 0 rgba(0, 0, 0, 0.24);
      z-index: 1;
      .picker_container {
        padding-right: 50px;
        padding-left: 20px;
      }
    }
  }
`;
const StyledWarning = wcl_styled_.styled.p`
  position: absolute;
  bottom: -13px;
  left: 25px;
  font-size: 14px;
  color: red;
`;
const BookingWidget_styles_StyledWrapper = wcl_styled_.styled.div`
  ${wcl_styled_.preventTextSelect};
  display: block;
  position: relative;
  width: 100%;
  background-color: ${(p)=>p.theme.colors.white
};
  cursor: pointer;
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  opacity: ${({ selectState  })=>selectState === 'not-selected' ? 0.7 : 1
};
  transform: ${({ loaded  })=>loaded ? 'translateY(0px)' : 'translateY(32px)'
};
`;
const StyledImageWrapper = wcl_styled_.styled.div`
  height: 100%;
  width: 100%;
  transition: transform 0.3s ease-out;
  ${BookingWidget_styles_StyledWrapper}:hover & {
    transform: scale(1.1);
  }
  img {
    border-radius: 14px;
  }
`;
const StyledOpacityLayer = wcl_styled_.styled.div`
  ${(0,wcl_styled_.stretch)()}
  background-color: black;
  opacity: 0.35;
  transition: opacity 0.3s ease-out;
  border-radius: 14px;
`;
const StyledContent = wcl_styled_.styled.div`
  ${(0,wcl_styled_.stretch)()};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  text-align: center;
`;

;// CONCATENATED MODULE: ./src/components/BookingWidget/BookingWidgetMobile/BookingWidgetMobile.styles.tsx


const BookingWidgetMobile_styles_StyledContainer = wcl_styled_.styled.div`
  width: 90vw;
  border: 1px solid ${wcl_styled_.$lightestGrey};
  margin: 24px 0 0;
  padding: 15.8px 0 0;
  border-radius: 8px;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.12), 0 0 4px 0 rgba(0, 0, 0, 0.24);
  background-color: ${wcl_styled_.$white};
`;
const StyledButton = (0,wcl_styled_.styled)(wcl_core_.Button)`
  width: 100%;
  border-radius: 0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0 6px 8px 0 rgba(26, 21, 255, 0.21);
  background-image: linear-gradient(to top, #4957f4, #6b49f4);
`;
const StyledSelect = (0,wcl_styled_.styled)(wcl_core_.Select)`
  div {
    div {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
`;
const StyledSelectWrapper = wcl_styled_.styled.div`
  padding: 10px;
  .BookingWidgetMobile__dates {
    padding: 0 10px;
    margin-top: -10px;
  }
`;
const StyledGuestWrapper = wcl_styled_.styled.div`
  display: flex;
  align-items: center;
  padding: 10px 10px 5px 20px;
  margin-bottom: 1rem;

  .StyledCounter {
    margin-top: 0;
  }

  label {
    font-size: 16px;
    font-weight: 600;
    flex: 1;
  }
`;

;// CONCATENATED MODULE: ./src/components/BookingWidget/BookingWidgetMobile/BookingWidgetMobile.tsx





const BookingWidgetMobile = (props)=>{
    const { 0: focused , 1: updateFocus  } = (0,external_react_.useState)();
    const { 0: guests , 1: setGuests  } = (0,external_react_.useState)(2);
    const getResorts = ()=>{
        const region = props.regions.find(({ value  })=>value === 'las-vegas'
        );
        return region === null || region === void 0 ? void 0 : region.resorts;
    };
    const initialResorts = getResorts();
    const { 0: region1 , 1: setRegion  } = (0,external_react_.useState)('Las Vegas');
    const { 0: resort , 1: setResort  } = (0,external_react_.useState)('All Resorts');
    const { 0: resorts , 1: setResorts  } = (0,external_react_.useState)(initialResorts);
    const updateResorts = (newRegion)=>{
        const region = props.regions.find(({ value  })=>value === newRegion
        );
        if (region) {
            setResorts(region.resorts);
            setResort(region.resorts.length > 1 ? 'All Resorts' : region.resorts[0].label);
            props.onResortChange && props.onResortChange(region.resorts.length > 1 ? 'All Resorts' : region.resorts[0].value);
        }
    };
    const handleSectionRegionsList = (val)=>{
        setRegion(val);
        updateResorts(val);
        props.updateDates({
        });
        setGuests(2);
        props.onRegionChange && props.onRegionChange(val);
    };
    const handleSectionResortsList = (val)=>{
        if (resorts) {
            const data = resorts.find(({ value  })=>value === val
            );
            data && setResort(data['label']);
            props.updateDates({
            });
            setGuests(2);
            props.onResortChange && props.onResortChange(val);
        }
    };
    const handleSectionGuestsList = (val)=>{
        setGuests(val);
        props.onGuestChange && props.onGuestChange(val.toString());
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("form", {
        id: "BookingWidget",
        onSubmit: props.onSubmit,
        method: "GET",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BookingWidgetMobile_styles_StyledContainer, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(StyledSelectWrapper, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(StyledSelect, {
                        id: 'Region',
                        label: 'Region',
                        value: region1,
                        disabled: false,
                        multiple: false,
                        valid: false,
                        required: false,
                        deselectOnSelectAgain: false,
                        maxHeight: 500,
                        options: props.regions,
                        className: 'BookingWidgetMobileSelect',
                        onChange: handleSectionRegionsList
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(StyledSelectWrapper, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(StyledSelect, {
                        id: 'Resorts',
                        label: 'Resorts',
                        value: resort,
                        disabled: false,
                        multiple: false,
                        valid: false,
                        required: false,
                        deselectOnSelectAgain: false,
                        maxHeight: 500,
                        options: resorts,
                        className: 'BookingWidgetMobileSelect',
                        onChange: handleSectionResortsList
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(StyledSelectWrapper, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(DateRangePickerWithInput, {
                        className: "BookingWidgetMobile__dates",
                        value: props.dateRange,
                        onChange: props.updateDates,
                        focusedInput: focused,
                        toggleDatePicker: !!focused,
                        onFocusChange: (updatedFocus)=>{
                            updateFocus(updatedFocus);
                        },
                        isDayDisabled: props.isDisabled,
                        showLegalText: false,
                        orientation: "vertical",
                        variant: "BookingWidget"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledGuestWrapper, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            children: "Guests"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Counter, {
                            variant: "small",
                            mincount: 1,
                            maxcount: 10,
                            reset: false,
                            value: guests,
                            onChange: handleSectionGuestsList
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(StyledButton, {
                    size: "large",
                    type: "submit",
                    className: "BookingWidget__button__sm",
                    id: "Submit",
                    title: "Find Rooms",
                    label: "Find Rooms"
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./src/components/BookingWidget/BookingWidgetMobile/index.ts


;// CONCATENATED MODULE: ./src/components/BookingWidget/BookingWidget.tsx










const BookingWidget = ({ promo =false , promoText =' ' , promoSubText =' ' , promoLink ='' , promoLinkNewWindow =false , showRegions =false , showResorts =false , showGuests =false , regions =[] , guests =[] , inMarketRegion ='las-vegas' , inMarketResort ='all' , inMarketRegionLabel ='Las Vegas' , inMarketResortLabel ='All Resorts' , bookingLinkNewWindow =false , regionLabel ='Regions' , resortsLabel ='Resorts' , guestsLabel ='Guests' , buttonLabel ='View Rooms' , bookingDestinationUrl ='' , active , programId , delayFormSubmitMs =0 , onRegionChange , onResortChange , onGuestChange , onDateChange , onViewRoomClick  })=>{
    const viewport = (0,external_react_.useContext)(wcl_core_.ViewportContext);
    const getResorts = ()=>{
        const region = regions.find(({ value  })=>value === inMarketRegion
        );
        return region === null || region === void 0 ? void 0 : region.resorts;
    };
    const initialResorts = getResorts();
    const { 0: name , 1: setName  } = (0,external_react_.useState)(active || '');
    const { 0: region1 , 1: setRegion  } = (0,external_react_.useState)(inMarketRegion);
    const { 0: selectedRegionLabel , 1: setSelectedRegionLabel  } = (0,external_react_.useState)(inMarketRegionLabel);
    const { 0: toggleRegion , 1: setToggleRegion  } = (0,external_react_.useState)(active === 'regions' || false);
    const { 0: toggleResort , 1: setToggleResort  } = (0,external_react_.useState)(active === 'resorts' || false);
    const { 0: toggleGuest , 1: setToggleGuest  } = (0,external_react_.useState)(active === 'guests' || false);
    const { 0: resort , 1: setResort  } = (0,external_react_.useState)(inMarketResort);
    const { 0: selectedResortLabel , 1: setSelectedResortLabel  } = (0,external_react_.useState)(inMarketResortLabel);
    const { 0: Guests , 1: setGuests  } = (0,external_react_.useState)('2');
    const { 0: Resorts , 1: setResorts  } = (0,external_react_.useState)(initialResorts);
    const { 0: activeDropdown , 1: setActiveDropdown  } = (0,external_react_.useState)(active || false);
    const ctaStyle = 0;
    const { 0: value1 , 1: updateValue  } = (0,external_react_.useState)({
    });
    const { 0: focused , 1: updateFocus  } = (0,external_react_.useState)();
    const { 0: toggleDatePicker , 1: setToggleDatePicker  } = (0,external_react_.useState)(false);
    const { 0: maxNightsWarning , 1: setMaxNightsWarning  } = (0,external_react_.useState)('');
    const updateResorts = (newRegion)=>{
        const region = regions.find(({ value  })=>value === newRegion
        );
        if (region) {
            const newResortVal = region.resorts.length > 1 ? inMarketResort : region.resorts[0].value;
            setResorts(region.resorts);
            setResort(newResortVal);
            onResortChange && onResortChange(newResortVal);
            setSelectedResortLabel(region.resorts.length > 1 ? inMarketResortLabel : region.resorts[0].label);
        }
    };
    const appendQueryParam = (url, key, value)=>{
        if (value) {
            let newUrl = url;
            key = encodeURI(key);
            value = encodeURI(value);
            newUrl += newUrl.split('?')[1] ? '&' : '?';
            newUrl += `${key}=${value}`;
            return newUrl;
        }
        return url;
    };
    const updateUrlWithFormValues = ()=>{
        let destUrl = bookingDestinationUrl;
        if (showRegions) {
            destUrl = appendQueryParam(destUrl, 'region', region1);
            if (resort !== inMarketResort) {
                destUrl = appendQueryParam(destUrl, 'resort', resort);
            }
        }
        destUrl = appendQueryParam(destUrl, 'checkIn', value1.startDate || '');
        destUrl = appendQueryParam(destUrl, 'checkOut', value1.endDate || '');
        destUrl = appendQueryParam(destUrl, 'guests', Guests);
        if (programId) {
            destUrl = appendQueryParam(destUrl, 'program', programId);
        }
        return destUrl;
    };
    const handleButtonClick = ()=>{
        const destUrl = updateUrlWithFormValues();
        if (bookingLinkNewWindow) {
            window.open(destUrl);
        } else {
            window.location.href = destUrl;
        }
    };
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        onViewRoomClick && onViewRoomClick();
        setTimeout(()=>{
            handleButtonClick();
        }, delayFormSubmitMs);
    };
    const renderPromo = ()=>{
        let promoRender = '';
        if (promo && promoLink.length > 0) {
            promoRender = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledBookingWidgetPromoLink, {
                href: `${promoLink}`,
                "aria-label": promoText,
                target: promoLinkNewWindow ? '_blank' : '_self',
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "BookingWidget__promo--text",
                        children: promoText
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "BookingWidget__promo--subText",
                        children: promoSubText
                    })
                ]
            });
        } else {
            promoRender = promo ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledBookingWidgetPromoDiv, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "BookingWidget__promo--text",
                        children: promoText
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "BookingWidget__promo--subText",
                        children: promoSubText
                    })
                ]
            }) : false;
        }
        return promoRender;
    };
    let inMarketClass = 'in-market';
    if (showRegions) {
        inMarketClass = '';
    }
    const renderDropdownList = (type, varit, arrayData, handleEvent, captionTitle)=>{
        return(/*#__PURE__*/ jsx_runtime_.jsx(StyledDropdownMenu, {
            variant: type,
            title: captionTitle,
            className: "BookingWidget__dropdown",
            children: /*#__PURE__*/ jsx_runtime_.jsx(StyledDropdownList, {
                variant: type,
                className: type,
                children: arrayData && arrayData.length > 0 && arrayData.map(({ label , image , value  }, index)=>/*#__PURE__*/ jsx_runtime_.jsx(StyledDropdownListItem, {
                        variant: type,
                        active: label === varit,
                        className: `${type}-${index}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(StyledDropdownListItemInner, {
                            variant: type,
                            active: label === varit,
                            onClick: ()=>handleEvent(value, label)
                            ,
                            children: type === 'regions' ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    image && /*#__PURE__*/ jsx_runtime_.jsx(StyledImageWrapper, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Image, {
                                            src: image,
                                            alt: label
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(StyledOpacityLayer, {
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(StyledContent, {
                                        className: `region-${label.replace(' ', '').toLowerCase()} region-label`,
                                        children: label
                                    })
                                ]
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                children: label
                            })
                        })
                    }, index)
                )
            })
        }));
    };
    const outSideRemoveDropdown = ()=>{
        if (toggleRegion) setToggleRegion(false);
        if (toggleResort) setToggleResort(false);
        if (toggleGuest) setToggleGuest(false);
        if (toggleDatePicker) setToggleDatePicker(false);
        if (activeDropdown) setActiveDropdown(false);
    };
    const handleInputToggle = (type)=>{
        if (type === 'regions') {
            setToggleRegion(true);
            setToggleResort(false);
            setToggleGuest(false);
        }
        if (type === 'resorts') {
            setToggleRegion(false);
            setToggleResort(true);
            setToggleGuest(false);
        }
        if (type === 'guests') {
            setToggleRegion(false);
            setToggleResort(false);
            setToggleGuest(true);
        }
        setName(type);
        setActiveDropdown(true);
        updateFocus(undefined);
    };
    const handleSectionRegionsList = (val, label)=>{
        setToggleRegion(false);
        setRegion(val);
        setSelectedRegionLabel(label);
        updateValue({
        });
        setMaxNightsWarning('');
        setGuests('2');
        updateResorts(val);
        onRegionChange && onRegionChange(val);
    };
    const handleSectionResortsList = (val, label)=>{
        setToggleResort(false);
        setResort(val);
        setSelectedResortLabel(label);
        updateValue({
        });
        setMaxNightsWarning('');
        setGuests('2');
        onResortChange && onResortChange(val);
    };
    const handleSectionGuestsList = (val)=>{
        setToggleRegion(false);
        setToggleGuest(false);
        setGuests(val);
        onGuestChange && onGuestChange(val);
    };
    const isDisabled1 = (day)=>{
        const regionSelected = regions.find(({ value  })=>value === region1
        );
        const resortSelected = regionSelected === null || regionSelected === void 0 ? void 0 : regionSelected.resorts.find(({ label  })=>label === resort
        );
        let maximumLengthOfStay1;
        if (resortSelected && resortSelected.label.indexOf('All') === -1) {
            maximumLengthOfStay1 = resortSelected.maximumLengthOfStay;
        } else {
            const filterResorts = regionSelected && regionSelected.resorts.filter(({ maximumLengthOfStay  })=>maximumLengthOfStay !== undefined
            );
            const maxNightsArray = filterResorts && filterResorts.map(({ maximumLengthOfStay  })=>maximumLengthOfStay
            );
            maximumLengthOfStay1 = maxNightsArray && maxNightsArray.length > 0 ? Math.max.apply(null, maxNightsArray) : undefined;
        }
        let reOpenDate1;
        if (resortSelected && resortSelected.label.indexOf('All') === -1) {
            reOpenDate1 = resortSelected.reOpenDate && new Date(resortSelected.reOpenDate);
        } else {
            const filterResorts = regionSelected && regionSelected.resorts.filter(({ reOpenDate  })=>reOpenDate !== undefined
            );
            const dates = filterResorts && filterResorts.map(({ reOpenDate  })=>reOpenDate && new Date(reOpenDate)
            );
            reOpenDate1 = dates && dates.length > 0 ? new Date(Math.min.apply(null, dates)) : undefined;
        }
        const isFadInPast = external_moment_default()().diff(reOpenDate1, 'hours') > 0;
        const inPast = reOpenDate1 && !isFadInPast ? external_moment_default()(reOpenDate1).diff(day, 'hours') > 0 : external_moment_default()().diff(day, 'hours') > 0;
        const isPostMaxNights = value1 && value1.startDate && !value1.endDate && maximumLengthOfStay1 && external_moment_default()(day).diff(value1.startDate, 'day') > maximumLengthOfStay1 ? true : false;
        const isToday = external_moment_default()().isSame(day, 'day');
        const isDisabled = reOpenDate1 && !isFadInPast ? inPast : inPast && !isToday;
        return isDisabled || isPostMaxNights;
    };
    const updateDates = (values)=>{
        updateValue(values);
        onDateChange && onDateChange(values);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.DivWithDimensions, {
        "data-testid": BookingWidget.selector(),
        children: ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: ()=>outSideRemoveDropdown()
                ,
                role: "presentation",
                children: /*#__PURE__*/ jsx_runtime_.jsx(StyledBookingWidgetBackground, {
                    role: "presentation",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledBookingWidgetContent, {
                        id: "BookingWidgetContent",
                        style: {
                            bottom: `${ctaStyle}px`
                        },
                        children: [
                            renderPromo(),
                            !viewport.minMd && /*#__PURE__*/ jsx_runtime_.jsx(BookingWidgetMobile, {
                                regions: regions,
                                dateRange: value1,
                                focused: focused,
                                isDisabled: isDisabled1,
                                updateDates: updateDates,
                                onRegionChange: onRegionChange,
                                onResortChange: onResortChange,
                                onGuestChange: onGuestChange,
                                onSubmit: handleFormSubmit
                            }),
                            viewport.minMd && /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                id: "BookingWidget",
                                onSubmit: handleFormSubmit,
                                method: "GET",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledBookingWidgetContainer, {
                                    variant: name,
                                    className: external_classnames_default()('BookingWidget__container', {
                                        'dd-expanded': activeDropdown
                                    }),
                                    children: [
                                        showRegions && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(BookingWidgetSelect, {
                                                id: "region",
                                                label: regionLabel,
                                                options: regions,
                                                value: region1,
                                                selectedLabel: selectedRegionLabel,
                                                placeholder: regionLabel,
                                                className: "BookingWidget__regions",
                                                variant: "regions",
                                                onSelectClick: ()=>handleInputToggle('regions')
                                                ,
                                                children: toggleRegion && name === 'regions' && renderDropdownList('regions', region1, regions, handleSectionRegionsList, 'regions-list')
                                            })
                                        }),
                                        showResorts && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(BookingWidgetSelect, {
                                                id: "resort",
                                                label: resortsLabel,
                                                options: Resorts,
                                                value: resort,
                                                selectedLabel: selectedResortLabel,
                                                placeholder: resortsLabel,
                                                className: "BookingWidget__resorts",
                                                variant: "resorts",
                                                onSelectClick: ()=>handleInputToggle('resorts')
                                                ,
                                                children: toggleResort && name === 'resorts' && renderDropdownList('resorts', resort, Resorts, handleSectionResortsList, 'resorts-list')
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledDatesPicker, {
                                                    onClick: ()=>setToggleDatePicker(true)
                                                    ,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(DateRangePickerWithInput, {
                                                            className: "BookingWidget__dates",
                                                            headerText: "Dates",
                                                            value: value1,
                                                            onChange: updateDates,
                                                            focusedInput: focused,
                                                            toggleDatePicker: toggleDatePicker,
                                                            onFocusChange: (updatedFocus)=>{
                                                                updateFocus(updatedFocus);
                                                                if (!updatedFocus) setToggleDatePicker(false);
                                                            },
                                                            isDayDisabled: isDisabled1,
                                                            showLegalText: false,
                                                            orientation: "horizontal",
                                                            variant: "BookingWidget"
                                                        }),
                                                        maxNightsWarning !== '' && /*#__PURE__*/ jsx_runtime_.jsx(StyledWarning, {
                                                            children: maxNightsWarning
                                                        })
                                                    ]
                                                }),
                                                showGuests && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(BookingWidgetSelect, {
                                                        id: "guests",
                                                        label: guestsLabel,
                                                        options: guests,
                                                        value: Guests,
                                                        selectedLabel: Guests,
                                                        placeholder: guestsLabel,
                                                        className: external_classnames_default()(`${inMarketClass} BookingWidget__guests`),
                                                        variant: "guests",
                                                        onSelectClick: ()=>handleInputToggle('guests')
                                                        ,
                                                        children: toggleGuest && name === 'guests' && renderDropdownList('guests', Guests, guests, handleSectionGuestsList, 'guests-list')
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(StyledSubmitButton, {
                                                    type: "submit",
                                                    id: "Submit",
                                                    title: buttonLabel,
                                                    shape: "half-pill",
                                                    size: "large",
                                                    children: buttonLabel
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
    }));
};
BookingWidget.selector = ()=>'BookingWidget'
;

;// CONCATENATED MODULE: ./src/components/BookingWidget/index.ts





// EXTERNAL MODULE: ./src/components/helpers.ts + 1 modules
var helpers = __webpack_require__(8134);
;// CONCATENATED MODULE: ./src/components/Trips/BookingWidget/BookingWidgetWrapper.style.tsx

const BookingWidgetWrapper_style_StyledBookingWidgetContainer = wcl_styled_.styled.div`
  margin-top: ${wcl_styled_.$spacingLarge};
  display: flex;
  width: 100%;

  ${wcl_styled_.media.minMd`
    & .BookingWidget__container > div {
      height: 100%;
    }
    
    & .BookingWidget__container .label {
      font-size: 12px;
    }
    
    & .BookingWidget__container .dates_label {
      font-weight: 500;
      padding: 12px 0 0 0;

      div {
        font-size: 12px !important;
      }
    }

    & .BookingWidget__container .input {
      font-size: 20px;
    }

    & .BookingWidget__container button {
      min-width: auto;
    }
    
    & .BookingWidget__container .BookingWidget__dates {
      width: auto;
    }
  `};
`;

;// CONCATENATED MODULE: ./src/components/Trips/BookingWidget/BookingWidgetWrapper.tsx







// import { PerpetualOffer } from '../../PerpetualOffer/PerpetualOffer';


// Migration
const PerpetualOffer = (0,external_next_shared_logic_.federatedComponent)('accounts', './PerpetualOffer');
const mapResortPropValues = (bookingProperties)=>{
    return bookingProperties.map(({ id , name , propertyDetails: { maximumLengthOfStay , reopenDate , maximumNumberOfGuests  }  })=>({
            key: name,
            label: name,
            value: id,
            maximumLengthOfStay: Number.parseInt(maximumLengthOfStay),
            reOpenDate: reopenDate,
            maximumNumberOfGuests
        })
    );
};
const mapRegionPropValues = (bookingRegions)=>{
    return bookingRegions.map(({ id , name , properties  })=>({
            label: name,
            key: id,
            value: slugify(name),
            image: null,
            maximumNumberOfGuests: properties.reduce((a, b)=>{
                return Math.max(a, Number.parseInt(b.propertyDetails.maximumNumberOfGuests, 10));
            }, 0).toString(),
            resorts: mapResortPropValues(properties)
        })
    );
};
const mapGuestPropValues = (numberOfGuests)=>{
    const guestsData = [
        ...new Array(Number.parseInt(numberOfGuests, 10) || 2)
    ].map((_, index)=>{
        const currentValue = (index + 1).toString();
        return {
            key: currentValue,
            label: currentValue,
            value: currentValue
        };
    });
    return guestsData;
};
const BookingWidgetWrapper = ({ regions , renderPerpetualOffer =false , analyticsEventPrefix , analyticsEventName , // Migration
useErrorMessage , ConfigContext  })=>{
    const trackClickEvent = (0,useClickEvent/* useClickEvent */.v)(analyticsEventPrefix || 'trips');
    const { 0: regionVal , 1: setRegionVal  } = (0,external_react_.useState)('las-vegas');
    const { 0: resortVal , 1: setResortVal  } = (0,external_react_.useState)('all');
    const { 0: numGuests , 1: setNumGuests  } = (0,external_react_.useState)('2');
    const { 0: dateRange , 1: setDateRange  } = (0,external_react_.useState)({
    });
    const getRegion = (0,external_react_.useCallback)((val)=>regions.find((r)=>slugify(r.name) == val
        )
    , [
        regions
    ]);
    const getResort = ({ region , val  })=>{
        return region === null || region === void 0 ? void 0 : region.properties.find((p)=>p.id === val
        );
    };
    const getMaxGuests = (0,external_react_.useCallback)((selectedRegion)=>{
        const region = getRegion(selectedRegion);
        const numberOfGuests = region === null || region === void 0 ? void 0 : region.properties.reduce((a, b)=>{
            return Math.max(a, Number.parseInt(b.propertyDetails.maximumNumberOfGuests, 10));
        }, 0);
        return numberOfGuests;
    }, [
        getRegion
    ]);
    const { 0: guestsData , 1: setGuestsData  } = (0,external_react_.useState)(mapGuestPropValues(getMaxGuests('las-vegas')));
    const handleClick = ()=>{
        const region = getRegion(regionVal);
        const resort = getResort({
            region,
            val: resortVal
        });
        trackClickEvent({
            eventName: analyticsEventName || 'trips - view rooms - click',
            title: 'view rooms',
            eventAttributes: {
                regionName: region === null || region === void 0 ? void 0 : region.name,
                resortName: resortVal === 'all' ? 'all' : resort === null || resort === void 0 ? void 0 : resort.name,
                numberOfNights: (dateRange === null || dateRange === void 0 ? void 0 : dateRange.startDate) ? (0,helpers/* passZero */.bS)((0,helpers/* calculateLengthOfDateRange */.kT)(dateRange)) : 'no dates selected',
                numberOfGuests: numGuests,
                numberOfDaysBeforeArrival: (dateRange === null || dateRange === void 0 ? void 0 : dateRange.startDate) ? (0,helpers/* passZero */.bS)((0,helpers/* getNumberOfDaysBeforeDate */.eh)(dateRange === null || dateRange === void 0 ? void 0 : dateRange.startDate)) : 'no dates selected'
            }
        });
    };
    const handleRegionSelection = (0,external_react_.useCallback)((selectedRegion)=>{
        const numberOfGuests = getMaxGuests(selectedRegion);
        setRegionVal(selectedRegion);
        setGuestsData(mapGuestPropValues(numberOfGuests));
    }, [
        getMaxGuests
    ]);
    const handleResortSelection = (0,external_react_.useCallback)((selectedResort)=>{
        const region = getRegion(regionVal);
        const resort = getResort({
            region,
            val: selectedResort
        });
        const maximumNumberOfGuests = resort === null || resort === void 0 ? void 0 : resort.propertyDetails.maximumNumberOfGuests;
        setResortVal(selectedResort);
        setGuestsData(mapGuestPropValues(maximumNumberOfGuests || "0"));
    }, [
        getRegion,
        regionVal
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Heading28, {
                children: "Book a Room"
            }),
            renderPerpetualOffer && /*#__PURE__*/ jsx_runtime_.jsx(PerpetualOffer, {
                useErrorMessage: useErrorMessage,
                ConfigContext: ConfigContext
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BookingWidgetWrapper_style_StyledBookingWidgetContainer, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(BookingWidget, {
                    showRegions: true,
                    regionLabel: "Region",
                    regions: mapRegionPropValues(regions),
                    showResorts: true,
                    resortsLabel: "Resort",
                    showGuests: true,
                    guests: guestsData,
                    delayFormSubmitMs: 400,
                    onViewRoomClick: handleClick,
                    onRegionChange: handleRegionSelection,
                    onResortChange: handleResortSelection,
                    onGuestChange: setNumGuests,
                    onDateChange: setDateRange,
                    bookingDestinationUrl: process.env.ROOM_BOOKING_URL
                })
            })
        ]
    }));
};
/* harmony default export */ const BookingWidget_BookingWidgetWrapper = (BookingWidgetWrapper);


/***/ })

};
;