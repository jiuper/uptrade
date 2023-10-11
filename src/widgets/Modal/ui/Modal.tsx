import { useEffect } from "react";
import cnBind from "classnames/bind";

import svgPath from "../../../shared/assets/icons/sprite.svg";
import { ButtonIcon } from "../../../shared/ui/ButtonIcon/ButtonIcon";

import type { ModalProps } from "./modal.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);

export const Modal = ({
    isOpen,
    onClose,
    children,
    hasHeader,
    title,
    className,
    containerClassName,
    fullscreen,
    isClose,
    isPadding = true,
}: ModalProps) => {
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className={cx("modal")}>
            <div className={cx("backdrop")} onClick={onClose} />
            <div className={cx("container", containerClassName, { fullscreen })}>
                {hasHeader && (
                    <div className={cx("header")}>
                        <h3 className={cx("title")}>{title}</h3>
                        {isClose && (
                            <div className={cx("actions")}>
                                <ButtonIcon
                                    path={svgPath}
                                    nameIcon="Close"
                                    classPrefix={cx("action")}
                                    handleAction={onClose}
                                />
                            </div>
                        )}
                    </div>
                )}
                <div className={cx("content", isPadding && "content-p", className, { fullscreen })}>{children}</div>
            </div>
        </div>
    );
};
