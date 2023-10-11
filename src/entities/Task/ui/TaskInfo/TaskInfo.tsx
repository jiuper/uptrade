import cnBind from "classnames/bind";

import { CommentForm } from "../../../Comment/ui/CommentForm/CommentForm";

import { TaskInfoBody } from "./ui/TaskInfoBody/TaskInfoBody";
import { TaskInfoHeader } from "./ui/TaskInfoHeader/TaskInfoHeader";
import type { ITaskInfoType } from "./TaskInfo.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const TaskInfo = ({
    dateEnd,
    id,
    status,
    title,
    description,
    numberTask,
    fileInfo,
    priority,
    comment = [],
    toggleIsOpen = () => {},
    dateCreate,
}: ITaskInfoType) => {
    return (
        <div className={cx("task-info")}>
            <div className={cx("task-info__item")}>
                <TaskInfoHeader
                    numberTask={numberTask}
                    status={status}
                    priority={priority}
                    id={id}
                    toggleIsOpen={toggleIsOpen}
                />
                <TaskInfoBody
                    id={id}
                    fileInfo={fileInfo}
                    dateEnd={dateEnd}
                    description={description}
                    title={title}
                    comment={comment}
                    dateCreate={dateCreate}
                />
                <div className={cx("task-info__footer")}>
                    <CommentForm taskId={id} />
                </div>
            </div>
        </div>
    );
};
