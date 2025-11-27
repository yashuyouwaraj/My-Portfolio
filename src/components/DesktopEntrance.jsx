import { useEffect, useRef } from "react";
import gsap from "gsap";

const DesktopEntrance = ({ isVisible, children }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (!isVisible || !contentRef.current) return;

    // Start animation immediately - loading screen fade out happens at 3.5s
    // This gives perfect sync with loading screen completion
    const tl = gsap.timeline();

    // Fade in the main content
    tl.fromTo(
      contentRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.7, ease: "power2.out" }
    );

    // Stagger animation for main components
    const navbar = contentRef.current.querySelector("nav");
    const welcome = contentRef.current.querySelector("[class*='welcome']");
    const dock = contentRef.current.querySelector("[class*='dock']");
    const windows = contentRef.current.querySelectorAll(
      "[class*='window'], [class*='finder'], [class*='safari'], [class*='terminal']"
    );

    // Navbar slides down from top
    if (navbar) {
      tl.fromTo(
        navbar,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "back.out(1.2)" },
        0.2
      );
    }

    // Welcome section fades and scales up
    if (welcome) {
      tl.fromTo(
        welcome,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.1)" },
        0.3
      );
    }

    // Dock slides up from bottom with bounce
    if (dock) {
      tl.fromTo(
        dock,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.3)" },
        0.5
      );
    }

    // Windows fade in with stagger
    if (windows.length > 0) {
      tl.fromTo(
        Array.from(windows),
        { opacity: 0, scale: 0.9, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(1)",
          stagger: 0.08,
        },
        0.6
      );
    }

    // Home component (main content) fades in last
    const home = contentRef.current.querySelector("[class*='home']");
    if (home) {
      tl.fromTo(
        home,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" },
        0.8
      );
    }

    return () => {
      tl.kill();
    };
  }, [isVisible]);

  return (
    <div ref={contentRef} style={{ display: isVisible ? "block" : "none" }}>
      {children}
    </div>
  );
};

export default DesktopEntrance;