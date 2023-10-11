import type { ISubTaskReducer, SubTaskAction } from "./store.type";
import { SubTaskActionTypes } from "./store.type";

const initialState: ISubTaskReducer = {
    subtasks: [],
};

export const subtasksReducer = (state = initialState, action: SubTaskAction) => {
    switch (action.type) {
        case SubTaskActionTypes.ADD_SUBTASKS:
            return { subtasks: action.payload };
        case SubTaskActionTypes.ADD_SUBTASK:
            return { subtasks: [...state.subtasks, action.payload] };
        case SubTaskActionTypes.REMOVE_SUBTASK:
            return { subtasks: state.subtasks.filter((el) => el.id !== action.payload) };
        case SubTaskActionTypes.COMPLETED_SUBTASK:
            return {
                subtasks: state.subtasks.map((el) =>
                    el.id === action.payload ? { ...el, isCompleted: !el.isCompleted } : el,
                ),
            };
        default:
            return state;
    }
};
