import { useState, useEffect } from 'react';

function getIsMediumScreen(mobileSize) {
  const { innerWidth: width } = window;
  return width < mobileSize;
}

function isSmallerThenSize(setIsMediumScreen, size) {
  function handleResize() {
    setIsMediumScreen(getIsMediumScreen(size));
  }
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}

export function useIsMediumScreen() {
  const screenSize = 1000;
  const [isMediumScreen, setIsMediumScreen] = useState(getIsMediumScreen(screenSize));
  useEffect(() => {
    isSmallerThenSize(setIsMediumScreen, screenSize);
  }, []);

  return isMediumScreen;
}

export function useIsSmallScreen() {
  const screenSize = 600;
  const [isSmallScreen, setIsSmallScreen] = useState(getIsMediumScreen(screenSize));
  useEffect(() => {
    isSmallerThenSize(setIsSmallScreen, screenSize);
  }, []);

  return isSmallScreen;
}
