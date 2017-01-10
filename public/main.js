/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _sample = __webpack_require__(1);

	var tl = new _sample.TrafficLight(); //import {changeColor as run} from "./sample1.js";
	//run();

	tl.run();

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*
	红绿灯的时间不应该是一样的,黄灯是切换灯,间隔暂定为1秒,红灯定为5秒,绿灯定为3秒
	 */

	var TrafficLight = function () {
	    function TrafficLight() {
	        var stop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
	        var pass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
	        var wait = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
	        var traffic = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "traffic";
	        var time = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "time";

	        _classCallCheck(this, TrafficLight);

	        this.stop_dur = stop;
	        this.pass_dur = pass;
	        this.wait_dur = wait;
	        this.light = document.getElementById(traffic);
	        this.dur_box = document.getElementById(time);

	        this.timeout_id = 0;
	        this.curStat = "";
	        this.index = 0;
	        this.stop_stat = "stop";
	        this.pass_stat = "pass";
	        this.wait_stat = "wait";
	    }

	    _createClass(TrafficLight, [{
	        key: "run",
	        value: function run() {
	            if (this.running) {
	                console.warn("traffic light is runing");
	                return;
	            }

	            this.turnRed();
	        }
	    }, {
	        key: "stop",
	        value: function stop() {
	            clearTimeout(this.timeout_id);
	            this.timeout_id = 0;
	            this.curStat = 0;
	        }
	    }, {
	        key: "turnRed",
	        value: function turnRed() {
	            var _this = this;

	            this.light.className = "wait";
	            this.timeout_id = setTimeout(function () {
	                _this.light.className = "stop";
	                _this.timeout_id = setTimeout(function () {
	                    _this.turnGreen();
	                }, _this.stop_dur);
	            }, this.wait_dur);
	        }
	    }, {
	        key: "turnGreen",
	        value: function turnGreen() {
	            var _this2 = this;

	            this.light.className = "wait";
	            this.timeout_id = setTimeout(function () {
	                _this2.light.className = "pass";
	                _this2.timeout_id = setTimeout(function () {
	                    _this2.turnRed();
	                }, _this2.pass_dur);
	            }, this.wait_dur);
	        }
	    }, {
	        key: "running",
	        get: function get() {
	            return this.timeout_id > 0;
	        }
	    }]);

	    return TrafficLight;
	}();

	exports.TrafficLight = TrafficLight;

/***/ }
/******/ ]);