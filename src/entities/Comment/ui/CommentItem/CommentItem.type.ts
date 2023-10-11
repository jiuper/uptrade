import type { ICommentType } from "../../type/index.type";

export interface ICommentItem {
    username: string;
    createDate: string;
    text: string;
    parentId: string | null;
    taskId: string;
    id: string;
    replies: ICommentType[];
    isActive: string;
    handleIsActive: (id: string) => void;
    comments: ICommentType[];
}
