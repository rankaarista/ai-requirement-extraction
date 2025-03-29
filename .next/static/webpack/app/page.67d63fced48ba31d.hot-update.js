"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/textarea */ \"(app-pages-browser)/./src/components/ui/textarea.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [requirement, setRequirement] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [credits, setCredits] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(20);\n    const handleExtract = async ()=>{\n        if (credits <= 0) {\n            alert(\"You've reached the limit. Please purchase more credits to continue.\");\n            return;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.Card, {\n            className: \"w-full max-w-2xl p-4 shadow-md\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardContent, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-bold mb-4\",\n                        children: \"AI Requirement Extractor\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rankaarista/Downloads/ai-requirement-extraction/src/app/page.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-600\",\n                        children: \"Enter your software requirements below:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rankaarista/Downloads/ai-requirement-extraction/src/app/page.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_textarea__WEBPACK_IMPORTED_MODULE_2__.Textarea, {\n                        className: \"mt-3\",\n                        placeholder: \"Paste your requirement here...\",\n                        rows: 4,\n                        value: requirement,\n                        onChange: (e)=>setRequirement(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/rankaarista/Downloads/ai-requirement-extraction/src/app/page.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                onClick: handleExtract,\n                                disabled: !requirement || credits <= 0,\n                                children: \"Extract Requirements\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rankaarista/Downloads/ai-requirement-extraction/src/app/page.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-700\",\n                                children: [\n                                    \"Credits: \",\n                                    credits\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/rankaarista/Downloads/ai-requirement-extraction/src/app/page.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rankaarista/Downloads/ai-requirement-extraction/src/app/page.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this),\n                    credits <= 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-500 text-sm mt-2\",\n                        children: \"You've reached the limit. Please purchase more credits to continue.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rankaarista/Downloads/ai-requirement-extraction/src/app/page.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rankaarista/Downloads/ai-requirement-extraction/src/app/page.tsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/rankaarista/Downloads/ai-requirement-extraction/src/app/page.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/rankaarista/Downloads/ai-requirement-extraction/src/app/page.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"HHPthXOpDhKcoUidhGkoZltoxcs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRWlDO0FBQ21CO0FBQ0o7QUFDUztBQUUxQyxTQUFTSzs7SUFDdEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNVSxnQkFBZ0I7UUFDcEIsSUFBSUYsV0FBVyxHQUFHO1lBQ2hCRyxNQUFNO1lBQ047UUFDRjtJQUdGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUtDLFdBQVU7a0JBQ2QsNEVBQUNWLHFEQUFJQTtZQUFDVSxXQUFVO3NCQUNkLDRFQUFDVCw0REFBV0E7O2tDQUNWLDhEQUFDVTt3QkFBR0QsV0FBVTtrQ0FBMEI7Ozs7OztrQ0FDeEMsOERBQUNFO3dCQUFFRixXQUFVO2tDQUFnQjs7Ozs7O2tDQUU3Qiw4REFBQ1osNkRBQVFBO3dCQUNQWSxXQUFVO3dCQUNWRyxhQUFZO3dCQUNaQyxNQUFNO3dCQUNOQyxPQUFPWjt3QkFDUGEsVUFBVSxDQUFDQyxJQUFNYixlQUFlYSxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OztrQ0FHaEQsOERBQUNJO3dCQUFJVCxXQUFVOzswQ0FDYiw4REFBQ1gseURBQU1BO2dDQUFDcUIsU0FBU2I7Z0NBQWVjLFVBQVUsQ0FBQ2xCLGVBQWVFLFdBQVc7MENBQUc7Ozs7OzswQ0FHeEUsOERBQUNpQjtnQ0FBS1osV0FBVTs7b0NBQWdCO29DQUFVTDs7Ozs7Ozs7Ozs7OztvQkFHM0NBLFdBQVcsbUJBQ1YsOERBQUNPO3dCQUFFRixXQUFVO2tDQUE0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFyRDtHQTVDd0JSO0tBQUFBIiwic291cmNlcyI6WyIvVXNlcnMvcmFua2FhcmlzdGEvRG93bmxvYWRzL2FpLXJlcXVpcmVtZW50LWV4dHJhY3Rpb24vc3JjL2FwcC9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRleHRhcmVhIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90ZXh0YXJlYVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtyZXF1aXJlbWVudCwgc2V0UmVxdWlyZW1lbnRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjcmVkaXRzLCBzZXRDcmVkaXRzXSA9IHVzZVN0YXRlKDIwKTtcblxuICBjb25zdCBoYW5kbGVFeHRyYWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChjcmVkaXRzIDw9IDApIHtcbiAgICAgIGFsZXJ0KFwiWW91J3ZlIHJlYWNoZWQgdGhlIGxpbWl0LiBQbGVhc2UgcHVyY2hhc2UgbW9yZSBjcmVkaXRzIHRvIGNvbnRpbnVlLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBwLTYgYmctZ3JheS0xMDBcIj5cbiAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy0yeGwgcC00IHNoYWRvdy1tZFwiPlxuICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi00XCI+QUkgUmVxdWlyZW1lbnQgRXh0cmFjdG9yPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+RW50ZXIgeW91ciBzb2Z0d2FyZSByZXF1aXJlbWVudHMgYmVsb3c6PC9wPlxuICAgICAgICAgIFxuICAgICAgICAgIDxUZXh0YXJlYVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtM1wiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3RlIHlvdXIgcmVxdWlyZW1lbnQgaGVyZS4uLlwiXG4gICAgICAgICAgICByb3dzPXs0fVxuICAgICAgICAgICAgdmFsdWU9e3JlcXVpcmVtZW50fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZXF1aXJlbWVudChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG10LTRcIj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlRXh0cmFjdH0gZGlzYWJsZWQ9eyFyZXF1aXJlbWVudCB8fCBjcmVkaXRzIDw9IDB9PlxuICAgICAgICAgICAgICBFeHRyYWN0IFJlcXVpcmVtZW50c1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwXCI+Q3JlZGl0czoge2NyZWRpdHN9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAge2NyZWRpdHMgPD0gMCAmJiAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC1zbSBtdC0yXCI+XG4gICAgICAgICAgICAgIFlvdSd2ZSByZWFjaGVkIHRoZSBsaW1pdC4gUGxlYXNlIHB1cmNoYXNlIG1vcmUgY3JlZGl0cyB0byBjb250aW51ZS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICApfVxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPC9DYXJkPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlRleHRhcmVhIiwiQnV0dG9uIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiSG9tZSIsInJlcXVpcmVtZW50Iiwic2V0UmVxdWlyZW1lbnQiLCJjcmVkaXRzIiwic2V0Q3JlZGl0cyIsImhhbmRsZUV4dHJhY3QiLCJhbGVydCIsIm1haW4iLCJjbGFzc05hbWUiLCJoMSIsInAiLCJwbGFjZWhvbGRlciIsInJvd3MiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImRpdiIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInNwYW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});