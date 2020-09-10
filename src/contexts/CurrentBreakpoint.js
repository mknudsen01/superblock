import React, { useEffect, useState } from "react";
import { getCurrentBreakpointFromWidth } from "../utils";

export const CurrentBreakpointContext = React.createContext(0);

export const CurrentBreakpointProvider = ({
  breakpoints = ["40em", "52em", "64em"],
  defaultWidth = 320,
  children,
}) => {
  const [width, setWidth] = useState(defaultWidth);
  const [currentBreakpoint, setCurrentBreakpoint] = useState(
    getCurrentBreakpointFromWidth(width, breakpoints)
  );

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setCurrentBreakpoint(getCurrentBreakpointFromWidth(width, breakpoints));
  }, [width, breakpoints]);

  return (
    <CurrentBreakpointContext.Provider value={currentBreakpoint}>
      {children}
    </CurrentBreakpointContext.Provider>
  );
};
