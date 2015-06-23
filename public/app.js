/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/tsd.d.ts" />
	var common_1 = __webpack_require__(2);
	var components_1 = __webpack_require__(6);
	var app_component_1 = __webpack_require__(13);
	angular.module('app', [
	    'ui.router',
	    common_1.default.name,
	    components_1.default.name
	]).directive('app', app_component_1.default);
	//# sourceMappingURL=app.js.map

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var navbar_1 = __webpack_require__(3);
	var commonModule = angular.module('app.common', [
	    navbar_1.default.name
	]);
	exports.default = commonModule;
	//# sourceMappingURL=common.js.map

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var navbar_component_1 = __webpack_require__(4);
	var navbarModule = angular.module('navbar', [
	    'ui.router'
	])
	    .directive('navbar', navbar_component_1.default);
	exports.default = navbarModule;
	//# sourceMappingURL=navbar.js.map

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var navbar_controller_1 = __webpack_require__(5);
	var navbarComponent = function () {
	    return {
	        templateUrl: 'app/common/navbar/navbar.html',
	        controller: navbar_controller_1.default,
	        restrict: 'E',
	        controllerAs: 'vm',
	        scope: {},
	        bindToController: true
	    };
	};
	exports.default = navbarComponent;
	//# sourceMappingURL=navbar.component.js.map

/***/ },
/* 5 */
/***/ function(module, exports) {

	var NavbarController = (function () {
	    function NavbarController() {
	        this.name = 'navbar';
	    }
	    return NavbarController;
	})();
	exports.default = NavbarController;
	//# sourceMappingURL=navbar.controller.js.map

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var home_1 = __webpack_require__(7);
	var about_1 = __webpack_require__(10);
	var componentModule = angular.module('app.components', [
	    home_1.default.name,
	    about_1.default.name
	]);
	exports.default = componentModule;
	//# sourceMappingURL=components.js.map

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var home_component_1 = __webpack_require__(8);
	var homeModule = angular.module('home', [
	    'ui.router'
	])
	    .config(function ($stateProvider, $urlRouterProvider) {
	    $urlRouterProvider.otherwise('/');
	    $stateProvider
	        .state('home', {
	        url: '/',
	        template: '<home></home>'
	    });
	})
	    .directive('home', home_component_1.default);
	exports.default = homeModule;
	//# sourceMappingURL=home.js.map

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var home_controller_1 = __webpack_require__(9);
	var homeComponent = function () {
	    return {
	        templateUrl: 'app/components/home/home.html',
	        controller: home_controller_1.default,
	        restrict: 'E',
	        controllerAs: 'vm',
	        scope: {},
	        bindToController: true
	    };
	};
	exports.default = homeComponent;
	//# sourceMappingURL=home.component.js.map

/***/ },
/* 9 */
/***/ function(module, exports) {

	var HomeController = (function () {
	    function HomeController() {
	        this.name = 'home';
	    }
	    return HomeController;
	})();
	exports.default = HomeController;
	//# sourceMappingURL=home.controller.js.map

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var about_component_1 = __webpack_require__(11);
	var aboutModule = angular.module('about', [
	    'ui.router'
	])
	    .config(function ($stateProvider) {
	    $stateProvider
	        .state('about', {
	        url: '/about',
	        abstract: true,
	        template: '<ui-view></ui-view>'
	    })
	        .state('about.state1', {
	        url: '',
	        template: '<about></about>'
	    })
	        .state('about.state2', {
	        url: '/state2',
	        template: 'The second state'
	    });
	})
	    .directive('about', about_component_1.default);
	exports.default = aboutModule;
	//# sourceMappingURL=about.js.map

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var about_controller_1 = __webpack_require__(12);
	var aboutComponent = function () {
	    return {
	        templateUrl: 'app/components/about/about.html',
	        controller: about_controller_1.default,
	        restrict: 'E',
	        controllerAs: 'vm',
	        scope: {},
	        bindToController: true
	    };
	};
	exports.default = aboutComponent;
	//# sourceMappingURL=about.component.js.map

/***/ },
/* 12 */
/***/ function(module, exports) {

	var AboutController = (function () {
	    function AboutController() {
	        this.name = 'about';
	    }
	    return AboutController;
	})();
	exports.default = AboutController;
	//# sourceMappingURL=about.controller.js.map

/***/ },
/* 13 */
/***/ function(module, exports) {

	var appComponent = function () {
	    return {
	        templateUrl: 'app/app.html',
	        restrict: 'E'
	    };
	};
	exports.default = appComponent;
	//# sourceMappingURL=app.component.js.map

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map