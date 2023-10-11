import type { ITaskType } from "../../type/index.type";

export interface ITasksQueueType {
    todo: ITaskType[];
    inProgress: ITaskType[];
    closed: ITaskType[];
    status: string;
    handleSetTasks: (id: string, status: string) => void;
}
