export interface ITabsReducer {
    tabsType: string;
    tabsIsMobile: string;
    tabsIsTask: string;
}

export enum TabsActionTypes {
    TOGGLE_TABS = "TOGGLE_TABS",
    TOGGLE_TABS_MOBILE = "TOGGLE_TABS_MOBILE",
    TOGGLE_TABS_TASK = "TOGGLE_TABS_TASK",
}

export type TabsAction = TabsActionAdd | TabsActionAddMobile | TabsActionAddTask;

export interface TabsActionAdd {
    type: TabsActionTypes.TOGGLE_TABS;
    payload: string;
}

export interface TabsActionAddMobile {
    type: TabsActionTypes.TOGGLE_TABS_MOBILE;
    payload: string;
}

export interface TabsActionAddTask {
    type: TabsActionTypes.TOGGLE_TABS_TASK;
    payload: string;
}
