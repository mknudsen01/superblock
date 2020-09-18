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

const Box = forwardRef((props, ref) => {
  const finalizedProps = useBreakpointAwareProps({ props });
  return <_Box ref={ref} {...finalizedProps} />;
});

export default Box;
