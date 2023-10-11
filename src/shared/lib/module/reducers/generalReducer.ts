import type { generalAction, IGeneralReducer } from "../../../type/general.type";
import { GeneralActionType } from "../../../type/general.type";

const initialState: IGeneralReducer = {
    isMobile: false,
};

export const generalReducer = (state = initialState, action: generalAction) => {
    switch (action.type) {
        case GeneralActionType.RESIZE_WIDTH:
            return { isMobile: action.payload };
        default:
            return state;
    }
};
