/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header/socialList.js":
/*!*****************************************!*\
  !*** ./components/Header/socialList.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants_social__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constants/social */ \"./constants/social.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/postareservas/Desktop/julianweb/components/Header/socialList.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)(function (theme) {\n  return {\n    containerIcon: {\n      display: 'flex'\n    },\n    icon: {\n      backgroundColor: theme.palette.primary.icons,\n      borderRadius: '50%',\n      padding: 5,\n      margin: 5,\n      display: 'flex',\n      justifyContent: 'center',\n      alignItems: 'center',\n      '&:hover': {\n        backgroundColor: '#FFFFFF'\n      }\n    }\n  };\n});\n\nvar SocialList = function SocialList() {\n  _s();\n\n  var classes = useStyles();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: classes.containerIcon,\n    children: _constants_social__WEBPACK_IMPORTED_MODULE_2__.ListSocial.map(function (item) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        className: classes.icon,\n        href: item.path,\n        target: \"_blank\",\n        children: [\" \", item.icon]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 28\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 13\n  }, _this);\n};\n\n_s(SocialList, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = SocialList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SocialList);\n\nvar _c;\n\n$RefreshReg$(_c, \"SocialList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvc29jaWFsTGlzdC5qcz80ZWM5Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNvbnRhaW5lckljb24iLCJkaXNwbGF5IiwiaWNvbiIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJwcmltYXJ5IiwiaWNvbnMiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwibWFyZ2luIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiU29jaWFsTGlzdCIsImNsYXNzZXMiLCJMaXN0U29jaWFsIiwiaXRlbSIsInBhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3JDQyxpQkFBYSxFQUFFO0FBQ1hDLGFBQU8sRUFBRTtBQURFLEtBRHNCO0FBSXJDQyxRQUFJLEVBQUU7QUFDRkMscUJBQWUsRUFBRUosS0FBSyxDQUFDSyxPQUFOLENBQWNDLE9BQWQsQ0FBc0JDLEtBRHJDO0FBRUZDLGtCQUFZLEVBQUUsS0FGWjtBQUdGQyxhQUFPLEVBQUUsQ0FIUDtBQUlGQyxZQUFNLEVBQUUsQ0FKTjtBQUtGUixhQUFPLEVBQUUsTUFMUDtBQU1GUyxvQkFBYyxFQUFFLFFBTmQ7QUFPRkMsZ0JBQVUsRUFBRSxRQVBWO0FBUUYsaUJBQVc7QUFDUFIsdUJBQWUsRUFBRTtBQURWO0FBUlQ7QUFKK0IsR0FBWjtBQUFBLENBQUQsQ0FBNUI7O0FBa0JBLElBQU1TLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFDckIsTUFBTUMsT0FBTyxHQUFHaEIsU0FBUyxFQUF6QjtBQUNBLHNCQUFRO0FBQUssYUFBUyxFQUFFZ0IsT0FBTyxDQUFDYixhQUF4QjtBQUFBLGNBQ0tjLDZEQUFBLENBQWUsVUFBQ0MsSUFBRCxFQUFRO0FBQ3BCLDBCQUFPO0FBQUcsaUJBQVMsRUFBRUYsT0FBTyxDQUFDWCxJQUF0QjtBQUE2QixZQUFJLEVBQUVhLElBQUksQ0FBQ0MsSUFBeEM7QUFBOEMsY0FBTSxFQUFDLFFBQXJEO0FBQUEsd0JBQWdFRCxJQUFJLENBQUNiLElBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0gsS0FGQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUjtBQUtILENBUEQ7O0dBQU1VLFU7VUFDY2YsUzs7O0tBRGRlLFU7QUFTTiwrREFBZUEsVUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSGVhZGVyL3NvY2lhbExpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGlzdFNvY2lhbCB9IGZyb20gJ0AvY29uc3RhbnRzL3NvY2lhbCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgY29udGFpbmVySWNvbjoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICB9LFxuICAgIGljb246IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuaWNvbnMsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICAgIHBhZGRpbmc6IDUsXG4gICAgICAgIG1hcmdpbjogNSxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkZGRkYnXG4gICAgICAgIH1cbiAgICB9XG59KSlcblxuY29uc3QgU29jaWFsTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gICAgcmV0dXJuICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJJY29ufT5cbiAgICAgICAgICAgICAgICB7TGlzdFNvY2lhbC5tYXAoKGl0ZW0pPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8YSBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gIGhyZWY9e2l0ZW0ucGF0aH0gdGFyZ2V0PSdfYmxhbmsnPiB7aXRlbS5pY29ufTwvYT5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxufVxuXG5leHBvcnQgZGVmYXVsdCBTb2NpYWxMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header/socialList.js\n");

/***/ })

});