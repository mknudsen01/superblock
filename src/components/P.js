import React, { forwardRef } from "react";
import styled from "styled-components";
import { shadow, layout, typography, space, color } from "styled-system";
import { hover } from "../utils";

const _P = styled.p`
  ${typography}
  ${space}
  ${color}
  ${layout}
  ${shadow}
  ${hover}
`;

export const P = forwardRef((props, ref) => <_P ref={ref} {...props} />);

export default P;
