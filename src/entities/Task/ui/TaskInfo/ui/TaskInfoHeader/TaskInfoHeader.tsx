import cnBind from "classnames/bind";

import svgPath from "../../../../../../shared/assets/icons/sprite.svg";
import { useHookDispatch } from "../../../../../../shared/lib/module/store/configStore";
import { GroupButtonIcon } from "../../../../../../shared/ui/GroupButtonIcon/GroupButtonIcon";
import { TaskActionTypes } from "../../../../module/store/store.type";

import type { ITaskInfoHeaderType } from "./TaskInfoHeader.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const TaskInfoHeader = ({ numberTask, status, priority, id, toggleIsOpen }: ITaskInfoHeaderType) => {
    const dispatch = useHookDispatch();
    const headerBtns = [
        { icon: "Remove" },
        { icon: "Notification" },
        { icon: "Checked" },
        { icon: "FileLoader" },
        { icon: "Close" },
    ];
    const handleNotificationTask = (index: number) => {
        switch (index) {
            case 0:
                return dispatch({ type: TaskActionTypes.REMOVE_TASK, payload: id });
            case 1:
                return dispatch({ type: TaskActionTypes.PRIORITY_TASK, payload: id });
            case 2:
                return dispatch({ type: TaskActionTypes.UPDATE_TASKS, payload: { id, status: "Done" } });
            case 4:
                return toggleIsOpen();
            default:
                return () => {};
        }
    };

    return (
        <div className={cx("task-info__header")}>
            <div className={cx("header-toolbar")}>
                <div className={cx("header-count")}>Task №{numberTask}</div>
                <div className={cx("header-status")}>{status}</div>
            </div>
            <div className={cx("header-btns")}>
                <GroupButtonIcon
                    classPrefix={cx("btn-action")}
                    listIconsButton={headerBtns}
                    svgPath={svgPath}
                    handleAction={handleNotificationTask}
                    classPrefixIcon={cx("btn-icon")}
                    id={id}
                    classPrefixUpLoader={cx("btn-loader")}
                    priority={priority}
                />
            </div>
        </div>
    );
};
