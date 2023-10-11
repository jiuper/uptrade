import { useEffect, useState } from "react";

interface WindowSize {
    width: number;
    height: number;
}

export function useWindowSize(): WindowSize {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const handleSize = () => {
        setWindowSize((prewSize) => ({
            ...prewSize,
            width: window.innerWidth,
            height: window.innerHeight,
        }));
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("resize", handleSize);

            return () => {
                window.removeEventListener("resize", handleSize);
            };
        }
    }, []);

    return windowSize;
}
