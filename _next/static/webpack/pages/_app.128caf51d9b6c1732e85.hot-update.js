/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header/listPath.js":
/*!***************************************!*\
  !*** ./components/Header/listPath.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _constants_pagesPath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/constants/pagesPath */ \"./constants/pagesPath.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/postareservas/Desktop/julianweb/components/Header/listPath.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(function (theme) {\n  return {\n    containerText: {\n      flexGrow: 1,\n      display: 'flex',\n      justifyContent: 'flex-start',\n      alignItems: 'center'\n    },\n    text: {\n      color: theme.palette.primary.text,\n      fontSize: 11,\n      fontWeight: 600,\n      paddingLeft: 20,\n      '&:hover': {\n        color: '#FFFFFF'\n      }\n    }\n  };\n});\n\nvar ListPath = function ListPath() {\n  _s();\n\n  var classes = useStyles();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: classes.containerText,\n    children: _constants_pagesPath__WEBPACK_IMPORTED_MODULE_3__.pagesPath.map(function (item) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: item.path,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          className: classes.text,\n          children: item.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 28\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 24\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 11\n  }, _this);\n};\n\n_s(ListPath, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = ListPath;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListPath);\n\nvar _c;\n\n$RefreshReg$(_c, \"ListPath\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvbGlzdFBhdGguanM/YWIxNyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjb250YWluZXJUZXh0IiwiZmxleEdyb3ciLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwidGV4dCIsImNvbG9yIiwicGFsZXR0ZSIsInByaW1hcnkiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJwYWRkaW5nTGVmdCIsIkxpc3RQYXRoIiwiY2xhc3NlcyIsInBhZ2VzUGF0aCIsIml0ZW0iLCJwYXRoIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNyQ0MsaUJBQWEsRUFBRTtBQUNYQyxjQUFRLEVBQUUsQ0FEQztBQUVYQyxhQUFPLEVBQUUsTUFGRTtBQUdYQyxvQkFBYyxFQUFFLFlBSEw7QUFJWEMsZ0JBQVUsRUFBRTtBQUpELEtBRHNCO0FBT25DQyxRQUFJLEVBQUU7QUFDRkMsV0FBSyxFQUFFUCxLQUFLLENBQUNRLE9BQU4sQ0FBY0MsT0FBZCxDQUFzQkgsSUFEM0I7QUFFRkksY0FBUSxFQUFFLEVBRlI7QUFHRkMsZ0JBQVUsRUFBRSxHQUhWO0FBSUZDLGlCQUFXLEVBQUUsRUFKWDtBQUtGLGlCQUFXO0FBQ1RMLGFBQUssRUFBRTtBQURFO0FBTFQ7QUFQNkIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7O0FBa0JBLElBQU1NLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDbkIsTUFBTUMsT0FBTyxHQUFHaEIsU0FBUyxFQUF6QjtBQUNBLHNCQUFNO0FBQUssYUFBUyxFQUFFZ0IsT0FBTyxDQUFDYixhQUF4QjtBQUFBLGNBQ09jLCtEQUFBLENBQWMsVUFBQ0MsSUFBRCxFQUFVO0FBQ3pCLDBCQUFPLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFFQSxJQUFJLENBQUNDLElBQWpCO0FBQUEsK0JBQ0k7QUFBRyxtQkFBUyxFQUFFSCxPQUFPLENBQUNSLElBQXRCO0FBQUEsb0JBQTZCVSxJQUFJLENBQUNFO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFHQyxLQUpBO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFOO0FBT0gsQ0FURDs7R0FBTUwsUTtVQUNjZixTOzs7S0FEZGUsUTtBQVdOLCtEQUFlQSxRQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkZXIvbGlzdFBhdGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgcGFnZXNQYXRoIH0gZnJvbSAnQC9jb25zdGFudHMvcGFnZXNQYXRoJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgY29udGFpbmVyVGV4dDoge1xuICAgICAgICBmbGV4R3JvdzogMSwgIFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gICAgICB9LFxuICAgICAgdGV4dDoge1xuICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkudGV4dCxcbiAgICAgICAgICBmb250U2l6ZTogMTEsXG4gICAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgIHBhZGRpbmdMZWZ0OiAyMCxcbiAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnI0ZGRkZGRidcbiAgICAgICAgICB9XG4gICAgICB9LFxufSkpXG5cbmNvbnN0IExpc3RQYXRoID0gKCkgPT4ge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgICByZXR1cm48ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJUZXh0fT5cbiAgICAgICAgICAgICAgICB7cGFnZXNQYXRoLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8TGluayBocmVmPXtpdGVtLnBhdGh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PntpdGVtLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdFBhdGg7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header/listPath.js\n");

/***/ })

});