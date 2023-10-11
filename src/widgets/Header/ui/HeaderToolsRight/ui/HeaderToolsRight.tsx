import cnBind from "classnames/bind";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const HeaderToolsRight = () => {
    return (
        <div className={cx("header__toolbar")}>
            <div className={cx("toolbar__notify")}>
                <div className={cx("search")}>
                    <input className={cx("search__input")} type="search" placeholder=" " />
                    <label className={cx("search__label")}>search</label>
                </div>
            </div>
        </div>
    );
};
