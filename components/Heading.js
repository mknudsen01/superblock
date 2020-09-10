import React, { forwardRef } from "react";
import styled from "styled-components";
import { typography, space, color, layout } from "styled-system";

const Heading = styled.h2`
  ${typography}
  ${space}
  ${color}
  ${layout}
`;

const ForwardedHeading = forwardRef(({ headingLevel = 2, ...rest }, ref) => {
  return <Heading as={`h${headingLevel}`} ref={ref} {...rest} />;
});

export default ForwardedHeading;
