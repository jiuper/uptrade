import cnBind from "classnames/bind";

import { ROUTES } from "../../shared/const/Routes";
import { useLink } from "../../shared/lib/hooks/useLink";
import { ButtonIcon } from "../../shared/ui/ButtonIcon/ButtonIcon";

import type { IToolbarType } from "./Toolbar.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);

export const ToolbarMobile = ({ handleIsAction = () => {}, indexBtn, svgPath = "" }: IToolbarType) => {
    const [_, isLink] = useLink();
    const listBtns: { icon: string; className: string; handleAction: () => void; disabled?: boolean }[] = [
        { icon: "List", className: "btn-other", handleAction: () => {}, disabled: true },
        { icon: "All", className: "btn-other", handleAction: () => isLink(ROUTES.projects) },
        { icon: "Add", className: "btn-add", handleAction: () => handleIsAction(indexBtn) },
        { icon: "", className: "btn-other", handleAction: () => {}, disabled: true },
        { icon: "User", className: "btn-other", handleAction: () => {}, disabled: true },
    ];

    return (
        <div className={cx("toolbar-mobile")}>
            {listBtns.map((btn) => (
                <ButtonIcon
                    key={btn.icon}
                    path={svgPath}
                    classPrefix={cx("toolbar-btn", btn.className, "btn-mobile")}
                    classPrefixIcon={cx("btn-icon")}
                    classIconSize="medium"
                    nameIcon={btn.icon}
                    handleAction={btn.handleAction}
                    disabled={btn.disabled}
                />
            ))}
        </div>
    );
};
