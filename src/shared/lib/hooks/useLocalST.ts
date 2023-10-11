import { useCallback, useEffect, useState } from "react";

export const useLocalST = <T>(key: string, initialValue: T): [T, (value: T) => void] => {
    const readValue = useCallback((): T => {
        if (typeof window === "undefined") {
            return initialValue;
        }

        try {
            const item = localStorage.getItem(key);

            return item ? (parseJSON(item) as T) : initialValue;
        } catch (error) {
            return initialValue;
        }
    }, [initialValue, key]);

    const [storedValue, setStoredValue] = useState<T>(readValue);

    const setValue = useCallback((value: T) => {
        if (typeof window === "undefined") {
            return undefined;
        }
        localStorage.setItem(key, JSON.stringify(value));
        setStoredValue(value);
    }, []);

    useEffect(() => {
        setStoredValue(readValue());
    }, []);

    function parseJSON<T>(value: string | null): T | undefined {
        try {
            return value === "undefined" ? undefined : JSON.parse(value ?? "");
        } catch {
            return undefined;
        }
    }

    return [storedValue, setValue];
};
