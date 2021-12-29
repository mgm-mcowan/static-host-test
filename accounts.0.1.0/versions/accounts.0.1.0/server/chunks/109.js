"use strict";
exports.id = 109;
exports.ids = [109];
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

/***/ 3109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "WinLossStatement": () => (/* binding */ WinLossStatement),
  "default": () => (/* binding */ WinLossStatement_WinLossStatement)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mgmresorts/wcl-core"
var wcl_core_ = __webpack_require__(1771);
// EXTERNAL MODULE: external "react-to-print"
var external_react_to_print_ = __webpack_require__(53);
// EXTERNAL MODULE: ./src/common/types/GenericErrorMessage.ts
var GenericErrorMessage = __webpack_require__(8991);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(825);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);
;// CONCATENATED MODULE: ./src/common/api/useGetWinlossStatistics.tsx


const GET_WINLOSS_STATISTICS = (external_graphql_tag_default())`
  query getWinLossStatistics($filter: TaxInfoFilter!) {
    me {
      addresses {
        street1
        street2
        city
        state
        country
        postalCode
      }
      mgmId
      memberships {
        ... on MlifeMembership {
          taxInformation(filter: $filter) {
            totalWin
            totalJackPot
            totalSlotWin
            totalTableWin
            totalCoinIn
            totalCoinOut
            monthlyInfoTaxes {
              month
              jackPot
              tableWin
              totalWin
              slotWin
              coinIn
              coinOut
            }
            siteTotals {
              siteName
              jackPot
              tableWin
              totalWin
              slotWin
              coinIn
              coinOut
              monthlyInfoTaxes {
                month
                jackPot
                tableWin
                totalWin
                slotWin
                coinIn
                coinOut
              }
            }
          }
        }
      }
    }
  }
`;
const useGetWinlossStatisticsLazy = (options)=>{
    return (0,client_.useLazyQuery)(GET_WINLOSS_STATISTICS, {
        fetchPolicy: 'cache-first',
        ssr: false,
        ...options
    });
};

// EXTERNAL MODULE: external "@mgmresorts/wcl-styled"
var wcl_styled_ = __webpack_require__(3294);
;// CONCATENATED MODULE: ./src/components/WinLossStatement/Statistics/Statistics.style.tsx


const StatisticsContainer = wcl_styled_.styled.div`
  @media all {
    .page-break {
      display: none;
    }
  }

  @media print {
    html,
    body {
      height: initial !important;
      overflow: initial !important;
      -webkit-print-color-adjust: exact;
    }

    .page-break {
      margin-top: 1rem;
      display: block;
      page-break-before: auto;
    }
  }
`;
const StyledHeaderText = wcl_styled_.styled.h4`
  font-size: ${wcl_styled_.$heading5};
  line-height: 1.25;
  color: ${wcl_styled_.$black};
  font-weight: 500;

  ${wcl_styled_.media.minLg`
    font-size: ${wcl_styled_.$heading4};
  `};
`;
const StyledLine = wcl_styled_.styled.div`
  height: 1px;
  background-color: ${wcl_styled_.$lightestGrey};
  margin: ${wcl_styled_.$spacingLarge} auto;
`;
const StyledSelect = (0,wcl_styled_.styled)(wcl_core_.Select)`
  width: 50%;

  &:first-child {
    margin-right: ${wcl_styled_.$spacingXSmall};

    ${wcl_styled_.media.minLg`
      margin-right: ${wcl_styled_.$spacingMedium};
    `};
  }
`;
const StyledLoaderWrapper = wcl_styled_.styled.div`
  margin: auto;
  text-align: center;
  padding: 40px;
`;
const StyledStatisticsTableHeader = wcl_styled_.styled.div`
  display: flex;
  justify-content: space-between;

  ${wcl_styled_.media.md`
    margin-bottom: ${wcl_styled_.$spacingLarge};
  `};
`;
const StyledLogo = (0,wcl_styled_.styled)(wcl_core_.MGMGRIResortIcon)`
  height: 36px;
  color: #a7782b;
  width: 100%;
  margin-bottom: ${wcl_styled_.$spacingMedium};
`;
const StyledPageHeader = (0,wcl_styled_.styled)(wcl_core_.Heading28)`
  color: black;
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  margin-bottom: ${wcl_styled_.$spacingXtraLarge};
  margin-top: ${wcl_styled_.$spacingMedium};
`;

// EXTERNAL MODULE: external "@mgmresorts/wcl-utils"
var wcl_utils_ = __webpack_require__(4753);
// EXTERNAL MODULE: ./src/utils/formatter.ts
var formatter = __webpack_require__(6038);
;// CONCATENATED MODULE: ./src/components/WinLossStatement/Statistics/StatisticsMobileView/StatisticsMobileView.style.tsx


const StyledAccordionHeader = (0,wcl_styled_.styled)(wcl_core_.Text16)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledGridContainer = (0,wcl_styled_.styled)(wcl_core_.GridContainer)`
  margin-left: -${wcl_styled_.$spacingMedium};
  margin-right: -${wcl_styled_.$spacingMedium};

  .grid-row:last-child .accordion-header {
    color: ${wcl_styled_.$indigo};
  }

  ${wcl_styled_.css`
    > * {
      padding: 0;
    }

    .grid-column {
      padding: ${wcl_styled_.$spacingMedium} ${wcl_styled_.$spacingLarge};
    }

    .grid-data {
      padding: 0;
      border-bottom: 1px solid ${(p)=>p.theme.colors.lightGrey
};
    }
  `}
`;
const StyledGridRow = (0,wcl_styled_.styled)(wcl_core_.GridRow)`
  padding: ${wcl_styled_.$spacingXSmall} ${wcl_styled_.$spacingMedium};
  margin: 0;

  ${wcl_styled_.css`
    &:nth-child(even) {
      background: ${(p)=>p.theme.colors.white
};
    }

    &:nth-child(odd) {
      background: #f3f4ff;
    }

    &:last-child {
      padding-bottom: ${wcl_styled_.$spacingMedium};
    }
  `}
`;
const StyledAccordion = (0,wcl_styled_.styled)(wcl_core_.Accordion)`
  background: ${(p)=>p.theme.colors.white
};
`;
const StyledDropdownArrowIcon = (0,wcl_styled_.styled)(wcl_core_.DropdownArrowIcon)`
  transform: scale(1.5) ${(p)=>p.isExpanded ? 'rotate(180deg)' : ''
};
`;

;// CONCATENATED MODULE: ./src/components/WinLossStatement/Statistics/StatisticsMobileView/StatisticsMobileView.tsx







const StatisticsMobileView = ({ statisticsData , statisticsTotalData: { totalWin , totalJackPot: jackPot , totalSlotWin: slotWin , totalTableWin: tableWin , totalCoinIn: coinIn , totalCoinOut: coinOut ,  }  })=>{
    const { 0: expanded , 1: setExpanded  } = (0,external_react_.useState)([
        true
    ]);
    const updatedData = [
        ...statisticsData,
        {
            siteName: 'Total Estimated Win/Loss',
            jackPot,
            tableWin,
            totalWin,
            slotWin,
            coinIn,
            coinOut
        }, 
    ];
    const dataLength = updatedData.length;
    const toggleAccordion = (index)=>{
        const expandedData = [
            ...expanded
        ];
        expandedData[index] = !expandedData[index];
        setExpanded(expandedData);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(StyledGridContainer, {
        children: updatedData.map((eachSitedata, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(wcl_core_.GridRow, {
                className: "grid-row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridColumn, {
                        cols: 12,
                        className: "grid-column",
                        children: dataLength !== index + 1 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledAccordionHeader, {
                            className: "accordion-header",
                            onClick: ()=>toggleAccordion(index)
                            ,
                            children: [
                                eachSitedata.siteName,
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx(StyledDropdownArrowIcon, {
                                    isExpanded: expanded[index]
                                })
                            ]
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(StyledAccordionHeader, {
                            className: "accordion-header",
                            children: eachSitedata.siteName
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridColumn, {
                        cols: 12,
                        className: "grid-data",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_utils_.Transition, {
                            timeout: 0,
                            in: dataLength === index + 1 || expanded[index],
                            appear: true,
                            children: (transitionState)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledAccordion, {
                                    auto: true,
                                    open: expanded[index],
                                    alwaysExpanded: false,
                                    hideOnClose: true,
                                    transitionState: transitionState,
                                    noPadding: true,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledGridRow, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridColumn, {
                                                    cols: 10,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Text12, {
                                                        children: "Coin-Out"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridColumn, {
                                                    cols: 2,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Text12, {
                                                        children: formatter/* currencyFormatter.format */.oB.format(eachSitedata.coinOut)
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledGridRow, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridColumn, {
                                                    cols: 10,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Text12, {
                                                        children: "Less: Coin-In"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridColumn, {
                                                    cols: 2,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Text12, {
                                                        children: formatter/* currencyFormatter.format */.oB.format(eachSitedata.coinIn)
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledGridRow, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridColumn, {
                                                    cols: 10,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Text12, {
                                                        children: "Esitmated Slot Win/Loss"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridColumn, {
                                                    cols: 2,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Text12, {
                                                        children: formatter/* currencyFormatter.format */.oB.format(eachSitedata.slotWin)
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledGridRow, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridColumn, {
                                                    cols: 10,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Text12, {
                                                        children: "Estimated Table Win/Loss"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridColumn, {
                                                    cols: 2,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Text12, {
                                                        children: formatter/* currencyFormatter.format */.oB.format(eachSitedata.tableWin)
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledGridRow, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridColumn, {
                                                    cols: 10,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Text12, {
                                                        children: "Plus: Jackpots"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridColumn, {
                                                    cols: 2,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Text12, {
                                                        children: formatter/* currencyFormatter.format */.oB.format(eachSitedata.jackPot)
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledGridRow, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridColumn, {
                                                    cols: 10,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Text12, {
                                                        children: "Total Estimated Win/Loss"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.GridColumn, {
                                                    cols: 2,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Text12, {
                                                        children: formatter/* currencyFormatter.format */.oB.format(eachSitedata.totalWin)
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                        })
                    })
                ]
            }, `row-${index}`)
        )
    }));
};
StatisticsMobileView.displayName = 'StatisticsMobileView';
StatisticsMobileView.propTypes = {
    statisticsData: (external_prop_types_default()).array.isRequired,
    statisticsTotalData: external_prop_types_default().shape({
        totalWin: (external_prop_types_default()).number.isRequired,
        totalJackPot: (external_prop_types_default()).number.isRequired,
        totalSlotWin: (external_prop_types_default()).number.isRequired,
        totalTableWin: (external_prop_types_default()).number.isRequired,
        totalCoinIn: (external_prop_types_default()).number.isRequired,
        totalCoinOut: (external_prop_types_default()).number.isRequired
    }).isRequired
};

;// CONCATENATED MODULE: ./src/components/WinLossStatement/Statistics/StatisticsPeriodSelection/StatisticsPeriodSelection.style.tsx


const StatisticsPeriodSelection_style_StyledSelect = (0,wcl_styled_.styled)(wcl_core_.Select)`
  width: 50%;

  &:first-child {
    margin-right: ${wcl_styled_.$spacingXSmall};

    ${wcl_styled_.media.minLg`
			margin-right: ${wcl_styled_.$spacingMedium};
		`};
  }
`;
const StyledSelectContainer = wcl_styled_.styled.div`
  display: flex;
  margin: 40px 0 ${wcl_styled_.$spacingXtraLarge};
`;

;// CONCATENATED MODULE: ./src/components/WinLossStatement/Statistics/StatisticsPeriodSelection/StatisticsPeriodSelection.tsx




const StatisticsPeriodSelection = ({ monthsList , yearsList , monthChangeHandler , yearChangeHandler , currentYear  })=>{
    const { 0: selectedMonth , 1: setSelectedMonth  } = (0,external_react_.useState)('All Months');
    const { 0: selectedYear , 1: setSelectedYear  } = (0,external_react_.useState)(currentYear);
    (0,external_react_.useEffect)(()=>{
        yearChangeHandler(currentYear);
    }, [
        yearChangeHandler,
        currentYear
    ]);
    const onMonthChange = (value)=>{
        setSelectedMonth(value);
        monthChangeHandler(value);
    };
    const onYearChange = (value)=>{
        setSelectedYear(value);
        yearChangeHandler(value);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledSelectContainer, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(StatisticsPeriodSelection_style_StyledSelect, {
                id: "winLossYears",
                label: "",
                value: selectedYear,
                options: yearsList,
                onChange: onYearChange
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(StatisticsPeriodSelection_style_StyledSelect, {
                id: "winlossMonths",
                label: "",
                value: selectedMonth,
                options: monthsList,
                onChange: onMonthChange
            })
        ]
    }));
};
StatisticsPeriodSelection.propTypes = {
    monthsList: (external_prop_types_default()).array.isRequired,
    yearsList: (external_prop_types_default()).array.isRequired,
    monthChangeHandler: (external_prop_types_default()).func.isRequired,
    yearChangeHandler: (external_prop_types_default()).func.isRequired,
    currentYear: (external_prop_types_default()).string.isRequired
};
StatisticsPeriodSelection.displayName = 'WinlossStatisticsPeriodSelection';

;// CONCATENATED MODULE: ./src/components/WinLossStatement/WinLossStatement.style.tsx


const StyledDisclaimer = (0,wcl_styled_.styled)(wcl_core_.Text12)`
  color: ${wcl_styled_.$darkGrey};
`;
const StyledText12 = (0,wcl_styled_.styled)(wcl_core_.Text12)`
  color: ${wcl_styled_.$darkGrey};
  margin-top: ${wcl_styled_.$spacingXtraLarge};
`;
const StyledText14 = (0,wcl_styled_.styled)(wcl_core_.Text14)`
  color: ${wcl_styled_.$black};
  font-weight: 400;

  p {
    margin: 0;
  }

  .user-name {
    margin-top: ${wcl_styled_.$spacingMedium};
  }

  .user-mlife-detail {
    margin-bottom: ${wcl_styled_.$spacingMedium};
    font-weight: 600;
  }
`;
const StyledText16 = (0,wcl_styled_.styled)(wcl_core_.Text16)`
  color: ${wcl_styled_.$black};
  font-size: 18px;
  font-weight: 400;
  margin-bottom: ${wcl_styled_.$spacingMedium};
`;
const StyledSection = wcl_styled_.styled.section`
  margin: ${wcl_styled_.$spacingMedium} 0;
`;
const StyledLink = wcl_styled_.styled.a`
  color: ${(p)=>p.theme.colors.interface
};
  text-decoration: none;
`;

;// CONCATENATED MODULE: ./src/components/WinLossStatement/Statistics/StatisticsPrintSection/StatisticsPrintSection.tsx




// import { UserContext } from '../../../../common/ui/UserContext/UserContext';


const StatisticsPrintSection = ({ fullTermsAndConditions , address , children , selectedMonth , selectedYear , // Migration
UserContext  })=>{
    const { header , content , borgataText , borgataLink , borgataLinkLabel  } = fullTermsAndConditions;
    const { name , mlife , given_name: givenName  } = (0,external_react_.useContext)(UserContext);
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "page-break",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(StyledLogo, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(StyledPageHeader, {
                        children: "Win/Loss (Tax) Information"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledText14, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    (0,wcl_utils_.formatDate)(currentDate.toDateString(), {
                                        monthFormat: 'ddddMMMMDD'
                                    }),
                                    ", ",
                                    currentYear
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: name
                            }),
                            address && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            address.street1,
                                            " ",
                                            address.street2 || ''
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            address.city,
                                            ", ",
                                            address.state,
                                            ", ",
                                            address.postalCode
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: address.country
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "user-name",
                                children: [
                                    "Dear ",
                                    givenName,
                                    ","
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "In response to your request for information, our records indicate that the following estimated gaming activity for ",
                                    selectedYear,
                                    ". For your convenience, MGM Resorts International\"s consolidated M life Rewards Win/Loss (Tax) Information Statement includes both Slots and Table Games information from all M life Rewards casinos."
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "user-mlife-detail",
                                children: [
                                    "M life Rewards Account: #",
                                    mlife
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledText16, {
                        children: [
                            "Win/Loss (Tax) Information Statement For ",
                            selectedYear,
                            " ",
                            selectedMonth
                        ]
                    })
                ]
            }),
            children,
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledText12, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: header
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(StyledSection, {
                        children: content
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            borgataText,
                            /*#__PURE__*/ jsx_runtime_.jsx(StyledLink, {
                                "data-testid": "borgataLink",
                                href: borgataLink,
                                children: borgataLinkLabel
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
StatisticsPrintSection.propTypes = {
    fullTermsAndConditions: external_prop_types_default().shape({
        header: (external_prop_types_default()).string.isRequired,
        content: (external_prop_types_default()).string.isRequired,
        borgataText: (external_prop_types_default()).string.isRequired,
        borgataLinkLabel: (external_prop_types_default()).string.isRequired,
        borgataLink: (external_prop_types_default()).string.isRequired
    }).isRequired,
    address: external_prop_types_default().shape({
        street1: (external_prop_types_default()).string.isRequired,
        street2: (external_prop_types_default()).string,
        state: (external_prop_types_default()).string.isRequired,
        city: (external_prop_types_default()).string.isRequired,
        postalCode: (external_prop_types_default()).string.isRequired,
        country: (external_prop_types_default()).string.isRequired
    }).isRequired,
    children: (external_prop_types_default()).element.isRequired,
    selectedMonth: (external_prop_types_default()).string.isRequired,
    selectedYear: (external_prop_types_default()).string.isRequired
};
StatisticsPrintSection.displayName = 'WinlossStatisticsPrintSection';

;// CONCATENATED MODULE: ./src/components/WinLossStatement/Statistics/StatisticsTable/StatisticsTable.style.tsx

const StyledTable = wcl_styled_.styled.table`
  width: 100%;
  border-collapse: collapse;

  td,
  th {
    text-align: right;
    width: 100px;
    color: ${wcl_styled_.$black};
  }

  th {
    font-size: 14px;
    font-weight: 500;
    padding-bottom: ${wcl_styled_.$spacingSmall};
    line-height: 18px;

    ${wcl_styled_.media.md`
      padding: 0 ${wcl_styled_.$spacingXSmallSmall} ${wcl_styled_.$spacingSmall};
    `};
  }

  tbody tr td {
    font-size: ${wcl_styled_.$paragraph};
    padding-bottom: ${wcl_styled_.$spacingSmall};
  }

  td {
    font-weight: 400;
    padding: ${wcl_styled_.$spacingSmall} ${wcl_styled_.$spacingSmall} 0 0;

    &:first-child {
      font-weight: 500;
      text-align: left;
      padding-right: ${wcl_styled_.$spacingXtraLarge};
      padding-left: ${wcl_styled_.$spacingXSmall};
    }

    &:last-child {
      font-weight: 600;
    }
  }

  tbody tr {
    &:nth-child(odd) {
      background-color: #f3f4ff;
    }

    td:nth-child(4) {
      border-right: 1px solid #d6dcff;
      padding-right: ${wcl_styled_.$spacingMedium};
    }
  }

  tfoot {
    border-top: 1px solid ${wcl_styled_.$lightestGrey};

    tr {
      td {
        font-size: ${wcl_styled_.$body};
        line-height: 16px;
        padding-top: ${wcl_styled_.$spacingLarge};

        &:first-child {
          color: ${wcl_styled_.$indigo};
        }
      }
    }
  }
`;

;// CONCATENATED MODULE: ./src/components/WinLossStatement/Statistics/StatisticsTable/StatisticsTable.tsx





const StatisticsTable = ({ statisticsData , statisticsTotalData: { totalWin , totalJackPot , totalSlotWin , totalTableWin , totalCoinIn , totalCoinOut  }  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledTable, {
            className: "statistics-table",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                "aria-label": "site name header"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                children: "Coin-Out"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                children: "Plus: Jackpots"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                children: "Less: Coin-In"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                children: "Estimated Slot Win/Loss"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                children: "Estimated Table Win/Loss"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                children: "Total Estimated Win/Loss"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                    children: statisticsData.map((eachSitedata, index)=>{
                        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    children: eachSitedata.siteName
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    children: formatter/* currencyFormatter.format */.oB.format(eachSitedata.coinOut)
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    children: formatter/* currencyFormatter.format */.oB.format(eachSitedata.jackPot)
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    children: formatter/* currencyFormatter.format */.oB.format(eachSitedata.coinIn)
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    children: formatter/* currencyFormatter.format */.oB.format(eachSitedata.slotWin)
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    children: formatter/* currencyFormatter.format */.oB.format(eachSitedata.tableWin)
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    children: formatter/* currencyFormatter.format */.oB.format(eachSitedata.totalWin)
                                })
                            ]
                        }, index));
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("tfoot", {
                    children: !!statisticsData.length && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                children: "Total Estimated Win/Loss"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                children: formatter/* currencyFormatter.format */.oB.format(totalCoinOut)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                children: formatter/* currencyFormatter.format */.oB.format(totalJackPot)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                children: formatter/* currencyFormatter.format */.oB.format(totalCoinIn)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                children: formatter/* currencyFormatter.format */.oB.format(totalSlotWin)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                children: formatter/* currencyFormatter.format */.oB.format(totalTableWin)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                children: formatter/* currencyFormatter.format */.oB.format(totalWin)
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
StatisticsTable.propTypes = {
    statisticsData: (external_prop_types_default()).array.isRequired,
    statisticsTotalData: external_prop_types_default().shape({
        totalWin: (external_prop_types_default()).number.isRequired,
        totalJackPot: (external_prop_types_default()).number.isRequired,
        totalSlotWin: (external_prop_types_default()).number.isRequired,
        totalTableWin: (external_prop_types_default()).number.isRequired,
        totalCoinIn: (external_prop_types_default()).number.isRequired,
        totalCoinOut: (external_prop_types_default()).number.isRequired
    }).isRequired
};
StatisticsTable.displayName = 'WinlossStatisticsTable';

;// CONCATENATED MODULE: ./src/components/WinLossStatement/Statistics/Statistics.tsx

/* eslint-disable import/order */ 



// import { useErrorMessage } from 'src/common/context/ErrorMessageContext';







const totalColumnData = {
    totalWin: 0,
    totalJackPot: 0,
    totalSlotWin: 0,
    totalTableWin: 0,
    totalCoinIn: 0,
    totalCoinOut: 0
};
const pageStyle = `
  @page {
    margin: 2rem;
  }
`;
const Statistics = ({ fullTermsAndConditions , useErrorMessage , UserContext  })=>{
    const viewport = (0,external_react_.useContext)(wcl_core_.ViewportContext);
    const { 0: monthsList , 1: setMonthsList  } = (0,external_react_.useState)([]);
    const { 0: yearsList , 1: setYearsList  } = (0,external_react_.useState)([]);
    const { 0: statisticsData , 1: setStatisticsData  } = (0,external_react_.useState)([]);
    const { setErrorMessageById  } = useErrorMessage();
    const { 0: address , 1: setAddress  } = (0,external_react_.useState)({
        street1: '',
        street2: '',
        state: '',
        city: '',
        postalCode: '',
        country: ''
    });
    const { 0: statisticsTotalData , 1: setStatisticsTotalData  } = (0,external_react_.useState)(totalColumnData);
    const currentYear = new Date().getFullYear();
    const [getData, { data , loading , error  }] = useGetWinlossStatisticsLazy();
    const { 0: selectedYear , 1: setSelectedYear  } = (0,external_react_.useState)(currentYear);
    const { 0: selectedMonth , 1: setSelectedMonth  } = (0,external_react_.useState)('All Months');
    const componentRef = (0,external_react_.useRef)();
    const handlePrint = (0,external_react_to_print_.useReactToPrint)({
        content: ()=>componentRef.current
        ,
        pageStyle
    });
    const { 0: taxInfo , 1: setTaxInfo  } = (0,external_react_.useState)({
        siteTotals: [],
        monthlyInfoTaxes: [],
        ...totalColumnData
    });
    const updateStatisticsData = (months = [], updatedData = [], totalData = totalColumnData)=>{
        setMonthsList(months);
        setStatisticsData(updatedData);
        setStatisticsTotalData(totalData);
    };
    (0,external_react_.useEffect)(()=>{
        const list = [
            ...new Array(9)
        ].map((_, index)=>({
                value: currentYear - index
            })
        );
        setYearsList(list);
    }, [
        currentYear
    ]);
    (0,external_react_.useEffect)(()=>{
        var ref, ref1;
        if (data === null || data === void 0 ? void 0 : (ref = data.me) === null || ref === void 0 ? void 0 : (ref1 = ref.memberships) === null || ref1 === void 0 ? void 0 : ref1.length) {
            const { memberships , addresses  } = data.me;
            const { taxInformation  } = memberships[0];
            setAddress(addresses[0]);
            if (taxInformation) {
                const siteTotalsData = taxInformation.siteTotals;
                setTaxInfo(taxInformation);
                const months = siteTotalsData[0].monthlyInfoTaxes.map((monthInfo)=>({
                        value: monthInfo.month
                    })
                );
                const { totalWin , totalJackPot , totalSlotWin , totalTableWin , totalCoinIn , totalCoinOut  } = taxInformation;
                updateStatisticsData([
                    {
                        value: 'All Months'
                    }, 
                ].concat(months), siteTotalsData, {
                    totalWin,
                    totalJackPot,
                    totalSlotWin,
                    totalTableWin,
                    totalCoinIn,
                    totalCoinOut
                });
            } else {
                updateStatisticsData();
            }
        } else {
            updateStatisticsData();
        }
    }, [
        data
    ]);
    const monthChangeHandler = (value)=>{
        const { totalWin , totalJackPot , totalSlotWin , totalTableWin , totalCoinIn , totalCoinOut  } = taxInfo;
        let { siteTotals  } = taxInfo;
        let updatedTotalsData = {
            totalWin,
            totalJackPot,
            totalSlotWin,
            totalTableWin,
            totalCoinIn,
            totalCoinOut
        };
        if (value !== 'All Months') {
            const filteredData = siteTotals.map((m)=>{
                return {
                    ...m.monthlyInfoTaxes.find((f)=>f.month === value
                    ),
                    siteName: m.siteName
                };
            });
            const { jackPot , tableWin , totalWin: win , slotWin , coinIn , coinOut ,  } = taxInfo.monthlyInfoTaxes.find((m)=>m.month === value
            );
            updatedTotalsData = {
                totalWin: win,
                totalJackPot: jackPot,
                totalSlotWin: slotWin,
                totalTableWin: tableWin,
                totalCoinIn: coinIn,
                totalCoinOut: coinOut
            };
            siteTotals = filteredData;
        }
        setSelectedMonth(value);
        setStatisticsData(siteTotals);
        setStatisticsTotalData(updatedTotalsData);
    };
    const yearChangeHandler = (0,external_react_.useCallback)((value)=>{
        setSelectedYear(value);
        getData({
            variables: {
                filter: {
                    year: value.toString()
                }
            }
        });
    }, [
        getData
    ]);
    if (error) setErrorMessageById(GenericErrorMessage/* GenericErrorMessageId.ContactMemberServices */.d.ContactMemberServices);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(StatisticsContainer, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(StatisticsPeriodSelection, {
                monthsList: monthsList,
                yearsList: yearsList,
                currentYear: currentYear.toString(),
                yearChangeHandler: yearChangeHandler,
                monthChangeHandler: monthChangeHandler
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledStatisticsTableHeader, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(StyledHeaderText, {
                        children: "Statistics"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.Button, {
                        onClick: handlePrint,
                        shape: "pill",
                        variant: "secondary",
                        children: "Print Win / Loss Info"
                    })
                ]
            }),
            viewport.minLg && /*#__PURE__*/ jsx_runtime_.jsx(StyledLine, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                ref: componentRef,
                children: /*#__PURE__*/ jsx_runtime_.jsx(StatisticsPrintSection, {
                    fullTermsAndConditions: fullTermsAndConditions,
                    address: address,
                    selectedMonth: selectedMonth,
                    selectedYear: selectedYear.toString(),
                    // Migration
                    UserContext: UserContext,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            viewport.minMd ? /*#__PURE__*/ jsx_runtime_.jsx(StatisticsTable, {
                                statisticsData: statisticsData,
                                statisticsTotalData: statisticsTotalData
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(StatisticsMobileView, {
                                statisticsData: statisticsData,
                                statisticsTotalData: statisticsTotalData
                            }),
                            loading && /*#__PURE__*/ jsx_runtime_.jsx(StyledLoaderWrapper, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(wcl_core_.LoadingSpinner, {
                                })
                            })
                        ]
                    })
                })
            })
        ]
    }));
};
Statistics.propTypes = {
    fullTermsAndConditions: external_prop_types_default().shape({
        header: (external_prop_types_default()).string.isRequired,
        content: (external_prop_types_default()).string.isRequired,
        borgataText: (external_prop_types_default()).string.isRequired,
        borgataLinkLabel: (external_prop_types_default()).string.isRequired,
        borgataLink: (external_prop_types_default()).string.isRequired
    }).isRequired
};
Statistics.displayName = 'WinlossStatistics';

;// CONCATENATED MODULE: ./src/components/WinLossStatement/WinLossStatement.tsx





const WinLossStatement = ({ winLossDisclaimers , useErrorMessage , UserContext  })=>{
    const { introductoryDisclaimer , fullTermsAndConditions  } = winLossDisclaimers;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(StyledDisclaimer, {
                children: introductoryDisclaimer
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Statistics, {
                useErrorMessage: useErrorMessage,
                UserContext: UserContext,
                fullTermsAndConditions: fullTermsAndConditions
            })
        ]
    }));
};
/* harmony default export */ const WinLossStatement_WinLossStatement = (WinLossStatement);
WinLossStatement.propTypes = {
    winLossDisclaimers: external_prop_types_default().shape({
        introductoryDisclaimer: (external_prop_types_default()).string.isRequired,
        fullTermsAndConditions: external_prop_types_default().shape({
            header: (external_prop_types_default()).string.isRequired,
            content: (external_prop_types_default()).string.isRequired,
            borgataText: (external_prop_types_default()).string.isRequired,
            borgataLinkLabel: (external_prop_types_default()).string.isRequired,
            borgataLink: (external_prop_types_default()).string.isRequired
        }).isRequired
    }).isRequired
};
WinLossStatement.displayName = 'WinLossStatement';


/***/ }),

/***/ 6038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "oB": () => (/* binding */ currencyFormatter),
/* harmony export */   "Pe": () => (/* binding */ currencyFormatterWithNoFractions),
/* harmony export */   "V2": () => (/* binding */ numberFormatter)
/* harmony export */ });
const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});
const currencyFormatterWithNoFractions = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
});
const numberFormatter = new Intl.NumberFormat('en-IN');


/***/ })

};
;