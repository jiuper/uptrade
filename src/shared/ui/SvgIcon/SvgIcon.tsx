import cnBind from "classnames/bind";

import type { SvgIconPropTypes } from "./SvgIcon.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const SvgIcon = ({ svgPath, width = 24, height = 24, name, classPrefix }: SvgIconPropTypes) => {
    return (
        <svg className={cx(classPrefix)} width={width} height={height}>
            <use xlinkHref={`${svgPath}#${name}`} />
        </svg>
    );
};
