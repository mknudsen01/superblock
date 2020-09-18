import React, { useState, forwardRef } from "react";
import styled from "styled-components";
import Box from "./Box";
import useBreakpointAwareProps from "../hooks/useBreakpointAwareProps";

const Wrapper = styled(Box)`
  padding-bottom: ${(props) => `${100 * props.aspectRatio}%`};
  position: relative;
`;
const BlurHider = styled(Box)`
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: ${(props) => (props.isLoaded ? 1 : 0)};
  transition: 1s all ease;
  transform: ${(props) => `translate(0, ${props.imagePositionY}%)`};
  filter: ${(props) => (props.hasBlur ? "blur(5px)" : "none")};
`;

export const _Image = forwardRef((props, ref) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSmallLoaded, setIsSmallLoaded] = useState(false);
  const {
    src,
    alt,
    imgHeight,
    onClick,
    imgWidth,
    smallSrc,
    className,
    imagePositionY = 0,
    aspectRatio,
    ...rest
  } = props;

  return (
    <Wrapper
      ref={ref}
      {...rest}
      aspectRatio={aspectRatio}
      className={className}
      onClick={onClick}
    >
      <BlurHider>
        <StyledImage
          src={smallSrc}
          alt={alt}
          isLoaded={isSmallLoaded}
          imagePositionY={imagePositionY}
          hasBlur
          onLoad={(e) => {
            setIsSmallLoaded(true);
          }}
        />
        <StyledImage
          src={src}
          alt={alt}
          isLoaded={isLoaded}
          imagePositionY={imagePositionY}
          onLoad={(e) => {
            setIsLoaded(true);
          }}
        />
      </BlurHider>
    </Wrapper>
  );
});

const Image = forwardRef((props, ref) => {
  const finalizedProps = useBreakpointAwareProps({
    props,
    breakpointProps: [
      "src",
      "smallSrc",
      "imgHeight",
      "imgWidth",
      "imagePositionY",
      "aspectRatio",
      "alt",
    ],
  });
  return <_Image ref={ref} {...finalizedProps} />;
});

export default Image;
