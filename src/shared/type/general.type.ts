export enum GeneralActionType {
    RESIZE_WIDTH = "RESIZE_WIDTH",
}

export interface GeneralAddWidth {
    type: GeneralActionType.RESIZE_WIDTH;
    payload: boolean;
}

export type generalAction = GeneralAddWidth;

export interface IGeneralReducer {
    isMobile: boolean;
}
