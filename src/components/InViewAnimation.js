import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "react-spring";
import useBreakpointAwareProps from "../hooks/useBreakpointAwareProps";

const buildProps = ({ y, delay, inView, reset }) => ({
  from: {
    opacity: 0,
    transform: `translate3d(0,${y}px,0)`,
  },
  to: {
    opacity: inView ? 1 : 0,
    transform: inView ? `translate3d(0,0,0)` : `translate3d(0,${y}px,0)`,
  },
  delay,
  reset,
});

export const InViewAnimation = ({
  children,
  threshold = 0.3,
  triggerOnce = true,
  delay = 400,
  y = 20,
}) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
  });

  const [animationProps, set] = useSpring(() =>
    buildProps({ y, delay, inView, reset: false })
  );

  useEffect(() => {
    set(buildProps({ y, delay, inView, reset: true }));
  }, [inView, set, delay, y, threshold]);

  return (
    <animated.div ref={ref} style={animationProps}>
      {children}
    </animated.div>
  );
};

const ExportableInViewAnimation = (props) => {
  const finalizedProps = useBreakpointAwareProps({
    props,
    breakpointProps: ["threshold", "delay", "y", "triggerOnce", "x"],
  });

  return <InViewAnimation {...finalizedProps} />;
};

export default ExportableInViewAnimation;
