import type { IProjectReducer, ProjectAction } from "./store.type";
import { ProjectActionTypes } from "./store.type";

const initialState: IProjectReducer = {
    dashboard: [],
};

export const projectReducer = (state = initialState, action: ProjectAction) => {
    switch (action.type) {
        case ProjectActionTypes.ADD_PROJECTS:
            return { dashboard: action.payload };
        case ProjectActionTypes.ADD_PROJECT:
            return { dashboard: [...state.dashboard, action.payload] };
        case ProjectActionTypes.REMOVE_PROJECT:
            return { dashboard: state.dashboard.filter((p) => p.id !== action.payload) };
        case ProjectActionTypes.COUNT_TASKS:
            return {
                dashboard: state.dashboard.map((p) =>
                    p.id === action.payload.id ? { ...p, countTasks: action.payload.count } : p,
                ),
            };
        case ProjectActionTypes.PROGRESS_PROJECT:
            return {
                dashboard: state.dashboard.map((el) =>
                    el.id === action.payload.id
                        ? {
                              ...el,
                              progress:
                                  action.payload.count !== 0 && action.payload.allCount !== 0
                                      ? Math.floor((action.payload.count / action.payload.allCount) * 100)
                                      : 0,
                          }
                        : el,
                ),
            };
        default:
            return state;
    }
};
