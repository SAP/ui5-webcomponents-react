import { useState, useCallback, useRef } from 'react';
let subscribers = [];

export const useRateChanged = () => {
  const subscribe = useCallback((callback) => {
    subscribers.push(callback);
  }, []);

  const rateChanged = useCallback((value) => {
    subscribers.forEach((subscriber) => {
      subscriber(value);
    });
  }, []);

  return [rateChanged, subscribe];
};
