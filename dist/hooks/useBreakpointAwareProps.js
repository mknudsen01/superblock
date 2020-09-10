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