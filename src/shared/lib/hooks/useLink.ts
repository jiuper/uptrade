import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

type handleIsLink = (hrefNameLink: string) => void;
export const useLink = (hrefName?: string, handleActionLink?: () => void): [(() => void) | undefined, handleIsLink] => {
    const href = useNavigate();
    const isLink: handleIsLink = useCallback((hrefNameLink) => href(hrefNameLink), [href]);
    const handleClick = useMemo(
        () => (hrefName ? () => isLink(hrefName) : handleActionLink),
        [handleActionLink, hrefName, isLink],
    );

    return [handleClick, isLink];
};
