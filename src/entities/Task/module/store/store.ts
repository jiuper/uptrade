import type { ITaskReducer, TaskAction } from "./store.type";
import { TaskActionTypes } from "./store.type";

const initialState: ITaskReducer = {
    tasks: [],
};

export const tasksReducer = (state = initialState, action: TaskAction) => {
    switch (action.type) {
        case TaskActionTypes.ADD_TASKS:
            return { tasks: action.payload };
        case TaskActionTypes.ADD_TASK:
            return { tasks: [...state.tasks, action.payload] };
        case TaskActionTypes.REMOVE_TASK:
            return { tasks: state.tasks.filter((el) => el.id !== action.payload) };
        case TaskActionTypes.UPDATE_TASKS:
            return {
                tasks: state.tasks.map((el) =>
                    el.id === action.payload.id ? { ...el, status: action.payload.status } : el,
                ),
            };
        case TaskActionTypes.PRIORITY_TASK:
            return {
                tasks: state.tasks.map((el) => (el.id === action.payload ? { ...el, priority: !el.priority } : el)),
            };
        case TaskActionTypes.REMOVE_TASK_PROJECT:
            return { tasks: state.tasks.filter((el) => el.idProject !== action.payload) };
        case TaskActionTypes.FILE_LOADER_TASK:
            return {
                tasks: state.tasks.map((el) =>
                    el.id === action.payload.id ? { ...el, fileInfo: [...el.fileInfo, action.payload.file] } : el,
                ),
            };
        case TaskActionTypes.FILE_REMOVE_TASK:
            return {
                tasks: state.tasks.map((el) =>
                    el.id === action.payload.id
                        ? { ...el, fileInfo: el.fileInfo.filter((file) => file.id !== action.payload.file) }
                        : el,
                ),
            };
        default:
            return state;
    }
};
