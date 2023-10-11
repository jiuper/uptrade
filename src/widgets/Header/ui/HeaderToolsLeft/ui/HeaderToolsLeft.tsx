import cnBind from "classnames/bind";

import { ROUTES } from "../../../../../shared/const/Routes";
import { useLink } from "../../../../../shared/lib/hooks/useLink";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const HeaderToolsLeft = ({ title, isMobile = false }: { title: string; isMobile?: boolean }) => {
    const [_, isLink] = useLink(title === "/" ? ROUTES.projects : ROUTES.tasks);

    return (
        <div className={cx(!isMobile ? "header__avatar" : "header__avatar-mobile")}>
            <h1 className={cx("header__logo")} onClick={() => isLink}>
                {title}
            </h1>
        </div>
    );
};
