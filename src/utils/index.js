import { NOT_DEFINED } from "../constants";

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
    return 0;
  }
  for (let i = breakpoint; i >= 0; i--) {
    if (isDefined(values[i])) {
      return values[i];
    }
  }
  return values[0];
};
