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