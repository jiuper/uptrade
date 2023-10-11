import type { ISubTask } from "../../type/index.type";
import { SubTaskItem } from "../SubTaskItem/SubTaskItem";

export const SubTaskList = ({ subtasks }: { subtasks: ISubTask[] }) => {
    return (
        <>
            {subtasks.map((subtask) => (
                <SubTaskItem key={subtask.id} {...subtask} />
            ))}
        </>
    );
};
