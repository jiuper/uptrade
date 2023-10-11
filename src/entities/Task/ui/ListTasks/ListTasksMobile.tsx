import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";

import { useLocalSave } from "../../../../shared/lib/hooks/useLocalSave";
import { useHookDispatch, useHookSelector } from "../../../../shared/lib/module/store/configStore";
import { ProjectActionTypes } from "../../../Project/module/store/store.type";
import type { ITaskType } from "../../type/index.type";
import { TaskItemMobil } from "../TaskItem/TaskItemMobile";

export const ListTasksMobile = ({ tasks, tabsIsMobile }: { tasks: ITaskType[]; tabsIsMobile: string }) => {
    const dispatch = useHookDispatch();
    const { id } = useParams();
    const comment = useHookSelector((state) => state.comment.comment);
    const subtasks = useHookSelector((state) => state.subtasks.subtasks);
    useLocalSave({ comment, subtasks });
    const filterTasks = useMemo(
        () => (tabsIsMobile === "All" ? tasks : tasks.filter((el) => el.status === tabsIsMobile)),
        [tabsIsMobile, tasks],
    );
    useEffect(() => {
        if (id)
            dispatch({
                type: ProjectActionTypes.PROGRESS_PROJECT,
                payload: { id, count: tasks.filter((el) => el.status === "Done").length, allCount: tasks.length },
            });
    }, [dispatch, id, tasks]);

    return (
        <>
            {filterTasks.map((el, i) => (
                <TaskItemMobil key={el.id} {...el} numberTask={i + 1} comment={comment} />
            ))}
        </>
    );
};
