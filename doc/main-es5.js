function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home/home.component */
    "./src/app/home/home/home.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");

    var routes = [{
      path: '',
      component: _home_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: '**',
      component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./nav/nav.component */
    "./src/app/nav/nav.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'web';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 0,
      consts: [[1, "container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n    width: 960px;\n    margin: 0 auto;\n  }\n \n  \n\n  \n \n  \n\n  \n \n  \n\n  @media (min-width: 1200px) {\n    .container[_ngcontent-%COMP%] {\n      width: 1170px;\n    }\n    #mainbody[_ngcontent-%COMP%] {\n      width: 770px;\n      margin-right: 30px;\n    }\n    #sidebar[_ngcontent-%COMP%] {\n      width: 370px;\n    }\n  }\n \n  \n\n  @media (max-width: 959px) {\n    .container[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n    #mainbody[_ngcontent-%COMP%] {\n      width: 67%;\n    }\n    #sidebar[_ngcontent-%COMP%] {\n      width: 30%;\n      float: right;\n    }\n  }\n \n  \n\n  @media (max-width: 767px) {\n    #mainbody[_ngcontent-%COMP%], #sidebar[_ngcontent-%COMP%] {\n      float: none;\n      width: 100%;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osY0FBYztFQUNoQjs7OztFQUlBLFVBQVU7Ozs7RUFDVixxQ0FBcUM7Ozs7RUFFckM7SUFDRTtNQUNFLGFBQWE7SUFDZjtJQUNBO01BQ0UsWUFBWTtNQUNaLGtCQUFrQjtJQUNwQjtJQUNBO01BQ0UsWUFBWTtJQUNkO0VBQ0Y7Ozs7RUFFQTtJQUNFO01BQ0UsV0FBVztJQUNiO0lBQ0E7TUFDRSxVQUFVO0lBQ1o7SUFDQTtNQUNFLFVBQVU7TUFDVixZQUFZO0lBQ2Q7RUFDRjs7OztFQUVBO0lBQ0U7O01BRUUsV0FBVztNQUNYLFdBQVc7SUFDYjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTYwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiBcbiAgXG5cbiAgLyog5ZON5bqU5byP6K6+6K6hICovXG4gIC8qIOiuvue9ruS4ieS4quaWreeCueWIhuWIq+S4uu+8muWxj+W5leWuveW6puWkp+S6jjEyMDDvvIzlsI/kuo45NjDvvIzlsI/kuo43NjcgKi9cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAxMTcwcHg7XG4gICAgfVxuICAgICNtYWluYm9keSB7XG4gICAgICB3aWR0aDogNzcwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgfVxuICAgICNzaWRlYmFyIHtcbiAgICAgIHdpZHRoOiAzNzBweDtcbiAgICB9XG4gIH1cbiAgXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5NTlweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgICNtYWluYm9keSB7XG4gICAgICB3aWR0aDogNjclO1xuICAgIH1cbiAgICAjc2lkZWJhciB7XG4gICAgICB3aWR0aDogMzAlO1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgI21haW5ib2R5LFxuICAgICNzaWRlYmFyIHtcbiAgICAgIGZsb2F0OiBub25lO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home/home.component */
    "./src/app/home/home/home.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./nav/nav.component */
    "./src/app/nav/nav.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _home_slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home/slideshow/slideshow.component */
    "./src/app/home/slideshow/slideshow.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"], _home_slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_9__["SlideshowComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"], _home_slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_9__["SlideshowComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 3,
      vars: 0,
      consts: [["id", "footer"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u9875\u811A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["footer[_ngcontent-%COMP%]{\n    height: 100px;\n  line-height: 25px;\n  background: #eee;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVye1xuICAgIGhlaWdodDogMTAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 3,
      vars: 0,
      consts: [["id", "header"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SHOP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#header[_ngcontent-%COMP%]{\n    height: 80px;\n  }\n  #header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n    font-size: 50px;\n    line-height: 80px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtFQUNkO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hlYWRlcntcbiAgICBoZWlnaHQ6IDgwcHg7XG4gIH1cbiAgI2hlYWRlciBzcGFue1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBsaW5lLWhlaWdodDogODBweDtcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home/home.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home/home.component.ts ***!
    \*********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../slideshow/slideshow.component */
    "./src/app/home/slideshow/slideshow.component.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 11,
      vars: 0,
      consts: [["id", "mainbody"], ["id", "sidebar"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-slideshow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u70ED\u95E8\u5546\u54C1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sem erat, egestas quis luctus ut, rhoncus vitae risus. Integer venenatis libero sit amet sapien dictum, quis bibendum mi volutpat. Cras pretium quam quis magna facilisis, eget feugiat nisi lacinia.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aside", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u4E3A\u60A8\u63A8\u8350");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Donec dolor arcu, interdum sed turpis faucibus, placerat ultricies felis. Donec pulvinar gravida rhoncus. Suspendisse vestibulum est eget dolor lobortis.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_1__["SlideshowComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/slideshow/slideshow.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/home/slideshow/slideshow.component.ts ***!
    \*******************************************************/

  /*! exports provided: SlideshowComponent */

  /***/
  function srcAppHomeSlideshowSlideshowComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlideshowComponent", function () {
      return SlideshowComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); // import { Swipe} from '../../../assets/js/swipe.js';


    var SlideshowComponent =
    /*#__PURE__*/
    function () {
      function SlideshowComponent() {
        _classCallCheck(this, SlideshowComponent);
      }

      _createClass(SlideshowComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SlideshowComponent;
    }();

    SlideshowComponent.ɵfac = function SlideshowComponent_Factory(t) {
      return new (t || SlideshowComponent)();
    };

    SlideshowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SlideshowComponent,
      selectors: [["app-slideshow"]],
      decls: 16,
      vars: 0,
      consts: [["id", "showcase"], ["id", "slider", 1, "swipe"], [1, "swipe-wrap"], ["src", "https://gitee.com/yovelas/PicGo/raw/master//imgs/01.jpg", "alt", ""], [1, "slider-control"], ["onclick", "mySwipe.prev()", 1, "left"], [1, "icon-angle-left"], ["onclick", "mySwipe.next()", 1, "right"], [1, "icon-angle-right"]],
      template: function SlideshowComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".swipe[_ngcontent-%COMP%] {\n    overflow: hidden;\n    visibility: hidden;\n    position: relative;\n  }\n.swipe-wrap[_ngcontent-%COMP%] {\n    overflow: hidden;\n    position: relative;\n  }\n.swipe-wrap[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    float:left;\n    width:100%;\n    position: relative;\n  }\n.slider-control[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{\n    position: absolute;\n    left: 20px;\n    top: 45%;\n  }\n.slider-control[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{\n    position: absolute;\n    right: 20px;\n    top: 45%;\n  }\n.slider-control[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n    width: 50px;\n    height: 50px;\n    font-size: 20px;\n    cursor: pointer;\n    background: #000;\n    color: #fff;\n    border: 3px solid #fff;\n    border-radius: 50%;\n    opacity: 0.7;\n    display: none;\n  }\n.swipe[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{\n    display: block;\n  }\n.slider-control[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\n    opacity: 0.5;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zbGlkZXNob3cvc2xpZGVzaG93LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGNBQWM7QUFDZDtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxVQUFVO0lBQ1YsVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0VBQ1Y7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtFQUNWO0FBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxzQkFBc0I7SUFHdEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0VBQ2Y7QUFFQTtJQUNFLGNBQWM7RUFDaEI7QUFFQTtJQUNFLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2xpZGVzaG93L3NsaWRlc2hvdy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBTd2lwZSDlubvnga/niYcgKi9cbi5zd2lwZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5zd2lwZS13cmFwIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuc3dpcGUtd3JhcCA+IGRpdiB7XG4gICAgZmxvYXQ6bGVmdDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5zbGlkZXItY29udHJvbCAubGVmdHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMjBweDtcbiAgICB0b3A6IDQ1JTtcbiAgfVxuICBcbiAgLnNsaWRlci1jb250cm9sIC5yaWdodHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgdG9wOiA0NSU7XG4gIH1cbiAgXG4gIC5zbGlkZXItY29udHJvbCBidXR0b257XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgLnN3aXBlOmhvdmVyIGJ1dHRvbntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgLnNsaWRlci1jb250cm9sIGJ1dHRvbjpob3ZlcntcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cblxuXG5cblxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideshowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-slideshow',
          templateUrl: './slideshow.component.html',
          styleUrls: ['./slideshow.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/nav/nav.component.ts":
  /*!**************************************!*\
    !*** ./src/app/nav/nav.component.ts ***!
    \**************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavComponent =
    /*#__PURE__*/
    function () {
      function NavComponent() {
        _classCallCheck(this, NavComponent);
      }

      _createClass(NavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavComponent;
    }();

    NavComponent.ɵfac = function NavComponent_Factory(t) {
      return new (t || NavComponent)();
    };

    NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavComponent,
      selectors: [["app-nav"]],
      decls: 23,
      vars: 0,
      consts: [[1, "container"], [1, "container_innav"], ["id", "nav"], ["href", "#nav", 1, "open", "toggle-btn"], [1, "icon-reorder"], ["href", "#top", 1, "close", "toggle-btn"], [1, "icon-remove-sign"], ["id", "nav_con"], ["routerLink", "", 1, "active"], ["href", "classfy"], ["href", "message"], ["href", "car"], ["href", "penson"]],
      template: function NavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u9996\u9875");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u5206\u7C7B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u6D88\u606F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u8D2D\u7269\u8F66");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u4E2A\u4EBA\u4E2D\u5FC3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["#nav[_ngcontent-%COMP%]{\n  line-height: 25px;\n  margin-bottom: 20px;\n  color: #999;\n}\n.container_innav[_ngcontent-%COMP%]{\n    height: 73px;\n    position: relative;\n    z-index: 100;\n}\n\n#nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], #nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 7px 15px;\n  text-decoration: none;\n  color: #3b3b3b;\n}\n#nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #eee;\n}\n#nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: #eee;\n}\n.toggle-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (max-width: 767px) {\n\n  \n  .toggle-btn[_ngcontent-%COMP%] {\n    display: inline-block;\n    font-size: 25px;\n    text-decoration: none;\n    background: #000;\n    color: #fff;\n    padding: 7px 10px;\n    position: absolute;\n    right: 10px;\n  }\n\n  \n  .close[_ngcontent-%COMP%] {\n    display: none;\n  }\n  \n  #nav_con[_ngcontent-%COMP%] {\n    display: none;\n  }\n  \n  \n  #nav[_ngcontent-%COMP%]:target   #nav_con[_ngcontent-%COMP%] {\n    -webkit-padding-start:0;\n            padding-inline-start:0;\n    display: block;\n    background: #000;\n    width: 100%;\n    position: relative;\n    top: 35px;\n  }\n  \n  #nav[_ngcontent-%COMP%]:target   li[_ngcontent-%COMP%], #nav[_ngcontent-%COMP%]:target   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    color: #eee;\n    text-align: left;\n  }\n  \n  #nav[_ngcontent-%COMP%]:target   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background: #3b3b3b;\n  }\n  \n  #nav[_ngcontent-%COMP%]:target   .active[_ngcontent-%COMP%] {\n    background: #272727;\n  }\n  \n  #nav[_ngcontent-%COMP%]:target   .close[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPO0FBQ1A7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBRUEsU0FBUztBQUNUOztFQUVFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFFQSxrQkFBa0I7QUFDbEI7O0VBRUUsU0FBUztFQUNUO0lBQ0UscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjs7RUFFQSxXQUFXO0VBQ1g7SUFDRSxhQUFhO0VBQ2Y7RUFDQSxXQUFXO0VBQ1g7SUFDRSxhQUFhO0VBQ2Y7O0VBRUEsZ0JBQWdCO0VBQ2hCO0lBQ0UsdUJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztFQUNYO0VBQ0EscUJBQXFCO0VBQ3JCOztJQUVFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCO0VBQ0EsNEJBQTRCO0VBQzVCO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0Esb0JBQW9CO0VBQ3BCO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0EscUJBQXFCO0VBQ3JCO0lBQ0UscUJBQXFCO0VBQ3ZCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIOWvvOiIqiAqL1xuI25hdntcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGNvbG9yOiAjOTk5O1xufVxuLmNvbnRhaW5lcl9pbm5hdntcbiAgICBoZWlnaHQ6IDczcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwMDtcbn1cblxuLyog5a+86Iiq6I+c5Y2VICovXG4jbmF2IGxpLFxuI25hdiBsaSBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA3cHggMTVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzNiM2IzYjtcbn1cbiNuYXYgbGkgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG59XG4jbmF2IC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuLnRvZ2dsZS1idG4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBNZWRpYSBRdWVyaWVzICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcblxuICAvKiDliIfmjaLmjInpkq4gKi9cbiAgLnRvZ2dsZS1idG4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogN3B4IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICB9XG5cbiAgLyog6ZqQ6JeP5YWz6Zet5oyJ6ZKuICovXG4gIC5jbG9zZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAvKiDliJ3lp4vpmpDol4/lr7zoiKogKi9cbiAgI25hdl9jb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC8qIOWvvOiIquS4uuebruagh+eKtuaAgeaXtueahOagt+W8jyAqL1xuICAjbmF2OnRhcmdldCAjbmF2X2NvbiB7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6MDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDM1cHg7XG4gIH1cbiAgLyog55uu5qCH54q25oCB5LiL55qE5a+86Iiq55qEIGxpIOS4jiBhICovXG4gICNuYXY6dGFyZ2V0IGxpLFxuICAjbmF2OnRhcmdldCBsaSBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogI2VlZTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIC8qIOebruagh+eKtuaAgeS4i+eahOWvvOiIqueahOWIl+ihqOS4i+eahCBhIOagh+etvueahOaCrOWBnOagt+W8jyAqL1xuICAjbmF2OnRhcmdldCBsaSBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjM2IzYjNiO1xuICB9XG4gIC8qIOebruagh+eKtuaAgeS4i+WvvOiIqueahOa/gOa0u+eKtuaAgeeahOagt+W8jyAqL1xuICAjbmF2OnRhcmdldCAuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjcyNzI3O1xuICB9XG4gIC8qIOWvvOiIquS4uuebruagh+eKtuaAgeeahOaXtuWAmeaYvuekuuWFs+mXreaMiemSriAqL1xuICAjbmF2OnRhcmdldCAuY2xvc2Uge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav',
          templateUrl: './nav.component.html',
          styleUrls: ['./nav.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/page-not-found/page-not-found.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.ts ***!
    \************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PageNotFoundComponent =
    /*#__PURE__*/
    function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
      return new (t || PageNotFoundComponent)();
    };

    PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageNotFoundComponent,
      selectors: [["app-page-not-found"]],
      decls: 12,
      vars: 0,
      consts: [[1, "fullheight", "dark-text"], [1, "fullheight"], [1, "container", "fullheight", "text-center"], [1, "vertical-center-js"], ["routerLink", "", "role", "button", 1, "btn", "btn-white", "btn-lg"]],
      template: function PageNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Oh no, this is an");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " 404 Error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".dark-text[_ngcontent-%COMP%], .dark-text[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  color: #222;\n}\n\n.fullheight[_ngcontent-%COMP%] {\n  min-height: 600px;\n}\n\n*[_ngcontent-%COMP%] {\n  font-family: \"Lato\", sans-serif;\n  font-size: 16px;\n  line-height: 2.028571429;\n  background-color: #fff;\n  font-weight: 300;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-family: \"Raleway\", serif;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 4px;\n  font-size: 36px;\n}\n\n.vertical-center-js[_ngcontent-%COMP%] {\n  padding-top: 202px;\n}\n\n.dark-text[_ngcontent-%COMP%], .dark-text[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  color: #222;\n}\n\n.fullheight[_ngcontent-%COMP%] {\n  min-height: 600px;\n}\n\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n@media (min-width: 1400px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1400px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1190px;\n  }\n}\n\n.dark-text[_ngcontent-%COMP%], .dark-text[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  color: #222;\n}\n\n.fullheight[_ngcontent-%COMP%] {\n  min-height: 600px;\n}\n\n@media (min-width: 1200px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1170px;\n  }\n}\n\n@media (min-width: 992px) {\n  .container[_ngcontent-%COMP%] {\n    width: 970px;\n  }\n}\n\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    width: 750px;\n  }\n}\n\n.container[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\ndiv[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBQ0E7O0VBRUUsV0FBVztBQUNiOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBR0Usc0JBQXNCO0FBQ3hCOztBQUNBO0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFyay10ZXh0LFxuLmRhcmstdGV4dCAqIHtcbiAgY29sb3I6ICMyMjI7XG59XG5cbi5mdWxsaGVpZ2h0IHtcbiAgbWluLWhlaWdodDogNjAwcHg7XG59XG5cbioge1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIuMDI4NTcxNDI5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cblxuLnZlcnRpY2FsLWNlbnRlci1qcyB7XG4gIHBhZGRpbmctdG9wOiAyMDJweDtcbn1cblxuLmRhcmstdGV4dCxcbi5kYXJrLXRleHQgKiB7XG4gIGNvbG9yOiAjMjIyO1xufVxuXG4uZnVsbGhlaWdodCB7XG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xufVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDE0MDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTE5MHB4O1xuICB9XG59XG4uZGFyay10ZXh0LFxuLmRhcmstdGV4dCAqIHtcbiAgY29sb3I6ICMyMjI7XG59XG4uZnVsbGhlaWdodCB7XG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTE3MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDk3MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDc1MHB4O1xuICB9XG59XG4uY29udGFpbmVyIHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuKiB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuKiB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5kaXYge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-not-found',
          templateUrl: './page-not-found.component.html',
          styleUrls: ['./page-not-found.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/yovelas/Documents/develop/ShopFront/web/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map