import cnBind from "classnames/bind";

import type { ITextField } from "./TextField.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);

export const TextField = ({
    placeholder,
    name,
    classPrefix,
    value,
    handleChange,
    disabled,
    isBlur,
    error = "",
    type = "text",
    maxLength,
}: ITextField) => {
    return (
        <>
            <input
                type={type}
                step={0.1}
                placeholder={placeholder}
                className={cx("field", classPrefix, error ? "error" : "")}
                value={value}
                name={name}
                disabled={disabled}
                onBlur={isBlur}
                onChange={handleChange}
                maxLength={maxLength}
            />
            {error ? <span className={cx("input-error")}>{error}</span> : ""}
        </>
    );
};
