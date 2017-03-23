var main =
webpackJsonp_name_([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _demo = __webpack_require__(455);

	var _demo2 = _interopRequireDefault(_demo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(146);

	//*------------------------------------------------------------------*

	var __values__ = [];

	exports.render = function (options) {

	    ReactDOM.render(React.createElement(_demo2.default), typeof options.target === "string" ? document.getElementById(options.target) : options.target);
	};

/***/ },

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ListWithAutocomplete = __webpack_require__(456);

	var _ListWithAutocomplete2 = _interopRequireDefault(_ListWithAutocomplete);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Demo = function (_React$Component) {
	  _inherits(Demo, _React$Component);

	  function Demo(props) {
	    _classCallCheck(this, Demo);

	    var _this = _possibleConstructorReturn(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).call(this, props));

	    _this.state = {
	      values: []
	    };
	    return _this;
	  }

	  _createClass(Demo, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(_ListWithAutocomplete2.default, {
	        suggesterUrlTemplate: "https://www.ebi.ac.uk/gxa/json/suggestions?query={0}&species=",
	        values: this.state.values,
	        onChangeValues: function onChangeValues(values) {
	          console.log(values);
	          _this2.setState({ values: values });
	        } });
	    }
	  }]);

	  return Demo;
	}(_react2.default.Component);

	exports.default = Demo;

/***/ },

/***/ 456:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AutocompleteBox = __webpack_require__(457);

	var _AutocompleteBox2 = _interopRequireDefault(_AutocompleteBox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(458);

	var ListWithAutocomplete = function ListWithAutocomplete(_ref) {
	  var suggesterUrlTemplate = _ref.suggesterUrlTemplate,
	      values = _ref.values,
	      onChangeValues = _ref.onChangeValues;
	  return _react2.default.createElement(
	    'div',
	    { className: 'list-with-autocomplete' },
	    values.map(function (value) {
	      return _react2.default.createElement(
	        'div',
	        {
	          className: "list-element",
	          key: value,
	          id: value
	        },
	        _react2.default.createElement(
	          'span',
	          null,
	          value
	        ),
	        _react2.default.createElement(
	          'button',
	          {
	            style: { fontSize: "1.5rem", top: "0.25rem" },
	            className: 'close-button small',
	            'aria-label': 'Close alert',
	            type: 'button',
	            onClick: function onClick() {
	              onChangeValues(values.filter(function (v) {
	                return v !== value;
	              }));
	            }
	          },
	          _react2.default.createElement(
	            'span',
	            { 'aria-hidden': 'true' },
	            '\xD7'
	          )
	        )
	      );
	    }),
	    _react2.default.createElement(_AutocompleteBox2.default, _extends({ suggesterUrlTemplate: suggesterUrlTemplate }, {
	      valuesToSkipInSuggestions: values,
	      onGeneChosen: function onGeneChosen(geneChosen) {
	        return onChangeValues(values.concat([geneChosen]));
	      }
	    }))
	  );
	};

	ListWithAutocomplete.propTypes = {
	  values: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string.isRequired).isRequired,
	  onChangeValues: _react2.default.PropTypes.func.isRequired,
	  suggesterUrlTemplate: _react2.default.PropTypes.string.isRequired
	};

	exports.default = ListWithAutocomplete;

/***/ },

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactAutocomplete = __webpack_require__(450);

	var _reactAutocomplete2 = _interopRequireDefault(_reactAutocomplete);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(458);

	var TRANSITIONS = {
	  standBy: 1,
	  underEdit: 2,
	  fetchingSuggestion: 3
	};

	var AutocompleteBox = _react2.default.createClass({
	  displayName: 'AutocompleteBox',

	  propTypes: {
	    suggesterUrlTemplate: _react2.default.PropTypes.string.isRequired,
	    onGeneChosen: _react2.default.PropTypes.func.isRequired,
	    valuesToSkipInSuggestions: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string.isRequired).isRequired
	  },
	  getInitialState: function getInitialState() {
	    var value = this.props.value || '';
	    return {
	      value: '',
	      currentTransition: TRANSITIONS.standBy,
	      currentSuggestions: []
	    };
	  },
	  _requestSuggestions: function _requestSuggestions(value) {
	    var _this = this;

	    if (this.state.currentTransition === TRANSITIONS.fetchingSuggestion) {
	      var httpRequest = new XMLHttpRequest();
	      httpRequest.onload = function (e) {
	        var xhr = e.target;
	        var results = void 0;
	        if (xhr.responseType === 'json') {
	          results = xhr.response;
	        } else {
	          results = JSON.parse(xhr.responseText);
	        }
	        _this.setState({ currentSuggestions: results.map(function (result) {
	            return (
	              /* The server also produces categories
	                 skip them since the query is the same
	              */
	              result.value
	            );
	          }).filter(function (item) {
	            return _this.props.valuesToSkipInSuggestions.indexOf(item) === -1;
	          }).filter(function (item, ix, self) {
	            return self.indexOf(item) == ix;
	          }),

	          currentTransition: TRANSITIONS.underEdit });
	      };
	      httpRequest.open('GET', this.props.suggesterUrlTemplate.replace(/\{0\}/, value), true);
	      httpRequest.responseType = 'json';
	      httpRequest.send();
	    }
	  },
	  _renderItem: function _renderItem(item, isHighlighted) {
	    return _react2.default.createElement(
	      'div',
	      {
	        className: "menu-element",
	        style: isHighlighted ? { "background": "#007c82", "color": "white" } : {},
	        key: item,
	        id: item
	      },
	      _react2.default.createElement(
	        'span',
	        null,
	        item
	      )
	    );
	  },
	  _isTooShortToShowHints: function _isTooShortToShowHints(value) {
	    return !value || value.length < 3;
	  },
	  render: function render() {
	    var _this2 = this;

	    return _react2.default.createElement(
	      'div',
	      { className: "gene-autocomplete " + (this.state.currentTransition === TRANSITIONS.underEdit || this.state.currentTransition === TRANSITIONS.fetchingSuggestion ? "underEdit" : this.state.currentTransition === TRANSITIONS.standBy ? "standBy" : "") },
	      _react2.default.createElement('span', { tabIndex: -1, ref: function ref(span) {
	          _this2.dummySpan = span;
	        } }),
	      _react2.default.createElement(_reactAutocomplete2.default, {
	        open: this.state.currentTransition === TRANSITIONS.underEdit || this.state.currentTransition === TRANSITIONS.fetchingSuggestion,
	        onMenuVisibilityChange: function onMenuVisibilityChange() {},
	        inputProps: { name: "Enter gene", id: "gene-autocomplete", type: "text" },
	        value: this.state.value,
	        items: this.state.currentSuggestions,
	        getItemValue: function getItemValue(item) {
	          return item;
	        },
	        wrapperStyle: { display: "block" },
	        onSelect: function onSelect(value, item) {
	          _this2.setState({ value: '', currentSuggestions: [], currentTransition: TRANSITIONS.standBy }, function () {
	            _this2.dummySpan.focus();
	            _this2.props.onGeneChosen(value);
	          });
	        },
	        onChange: function onChange(event, value) {
	          if (_this2._isTooShortToShowHints(value)) {
	            _this2.setState({ value: value, currentTransition: TRANSITIONS.underEdit });
	          } else {
	            _this2.setState({ value: value, currentTransition: TRANSITIONS.fetchingSuggestion }, function () {
	              _this2._requestSuggestions(value);
	            });
	          }
	        },
	        renderMenu: function renderMenu(items, value, style) {
	          return _react2.default.createElement(
	            'div',
	            { className: 'menu', style: {} },
	            _this2._isTooShortToShowHints(value) ? false : _this2.state.currentTransition === TRANSITIONS.fetchingSuggestion ? _react2.default.createElement(
	              'div',
	              { style: { padding: 6, float: "bottom" } },
	              'Loading...'
	            ) : _react2.default.createElement(
	              'div',
	              null,
	              items
	            )
	          );
	        },
	        renderItem: this._renderItem
	      })
	    );
	  }
	});

	module.exports = AutocompleteBox;

/***/ },

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(459);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(461)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./gene-autocomplete.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./gene-autocomplete.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(460)();
	// imports


	// module
	exports.push([module.id, ".list-with-autocomplete .list-element {\n  position:relative;\n  padding: 6px;\n  margin-top: 3px;\n  margin-bottom: 3px;\n  color:#007c82;\n  background: gainsboro;\n  text-align: center;\n  word-wrap: break-word;\n}\n\n\n.gene-autocomplete input {\n    text-overflow: ellipsis;\n    font-size: larger;\n    font-weight: bolder;\n    text-align: center;\n    color: #555;\n    background: #fff !important;\n    height: 2.4375rem;\n    width: 100%;\n    padding: 0.5rem;\n    border: 1px solid #cacaca;\n    margin: 0 0 1rem;\n    box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);\n}\n\n.gene-autocomplete.underEdit input {\n  color: #007c82;\n}\n\n.gene-autocomplete .menu {\n  background: #FFF none !important;\n  border-radius: 4px;\n  padding:0;\n}\n\n.gene-autocomplete .menu .menu-element {\n  cursor: pointer;\n  z-index: 600;\n  padding: 6px;\n  color: #007c82;\n}\n", ""]);

	// exports


/***/ },

/***/ 460:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }

});