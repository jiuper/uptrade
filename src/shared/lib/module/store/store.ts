import { combineReducers, createStore } from "redux";

import { commentReducer } from "../../../../entities/Comment/module/store";
import { projectReducer } from "../../../../entities/Project/module/store/store";
import { subtasksReducer } from "../../../../entities/SubTask/module/store";
import { tasksReducer } from "../../../../entities/Task/module/store/store";
import { generalReducer } from "../reducers/generalReducer";
import { tabsReducer } from "../reducers/TabsReducer";

export const rootReducer = combineReducers({
    projects: projectReducer,
    tabs: tabsReducer,
    tasks: tasksReducer,
    comment: commentReducer,
    subtasks: subtasksReducer,
    width: generalReducer,
});

export const store = createStore(rootReducer);

export type RootReducer = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
