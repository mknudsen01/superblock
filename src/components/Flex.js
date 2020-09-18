import React, { forwardRef } from "react";
import styled from "styled-components";
import Box from "./Box";

const _Flex = styled(Box)`
  display: flex;
`;

export const Flex = forwardRef((props, ref) => <_Flex ref={ref} {...props} />);

export default Flex;
