import React, { forwardRef } from "react";
import styled from "styled-components";
import { Box } from "./Box";

const FlexNoForward = styled(Box)`
  display: flex;
`;

export const Flex = forwardRef((props, ref) => (
  <FlexNoForward ref={ref} {...props} />
));

export default Flex;
