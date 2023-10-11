export interface ITaskType {
    id: string;
    numberTask?: number;
    title: string;
    description: string;
    fileInfo: IFile[];
    priority: boolean;
    dateCreate: string;
    dateEnd: string;
    status: string;
    idProject?: string;
}

export interface IFile {
    name: string;
    type: string;
    lastModified: number;
    id: string;
    dateCreate: string;
}
