import { useCallback, useState } from "react";

import { useOpenModal } from "../../../../shared/lib/hooks/useOpenModal";

export const useAction = () => {
    const { isOpen, toggleIsOpen } = useOpenModal(false);
    const [isForm, setIsForm] = useState<boolean>(false);
    const setFalse = useCallback(() => {
        setIsForm(false);
    }, []);
    const handleIsAction = useCallback((index?: number) => {
        switch (index) {
            case 1:
                setIsForm((prevState) => !prevState);

                return toggleIsOpen();
            default:
                setIsForm(false);

                return toggleIsOpen();
        }
    }, []);

    return { handleIsAction, isForm, isOpen, toggleIsOpen, setFalse };
};
