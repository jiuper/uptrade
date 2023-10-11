import { useCallback, useMemo } from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "../../../../shared/const/Routes";
import { useHookSelector } from "../../../../shared/lib/module/store/configStore";
import type { ITaskType } from "../../../Task/type/index.type";
import type { IProjectItemType } from "../../type/index.type";
import { ProjectItem } from "../ProjectItem/ProjectItem";

export const ListProjects = ({ dashboard, tasks }: { dashboard: IProjectItemType[]; tasks: ITaskType[] }) => {
    const { tabsType } = useHookSelector((state) => state.tabs);

    const dashboardList = useMemo(
        () =>
            tabsType === "All"
                ? dashboard
                : tabsType === "Ongoing"
                ? dashboard.filter((el) => el.progress <= 99)
                : dashboard.filter((el) => el.progress === 100),
        [dashboard, tabsType],
    );

    const handleCountTasks = useCallback(
        (id: string): number => {
            return tasks.filter((el) => el.idProject === id).length;
        },
        [tasks],
    );

    return dashboardList.map((el) => (
        <Link key={el.id} to={`${ROUTES.tasks}/${el.id}`}>
            <ProjectItem {...el} countTasks={handleCountTasks(el.id)} />
        </Link>
    ));
};
