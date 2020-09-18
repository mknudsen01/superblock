import React, { forwardRef } from "react";
import styled from "styled-components";
import { shadow, typography, space, color, layout } from "styled-system";
import { hover } from "../utils";
import useBreakpointAwareProps from "../hooks/useBreakpointAwareProps";

const _Heading = styled.h2`
  ${typography}
  ${space}
  ${color}
  ${layout}
  ${shadow}
  ${hover}
`;

const Heading = forwardRef(({ headingLevel = 2, ...rest }, ref) => {
  const finalizedProps = useBreakpointAwareProps({ props: rest });
  return <_Heading as={`h${headingLevel}`} ref={ref} {...finalizedProps} />;
});

export default Heading;
