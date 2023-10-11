import type { IFile, ITaskType } from "../../type/index.type";

export enum TaskActionTypes {
    ADD_TASKS = "ADD_TASKS",
    ADD_TASK = "ADD_TASK",
    REMOVE_TASK = "REMOVE_TASK",
    REMOVE_TASK_PROJECT = "REMOVE_TASK_PROJECT",
    UPDATE_TASKS = "UPDATE_TASKS",
    PRIORITY_TASK = "PRIORITY_TASK",
    FILE_LOADER_TASK = "FILE_LOADER_TASK",
    FILE_REMOVE_TASK = "FILE_REMOVE_TASK",
}

export interface TaskActionUpdate {
    type: TaskActionTypes.UPDATE_TASKS;
    payload: { id: string; status: string };
}

export interface TaskActionRemoveProject {
    type: TaskActionTypes.REMOVE_TASK_PROJECT;
    payload: string;
}

export interface TaskActionAdds {
    type: TaskActionTypes.ADD_TASKS;
    payload: ITaskType[];
}

export interface TaskActionAdd {
    type: TaskActionTypes.ADD_TASK;
    payload: ITaskType;
}

export interface TaskActionFilter {
    type: TaskActionTypes.REMOVE_TASK;
    payload: string;
}

export interface TaskActionPriority {
    type: TaskActionTypes.PRIORITY_TASK;
    payload: string;
}

export interface TaskActionFileLoader {
    type: TaskActionTypes.FILE_LOADER_TASK;
    payload: { id: string; file: IFile };
}

export interface TaskActionFileRemove {
    type: TaskActionTypes.FILE_REMOVE_TASK;
    payload: { id: string; file: string };
}

export type TaskAction =
    | TaskActionAdd
    | TaskActionFilter
    | TaskActionUpdate
    | TaskActionRemoveProject
    | TaskActionPriority
    | TaskActionFileLoader
    | TaskActionAdds
    | TaskActionFileRemove;

export interface ITaskReducer {
    tasks: ITaskType[];
}
