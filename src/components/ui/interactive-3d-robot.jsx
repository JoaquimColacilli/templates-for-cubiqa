'use client';

import { Suspense, lazy, useCallback, useRef, useEffect } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));

function removeWatermark(container) {
  if (!container) return;
  // The watermark is a logo link injected by Spline as a sibling/child near the canvas
  const links = container.querySelectorAll('a');
  links.forEach((a) => {
    a.remove();
  });
  // Also check for any div overlays that aren't the canvas
  const divs = container.querySelectorAll('div');
  divs.forEach((div) => {
    if (div.querySelector('canvas')) return; // keep the canvas container
    const style = window.getComputedStyle(div);
    if (style.position === 'absolute' || style.position === 'fixed') {
      div.remove();
    }
  });
}

export function InteractiveRobotSpline({ scene, className }) {
  const wrapperRef = useRef(null);

  const onLoad = useCallback((splineApp) => {
    // Remove watermark from canvas parent
    const canvas = splineApp?.canvas;
    if (canvas) {
      removeWatermark(canvas.parentElement);
      removeWatermark(canvas.parentElement?.parentElement);
    }
    // Also clean from our wrapper
    removeWatermark(wrapperRef.current);
  }, []);

  // MutationObserver to catch dynamically injected watermark
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const observer = new MutationObserver(() => {
      removeWatermark(wrapper);
      // Also traverse deeper
      const innerDivs = wrapper.querySelectorAll('div');
      innerDivs.forEach((div) => removeWatermark(div));
    });

    observer.observe(wrapper, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className={`relative ${className || ''}`} style={{ overflow: 'hidden' }}>
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center text-white"
            style={{ backgroundColor: '#0A0A0A' }}
          >
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z"></path>
            </svg>
          </div>
        }
      >
        <Spline
          scene={scene}
          onLoad={onLoad}
        />
      </Suspense>
    </div>
  );
}
