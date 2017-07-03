(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stringify = __webpack_require__(1);

	var _stringify2 = _interopRequireDefault(_stringify);

	exports.main = main;

	var _uuid = __webpack_require__(2);

	var _uuid2 = _interopRequireDefault(_uuid);

	var _awsSdk = __webpack_require__(3);

	var _awsSdk2 = _interopRequireDefault(_awsSdk);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_awsSdk2.default.config.update({ region: 'us-east-2' });
	var dynamoDb = new _awsSdk2.default.DynamoDB.DocumentClient();

	function main(event, context, callback) {
	  // Request body is passed in as a JSON encoded string in 'event.body'
	  var data = JSON.parse(event.body);

	  var params = {
	    TableName: 'notes',
	    // 'Item' contains the attributes of the item to be created
	    // - 'userId': because users are authenticated via Cognito User Pool, we
	    //             will use the User Pool sub (a UUID) of the authenticated user
	    // - 'noteId': a unique uuid
	    // - 'content': parsed from request body
	    // - 'attachment': parsed from request body
	    // - 'createdAt': current Unix timestamp
	    Item: {
	      userId: event.requestContext.authorizer.claims.sub,
	      noteId: _uuid2.default.v1(),
	      content: data.content,
	      attachment: data.attachment,
	      createdAt: new Date().getTime()
	    }
	  };

	  dynamoDb.put(params, function (error, data) {
	    // Set response headers to enable CORS (Cross-Origin Resource Sharing)
	    var headers = {
	      'Access-Control-Allow-Origin': '*',
	      'Access-Control-Allow-Credentials': true
	    };

	    // Return status code 500 on error
	    if (error) {
	      var _response = {
	        statusCode: 500,
	        headers: headers,
	        body: (0, _stringify2.default)({ status: false })
	      };
	      callback(null, _response);
	      return;
	    }

	    // Return status code 200 and the newly created item
	    var response = {
	      statusCode: 200,
	      headers: headers,
	      body: (0, _stringify2.default)(params.Item)
	    };
	    callback(null, response);
	  });
	};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("uuid");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("aws-sdk");

/***/ })
/******/ ])));