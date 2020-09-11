"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hover = exports.getValueForBreakpoint = exports.getCurrentBreakpointFromWidth = exports.getBreakpointsInPixels = exports.getBreakpointInPixels = exports.isDefined = void 0;

var _constants = require("../constants");

var _styledSystem = require("styled-system");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    return values;
  }

  for (var i = breakpoint; i >= 0; i--) {
    if (isDefined(values[i])) {
      return values[i];
    }
  }

  return values[0];
};

exports.getValueForBreakpoint = getValueForBreakpoint;

var getValue = function getValue(obj, pathOrValue) {
  return (0, _styledSystem.get)(obj, pathOrValue, pathOrValue);
};

var getTranslate = function getTranslate() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (!x && !y) {
    return "";
  }

  return "translate(".concat(x, "px, ").concat(y, "px)");
};

var getScale = function getScale(scale) {
  if (!scale) {
    return "";
  }

  return "scale(".concat(scale, ")");
};

var getRotate = function getRotate(rotate) {
  if (!rotate) {
    return "";
  }

  return "rotate(".concat(rotate, ")");
};

var hover = function hover(props) {
  var _ref = props.hover || {},
      backgroundColor = _ref.backgroundColor,
      color = _ref.color,
      translateX = _ref.translateX,
      translateY = _ref.translateY,
      scale = _ref.scale,
      rotate = _ref.rotate,
      boxShadow = _ref.boxShadow,
      _ref$transitionDurati = _ref.transitionDuration,
      transitionDuration = _ref$transitionDurati === void 0 ? "0.3s" : _ref$transitionDurati,
      _ref$transitionTiming = _ref.transitionTimingFunction,
      transitionTimingFunction = _ref$transitionTiming === void 0 ? "ease" : _ref$transitionTiming,
      _ref$cursor = _ref.cursor,
      cursor = _ref$cursor === void 0 ? "auto" : _ref$cursor;

  if (!backgroundColor && !color && !translateX && !translateY && !scale && !rotate && !boxShadow && cursor === "auto") {
    return {};
  }

  return {
    transition: "".concat(transitionDuration, " all ").concat(transitionTimingFunction),
    "&:hover": _objectSpread(_objectSpread(_objectSpread(_objectSpread({
      cursor: cursor
    }, !!backgroundColor && {
      backgroundColor: getValue(props.theme.colors, backgroundColor)
    }), !!color && {
      color: getValue(props.theme.colors, color)
    }), !!boxShadow && {
      boxShadow: getValue(props.theme.shadows, boxShadow)
    }), !!(translateX || translateY || scale || rotate) && {
      transform: "".concat(getTranslate(translateX, translateY), " ").concat(getScale(scale), " ").concat(getRotate(rotate))
    })
  };
};

exports.hover = hover;