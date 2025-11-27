import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useRef } from "react";

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows, restoreWindow } = useWindowStore();
    const { isOpen, zIndex, isMinimized, isMaximized, positionX, positionY } = windows[windowKey];
    const ref = useRef(null);
    const isAnimatingRef = useRef(false);

    // Animation: Open window with fade and scale
    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      if (isOpen && !isMinimized) {
        // Show element first, then animate
        el.style.display = "block";
        gsap.fromTo(
          el,
          { scale: 0.8, opacity: 0, y: 40 },
          { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: "power3.out" }
        );
      } else if (isMinimized || !isOpen) {
        // Hide element
        gsap.to(el, {
          opacity: 0,
          scale: 0.8,
          y: 40,
          duration: 0.2,
          ease: "power3.in",
          onComplete: () => {
            el.style.display = "none";
          }
        });
      }
    }, [isOpen, isMinimized]);

    // Setup dragging functionality
    useGSAP(() => {
      const el = ref.current;
      if (!el || isMinimized || isMaximized) return;

      // Only make draggable if not minimized or maximized
      const [instance] = Draggable.create(el, {
        onPress: () => {
          isAnimatingRef.current = true;
          focusWindow(windowKey);
        },
        onDragEnd: () => {
          isAnimatingRef.current = false;
        },
        bounds: "body", // Keep within viewport
      });

      return () => instance.kill();
    }, [isMinimized, isMaximized]);

    // Add click handler to restore from minimized state (if clicked from dock)
    const handleMinimizedRestore = (e) => {
      if (e.target === ref.current && isMinimized) {
        restoreWindow(windowKey);
      }
    };

    // Add click handler to focus window when clicking anywhere on it
    const handleWindowClick = (e) => {
      if (isOpen && !isMinimized) {
        focusWindow(windowKey);
      }
      handleMinimizedRestore(e);
    };

    return (
      <section
        id={windowKey}
        ref={ref}
        data-maximized={isMaximized}
        style={{
          zIndex,
          cursor: isMinimized ? "pointer" : "auto",
          pointerEvents: isOpen ? "auto" : "none",
          minWidth: "300px",
          minHeight: "200px",
        }}
        className="absolute"
        onClick={handleWindowClick}
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
};

export default WindowWrapper;
