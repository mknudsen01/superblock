import { NOT_DEFINED } from "../constants";
import { get } from "styled-system";

export const isDefined = (value) => {
  return (
    typeof value !== "undefined" && value !== null && value !== NOT_DEFINED
  );
};

export const getBreakpointInPixels = (breakpoint) => {
  if (breakpoint.match("em")) {
    return parseInt(breakpoint.replace("em", ""), 10) * 16;
  }
  if (breakpoint.match("px")) {
    return parseInt(breakpoint.replace("px", ""), 10);
  }
  return breakpoint;
};

export const getBreakpointsInPixels = (breakpoints) => {
  const pixelBreakpoints = breakpoints.map((b) => getBreakpointInPixels(b));
  return pixelBreakpoints;
};

export const getCurrentBreakpointFromWidth = (width, breakpoints) => {
  const pixelBreakpoints = getBreakpointsInPixels(breakpoints);
  const result = pixelBreakpoints.reduce(
    (activeBreakpoint, breakpointInPixels) => {
      if (width >= breakpointInPixels) {
        activeBreakpoint++;
      }
      return activeBreakpoint;
    },
    0
  );

  return Math.min(breakpoints.length - 1, result);
};

export const getValueForBreakpoint = (values, breakpoint) => {
  if (!Array.isArray(values)) {
    return values;
  }
  for (let i = breakpoint; i >= 0; i--) {
    if (isDefined(values[i])) {
      return values[i];
    }
  }
  return values[0];
};

const getValue = (obj, pathOrValue) => get(obj, pathOrValue, pathOrValue);
const getTranslate = (x = 0, y = 0) => {
  if (!x && !y) {
    return ``;
  }
  return `translate(${x}px, ${y}px)`;
};
const getScale = (scale) => {
  if (!scale) {
    return ``;
  }
  return `scale(${scale})`;
};
const getRotate = (rotate) => {
  if (!rotate) {
    return ``;
  }
  return `rotate(${rotate})`;
};

export const hover = (props) => {
  const {
    backgroundColor,
    color,
    translateX,
    translateY,
    scale,
    rotate,
    boxShadow,
    transitionDuration = 0.3,
    transitionTimingFunction = "ease",
    cursor = "auto",
  } = props.hover || {};

  if (
    !backgroundColor &&
    !color &&
    !translateX &&
    !translateY &&
    !scale &&
    !rotate &&
    !boxShadow &&
    cursor === "auto"
  ) {
    return {};
  }

  return {
    transition: `${transitionDuration}s all ${transitionTimingFunction}`,
    "&:hover": {
      cursor,
      ...(!!backgroundColor && {
        backgroundColor: getValue(props.theme.colors, backgroundColor),
      }),
      ...(!!color && { color: getValue(props.theme.colors, color) }),
      ...(!!boxShadow && {
        boxShadow: getValue(props.theme.shadows, boxShadow),
      }),
      ...(!!(translateX || translateY || scale || rotate) && {
        transform: `${getTranslate(translateX, translateY)} ${getScale(
          scale
        )} ${getRotate(rotate)}`,
      }),
    },
  };
};
