import type { ChangeEvent } from "react";
import cnBind from "classnames/bind";

import type { InputLoaderFileType } from "./InputLoaderFile.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const InputLoaderFile = ({ classPrefix, handleUpLoader }: InputLoaderFileType) => {
    const upLoaderMediaFile = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files;

        if (file && file.length > 0) {
            handleUpLoader(file[0]);
            e.target.value = "";
        }
    };

    return <input onChange={(e) => upLoaderMediaFile(e)} multiple type="file" className={cx(classPrefix)} />;
};
