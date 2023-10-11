import cnBind from "classnames/bind";

import type { IButton } from "./Button.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);

export const Button = ({
    className,
    children,
    type,
    handleClick,
    fill = "clear",
    disabled = false,
}: IButton): JSX.Element => {
    return (
        <button
            className={cx("button", fill, className || "")}
            disabled={disabled}
            type={type ? "submit" : "button"}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};
