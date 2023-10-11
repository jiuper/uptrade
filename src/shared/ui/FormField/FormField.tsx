import cnBind from "classnames/bind";

import { TextField } from "../TextField/TextField";

import type { IFormFieldType } from "./FormField.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);

export const FormField = ({
    value,
    placeholder,
    error = null,
    name,
    classPrefix,
    isBlur,
    handleChange,
    disabled,
    title,
    type,
}: IFormFieldType) => {
    return (
        <div className={cx("field")}>
            <span className={cx("field-title")}>{title}</span>
            <TextField
                value={value}
                placeholder={placeholder}
                error={error}
                name={name}
                classPrefix={cx("field-input", classPrefix, disabled && "field-disabled")}
                isBlur={isBlur}
                handleChange={handleChange}
                disabled={disabled}
                type={type}
            />
        </div>
    );
};
