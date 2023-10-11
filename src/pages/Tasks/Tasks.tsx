import { lazy, Suspense, useMemo } from "react";
import { useParams } from "react-router-dom";
import cnBind from "classnames/bind";

import { TaskActionTypes } from "../../entities/Task/module/store/store.type";
import type { ITaskType } from "../../entities/Task/type/index.type";
import { Form } from "../../feauters/ui/Form/Form";
import svgPath from "../../shared/assets/icons/sprite.svg";
import { useLocalSave } from "../../shared/lib/hooks/useLocalSave";
import { useOpenModal } from "../../shared/lib/hooks/useOpenModal";
import { useHookDispatch, useHookSelector } from "../../shared/lib/module/store/configStore";
import { Modal } from "../../widgets/Modal";

import styles from "./style.module.scss";

const LSTDESKTOP = lazy(() =>
    import("../../entities/Task/ui/TaskView/TaskViewDesktop").then(({ TaskViewDesktop }) => ({
        default: TaskViewDesktop,
    })),
);
const LSTMOBILE = lazy(() =>
    import("../../entities/Task/ui/TaskView/TaskViewMobile").then(({ TaskViewMobile }) => ({
        default: TaskViewMobile,
    })),
);

const cx = cnBind.bind(styles);
export const Tasks = ({ isMobile }: { isMobile: boolean }) => {
    const { isOpen, toggleIsOpen } = useOpenModal(false);
    const { id } = useParams();
    const dispatch = useHookDispatch();
    const dashboard = useHookSelector((state) => state.projects.dashboard);
    const tabsIsMobile = useHookSelector((state) => state.tabs.tabsIsMobile);
    const tasks = useHookSelector((state) => state.tasks.tasks);
    useLocalSave({ tasks, dashboard });
    const onSubmit = (data: ITaskType) => {
        dispatch({ type: TaskActionTypes.ADD_TASK, payload: data });
        toggleIsOpen();
    };
    const filterTasks = useMemo(() => tasks.filter((el) => el.idProject === id), [id, tasks]);

    return (
        <div className={cx(isMobile && "tasks-page-mobile", "tasks-page")}>
            <Suspense fallback="...loader">
                {!isMobile ? (
                    <LSTDESKTOP filterTasks={filterTasks} toggleIsOpen={toggleIsOpen} svgPath={svgPath} />
                ) : (
                    <LSTMOBILE
                        filterTasks={filterTasks}
                        toggleIsOpen={toggleIsOpen}
                        svgPath={svgPath}
                        isMobile={isMobile}
                        tabsIsMobile={tabsIsMobile}
                    />
                )}
            </Suspense>

            <Modal isOpen={isOpen} onClose={toggleIsOpen}>
                <Form tasks onSubmitTask={onSubmit} />
            </Modal>
        </div>
    );
};
