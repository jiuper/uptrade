import { useEffect } from "react";
import { useParams } from "react-router-dom";
import cnBind from "classnames/bind";

import { useHookDispatch } from "../../../../shared/lib/module/store/configStore";
import { ProjectActionTypes } from "../../../Project/module/store/store.type";
import { statuses } from "../../const/variables";
import { useToggleTodos } from "../../lib/hooks/useToggleTodos";
import { TaskActionTypes } from "../../module/store/store.type";
import type { ITaskType } from "../../type/index.type";
import { TasksQueue } from "../TasksQueue/TasksQueue";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const ListTasks = ({ tasks }: { tasks: ITaskType[] }) => {
    const dispatch = useHookDispatch();
    const { id } = useParams();

    const [todo, inProgress, closed] = useToggleTodos(tasks, id);
    const handleSetTasks = (id: string, status: string) => {
        dispatch({ type: TaskActionTypes.UPDATE_TASKS, payload: { id, status } });
    };

    useEffect(() => {
        if (id && closed)
            dispatch({
                type: ProjectActionTypes.PROGRESS_PROJECT,
                payload: { id, count: closed.length, allCount: tasks.length },
            });
    }, [closed, dispatch, id, tasks]);

    return (
        <div className={cx("tasks-list")}>
            {statuses.map((status) => (
                <TasksQueue
                    key={status}
                    handleSetTasks={handleSetTasks}
                    todo={todo}
                    inProgress={inProgress}
                    closed={closed}
                    status={status}
                />
            ))}
        </div>
    );
};
