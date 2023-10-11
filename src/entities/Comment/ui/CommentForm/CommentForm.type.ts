export interface ICommentFormType {
    id?: string | null;
    taskId: string;
    handleDeleteComment?: (id: string) => void;
}
