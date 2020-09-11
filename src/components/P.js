import React, { forwardRef } from "react";
import styled from "styled-components";
import { layout, typography, space, color } from "styled-system";
import { hover } from "../utils";

const PNoForward = styled.p`
  ${typography}
  ${space}
  ${color}
  ${layout}
  ${hover}
`;

export const P = forwardRef((props, ref) => (
  <PNoForward ref={ref} {...props} />
));

export default P;
