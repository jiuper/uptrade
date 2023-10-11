import type { ICommentType } from "../type/index.type";

export enum CommentActionType {
    ADD_COMMENT = "ADD_COMMENT",
    REMOVE_COMMENT = "REMOVE_COMMENT",
    ADD_COMMENTS = "ADD_COMMENTS",
}

export interface CommentAddsType {
    type: CommentActionType.ADD_COMMENTS;
    payload: ICommentType[];
}
export interface CommentAddType {
    type: CommentActionType.ADD_COMMENT;
    payload: ICommentType;
}
export interface CommentRemoveType {
    type: CommentActionType.REMOVE_COMMENT;
    payload: string;
}

export type CommentAction = CommentAddType | CommentRemoveType | CommentAddsType;

export interface ICommentReducer {
    comment: ICommentType[];
}
