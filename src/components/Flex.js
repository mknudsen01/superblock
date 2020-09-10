import React, { forwardRef } from "react";
import styled from "styled-components";
import { Box } from "./Box";

const Flex = styled(Box)`
  display: flex;
`;

const Forwarded = forwardRef((props, ref) => <Flex ref={ref} {...props} />);

export default Forwarded;
