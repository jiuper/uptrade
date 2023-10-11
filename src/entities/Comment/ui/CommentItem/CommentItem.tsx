import cnBind from "classnames/bind";

import svgPath from "../../../../shared/assets/icons/sprite.svg";
import { useHookDispatch } from "../../../../shared/lib/module/store/configStore";
import { SvgIcon } from "../../../../shared/ui/SvgIcon/SvgIcon";
import { CommentActionType } from "../../module/store.type";
import { CommentForm } from "../CommentForm/CommentForm";

import type { ICommentItem } from "./CommentItem.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const CommentItem = ({
    text,
    username,
    createDate,
    replies,
    taskId,
    id,
    handleIsActive,
    isActive,
    comments,
}: ICommentItem) => {
    const dispatch = useHookDispatch();
    const handleDeleteComment = (id: string) => {
        dispatch({ type: CommentActionType.REMOVE_COMMENT, payload: id });
    };

    const getReplies = (commentId: string) => {
        return comments.filter((comment) => comment.parentId === commentId);
    };

    return (
        <div className={cx("comment")}>
            <div className={cx("comment-image-container")}>
                <SvgIcon name="User" svgPath={svgPath} />
            </div>
            <div className={cx("comment-right-part")}>
                <div className={cx("comment-content")}>
                    <div className={cx("comment-author")}>{username}</div>
                    <div>{new Date(createDate).toLocaleDateString()}</div>
                </div>
                <div className={cx("comment-text")}>{text}</div>
                <div className={cx("comment-actions")}>
                    <div className={cx("comment-action")} onClick={() => handleIsActive(id)}>
                        Reply
                    </div>
                    <div className={cx("comment-action")} onClick={() => handleDeleteComment(id)}>
                        Delete
                    </div>
                </div>
                {isActive === id && <CommentForm handleDeleteComment={handleIsActive} id={id} taskId={taskId} />}
                <div className={cx("comment-replies")}>
                    {replies.map((reply, i) => (
                        <CommentItem
                            key={i}
                            isActive={isActive}
                            handleIsActive={handleIsActive}
                            {...reply}
                            replies={getReplies(reply.id)}
                            comments={comments}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
