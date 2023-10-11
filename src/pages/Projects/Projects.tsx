import cnBind from "classnames/bind";

import { useAction } from "../../entities/Project/lib/hooks/useAction";
import { ProjectActionTypes } from "../../entities/Project/module/store/store.type";
import type { IProjectItemType } from "../../entities/Project/type/index.type";
import { ListProjects } from "../../entities/Project/ui/ListProjects/ListProjects";
import { Form } from "../../feauters/ui/Form/Form";
import { Tabs } from "../../feauters/ui/Tabs/ui/Tabs";
import { useLocalSave } from "../../shared/lib/hooks/useLocalSave";
import { useHookDispatch, useHookSelector } from "../../shared/lib/module/store/configStore";
import { TabsActionTypes } from "../../shared/type/tabs.type";
import { FormRemove } from "../../shared/ui/FormRemove/FormRemove";
import { Modal } from "../../widgets/Modal";
import { Toolbar } from "../../widgets/Toolbar/Toolbar";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const Projects = ({ isMobile }: { isMobile: boolean }) => {
    const dispatch = useHookDispatch();
    const dashboard = useHookSelector((state) => state.projects.dashboard);
    const tasks = useHookSelector((state) => state.tasks.tasks);
    const tabsType = useHookSelector((state) => state.tabs.tabsType);
    const { setIsDashboard } = useLocalSave({ tasks, dashboard });
    const { isOpen, toggleIsOpen, isForm, handleIsAction, setFalse } = useAction();
    const onSubmit = (data: IProjectItemType) => {
        dispatch({ type: ProjectActionTypes.ADD_PROJECT, payload: data });
        setFalse();
        toggleIsOpen();
        setIsDashboard(dashboard);
    };
    const handleChangeTab = (type: string) => {
        dispatch({ type: TabsActionTypes.TOGGLE_TABS, payload: type });
    };

    return (
        <div className={cx(isMobile ? "projects-page-mobile" : "projects-page")}>
            <div className={cx(isMobile ? "projects-mobile" : "projects", !isMobile && "container")}>
                {isMobile && <Tabs isMobile={isMobile} handleChangeTab={handleChangeTab} tabsType={tabsType} />}
                <div className={cx("projects-tasks", isMobile && "projects-tasks-mobile")}>
                    {!isMobile && (
                        <Toolbar isDelete={dashboard.length !== 0} handleIsAction={handleIsAction} indexBtn={1} />
                    )}
                    <div className={cx(isMobile ? "tasks__items-mobile" : "tasks__items")}>
                        {dashboard.length ? (
                            <ListProjects tasks={tasks} dashboard={dashboard} />
                        ) : (
                            <div className={cx("tasks__empty")}>Empty Projects</div>
                        )}
                    </div>
                </div>
            </div>
            {isMobile && <Toolbar isMobile={isMobile} handleIsAction={handleIsAction} indexBtn={1} />}
            <Modal isOpen={isOpen} onClose={handleIsAction}>
                {isForm ? <Form onSubmitProject={onSubmit} /> : <FormRemove dashboard={dashboard} />}
            </Modal>
        </div>
    );
};
