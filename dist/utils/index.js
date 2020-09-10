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