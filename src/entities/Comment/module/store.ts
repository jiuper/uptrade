import type { CommentAction, ICommentReducer } from "./store.type";
import { CommentActionType } from "./store.type";

const initialState: ICommentReducer = {
    comment: [],
};

export const commentReducer = (state = initialState, action: CommentAction) => {
    switch (action.type) {
        case CommentActionType.ADD_COMMENTS:
            return { comment: action.payload };
        case CommentActionType.ADD_COMMENT:
            return { comment: [...state.comment, action.payload] };
        case CommentActionType.REMOVE_COMMENT:
            return {
                comment: state.comment.filter((el) => el.id !== action.payload && el.parentId !== action.payload),
            };
        default:
            return state;
    }
};
