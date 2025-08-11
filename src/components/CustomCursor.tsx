import { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let targetX = 0;
    let targetY = 0;
    let isHovering = false;
    let rafId = 0;

    const update = () => {
      cursor.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) scale(${isHovering ? 1.5 : 1})`;
      rafId = requestAnimationFrame(update);
    };

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX - 10;
      targetY = e.clientY - 10;
    };

    // Hover handling without React re-renders
    const handleMouseEnter = () => { isHovering = true; };
    const handleMouseLeave = () => { isHovering = false; };

    const interactiveElements = document.querySelectorAll(
      'button, a, [role="button"], input, textarea, select'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    document.addEventListener('mousemove', onMove, { passive: true });
    rafId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', onMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor pointer-events-none will-change-transform"
      aria-hidden="true"
      style={{
        transform: 'translate3d(-100px, -100px, 0)',
      }}
    />
  );
};