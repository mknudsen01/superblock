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