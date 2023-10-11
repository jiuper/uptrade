import cnBind from "classnames/bind";

import { Button } from "../Button/Button";
import { SvgIcon } from "../SvgIcon/SvgIcon";

import type { ButtonIconType } from "./ButtonIcon.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const ButtonIcon = ({
    path,
    nameIcon,
    handleAction = () => {},
    classPrefix,
    classPrefixIcon,
    fill,
    classIconSize = "low",
    children,
    disabled = false,
}: ButtonIconType) => {
    return (
        <Button
            disabled={disabled}
            fill={fill}
            className={cx("tooltip__button", classPrefix)}
            handleClick={handleAction}
        >
            {children}
            <SvgIcon classPrefix={cx(classPrefixIcon, classIconSize)} name={nameIcon} svgPath={path} />
            <span className={cx("tooltip", "tooltip__show")}>asd</span>
        </Button>
    );
};
