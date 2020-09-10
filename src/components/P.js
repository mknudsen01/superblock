import React, { forwardRef } from "react";
import styled from "styled-components";
import { layout, typography, space, color } from "styled-system";

const PNoForward = styled.p`
  ${typography}
  ${space}
  ${color}
  ${layout}
`;

export const P = forwardRef((props, ref) => (
  <PNoForward ref={ref} {...props} />
));

export default P;
