import React, { forwardRef } from "react";
import styled from "styled-components";
import { typography, space, color, layout } from "styled-system";
import { hover } from "../utils";
import useBreakpointAwareProps from "../hooks/useBreakpointAwareProps";

const HeadingNoForward = styled.h2`
  ${typography}
  ${space}
  ${color}
  ${layout}
  ${hover}
`;

export const Heading = forwardRef(({ headingLevel = 2, ...rest }, ref) => {
  return <HeadingNoForward as={`h${headingLevel}`} ref={ref} {...rest} />;
});

const ExportableHeading = (props) => {
  const finalizedProps = useBreakpointAwareProps({ props });
  return <Heading {...finalizedProps} />;
};

export default ExportableHeading;
