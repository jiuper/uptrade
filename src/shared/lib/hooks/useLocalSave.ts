import { useEffect } from "react";

import { CommentActionType } from "../../../entities/Comment/module/store.type";
import type { ICommentType } from "../../../entities/Comment/type/index.type";
import { ProjectActionTypes } from "../../../entities/Project/module/store/store.type";
import type { IProjectItemType } from "../../../entities/Project/type/index.type";
import { SubTaskActionTypes } from "../../../entities/SubTask/module/store.type";
import type { ISubTask } from "../../../entities/SubTask/type/index.type";
import { TaskActionTypes } from "../../../entities/Task/module/store/store.type";
import type { ITaskType } from "../../../entities/Task/type/index.type";
import { useHookDispatch } from "../module/store/configStore";

import { useLocalST } from "./useLocalST";

interface IUseLocalSave {
    tasks?: ITaskType[];
    dashboard?: IProjectItemType[];
    subtasks?: ISubTask[];
    comment?: ICommentType[];
}
export const useLocalSave = ({ comment, subtasks, dashboard, tasks }: IUseLocalSave) => {
    const dispatch = useHookDispatch();
    const [isTasks, setIsTasks] = useLocalST("tasks", tasks);
    const [isDashboard, setIsDashboard] = useLocalST("projects", dashboard);
    const [isSubTasks, setIsSubTasks] = useLocalST("subtasks", subtasks);
    const [isComment, setIsComment] = useLocalST("comment", comment);

    useEffect(() => {
        if (comment) setIsComment(comment);
    }, [comment, setIsComment]);
    useEffect(() => {
        if (isComment && isComment.length) {
            dispatch({ type: CommentActionType.ADD_COMMENTS, payload: isComment });
        }
    }, [dispatch, isComment]);

    useEffect(() => {
        if (dashboard) setIsDashboard(dashboard);
    }, [dashboard, setIsDashboard]);
    useEffect(() => {
        if (isDashboard && isDashboard.length) {
            dispatch({ type: ProjectActionTypes.ADD_PROJECTS, payload: isDashboard });
        }
    }, [dispatch, isDashboard]);

    useEffect(() => {
        if (subtasks) setIsSubTasks(subtasks);
    }, [subtasks, setIsSubTasks]);
    useEffect(() => {
        if (isSubTasks && isSubTasks.length) {
            dispatch({ type: SubTaskActionTypes.ADD_SUBTASKS, payload: isSubTasks });
        }
    }, [dispatch, isSubTasks]);

    useEffect(() => {
        if (tasks) setIsTasks(tasks);

        if (dashboard) setIsDashboard(dashboard);
    }, [tasks, setIsTasks, dashboard, setIsDashboard]);

    useEffect(() => {
        if (isTasks && isTasks.length) {
            dispatch({ type: TaskActionTypes.ADD_TASKS, payload: isTasks });
        }
    }, [dispatch, isTasks]);

    return { setIsDashboard };
};
