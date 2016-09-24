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
/*!**************************************!*\
  !*** ./app/assets/frontend/main.jsx ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _RequestBox = __webpack_require__(/*! ./components/RequestBox */ 1);
	
	var _RequestBox2 = _interopRequireDefault(_RequestBox);
	
	var _RequestList = __webpack_require__(/*! ./components/RequestList */ 2);
	
	var _RequestList2 = _interopRequireDefault(_RequestList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var mockRequests = [{ id: 1, title: "Troble 1", name: 'Adriano Barroso', body: 'Having trouble with Devise.' }, { id: 2, title: "Troble 2", name: 'Diego Van Dyk', body: 'Something wrong with my js files.' }, { id: 3, title: "Troble 3", name: 'Brad Pit', body: 'Dont know how to render partials.' }];
	
	var Main = function (_React$Component) {
	  _inherits(Main, _React$Component);
	
	  function Main(props) {
	    _classCallCheck(this, Main);
	
	    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));
	
	    _this.state = { requestsList: [] };
	    return _this;
	  }
	
	  _createClass(Main, [{
	    key: "addRequest",
	    value: function addRequest(requestToAdd) {
	      var newRequestsList = this.state.requestsList;
	      newRequestsList.unshift({ id: Date.now(),
	        title: 'Problem',
	        name: 'Somebody',
	        body: requestToAdd });
	
	      this.setState({ requestsList: newRequestsList });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        { className: "container" },
	        React.createElement(_RequestBox2.default, { sendRequest: this.addRequest.bind(this) }),
	        React.createElement(_RequestList2.default, { requests: this.state.requestsList })
	      );
	    }
	  }]);
	
	  return Main;
	}(React.Component);
	
	var documentReady = function documentReady() {
	  var reactNode = document.getElementById('react');
	  if (reactNode) {
	    ReactDOM.render(React.createElement(Main, null), reactNode);
	  }
	};
	
	$(documentReady);

/***/ },
/* 1 */
/*!*******************************************************!*\
  !*** ./app/assets/frontend/components/RequestBox.jsx ***!
  \*******************************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RequestBox = function (_React$Component) {
	  _inherits(RequestBox, _React$Component);
	
	  function RequestBox() {
	    _classCallCheck(this, RequestBox);
	
	    return _possibleConstructorReturn(this, (RequestBox.__proto__ || Object.getPrototypeOf(RequestBox)).apply(this, arguments));
	  }
	
	  _createClass(RequestBox, [{
	    key: "sendRequest",
	    value: function sendRequest(event) {
	      event.preventDefault();
	      this.props.sendRequest(this.refs.requestTextArea.value);
	      this.refs.requestTextArea.value = '';
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        { className: "input-group" },
	        React.createElement("br", null),
	        React.createElement(
	          "form",
	          { onSubmit: this.sendRequest.bind(this) },
	          React.createElement(
	            "div",
	            null,
	            React.createElement(
	              "label",
	              null,
	              "Whats the issue?"
	            )
	          ),
	          React.createElement(
	            "div",
	            null,
	            React.createElement("textarea", { ref: "requestTextArea" })
	          ),
	          React.createElement(
	            "div",
	            null,
	            React.createElement(
	              "button",
	              { type: "submit", className: "btn btn-primary" },
	              "Request"
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return RequestBox;
	}(React.Component);
	
	exports.default = RequestBox;

/***/ },
/* 2 */
/*!********************************************************!*\
  !*** ./app/assets/frontend/components/RequestList.jsx ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Request = __webpack_require__(/*! ./Request */ 3);
	
	var _Request2 = _interopRequireDefault(_Request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RequestList = function (_React$Component) {
	  _inherits(RequestList, _React$Component);
	
	  function RequestList() {
	    _classCallCheck(this, RequestList);
	
	    return _possibleConstructorReturn(this, (RequestList.__proto__ || Object.getPrototypeOf(RequestList)).apply(this, arguments));
	  }
	
	  _createClass(RequestList, [{
	    key: "render",
	    value: function render() {
	      var requests = this.props.requests.map(function (request) {
	        return React.createElement(_Request2.default, _extends({ key: request.id }, request));
	      });
	      return React.createElement(
	        "div",
	        null,
	        React.createElement("hr", null),
	        React.createElement(
	          "ul",
	          null,
	          requests
	        )
	      );
	    }
	  }]);
	
	  return RequestList;
	}(React.Component);
	
	exports.default = RequestList;

/***/ },
/* 3 */
/*!****************************************************!*\
  !*** ./app/assets/frontend/components/Request.jsx ***!
  \****************************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Request = function (_React$Component) {
	  _inherits(Request, _React$Component);
	
	  function Request() {
	    _classCallCheck(this, Request);
	
	    return _possibleConstructorReturn(this, (Request.__proto__ || Object.getPrototypeOf(Request)).apply(this, arguments));
	  }
	
	  _createClass(Request, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "li",
	        { className: "list-inline" },
	        React.createElement(
	          "div",
	          { className: "card" },
	          React.createElement(
	            "div",
	            { className: "card-block" },
	            React.createElement(
	              "h4",
	              { className: "card-title" },
	              this.props.title,
	              " by ",
	              this.props.name
	            ),
	            React.createElement(
	              "p",
	              { className: "card-text" },
	              this.props.body
	            ),
	            React.createElement(
	              "a",
	              { href: "#", className: "btn btn-primary" },
	              "Help!"
	            )
	          )
	        ),
	        React.createElement("hr", null)
	      );
	    }
	  }]);
	
	  return Request;
	}(React.Component);
	
	exports.default = Request;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map