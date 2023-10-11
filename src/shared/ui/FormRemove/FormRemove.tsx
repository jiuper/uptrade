import cnBind from "classnames/bind";

import { ProjectActionTypes } from "../../../entities/Project/module/store/store.type";
import type { IProjectItemType } from "../../../entities/Project/type/index.type";
import { TaskActionTypes } from "../../../entities/Task/module/store/store.type";
import svgPath from "../../assets/icons/sprite.svg";
import { useHookDispatch } from "../../lib/module/store/configStore";
import { SvgIcon } from "../SvgIcon/SvgIcon";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const FormRemove = ({ dashboard }: { dashboard: IProjectItemType[] }) => {
    const dispatch = useHookDispatch();
    const handleRemove = (id: string) => {
        dispatch({ type: ProjectActionTypes.REMOVE_PROJECT, payload: id });
        dispatch({ type: TaskActionTypes.REMOVE_TASK_PROJECT, payload: id });
    };

    return (
        <div className={cx("form-remove")}>
            <div className={cx("form-remove__title")}>Remove</div>
            {dashboard.length !== 0 ? (
                dashboard.map((el) => (
                    <div
                        className={cx("form-remove__item")}
                        style={{
                            background: `linear-gradient(90deg, #69f0ae ${el.progress}%, transparent ${el.progress}%`,
                        }}
                        key={el.id}
                        onClick={() => handleRemove(el.id)}
                    >
                        <div>{el.title}</div>
                        <div>{el.dateCreate}</div>
                        <div>{el.countTasks} Tasks</div>
                        <div className={cx("btn-remove")}>
                            <SvgIcon classPrefix={cx("icon")} name="Delete" svgPath={svgPath} />
                        </div>
                    </div>
                ))
            ) : (
                <div className={cx("tasks__empty")}>Empty Projects</div>
            )}
        </div>
    );
};
