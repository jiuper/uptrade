import { useEffect, useMemo, useState } from "react";

export const useSizeResponseImages = (filesImg: File[]) => {
    const [sizeImg, setSizeImg] = useState<number>(0);

    const respImg = useMemo(() => (sizeImg > 133 ? 133.333 : sizeImg < 20 ? 20 : sizeImg), [sizeImg]);
    useEffect(() => {
        if (filesImg.length) {
            const img = new Image();
            img.src = URL.createObjectURL(filesImg[0]);
            img.onload = () => {
                setSizeImg((img.height / img.width) * 100);
            };
        }
    }, [filesImg]);

    return respImg;
};
