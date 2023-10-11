import { useState } from "react";

export const useActiveClass = (initState: number) => {
    const [indexBtn, setIndexBtn] = useState<number>(initState);
    const isIndex = (index: number) => setIndexBtn(index);

    return { isIndex, indexBtn };
};
