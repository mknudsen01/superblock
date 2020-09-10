import React, { forwardRef } from "react";
import styled from "styled-components";
import { typography, space, color, layout } from "styled-system";

const HeadingNoForward = styled.h2`
  ${typography}
  ${space}
  ${color}
  ${layout}
`;

export const Heading = forwardRef(({ headingLevel = 2, ...rest }, ref) => {
  return <HeadingNoForward as={`h${headingLevel}`} ref={ref} {...rest} />;
});

export default Heading;
