import { lazy } from "react";
import cnBind from "classnames/bind";

import svgPath from "../../shared/assets/icons/sprite.svg";

import type { IToolbarType } from "./Toolbar.type";

import styles from "./style.module.scss";

const TD = lazy(() => import("./ToolbarDesktop").then(({ ToolbarDesktop }) => ({ default: ToolbarDesktop })));
const TM = lazy(() => import("./ToolbarMobile").then(({ ToolbarMobile }) => ({ default: ToolbarMobile })));
const cx = cnBind.bind(styles);
export const Toolbar = ({
    isDelete = false,
    handleIsAction = () => {},
    isMobile = false,
    className,
    indexBtn,
}: IToolbarType) => {
    return (
        <div className={cx(className)}>
            {isMobile ? (
                <TM handleIsAction={handleIsAction} svgPath={svgPath} indexBtn={indexBtn} />
            ) : (
                <TD handleIsAction={handleIsAction} svgPath={svgPath} indexBtn={indexBtn} isDelete={isDelete} />
            )}
        </div>
    );
};
