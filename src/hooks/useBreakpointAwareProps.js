import useCurrentBreakpoint from "./useCurrentBreakpoint";
import { getValueForBreakpoint } from "../utils";

const useBreakpointAwareProps = ({ props = {}, breakpointProps = [] }) => {
  const breakpoint = useCurrentBreakpoint();
  const finalizedProps = Object.keys(props).reduce((acc, propName) => {
    if (breakpointProps.includes(propName)) {
      return {
        ...acc,
        [propName]: getValueForBreakpoint(props[propName], breakpoint),
      };
    }

    return {
      ...acc,
      [propName]: props[propName],
    };
  }, {});

  return finalizedProps;
};

export default useBreakpointAwareProps;
