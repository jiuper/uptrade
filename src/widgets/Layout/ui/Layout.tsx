import { useLocation } from "react-router-dom";
import cnBind from "classnames/bind";

import { Header } from "../../Header";

import type { ILayout } from "./Layout.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);

export const Layout = ({ children, isMobile }: ILayout): JSX.Element => {
    const url = useLocation();

    return (
        <div className={cx("wrapper", isMobile && "w-over")}>
            <Header title={url.pathname === "/" ? "Projects" : "Tasks"} />
            {children}
        </div>
    );
};
