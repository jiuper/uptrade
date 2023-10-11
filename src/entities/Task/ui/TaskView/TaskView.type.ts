import type { ITaskType } from "../../type/index.type";

export interface ITaskViewType {
    toggleIsOpen: () => void;
    filterTasks: ITaskType[];
    svgPath: string;
    isMobile?: boolean;
    tabsIsMobile?: string;
}
