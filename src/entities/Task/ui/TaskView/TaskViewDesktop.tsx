import { Link } from "react-router-dom";
import cnBind from "classnames/bind";

import { ROUTES } from "../../../../shared/const/Routes";
import { SvgIcon } from "../../../../shared/ui/SvgIcon/SvgIcon";
import { Toolbar } from "../../../../widgets/Toolbar/Toolbar";
import type { ITaskType } from "../../type/index.type";
import { ListTasks } from "../ListTasks/ListTasks";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const TaskViewDesktop = ({
    toggleIsOpen,
    filterTasks,
    svgPath,
}: {
    toggleIsOpen: () => void;
    filterTasks: ITaskType[];
    svgPath: string;
}) => {
    return (
        <div className={cx("tasks", "container")}>
            <div className={cx("tasks-btns")}>
                <Link to={ROUTES.projects}>
                    <SvgIcon name="ArrowBack" svgPath={svgPath} />
                </Link>
                <Toolbar handleIsAction={toggleIsOpen} />
            </div>
            <ListTasks tasks={filterTasks} />
        </div>
    );
};
