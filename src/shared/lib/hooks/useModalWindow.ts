import { useEffect, useRef } from "react";

import { useBooleanState } from "./useBooleanState";

export const useModalWindow = () => {
    const { value, setFalse, toggleValue } = useBooleanState(false);
    const isRef = useRef<HTMLDivElement | null>(null);
    const handleClickOutside = (e: MouseEvent) => {
        if (isRef.current && !isRef.current.contains(e.target as HTMLDivElement)) {
            setFalse();
        }
    };
    const handleToggleModalWindow = () => toggleValue();
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    return { value, handleToggleModalWindow, isRef };
};
