import cnBind from "classnames/bind";

import type { ITitleType } from "./Title.type";

import styles from "./style.module.css";

const cx = cnBind.bind(styles);
export const Title = ({ caption, handleAction, classPrefix }: ITitleType) => {
    return (
        <span className={cx(classPrefix)} onClick={handleAction}>
            {caption}
        </span>
    );
};
