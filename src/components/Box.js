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

const BoxNoForward = styled.div`
  ${compose(typography, space, color, flexbox, background, shadow, layout)}
`;

export const Box = forwardRef((props, ref) => (
  <BoxNoForward ref={ref} {...props} />
));

export default Box;
