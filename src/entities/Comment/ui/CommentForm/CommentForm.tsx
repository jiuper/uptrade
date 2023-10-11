import { useState } from "react";
import cnBind from "classnames/bind";

import { useHookDispatch } from "../../../../shared/lib/module/store/configStore";
import { Button } from "../../../../shared/ui/Button/Button";
import { TextField } from "../../../../shared/ui/TextField/TextField";
import { CommentActionType } from "../../module/store.type";
import type { ICommentType } from "../../type/index.type";

import type { ICommentFormType } from "./CommentForm.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);

export const CommentForm = ({ id = null, taskId, handleDeleteComment = () => {} }: ICommentFormType) => {
    const dispatch = useHookDispatch();
    const [value, setValue] = useState<string>("");
    const handleChange = (val: string) => {
        setValue(val);
    };
    const handleAddComment = () => {
        const comment: ICommentType = {
            parentId: id,
            taskId,
            id: Math.random().toString(36).substring(2, 9),
            text: value,
            username: "newUser",
            createDate: new Date().toISOString(),
        };

        dispatch({ type: CommentActionType.ADD_COMMENT, payload: comment });
        setValue("");
        handleDeleteComment("");
    };

    return (
        <div className={cx("comment-form")}>
            <div className={cx("comment-field")}>
                <div className={cx("comment-input")}>
                    <TextField
                        placeholder="Write a comment..."
                        error={null}
                        handleChange={(e) => handleChange(e.target.value)}
                        value={value}
                    />
                </div>
                <div className={cx("comment-btn")}>
                    <Button handleClick={handleAddComment} disabled={!value.length}>
                        Write
                    </Button>
                </div>
            </div>
        </div>
    );
};
