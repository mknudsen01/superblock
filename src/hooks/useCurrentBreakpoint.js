import React from "react";
import { CurrentBreakpointContext } from "../contexts/CurrentBreakpoint";

export const useCurrentBreakpoint = () =>
  React.useContext(CurrentBreakpointContext);

export default useCurrentBreakpoint;
