"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Box = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Box = _styledComponents["default"].div(_templateObject(), (0, _styledSystem.compose)(_styledSystem.typography, _styledSystem.space, _styledSystem.color, _styledSystem.flexbox, _styledSystem.background, _styledSystem.shadow, _styledSystem.layout));

exports.Box = Box;
var Forwarded = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(Box, _extends({
    ref: ref
  }, props));
});
var _default = Forwarded;
exports["default"] = _default;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = require("./Box");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Flex = (0, _styledComponents["default"])(_Box.Box)(_templateObject());
var Forwarded = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(Flex, _extends({
    ref: ref
  }, props));
});
var _default = Forwarded;
exports["default"] = _default;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Heading = _styledComponents["default"].h2(_templateObject(), _styledSystem.typography, _styledSystem.space, _styledSystem.color, _styledSystem.layout);

var ForwardedHeading = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var _ref$headingLevel = _ref.headingLevel,
      headingLevel = _ref$headingLevel === void 0 ? 2 : _ref$headingLevel,
      rest = _objectWithoutProperties(_ref, ["headingLevel"]);

  return /*#__PURE__*/_react["default"].createElement(Heading, _extends({
    as: "h".concat(headingLevel),
    ref: ref
  }, rest));
});
var _default = ForwardedHeading;
exports["default"] = _default;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ExportableImage = exports.Image = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = _interopRequireDefault(require("./Box"));

var _useBreakpointAwareProps = _interopRequireDefault(require("../hooks/useBreakpointAwareProps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  opacity: ", ";\n  transition: 1s all ease;\n  transform: ", ";\n  filter: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding-bottom: ", ";\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = (0, _styledComponents["default"])(_Box["default"])(_templateObject(), function (props) {
  return "".concat(100 * props.aspectRatio, "%");
});
var BlurHider = (0, _styledComponents["default"])(_Box["default"])(_templateObject2());

var StyledImage = _styledComponents["default"].img(_templateObject3(), function (props) {
  return props.isLoaded ? 1 : 0;
}, function (props) {
  return "translate(0, ".concat(props.imagePositionY, "%)");
}, function (props) {
  return props.hasBlur ? "blur(5px)" : "none";
});

var Image = function Image(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoaded = _useState2[0],
      setIsLoaded = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isSmallLoaded = _useState4[0],
      setIsSmallLoaded = _useState4[1];

  var src = props.src,
      alt = props.alt,
      imgHeight = props.imgHeight,
      onClick = props.onClick,
      imgWidth = props.imgWidth,
      smallSrc = props.smallSrc,
      className = props.className,
      _props$imagePositionY = props.imagePositionY,
      imagePositionY = _props$imagePositionY === void 0 ? 0 : _props$imagePositionY,
      aspectRatio = props.aspectRatio,
      rest = _objectWithoutProperties(props, ["src", "alt", "imgHeight", "onClick", "imgWidth", "smallSrc", "className", "imagePositionY", "aspectRatio"]);

  return /*#__PURE__*/_react["default"].createElement(Wrapper, _extends({}, rest, {
    aspectRatio: aspectRatio,
    className: className,
    onClick: onClick
  }), /*#__PURE__*/_react["default"].createElement(BlurHider, null, /*#__PURE__*/_react["default"].createElement(StyledImage, {
    src: smallSrc,
    alt: alt,
    isLoaded: isSmallLoaded,
    imagePositionY: imagePositionY,
    hasBlur: true,
    onLoad: function onLoad(e) {
      setIsSmallLoaded(true);
    }
  }), /*#__PURE__*/_react["default"].createElement(StyledImage, {
    src: src,
    alt: alt,
    isLoaded: isLoaded,
    imagePositionY: imagePositionY,
    onLoad: function onLoad(e) {
      setIsLoaded(true);
    }
  })));
};

exports.Image = Image;

var ExportableImage = function ExportableImage(props) {
  var finalizedProps = (0, _useBreakpointAwareProps["default"])({
    props: props,
    breakpointProps: ["src", "smallSrc", "imgHeight", "imgWidth", "imagePositionY", "aspectRatio", "alt"]
  });
  return /*#__PURE__*/_react["default"].createElement(Image, finalizedProps);
};

exports.ExportableImage = ExportableImage;
var _default = ExportableImage;
exports["default"] = _default;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.InViewAnimation = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntersectionObserver = require("react-intersection-observer");

var _reactSpring = require("react-spring");

var _useBreakpointAwareProps = _interopRequireDefault(require("../hooks/useBreakpointAwareProps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var buildProps = function buildProps(_ref) {
  var y = _ref.y,
      delay = _ref.delay,
      inView = _ref.inView,
      reset = _ref.reset;
  return {
    from: {
      opacity: 0,
      transform: "translate3d(0,".concat(y, "px,0)")
    },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translate3d(0,0,0)" : "translate3d(0,".concat(y, "px,0)")
    },
    delay: delay,
    reset: reset
  };
};

var InViewAnimation = function InViewAnimation(_ref2) {
  var children = _ref2.children,
      _ref2$threshold = _ref2.threshold,
      threshold = _ref2$threshold === void 0 ? 0.3 : _ref2$threshold,
      _ref2$triggerOnce = _ref2.triggerOnce,
      triggerOnce = _ref2$triggerOnce === void 0 ? true : _ref2$triggerOnce,
      _ref2$delay = _ref2.delay,
      delay = _ref2$delay === void 0 ? 400 : _ref2$delay,
      _ref2$y = _ref2.y,
      y = _ref2$y === void 0 ? 20 : _ref2$y;

  var _useInView = (0, _reactIntersectionObserver.useInView)({
    threshold: threshold,
    triggerOnce: triggerOnce
  }),
      _useInView2 = _slicedToArray(_useInView, 2),
      ref = _useInView2[0],
      inView = _useInView2[1];

  var _useSpring = (0, _reactSpring.useSpring)(function () {
    return buildProps({
      y: y,
      delay: delay,
      inView: inView,
      reset: false
    });
  }),
      _useSpring2 = _slicedToArray(_useSpring, 2),
      animationProps = _useSpring2[0],
      set = _useSpring2[1];

  (0, _react.useEffect)(function () {
    set(buildProps({
      y: y,
      delay: delay,
      inView: inView,
      reset: true
    }));
  }, [inView, set, delay, y, threshold]);
  return /*#__PURE__*/_react["default"].createElement(_reactSpring.animated.div, {
    ref: ref,
    style: animationProps
  }, children);
};

exports.InViewAnimation = InViewAnimation;

var ExportableInViewAnimation = function ExportableInViewAnimation(props) {
  var finalizedProps = (0, _useBreakpointAwareProps["default"])({
    props: props,
    breakpointProps: ["threshold", "delay", "y", "triggerOnce", "x"]
  });
  return /*#__PURE__*/_react["default"].createElement(InViewAnimation, finalizedProps);
};

var _default = ExportableInViewAnimation;
exports["default"] = _default;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var P = _styledComponents["default"].p(_templateObject(), _styledSystem.typography, _styledSystem.space, _styledSystem.color, _styledSystem.layout);

var ForwardedP = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(P, _extends({
    ref: ref
  }, props));
});
var _default = ForwardedP;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NOT_DEFINED = void 0;
var NOT_DEFINED = "NOT_DEFINED";
exports.NOT_DEFINED = NOT_DEFINED;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurrentBreakpointProvider = exports.CurrentBreakpointContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var CurrentBreakpointContext = /*#__PURE__*/_react["default"].createContext(0);

exports.CurrentBreakpointContext = CurrentBreakpointContext;

var CurrentBreakpointProvider = function CurrentBreakpointProvider(_ref) {
  var _ref$breakpoints = _ref.breakpoints,
      breakpoints = _ref$breakpoints === void 0 ? ["40em", "52em", "64em"] : _ref$breakpoints,
      _ref$defaultWidth = _ref.defaultWidth,
      defaultWidth = _ref$defaultWidth === void 0 ? 320 : _ref$defaultWidth,
      children = _ref.children;

  var _useState = (0, _react.useState)(defaultWidth),
      _useState2 = _slicedToArray(_useState, 2),
      width = _useState2[0],
      setWidth = _useState2[1];

  var _useState3 = (0, _react.useState)((0, _utils.getCurrentBreakpointFromWidth)(width, breakpoints)),
      _useState4 = _slicedToArray(_useState3, 2),
      currentBreakpoint = _useState4[0],
      setCurrentBreakpoint = _useState4[1];

  (0, _react.useEffect)(function () {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return function () {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  (0, _react.useEffect)(function () {
    setCurrentBreakpoint((0, _utils.getCurrentBreakpointFromWidth)(width, breakpoints));
  }, [width, breakpoints]);
  return /*#__PURE__*/_react["default"].createElement(CurrentBreakpointContext.Provider, {
    value: currentBreakpoint
  }, children);
};

exports.CurrentBreakpointProvider = CurrentBreakpointProvider;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _useCurrentBreakpoint = _interopRequireDefault(require("./useCurrentBreakpoint"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useBreakpointAwareProps = function useBreakpointAwareProps(_ref) {
  var _ref$props = _ref.props,
      props = _ref$props === void 0 ? {} : _ref$props,
      _ref$breakpointProps = _ref.breakpointProps,
      breakpointProps = _ref$breakpointProps === void 0 ? [] : _ref$breakpointProps;
  var breakpoint = (0, _useCurrentBreakpoint["default"])();
  var finalizedProps = Object.keys(props).reduce(function (acc, propName) {
    if (breakpointProps.includes(propName)) {
      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, propName, (0, _utils.getValueForBreakpoint)(props[propName], breakpoint)));
    }

    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, propName, props[propName]));
  }, {});
  return finalizedProps;
};

var _default = useBreakpointAwareProps;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.useCurrentBreakpoint = void 0;

var _react = _interopRequireDefault(require("react"));

var _CurrentBreakpoint = require("../contexts/CurrentBreakpoint");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useCurrentBreakpoint = function useCurrentBreakpoint() {
  return _react["default"].useContext(_CurrentBreakpoint.CurrentBreakpointContext);
};

exports.useCurrentBreakpoint = useCurrentBreakpoint;
var _default = useCurrentBreakpoint;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "P", {
  enumerable: true,
  get: function get() {
    return _P["default"];
  }
});
Object.defineProperty(exports, "Flex", {
  enumerable: true,
  get: function get() {
    return _Flex["default"];
  }
});
Object.defineProperty(exports, "Box", {
  enumerable: true,
  get: function get() {
    return _Box["default"];
  }
});
Object.defineProperty(exports, "Heading", {
  enumerable: true,
  get: function get() {
    return _Heading["default"];
  }
});
Object.defineProperty(exports, "Image", {
  enumerable: true,
  get: function get() {
    return _Image["default"];
  }
});
Object.defineProperty(exports, "InViewAnimation", {
  enumerable: true,
  get: function get() {
    return _InViewAnimation["default"];
  }
});
Object.defineProperty(exports, "CurrentBreakpointProvider", {
  enumerable: true,
  get: function get() {
    return _CurrentBreakpoint.CurrentBreakpointProvider;
  }
});

var _P = _interopRequireDefault(require("./components/P"));

var _Flex = _interopRequireDefault(require("./components/Flex"));

var _Box = _interopRequireDefault(require("./components/Box"));

var _Heading = _interopRequireDefault(require("./components/Heading"));

var _Image = _interopRequireDefault(require("./components/Image"));

var _InViewAnimation = _interopRequireDefault(require("./components/InViewAnimation"));

var _CurrentBreakpoint = require("./contexts/CurrentBreakpoint");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getValueForBreakpoint = exports.getCurrentBreakpointFromWidth = exports.getBreakpointsInPixels = exports.getBreakpointInPixels = exports.isDefined = void 0;

var _constants = require("../constants");

var isDefined = function isDefined(value) {
  return typeof value !== "undefined" && value !== null && value !== _constants.NOT_DEFINED;
};

exports.isDefined = isDefined;

var getBreakpointInPixels = function getBreakpointInPixels(breakpoint) {
  if (breakpoint.match("em")) {
    return parseInt(breakpoint.replace("em", ""), 10) * 16;
  }

  if (breakpoint.match("px")) {
    return parseInt(breakpoint.replace("px", ""), 10);
  }

  return breakpoint;
};

exports.getBreakpointInPixels = getBreakpointInPixels;

var getBreakpointsInPixels = function getBreakpointsInPixels(breakpoints) {
  var pixelBreakpoints = breakpoints.map(function (b) {
    return getBreakpointInPixels(b);
  });
  return pixelBreakpoints;
};

exports.getBreakpointsInPixels = getBreakpointsInPixels;

var getCurrentBreakpointFromWidth = function getCurrentBreakpointFromWidth(width, breakpoints) {
  var pixelBreakpoints = getBreakpointsInPixels(breakpoints);
  var result = pixelBreakpoints.reduce(function (activeBreakpoint, breakpointInPixels) {
    if (width >= breakpointInPixels) {
      activeBreakpoint++;
    }

    return activeBreakpoint;
  }, 0);
  return Math.min(breakpoints.length - 1, result);
};

exports.getCurrentBreakpointFromWidth = getCurrentBreakpointFromWidth;

var getValueForBreakpoint = function getValueForBreakpoint(values, breakpoint) {
  if (!Array.isArray(values)) {
    return 0;
  }

  for (var i = breakpoint; i >= 0; i--) {
    if (isDefined(values[i])) {
      return values[i];
    }
  }

  return values[0];
};

exports.getValueForBreakpoint = getValueForBreakpoint;
