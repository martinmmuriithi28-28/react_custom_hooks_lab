import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue = null) {
  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key);

    if (storedValue !== null) {
      return storedValue;
    }

    return initialValue;
  });

  useEffect(() => {
    if (state === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, state);
    }
  }, [key, state]);

  return [state, setState];
}