import { useMemo } from "react";
import { useDrop } from "react-dnd";
import cnBind from "classnames/bind";

import { useLocalSave } from "../../../../shared/lib/hooks/useLocalSave";
import { useHookSelector } from "../../../../shared/lib/module/store/configStore";
import { TaskItem } from "../../index";

import type { ITasksQueueType } from "./TasksQueue.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const TasksQueue = ({ todo, inProgress, closed, status, handleSetTasks }: ITasksQueueType) => {
    const comment = useHookSelector((state) => state.comment.comment);
    useLocalSave({ comment });
    const tasksToMap = useMemo(
        () => (status === "Queue" ? todo : status === "Development" ? inProgress : closed),
        [closed, inProgress, status, todo],
    );

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "TaskItem",
        drop: (item: { id: string }) => handleSetTasks(item.id, status),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));
    const bgStatus = status === "Queue" ? "#a98b97" : status === "Development" ? "#eaab7f" : "#97bb7d";

    return (
        <div ref={drop} className={cx("tasks-block")}>
            <div
                className={cx("task-status")}
                style={isOver ? { background: "rgba(79,83,88,0.57)" } : { background: bgStatus }}
            >
                {status}
            </div>
            <div className={cx("task-items")}>
                {tasksToMap.map((task, i) => (
                    <TaskItem key={task.id} {...task} comment={comment} numberTask={i + 1} />
                ))}
            </div>
        </div>
    );
};
