import { useMemo } from "react";
import cnBind from "classnames/bind";

import { useOpenModal } from "../../../../shared/lib/hooks/useOpenModal";
import { useHookSelector } from "../../../../shared/lib/module/store/configStore";
import { Button } from "../../../../shared/ui/Button/Button";
import { Modal } from "../../../../widgets/Modal";
import { SubTaskForm } from "../SubTaskForm/SubTaskForm";
import { SubTaskList } from "../SubTaskList/SubTaskList";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const SubTasks = ({ taskId, isMobile = false }: { taskId: string; isMobile?: boolean }) => {
    const subtasks = useHookSelector((state) => state.subtasks.subtasks);
    const subtasksFilter = useMemo(() => subtasks.filter((subtask) => subtask.taskId === taskId), [taskId, subtasks]);
    const subtasksIsCompFilter = useMemo(
        () => subtasksFilter.filter((subtask) => subtask.isCompleted),
        [subtasksFilter],
    );
    const { isOpen, toggleIsOpen } = useOpenModal(false);

    return (
        <div className={cx("subtasks", isMobile && "subtasks-mobile")}>
            <div className={cx("subtasks-items", isMobile && "subtasks-items-mobile")}>
                {subtasksFilter.length ? (
                    <>
                        <div className={cx("subtasks-counter")}>
                            {subtasksIsCompFilter.length}/{subtasksFilter.length}
                        </div>
                        <div className={cx(isMobile ? "subtasks-lists-c" : "subtasks-lists")}>
                            <SubTaskList subtasks={subtasksFilter} />
                        </div>
                    </>
                ) : (
                    <div className={cx("subtasks-empty")}> Not Found</div>
                )}
            </div>

            <div className={cx("subtasks-btn", isMobile && "subtasks-btn-mobile")}>
                <Button className={cx("btn-action")} handleClick={toggleIsOpen}>
                    Add Task
                </Button>
            </div>
            <Modal isOpen={isOpen} onClose={toggleIsOpen}>
                <SubTaskForm taskId={taskId} toggleIsOpen={toggleIsOpen} />
            </Modal>
        </div>
    );
};
