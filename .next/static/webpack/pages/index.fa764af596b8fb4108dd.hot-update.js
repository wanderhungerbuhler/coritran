webpackHotUpdate_N_E("pages/index",{

/***/ "./src/styles/pages/Home.ts":
/*!**********************************!*\
  !*** ./src/styles/pages/Home.ts ***!
  \**********************************/
/*! exports provided: Page, Footer, Container, Menu, Slider, Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Page\", function() { return Page; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Menu\", function() { return Menu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Slider\", function() { return Slider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Content\", function() { return Content; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar Page = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__Page\",\n  componentId: \"sc-1v7a83r-0\"\n})([\"width:100%;.content-consult{display:flex;justify-content:center;align-items:center;flex-direction:column;margin-top:150px;width:100%;height:330px;background:url(\\\"/images/bg-consult.svg\\\") no-repeat center center;background-size:cover;span{font-size:2rem;font-weight:bold;color:#FFF;}p{color:#FFF;}}@media (max-width:500px){.content-consult{padding:0 20px;text-align:center;}}\"]);\nvar Footer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].footer.withConfig({\n  displayName: \"Home__Footer\",\n  componentId: \"sc-1v7a83r-1\"\n})([\"width:100%;padding:0 100px;min-height:100px;background:#001F51;.btn-consult{position:relative;width:25%;margin:0 auto;background:#FFF;border-radius:5px;text-align:center;padding:20px 0px;z-index:100;top:-20px;span{font-weight:600;font-size:1rem;letter-spacing:-1px;a{text-decoration:none;color:#001F51;}}}ul{li{a{color:#fff !important;}}}.copy{display:flex;justify-content:space-between;align-items:center;border-top:1px solid #002F51;margin-top:100px;padding:20px;color:#ccc;font-size:.8em;.developer{display:flex;justify-content:center;align-items:center;span{color:#ccc;font-size:1em;}}}@media (max-width:500px){.btn-consult{width:80%;}padding:0;}\"]);\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__Container\",\n  componentId: \"sc-1v7a83r-2\"\n})([\"max-width:980px;width:100%;margin:0 auto;\"]);\nvar Menu = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__Menu\",\n  componentId: \"sc-1v7a83r-3\"\n})([\"height:70px;display:flex;justify-content:space-between;align-items:center;ul{li{list-style:none;display:inline-block;padding:0 20px;a{text-decoration:none;color:#111;}&:nth-child(4){border:1px solid #001F51;border-radius:50px;padding:5px 10px;a{color:#001F51;}}}}@media (max-width:500px){flex-direction:column;ul{display:flex;justify-content:center;align-items:center;li{padding:0 5px;}}}\"]);\nvar Slider = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__Slider\",\n  componentId: \"sc-1v7a83r-4\"\n})([\"max-width:980px;width:100%;\"]);\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__Content\",\n  componentId: \"sc-1v7a83r-5\"\n})([\"section{display:flex;justify-content:space-around;align-items:center;article{width:200px;height:200px;display:flex;flex-direction:column;justify-content:center;text-align:center;span{font-weight:bold;font-size:4rem;color:#001F51;letter-spacing:-5px;}p{font-size:1em;color:#001F51;}}}.line-separator{width:3px;height:350px;background:linear-gradient(#FFF,#001F51);border-radius:50px;display:block;margin:0px auto;margin-bottom:100px;}.content-vision{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:20px;.content-vision-description{h1{font-weight:bold;color:#001F51;b{font-size:4rem;}}&::after{content:\\\"\\\";width:70%;height:3px;background:linear-gradient(90deg,#FFF,#001F51) repeat-y center center;display:block;margin-top:20px;border-radius:50px;}span{font-weight:bold;font-size:2rem;letter-spacing:-2px;color:#001F51;}p{font-size:1rem;color:#8B8B8B;line-height:25px;margin-top:20px;}}}.content-partner{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:20px;margin-top:250px;h1{font-weight:bold;color:#001F51;&::after{content:\\\"\\\";width:40%;height:3px;background:linear-gradient(90deg,#FFF,#001F51) repeat-y center center;display:block;margin-top:10px;border-radius:50px;}}p{font-size:1rem;color:#8B8B8B;line-height:25px;margin-top:20px;}}@media(max-width:500px){section{flex-direction:column;}.content-vision{grid-template-columns:1fr;padding:0 20px;}.content-partner{grid-template-columns:1fr;padding:0 20px;}}\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9wYWdlcy9Ib21lLnRzP2JmNzciXSwibmFtZXMiOlsiUGFnZSIsInN0eWxlZCIsImRpdiIsIkZvb3RlciIsImZvb3RlciIsIkNvbnRhaW5lciIsIk1lbnUiLCJTbGlkZXIiLCJDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQSxJQUFJLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsZ1lBQVY7QUEyQkEsSUFBTUMsTUFBTSxHQUFHRix5REFBTSxDQUFDRyxNQUFWO0FBQUE7QUFBQTtBQUFBLGtwQkFBWjtBQXdEQSxJQUFNQyxTQUFTLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsaURBQWY7QUFNQSxJQUFNSSxJQUFJLEdBQUdMLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNFlBQVY7QUFxQ0EsSUFBTUssTUFBTSxHQUFHTix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG1DQUFaO0FBTUEsSUFBTU0sT0FBTyxHQUFHUCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDY1Q0FBYiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvcGFnZXMvSG9tZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgUGFnZSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5jb250ZW50LWNvbnN1bHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XG5cbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMzMHB4O1xuICAgIGJhY2tncm91bmQ6IHVybChcIi9pbWFnZXMvYmctY29uc3VsdC5zdmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBzcGFueyBmb250LXNpemU6IDJyZW07IGZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogI0ZGRjsgfVxuICAgIHAgeyBjb2xvcjogI0ZGRjsgfVxuICB9XG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAuY29udGVudC1jb25zdWx0IHtcbiAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBGb290ZXIgPSBzdHlsZWQuZm9vdGVyYFxuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAxMDBweDtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDFGNTE7XG5cbiAgLmJ0bi1jb25zdWx0IHtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICB3aWR0aDogMjUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgdG9wOiAtMjBweDtcblxuICAgIHNwYW4ge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1zaXplOiAxcmVtOyBsZXR0ZXItc3BhY2luZzogLTFweDtcbiAgICAgIGEgeyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IGNvbG9yOiAjMDAxRjUxO31cbiAgICB9XG4gIH1cblxuICB1bCB7XG4gICAgbGkge1xuICAgICAgYSB7IGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7fVxuICAgIH1cbiAgfVxuXG4gIC5jb3B5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDJGNTE7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBjb2xvcjogI2NjYztcbiAgICBmb250LXNpemU6IC44ZW07XG5cbiAgICAuZGV2ZWxvcGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBcbiAgICAgIHNwYW4geyBjb2xvcjogI2NjYzsgZm9udC1zaXplOiAxZW07IH1cbiAgICB9XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAuYnRuLWNvbnN1bHQgeyB3aWR0aDogODAlOyB9XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWF4LXdpZHRoOiA5ODBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuYDtcblxuZXhwb3J0IGNvbnN0IE1lbnUgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDcwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICB1bCB7XG5cbiAgICBsaSB7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcGFkZGluZzogMCAyMHB4O1xuXG4gICAgICBhIHsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBjb2xvcjogIzExMTsgfVxuXG4gICAgICAmOm50aC1jaGlsZCg0KSB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDFGNTE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICBhIHsgY29sb3I6ICMwMDFGNTE7IH1cbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdWwgeyBcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBcbiAgICAgIGxpIHsgcGFkZGluZzogMCA1cHg7IH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTbGlkZXIgPSBzdHlsZWQuZGl2YFxuICBtYXgtd2lkdGg6IDk4MHB4O1xuICB3aWR0aDogMTAwJTtcbmA7XG5cblxuZXhwb3J0IGNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBzZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBhcnRpY2xlIHtcbiAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgIGhlaWdodDogMjAwcHg7XG5cbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIHNwYW4geyBmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiA0cmVtOyBjb2xvcjogIzAwMUY1MTsgbGV0dGVyLXNwYWNpbmc6IC01cHg7IH1cbiAgICAgIHAgeyBmb250LXNpemU6IDFlbTsgY29sb3I6ICMwMDFGNTE7IH1cblxuICAgIH1cbiAgfVxuXG4gIC5saW5lLXNlcGFyYXRvciB7XG4gICAgd2lkdGg6IDNweDtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjRkZGLCAjMDAxRjUxKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gIH1cblxuICAuY29udGVudC12aXNpb24ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBncmlkLWdhcDogMjBweDtcblxuICAgIC5jb250ZW50LXZpc2lvbi1kZXNjcmlwdGlvbiB7XG4gICAgICBoMSB7IGZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzAwMUY1MTtcbiAgICAgICAgYiB7IGZvbnQtc2l6ZTogNHJlbTsgfVxuICAgICAgfVxuXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIGhlaWdodDogM3B4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNGRkYsICMwMDFGNTEpIHJlcGVhdC15IGNlbnRlciBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgfVxuXG4gICAgICBzcGFuIHsgZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMnJlbTsgbGV0dGVyLXNwYWNpbmc6IC0ycHg7IGNvbG9yOiAjMDAxRjUxOyB9XG4gICAgICBwIHsgZm9udC1zaXplOiAxcmVtOyBjb2xvcjogIzhCOEI4QjsgbGluZS1oZWlnaHQ6IDI1cHg7IG1hcmdpbi10b3A6IDIwcHg7IH1cblxuICAgIH1cbiAgfVxuXG4gIC5jb250ZW50LXBhcnRuZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBncmlkLWdhcDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAyNTBweDtcblxuICAgIGgxIHsgZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjMDAxRjUxO1xuXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIGhlaWdodDogM3B4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNGRkYsICMwMDFGNTEpIHJlcGVhdC15IGNlbnRlciBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgfVxuICAgIH1cbiAgICBwIHsgZm9udC1zaXplOiAxcmVtOyBjb2xvcjogIzhCOEI4QjsgbGluZS1oZWlnaHQ6IDI1cHg7IG1hcmdpbi10b3A6IDIwcHg7IH1cbiAgfVxuXG4gIEBtZWRpYShtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgc2VjdGlvbiB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5jb250ZW50LXZpc2lvbiB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyBwYWRkaW5nOiAwIDIwcHg7IH1cbiAgICAuY29udGVudC1wYXJ0bmVyIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IHBhZGRpbmc6IDAgMjBweDsgfVxuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/pages/Home.ts\n");

/***/ })

})