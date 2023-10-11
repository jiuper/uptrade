import { useMemo } from "react";
import cnBind from "classnames/bind";

import svgPath from "../../../../shared/assets/icons/sprite.svg";
import { useOpenModal } from "../../../../shared/lib/hooks/useOpenModal";
import { useHookSelector } from "../../../../shared/lib/module/store/configStore";
import { ButtonIcon } from "../../../../shared/ui/ButtonIcon/ButtonIcon";
import { SvgIcon } from "../../../../shared/ui/SvgIcon/SvgIcon";
import { Modal } from "../../../../widgets/Modal";
import { TaskInfoMobile } from "../TaskInfo/TaskInfoMobile";

import type { ITaskItemType } from "./TaskItem.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const TaskItemMobil = ({
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
    const filterComment = useMemo(() => comment.filter((el) => el.taskId === id), [id, comment]);
    const subtasks = useHookSelector((state) => state.subtasks.subtasks);
    const subtasksFilter = useMemo(() => subtasks.filter((subtask) => subtask.taskId === id), [id, subtasks]);
    const subtasksIsCompFilter = useMemo(
        () => subtasksFilter.filter((subtask) => subtask.isCompleted),
        [subtasksFilter],
    );
    const progress = useMemo(
        () =>
            subtasksIsCompFilter.length !== 0 && subtasksFilter.length !== 0
                ? Math.floor((subtasksIsCompFilter.length / subtasksFilter.length) * 100)
                : 0,
        [subtasksFilter.length, subtasksIsCompFilter.length],
    );

    return (
        <div className={cx("task__mobile")}>
            <div onClick={toggleIsOpen} className={cx("task__mobile-item")}>
                <div className={cx("item__body")}>
                    <div className={cx("item__body-icon")}>
                        <SvgIcon
                            name="Checked"
                            classPrefix={cx("icon", progress === 100 && "icon-checked")}
                            svgPath={svgPath}
                        />
                    </div>
                    <div className={cx("item__body-info")}>
                        <div className={cx("info-title")}>{title}</div>
                        <div
                            className={cx("info-progress")}
                            style={
                                progress === 0
                                    ? { background: "rgba(105,104,104,0.05)" }
                                    : {
                                          background: `linear-gradient(90deg, #69f0ae ${progress}%, transparent ${progress}%`,
                                      }
                            }
                        />
                    </div>
                </div>
                <ButtonIcon classPrefix={cx("btn-mobile")} path={svgPath} nameIcon="ArrowBack" />
            </div>
            <Modal isPadding={false} isOpen={isOpen} onClose={toggleIsOpen} fullscreen>
                <div className={cx("task-setting-mobile")}>
                    <TaskInfoMobile
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
                        progress={progress}
                        toggleIsOpen={toggleIsOpen}
                    />
                </div>
            </Modal>
        </div>
    );
};
