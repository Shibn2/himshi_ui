import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<
    "sm" | "md" | "lg" | "xl" | "xxl"
  >("sm");

  //   $screen-sm: 480px;
  // $screen-md: 768px;
  // $screen-lg: 1024px;
  // $screen-xl: 1200px;
  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      if (width < 640) setBreakpoint("sm");
      else if (width < 768) setBreakpoint("md");
      else if (width < 1024) setBreakpoint("lg");
      else if (width < 1200) setBreakpoint("xl");
      else setBreakpoint("xxl");
    };

    update(); // set on mount
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return breakpoint;
}

export function useBreakpointPixel(): number {
  const [breakpoint, setBreakpoint] = useState<number>(window.innerWidth);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      setBreakpoint(width);
    };

    update(); // set on mount
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return breakpoint;
}

export function useScrollPercentage(): number {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = (e: any) => {
    const currPageScrollPercentage =
      (window.scrollY / window.innerHeight) * 100;
    setScrollPercentage(currPageScrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollPercentage;
}
