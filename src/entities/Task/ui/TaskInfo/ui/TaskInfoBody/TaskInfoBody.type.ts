import type { ICommentType } from "../../../../../Comment/type/index.type";
import type { IFile } from "../../../../type/index.type";

export interface ITaskInfoBodyType {
    title: string;
    description: string;
    fileInfo: IFile[];
    dateEnd: string;
    dateCreate: string;
    comment: ICommentType[];
    id: string;
}
