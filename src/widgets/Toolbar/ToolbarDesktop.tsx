import cnBind from "classnames/bind";

import { ButtonIcon } from "../../shared/ui/ButtonIcon/ButtonIcon";

import type { IToolbarType } from "./Toolbar.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const ToolbarDesktop = ({ isDelete, handleIsAction = () => {}, indexBtn, svgPath = "" }: IToolbarType) => {
    return (
        <div className={cx("toolbar")}>
            <ButtonIcon
                path={svgPath}
                classPrefix={cx("toolbar-btn", "btn-added")}
                classPrefixIcon={cx("btn-icon")}
                nameIcon="Add"
                handleAction={() => handleIsAction(indexBtn)}
            />
            {isDelete && (
                <ButtonIcon
                    path={svgPath}
                    classPrefix={cx("toolbar-btn", "btn-remove")}
                    classPrefixIcon={cx("btn-icon")}
                    nameIcon="Remove"
                    handleAction={handleIsAction}
                />
            )}
        </div>
    );
};
