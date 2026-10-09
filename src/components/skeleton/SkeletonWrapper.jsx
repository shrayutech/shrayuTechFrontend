import React, { useState, useEffect } from 'react';

/**
 * SkeletonWrapper — Manages smooth cross-fade from skeleton → real content.
 * Duration: 300ms ease-out. No layout shift. No dramatic transitions.
 */
const SkeletonWrapper = ({
  loading = false,
  skeleton,
  children,
  className = '',
}) => {
  const [mounted, setMounted] = useState(loading);
  const [skeletonVisible, setSkeletonVisible] = useState(loading);
  const [contentVisible, setContentVisible] = useState(!loading);

  useEffect(() => {
    if (loading) {
      setMounted(true);
      setSkeletonVisible(true);
      setContentVisible(false);
    } else {
      setSkeletonVisible(false);
      setContentVisible(true);
      const timer = setTimeout(() => {
        setMounted(false);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <div className={`relative w-full ${className}`}>
      {/* Skeleton layer */}
      {mounted && (
        <div
          aria-hidden={!skeletonVisible}
          style={{
            opacity: skeletonVisible ? 1 : 0,
            transition: 'opacity 300ms ease-out',
            position: contentVisible ? 'absolute' : 'relative',
            top: 0, left: 0, right: 0,
            zIndex: skeletonVisible ? 10 : 0,
            pointerEvents: skeletonVisible ? 'auto' : 'none',
          }}
        >
          {skeleton}
        </div>
      )}

      {/* Real content layer */}
      <div
        style={{
          opacity: contentVisible ? 1 : 0,
          transition: 'opacity 300ms ease-out',
          visibility: contentVisible ? 'visible' : 'hidden',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default SkeletonWrapper;
