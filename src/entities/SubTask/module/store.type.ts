import type { ISubTask } from "../type/index.type";

export enum SubTaskActionTypes {
    ADD_SUBTASK = "ADD_SUBTASK",
    REMOVE_SUBTASK = "REMOVE_SUBTASK",
    COMPLETED_SUBTASK = "COMPLETED_SUBTASK",
    ADD_SUBTASKS = "ADD_SUBTASKS",
}

export interface SubTaskActionAdds {
    type: SubTaskActionTypes.ADD_SUBTASKS;
    payload: ISubTask[];
}

export interface SubTaskActionAdd {
    type: SubTaskActionTypes.ADD_SUBTASK;
    payload: ISubTask;
}

export interface SubTaskActionFilter {
    type: SubTaskActionTypes.REMOVE_SUBTASK;
    payload: string;
}

export interface SubTaskActionCompleted {
    type: SubTaskActionTypes.COMPLETED_SUBTASK;
    payload: string;
}

export type SubTaskAction = SubTaskActionAdd | SubTaskActionFilter | SubTaskActionCompleted | SubTaskActionAdds;

export interface ISubTaskReducer {
    subtasks: ISubTask[];
}
