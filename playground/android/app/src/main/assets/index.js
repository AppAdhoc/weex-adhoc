// { "framework": "Vue" }

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
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(1)
	)

	/* script */
	__vue_exports__ = __webpack_require__(2)

	/* template */
	var __vue_template__ = __webpack_require__(3)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/jiaozhengxiang/code/weex-adhoc/examples/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-16fc35cd"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = {
	  "row": {
	    "flexDirection": "column",
	    "justifyContent": "space-between"
	  },
	  "button": {
	    "color": "#ffffff",
	    "backgroundColor": "#337ab7",
	    "borderColor": "#2e6da4",
	    "borderRadius": 12,
	    "paddingTop": 20,
	    "paddingLeft": 36,
	    "paddingBottom": 20,
	    "paddingRight": 36,
	    "fontSize": 36,
	    "textAlign": "center",
	    "fontWeight": "500",
	    "marginBottom": 10,
	    "marginLeft": 10,
	    "marginRight": 10,
	    "marginTop": 10
	  }
	}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var nav = weex.requireModule('navigator');
	var modal = weex.requireModule('modal');
	var syncTestModal = weex.requireModule('syncTest');
	var adhocModal = weex.requireModule('adhoc');
	exports.default = {
	  methods: {
	    getFlagClick: function getFlagClick(event) {
	      adhocModal.getFlag('flag2', 300, function (ret) {
	        modal.toast({
	          message: JSON.stringify(ret),
	          duration: 0.8
	        });
	      });
	    },
	    getFlagFastClick: function getFlagFastClick(event) {
	      adhocModal.getFlagFast('flag2', 300, 30, function (ret) {
	        modal.toast({
	          message: JSON.stringify(ret),
	          duration: 0.8
	        });
	      });
	    },
	    getFlagAsyncClick: function getFlagAsyncClick(event) {
	      adhocModal.asynchronousGetFlag('flag1', true, 10, function (ret) {
	        modal.toast({
	          message: JSON.stringify(ret),
	          duration: 0.8
	        });
	      });
	    },
	    track: function track(event) {
	      modal.toast({
	        message: 'track',
	        duration: 0.8
	      });
	      adhocModal.track('weexName', '1');
	    },
	    trackWithAttribute: function trackWithAttribute(event) {
	      modal.toast({
	        message: 'trackAttribute',
	        duration: 0.8
	      });
	      var data = { 'he': 'bei' };
	      adhocModal.trackWithAttribute('xiao', '0.5', JSON.stringify(data));
	    },
	    getExp: function getExp(event) {
	      adhocModal.getCurrentExperiments(function (ret) {
	        modal.toast({
	          message: JSON.stringify(ret),
	          duration: 0.8
	        });
	      });
	    },
	    getClientId: function getClientId(event) {
	      adhocModal.getClientId(function (ret) {
	        modal.toast({
	          message: JSON.stringify(ret),
	          duration: 0.8
	        });
	      });
	    },
	    jump: function jump(event) {
	      var url = this.$getConfig().bundleUrl;
	      url = url.split('/').slice(0, -1).join('/') + '/navigation.js';
	      console.log(url);
	      nav.push({
	        url: url,
	        animated: "true"
	      }, function (event) {
	        modal.toast({ message: 'callback: ' + event });
	      });
	    }
	  }
	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', {
	    staticClass: ["row"]
	  }, [_c('text', {
	    staticClass: ["button"],
	    on: {
	      "click": _vm.getFlagClick
	    }
	  }, [_vm._v("getFlag")]), _c('text', {
	    staticClass: ["button"],
	    on: {
	      "click": _vm.getFlagFastClick
	    }
	  }, [_vm._v("getFlagFast")]), _c('text', {
	    staticClass: ["button"],
	    on: {
	      "click": _vm.getFlagAsyncClick
	    }
	  }, [_vm._v("getFlagAsync")]), _c('text', {
	    staticClass: ["button"],
	    on: {
	      "click": _vm.track
	    }
	  }, [_vm._v("track")]), _c('text', {
	    staticClass: ["button"],
	    on: {
	      "click": _vm.trackWithAttribute
	    }
	  }, [_vm._v("trackWithAttribute")]), _c('text', {
	    staticClass: ["button"],
	    on: {
	      "click": _vm.getExp
	    }
	  }, [_vm._v("getExp")]), _c('text', {
	    staticClass: ["button"],
	    on: {
	      "click": _vm.getClientId
	    }
	  }, [_vm._v("getClientId")])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);