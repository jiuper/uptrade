import { useParams } from "react-router-dom";
import cnBind from "classnames/bind";

import type { IProjectItemType } from "../../../entities/Project/type/index.type";
import type { ITaskType } from "../../../entities/Task/type/index.type";
import { Button } from "../../../shared/ui/Button/Button";
import { FormField } from "../../../shared/ui/FormField/FormField";
import { useListFormData } from "../../helper/listFormData";

import type { IFormType } from "./Form.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const Form = ({ tasks = false, onSubmitProject = () => {}, onSubmitTask = () => {} }: IFormType) => {
    const { id } = useParams();
    const { formDataTasks, formDataProject, isValid, state } = useListFormData();
    const handleSubmit = () => {
        const replyDate = {
            id: Math.random().toString(32),
            title: state.title.value,
            description: state.description.value,
            dateCreate: new Date().toISOString(),
        };

        if (tasks) {
            const data: ITaskType = {
                ...replyDate,
                dateEnd: state.end.value !== "" ? state.end.value : new Date().toISOString(),
                status: "Queue",
                idProject: id,
                priority: false,
                fileInfo: [],
            };
            onSubmitTask(data);
        }

        if (!tasks) {
            const data: IProjectItemType = {
                ...replyDate,
                progress: 0,
                countTasks: 0,
            };
            onSubmitProject(data);
        }
    };

    return (
        <form className={cx("form")}>
            <div className={cx("form-header")}>
                <h3>{tasks ? "New Task" : "New Project"}</h3>
            </div>
            <div className={cx("form-body")}>
                {formDataProject.map((el) => (
                    <FormField
                        key={el.title}
                        title={el.title}
                        value={el.value}
                        placeholder={el.placeholder}
                        error={el.error}
                        name={el.name}
                        isBlur={() => el.handleOnBlur(true, el.name)}
                        handleChange={(e) => el.handleChange(e.target.value, el.name)}
                    />
                ))}

                <FormField
                    title="Date"
                    value={new Date().toDateString()}
                    placeholder={new Date().toDateString()}
                    name="date"
                    disabled
                />
                {tasks && (
                    <div className={cx("tasks")}>
                        {formDataTasks.map((el) => (
                            <FormField
                                key={el.title}
                                title={el.title}
                                value={el.value}
                                placeholder={el.placeholder}
                                error={el.error}
                                name={el.name}
                                isBlur={() => el.handleOnBlur(true, el.name)}
                                handleChange={(e) => el.handleChange(e.target.value, el.name)}
                                type="date"
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className={cx("form-footer")}>
                <Button
                    className={cx("form-btn", isValid ? "" : "btn-disable")}
                    disabled={!isValid}
                    handleClick={handleSubmit}
                >
                    Create new project
                </Button>
            </div>
        </form>
    );
};
