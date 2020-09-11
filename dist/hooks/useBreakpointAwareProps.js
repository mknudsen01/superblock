"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _useCurrentBreakpoint = _interopRequireDefault(require("./useCurrentBreakpoint"));

var _utils = require("../utils");

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getPropsForBreakpoint = function getPropsForBreakpoint(_ref) {
  var props = _ref.props,
      breakpointProps = _ref.breakpointProps,
      breakpoint = _ref.breakpoint;
  return Object.keys(props).reduce(function (acc, propName) {
    if (breakpointProps.includes(propName)) {
      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, propName, (0, _utils.getValueForBreakpoint)(props[propName], breakpoint)));
    }

    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, propName, props[propName]));
  }, {});
};

var useBreakpointAwareProps = function useBreakpointAwareProps(_ref2) {
  var _ref2$props = _ref2.props,
      props = _ref2$props === void 0 ? {} : _ref2$props,
      _ref2$breakpointProps = _ref2.breakpointProps,
      breakpointProps = _ref2$breakpointProps === void 0 ? [] : _ref2$breakpointProps;
  var breakpoint = (0, _useCurrentBreakpoint["default"])();

  var _props$hover = props.hover,
      hoverProps = _props$hover === void 0 ? {} : _props$hover,
      nonHoverProps = _objectWithoutProperties(props, ["hover"]);

  var finalizedProps = getPropsForBreakpoint({
    props: nonHoverProps,
    breakpointProps: breakpointProps,
    breakpoint: breakpoint
  });
  var finalizedHoverProps = getPropsForBreakpoint({
    props: hoverProps,
    breakpointProps: _constants.HOVER_PROPS,
    breakpoint: breakpoint
  });
  return _objectSpread(_objectSpread({}, finalizedProps), {}, {
    hover: finalizedHoverProps
  });
};

var _default = useBreakpointAwareProps;
exports["default"] = _default;