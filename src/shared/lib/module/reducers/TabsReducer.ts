import type { ITabsReducer, TabsAction } from "../../../type/tabs.type";
import { TabsActionTypes } from "../../../type/tabs.type";

const initialState: ITabsReducer = {
    tabsType: "All",
    tabsIsMobile: "All",
    tabsIsTask: "Info",
};

export const tabsReducer = (state = initialState, action: TabsAction) => {
    switch (action.type) {
        case TabsActionTypes.TOGGLE_TABS:
            return { tabsType: action.payload, tabsIsMobile: state.tabsIsMobile, tabsIsTask: state.tabsIsTask };
        case TabsActionTypes.TOGGLE_TABS_MOBILE:
            return { tabsIsMobile: action.payload, tabsType: state.tabsType, tabsIsTask: state.tabsIsTask };
        case TabsActionTypes.TOGGLE_TABS_TASK:
            return { tabsIsTask: action.payload, tabsType: state.tabsType, tabsIsMobile: state.tabsIsMobile };
        default:
            return state;
    }
};
