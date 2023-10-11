export interface ITaskInfoHeaderType {
    numberTask?: number;
    status: string;
    priority: boolean;
    id: string;
    toggleIsOpen: () => void;
}
