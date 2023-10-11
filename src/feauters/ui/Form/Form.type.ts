import type { IProjectItemType } from "../../../entities/Project/type/index.type";
import type { ITaskType } from "../../../entities/Task/type/index.type";

export interface IFormType {
    tasks?: boolean;
    onSubmitTask?: (data: ITaskType) => void;
    onSubmitProject?: (data: IProjectItemType) => void;
}

export interface IFormDataType {
    [FormData.TITLE]: string;
    [FormData.END_TIME]: string;
    [FormData.DESCRIPTION]: string;
}

export enum FormData {
    TITLE = "title",
    END_TIME = "end",
    DESCRIPTION = "description",
}
