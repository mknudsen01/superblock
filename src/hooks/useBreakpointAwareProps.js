import useCurrentBreakpoint from "./useCurrentBreakpoint";
import { getValueForBreakpoint } from "../utils";
import { HOVER_PROPS } from "../constants";

const getPropsForBreakpoint = ({ props, breakpointProps, breakpoint }) => {
  return Object.keys(props).reduce((acc, propName) => {
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
};

const useBreakpointAwareProps = ({ props = {}, breakpointProps = [] }) => {
  const breakpoint = useCurrentBreakpoint();
  const { hover: hoverProps = {}, ...nonHoverProps } = props;
  const finalizedProps = getPropsForBreakpoint({
    props: nonHoverProps,
    breakpointProps,
    breakpoint,
  });
  const finalizedHoverProps = getPropsForBreakpoint({
    props: hoverProps,
    breakpointProps: HOVER_PROPS,
    breakpoint,
  });
  return {
    ...finalizedProps,
    hover: finalizedHoverProps,
  };
};

export default useBreakpointAwareProps;
