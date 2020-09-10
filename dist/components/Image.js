"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Image = void 0;

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

var _default = ExportableImage;
exports["default"] = _default;