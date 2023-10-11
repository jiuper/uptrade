import cnBind from "classnames/bind";

import { ButtonIcon } from "../../../../shared/ui/ButtonIcon/ButtonIcon";
import { Toolbar } from "../../../../widgets/Toolbar/Toolbar";
import { ListTasksMobile } from "../ListTasks/ListTasksMobile";

import type { ITaskViewType } from "./TaskView.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const TaskViewMobile = ({
    toggleIsOpen,
    filterTasks,
    svgPath,
    tabsIsMobile = "All",
    isMobile,
}: ITaskViewType) => {
    return (
        <>
            <div className={cx("tasks-mob")}>
                <div className={cx("tasks-mob__notice")}>
                    <ButtonIcon
                        classPrefix={cx("tasks-mob__notice_button")}
                        classIconSize="medium"
                        classPrefixIcon={cx("tasks-mob__notice_icon")}
                        path={svgPath}
                        nameIcon="Add"
                        handleAction={toggleIsOpen}
                    >
                        Add Task
                    </ButtonIcon>
                    <div className={cx("tasks-mob__notice_status")}>{tabsIsMobile}</div>
                </div>
                <div className={cx("tasks-mob__list")}>
                    <ListTasksMobile tasks={filterTasks} tabsIsMobile={tabsIsMobile} />
                </div>
            </div>
            <Toolbar isMobile={isMobile} handleIsAction={toggleIsOpen} />
        </>
    );
};
