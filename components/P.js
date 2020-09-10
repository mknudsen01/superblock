import React, { forwardRef } from "react";
import styled from "styled-components";
import { layout, typography, space, color } from "styled-system";

const P = styled.p`
  ${typography}
  ${space}
  ${color}
  ${layout}
`;

const ForwardedP = forwardRef((props, ref) => <P ref={ref} {...props} />);

export default ForwardedP;
