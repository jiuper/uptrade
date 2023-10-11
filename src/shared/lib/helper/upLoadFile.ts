import type { Dispatch } from "redux";

import { TaskActionTypes } from "../../../entities/Task/module/store/store.type";

export const upLoadFile = (id: string, File: File, dispatch: Dispatch) => {
    const file = {
        id: Math.random().toString(36).substring(2, 11),
        dateCreate: new Date().toISOString(),
        name: File.name,
        lastModified: File.lastModified,
        type: File.type,
    };
    dispatch({ type: TaskActionTypes.FILE_LOADER_TASK, payload: { id, file } });
};
