import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SkeletonContext = createContext({
  isLoading: false,
  isDemoMode: false,
  triggerLoading: () => {},
  toggleDemoMode: () => {},
  setIsLoading: () => {},
});

export const SkeletonProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDemoMode, setIsDemoMode] = useState(false);
  const location = useLocation();

  // Simulate smooth initial page load & route transition loading state
  useEffect(() => {
    if (!isDemoMode) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 700); // 700ms elegant initial load
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  const triggerLoading = (duration = 1200) => {
    setIsLoading(true);
    setTimeout(() => {
      if (!isDemoMode) {
        setIsLoading(false);
      }
    }, duration);
  };

  const toggleDemoMode = () => {
    setIsDemoMode((prev) => {
      const nextState = !prev;
      setIsLoading(nextState);
      return nextState;
    });
  };

  const activeLoadingState = isDemoMode || isLoading;

  return (
    <SkeletonContext.Provider
      value={{
        isLoading: activeLoadingState,
        isDemoMode,
        triggerLoading,
        toggleDemoMode,
        setIsLoading,
      }}
    >
      {children}
    </SkeletonContext.Provider>
  );
};

export const useSkeleton = () => {
  const context = useContext(SkeletonContext);
  if (!context) {
    throw new Error('useSkeleton must be used within a SkeletonProvider');
  }
  return context;
};
