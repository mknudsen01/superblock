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

export const Box = styled.div`
  ${compose(typography, space, color, flexbox, background, shadow, layout)}
`;

const Forwarded = forwardRef((props, ref) => <Box ref={ref} {...props} />);

export default Forwarded;
