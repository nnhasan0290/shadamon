import { useState, useCallback, useEffect } from "react";

export const useScrollDir = () => {
  const [y, setY] = useState(0);
  const [scrollTop, setScrollTop] = useState(false);

  const handleNavigation = useCallback(
    (e: any) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setScrollTop(true);
      } else if (y < window.scrollY) {
        setScrollTop(false);
      }
      setY(window.scrollY);
    },
    [y]
  );
  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);
  return scrollTop;
};
