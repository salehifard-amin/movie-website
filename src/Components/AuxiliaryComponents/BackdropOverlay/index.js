import { useCallback, useEffect, useState } from "react";
import { Overlay } from "./styled";
import { throttle } from "lodash";

const BackdropOverlay = () => {
  const [opacity, setOpacity] = useState(0);

  const handleScroll = useCallback(
    throttle(() => {
      const scrollY = window.scrollY;
      const newOpacity = Math.min(scrollY / 300, 0.6);
      setOpacity(newOpacity);
    }, 100),
    []
  );
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return <Overlay $props={opacity} />;
};

export default BackdropOverlay;
