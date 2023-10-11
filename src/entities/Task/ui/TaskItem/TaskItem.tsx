import { useMemo } from "react";
import { useDrag } from "react-dnd";
import cnBind from "classnames/bind";

import svgPath from "../../../../shared/assets/icons/sprite.svg";
import { useOpenModal } from "../../../../shared/lib/hooks/useOpenModal";
import { SvgIcon } from "../../../../shared/ui/SvgIcon/SvgIcon";
import { Modal } from "../../../../widgets/Modal";
import { SubTasks } from "../../../SubTask/ui/SubTasks/SubTasks";
import { TaskInfo } from "../TaskInfo/TaskInfo";

import type { ITaskItemType } from "./TaskItem.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const TaskItem = ({
    dateEnd,
    title,
    id,
    numberTask,
    status,
    fileInfo,
    priority,
    description,
    dateCreate,
    idProject,
    comment = [],
}: ITaskItemType) => {
    const { isOpen, toggleIsOpen } = useOpenModal(false);

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "TaskItem",
        item: { id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));
    const filterComment = useMemo(() => comment.filter((el) => el.taskId === id), [id, comment]);

    return (
        <div className={cx("task")} ref={drag} style={isDragging ? { opacity: "0.25" } : { opacity: "1" }}>
            <div
                onClick={toggleIsOpen}
                className={cx("task-item", priority ? "task-priority" : "")}
                style={status === "Done" ? { background: "rgb(151, 187, 125)" } : {}}
            >
                <div className={cx("task-icon")}>
                    <SvgIcon name="Receipt" classPrefix={cx("icon")} svgPath={svgPath} />
                </div>
                <div className={cx("task-body")}>
                    <div className={cx("task-title")}>{title}</div>
                    <div className={cx("task-time")}>{new Date(dateEnd).toLocaleDateString()}</div>
                </div>
            </div>
            <Modal isPadding={false} isOpen={isOpen} onClose={toggleIsOpen} fullscreen>
                <div className={cx("task-setting")}>
                    <SubTasks taskId={id} />
                    <TaskInfo
                        status={status}
                        numberTask={numberTask}
                        id={id}
                        title={title}
                        description={description}
                        priority={priority}
                        dateEnd={dateEnd}
                        dateCreate={dateCreate}
                        fileInfo={fileInfo}
                        idProject={idProject}
                        comment={filterComment}
                        toggleIsOpen={toggleIsOpen}
                    />
                </div>
            </Modal>
        </div>
    );
};
