// Using a custom hook to ensure that "cartItems" are stored across page refreshes

import { useState, useEffect, useCallback } from "react";

function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
          const item = window.localStorage.getItem(key);
          return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    const setValue = useCallback((value) => {
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
          } catch (error) {
            console.error(error);
        }
    }, [key]);

    useEffect(() => {
        setValue(storedValue);
    }, [storedValue, setValue]); // React Hook useEffect has a missing dependency: 'setValue'... 
    
      return [storedValue, setValue];
}

export default useLocalStorage;