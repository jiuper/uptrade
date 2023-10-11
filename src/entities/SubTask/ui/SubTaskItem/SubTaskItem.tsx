import cnBind from "classnames/bind";

import svgPath from "../../../../shared/assets/icons/sprite.svg";
import { useHookDispatch } from "../../../../shared/lib/module/store/configStore";
import { ButtonIcon } from "../../../../shared/ui/ButtonIcon/ButtonIcon";
import { SvgIcon } from "../../../../shared/ui/SvgIcon/SvgIcon";
import { SubTaskActionTypes } from "../../module/store.type";
import type { ISubTask } from "../../type/index.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);

export const SubTaskItem = ({ title, createDate, id, isCompleted }: ISubTask) => {
    const dispatch = useHookDispatch();
    const handleIsCompleted = (id: string) => {
        dispatch({ type: SubTaskActionTypes.COMPLETED_SUBTASK, payload: id });
    };

    return (
        <div className={cx("subtasks-item", !isCompleted && "sbt-not")}>
            <div className={cx("subtasks-btn", isCompleted && "sbt-btn")}>
                <ButtonIcon
                    classPrefixIcon={cx("icon")}
                    handleAction={() => handleIsCompleted(id)}
                    path={svgPath}
                    nameIcon="Checked"
                />
            </div>
            <div className={cx("subtasks-body")}>
                <div className={cx("subtasks-body__title", isCompleted && "line")}>{title}</div>
                <div className={cx("subtasks-body__date")}>{new Date(createDate).toLocaleDateString()}</div>
            </div>
            <SvgIcon classPrefix={cx("subtasks-icon")} name="User" svgPath={svgPath} />
        </div>
    );
};
