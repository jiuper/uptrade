import type { ITaskItemType } from "../TaskItem/TaskItem.type";

export interface ITaskInfoType extends ITaskItemType {
    toggleIsOpen: () => void;
}
