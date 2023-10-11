import { useState } from "react";
import cnBind from "classnames/bind";

import { useHookDispatch } from "../../../../shared/lib/module/store/configStore";
import { Button } from "../../../../shared/ui/Button/Button";
import { TextField } from "../../../../shared/ui/TextField/TextField";
import { SubTaskActionTypes } from "../../module/store.type";
import type { ISubTask } from "../../type/index.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const SubTaskForm = ({ taskId, toggleIsOpen }: { taskId: string; toggleIsOpen: () => void }) => {
    const dispatch = useHookDispatch();
    const [value, setValue] = useState<string>("");
    const handleChange = (val: string) => {
        setValue(val);
    };
    const handleAddComment = () => {
        const comment: ISubTask = {
            taskId,
            id: Math.random().toString(36).substring(2, 9),
            title: value,
            createDate: new Date().toISOString(),
            isCompleted: false,
        };

        dispatch({ type: SubTaskActionTypes.ADD_SUBTASK, payload: comment });
        setValue("");
        toggleIsOpen();
    };

    return (
        <div className={cx("subtasks-form")}>
            <div className={cx("subtasks-field")}>
                <div className={cx("subtasks-title")}>New SubTask</div>
                <div className={cx("subtasks-input")}>
                    <TextField
                        placeholder="title"
                        error={null}
                        handleChange={(e) => handleChange(e.target.value)}
                        value={value}
                    />
                    <div className={cx("subtasks-btn")}>
                        <Button handleClick={handleAddComment} disabled={!value.length}>
                            Write
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
