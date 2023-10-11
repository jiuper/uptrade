import type { ICommentType } from "../../../Comment/type/index.type";
import type { ITaskType } from "../../type/index.type";

export interface ITaskItemType extends ITaskType {
    comment?: ICommentType[];
    progress?: number;
    toggleIsOpen?: () => void;
}
