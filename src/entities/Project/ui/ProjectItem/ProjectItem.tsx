import cnBind from "classnames/bind";

import svgPath from "../../../../shared/assets/icons/sprite.svg";
import { useHookSelector } from "../../../../shared/lib/module/store/configStore";
import { Progress } from "../../../../shared/ui/Progress/Progress";
import { SvgIcon } from "../../../../shared/ui/SvgIcon/SvgIcon";
import type { IProjectItemType } from "../../type/index.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const ProjectItem = ({ dateCreate, title, progress, description, countTasks }: IProjectItemType) => {
    const isMobile = useHookSelector((state) => state.width.isMobile);

    return (
        <div className={cx("card", isMobile ? "card-mobile" : "card-hover")}>
            <div className={cx("card-body")}>
                <div className={cx("card-body__left")}>
                    <div className={cx("card__title")}>{title}</div>
                    <div className={cx("card__description")}>{description}</div>
                </div>
                <div className={cx("card-body__right")}>
                    <Progress progress={progress} />
                </div>
            </div>
            <div className={cx("card-footer", isMobile && "card-footer-mobile")}>
                <div className={cx("card-count", isMobile && "card-count-mobile")}>
                    <div className={cx("card-container")}>
                        <SvgIcon svgPath={svgPath} name="Date" classPrefix={cx("icon")} />
                        <div className={cx("card__counter")}>{new Date(dateCreate).toLocaleDateString()}</div>
                    </div>
                    <div className={cx("card-container")}>
                        <SvgIcon svgPath={svgPath} name="Checked" classPrefix={cx("icon")} />
                        <div className={cx("card__counter")}>{countTasks} Tasks</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
