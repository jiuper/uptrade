import { useMemo } from "react";
import cnBind from "classnames/bind";

import { Tabs } from "../../../../feauters/ui/Tabs/ui/Tabs";
import svgPath from "../../../../shared/assets/icons/sprite.svg";
import { upLoadFile } from "../../../../shared/lib/helper/upLoadFile";
import { useHookDispatch, useHookSelector } from "../../../../shared/lib/module/store/configStore";
import { TabsActionTypes } from "../../../../shared/type/tabs.type";
import { Button } from "../../../../shared/ui/Button/Button";
import { ButtonIcon } from "../../../../shared/ui/ButtonIcon/ButtonIcon";
import { FilePreview } from "../../../../shared/ui/FilePreview/FilePreview";
import { InputLoaderFile } from "../../../../shared/ui/InputLoaderFile/InputLoaderFile";
import { Progress } from "../../../../shared/ui/Progress/Progress";
import { SvgIcon } from "../../../../shared/ui/SvgIcon/SvgIcon";
import { CommentList } from "../../../Comment";
import { CommentForm } from "../../../Comment/ui/CommentForm/CommentForm";
import { SubTasks } from "../../../SubTask";
import { TaskActionTypes } from "../../module/store/store.type";
import type { ITaskItemType } from "../TaskItem/TaskItem.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);

export const TaskInfoMobile = ({
    dateEnd,
    id,
    title,
    numberTask,
    status,
    priority,
    description,
    dateCreate,
    comment = [],
    fileInfo,
    progress = 0,
    toggleIsOpen = () => {},
}: ITaskItemType) => {
    const dispatch = useHookDispatch();
    const listTabs: string[] = ["Subtasks", "Info", "Files", "Comment"];
    const tabsIsTask = useHookSelector((state) => state.tabs.tabsIsTask);
    const listBtns: { icon: string; handleAction: (val?: string) => void }[] = [
        { icon: "Back", handleAction: () => toggleIsOpen() },
        { icon: "Queue", handleAction: () => handleIsStatus("Queue") },
        { icon: "Dev", handleAction: () => handleIsStatus("Development") },
        { icon: "Done", handleAction: () => handleIsStatus("Done") },
    ];
    const handleIsStatus = (val: string) => {
        dispatch({ type: TaskActionTypes.UPDATE_TASKS, payload: { id, status: val } });
        toggleIsOpen();
    };
    const handleIsPriority = () => {
        dispatch({ type: TaskActionTypes.PRIORITY_TASK, payload: id });
    };
    const handleChangeTab = (type: string) => {
        dispatch({ type: TabsActionTypes.TOGGLE_TABS_TASK, payload: type });
    };

    const handleDispatch = (file: File) => {
        upLoadFile(id, file, dispatch);
    };
    const dateMil: number = useMemo(
        () => new Date(dateEnd).getTime() - new Date(dateCreate).getTime(),
        [dateEnd, dateCreate],
    );

    return (
        <div className={cx("task-info__mobile")}>
            <div className={cx("task-mobile__container")}>
                <div className={cx("task-mobile__header")}>
                    <div className={cx("task-mobile__caption")}>
                        <div className={cx("caption-item")}>
                            <div className={cx("caption__top")}>
                                Task: {numberTask}
                                <SvgIcon name="Date" classPrefix={cx("icon")} svgPath={svgPath} />
                            </div>
                            <div className={cx("caption__bottom")}>
                                End Time: {Math.floor(dateMil / (1000 * 60 * 60))}h
                            </div>
                        </div>
                        <div className={cx("task-mobile__priority")}>
                            <ButtonIcon
                                classPrefixIcon={cx(priority && "btn-icon__active", "btn-icon")}
                                path={svgPath}
                                nameIcon="Pin"
                                handleAction={handleIsPriority}
                                classIconSize="hard"
                            />
                        </div>
                    </div>
                    <div className={cx("task-mobile__progress")}>
                        <Progress progress={progress} />
                    </div>
                    <div className={cx("task-mobile__btns")}>
                        {listBtns.map((btn) => (
                            <Button key={btn.icon} className={cx("btn-action")} handleClick={btn.handleAction}>
                                {btn.icon}
                            </Button>
                        ))}
                    </div>
                </div>
                <div className={cx("task-mobile__notification")}>
                    <span>{priority ? "Priority" : "Not Priority"}</span>
                    <span>{status}</span>
                </div>
                <div className={cx("task-mobile__filter")}>
                    <Tabs isMobile listTabs={listTabs} tabsType={tabsIsTask} handleChangeTab={handleChangeTab} />
                </div>
                <div className={cx("task-mobile__body")}>
                    {tabsIsTask === "Info" && (
                        <div className={cx("task-mobile__info")}>
                            <div className={cx("info__column")}>
                                <span>
                                    <b>Title:</b> {title}
                                </span>
                                <div className={cx("info__description")}>
                                    <b>Description:</b>
                                    <div>{description}</div>
                                </div>
                            </div>
                            <div className={cx("info__column")}>
                                <span>
                                    <b>DateCreate:</b> {new Date(dateCreate).toLocaleDateString()}
                                </span>
                                <span>
                                    <b>DateEnd:</b> {new Date(dateEnd).toLocaleDateString()}
                                </span>
                            </div>
                        </div>
                    )}
                    {tabsIsTask === "Comment" && (
                        <div className={cx("task-mobile__comments")}>
                            <div className={cx("comments-item")}>
                                <CommentList comments={comment} />
                            </div>
                            <div className={cx("comments-form")}>
                                <CommentForm taskId={id} />
                            </div>
                        </div>
                    )}
                    {tabsIsTask === "Subtasks" && <SubTasks isMobile taskId={id} />}
                    {tabsIsTask === "Files" && (
                        <div className={cx("file-mobile")}>
                            <ButtonIcon path={svgPath} nameIcon="Add">
                                <InputLoaderFile handleUpLoader={handleDispatch} classPrefix={cx("btn-loader")} />
                            </ButtonIcon>
                            <div className={cx("body-files")}>
                                {fileInfo.length !== 0 &&
                                    fileInfo.map((file, i) => <FilePreview isMobile key={i} file={file} taskId={id} />)}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
