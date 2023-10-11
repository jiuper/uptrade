import type { IProjectItemType } from "../../type/index.type";

export enum ProjectActionTypes {
    ADD_PROJECTS = "ADD_PROJECTS",
    ADD_PROJECT = "ADD_PROJECT",
    REMOVE_PROJECT = "REMOVE_PROJECT",
    PROGRESS_PROJECT = "PROGRESS_PROJECT",
    COUNT_TASKS = "COUNT_TASKS",
}

export interface ProjectActionAdd {
    type: ProjectActionTypes.ADD_PROJECT;
    payload: IProjectItemType;
}

export interface ProjectActionAdds {
    type: ProjectActionTypes.ADD_PROJECTS;
    payload: IProjectItemType[];
}

export interface ProjectActionFilter {
    type: ProjectActionTypes.REMOVE_PROJECT;
    payload: string;
}

export interface ProjectActionProgress {
    type: ProjectActionTypes.PROGRESS_PROJECT;
    payload: { id: string; count: number; allCount: number };
}

export interface ProjectActionCountTasks {
    type: ProjectActionTypes.COUNT_TASKS;
    payload: { id: string; count: number };
}

export type ProjectAction =
    | ProjectActionAdd
    | ProjectActionFilter
    | ProjectActionProgress
    | ProjectActionAdds
    | ProjectActionCountTasks;

export interface IProjectReducer {
    dashboard: IProjectItemType[];
}
