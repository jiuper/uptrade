import { useEffect, useMemo, useState } from "react";

import type { ITaskType } from "../../type/index.type";

export const useToggleTodos = (
    tasks: ITaskType[],
    id: string | undefined,
): [todo: ITaskType[], inProgress: ITaskType[], closed: ITaskType[]] => {
    const projectTasks = useMemo(() => tasks.filter((task) => task.idProject === id), [id, tasks]);

    const [todo, setTodo] = useState<ITaskType[]>([]);
    const [inProgress, setInProgress] = useState<ITaskType[]>([]);
    const [closed, setClosed] = useState<ITaskType[]>([]);

    useEffect(() => {
        setTodo(projectTasks.filter((task) => task.status === "Queue"));
        setInProgress(projectTasks.filter((task) => task.status === "Development"));
        setClosed(projectTasks.filter((task) => task.status === "Done"));
    }, [projectTasks]);

    return [todo, inProgress, closed];
};
