import type { IFile } from "../../../entities/Task/type/index.type";

export interface IFilePreviewType {
    file: IFile;
    taskId: string;
    isMobile?: boolean;
}
