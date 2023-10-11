import { useCallback, useState } from "react";

export const useOpenModal = (init: boolean) => {
    const [isOpen, setIsOpen] = useState<boolean>(init || false);
    const toggleIsOpen = useCallback(() => setIsOpen((prev) => !prev), []);

    return { isOpen, toggleIsOpen };
};
