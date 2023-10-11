export interface ICommentType {
    id: string;
    taskId: string;
    text: string;
    createDate: string;
    username: string;
    parentId: string | null;
}
