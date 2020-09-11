import React, { forwardRef } from "react";
import styled from "styled-components";
import {
  compose,
  typography,
  space,
  color,
  flexbox,
  background,
  shadow,
  layout,
} from "styled-system";
import { hover } from "../utils";
import useBreakpointAwareProps from "../hooks/useBreakpointAwareProps";

const _Box = styled.div`
  ${compose(typography, space, color, flexbox, background, shadow, layout)}
  ${hover}
`;

export const Box = forwardRef((props, ref) => <_Box ref={ref} {...props} />);

const ExportableBox = (props) => {
  const finalizedProps = useBreakpointAwareProps({ props });
  return <Box {...finalizedProps} />;
};

export default ExportableBox;
