import cnBind from "classnames/bind";

import { TaskActionTypes } from "../../../entities/Task/module/store/store.type";
import svgPath from "../../assets/icons/sprite.svg";
import { useHookDispatch } from "../../lib/module/store/configStore";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { SvgIcon } from "../SvgIcon/SvgIcon";

import type { IFilePreviewType } from "./FilePreview.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);

export const FilePreview = ({ file, taskId, isMobile = false }: IFilePreviewType) => {
    const dispatch = useHookDispatch();
    const handleDelete = (idFile: string) => {
        dispatch({ type: TaskActionTypes.FILE_REMOVE_TASK, payload: { id: taskId, file: idFile } });
    };

    return (
        <div className={cx("file", isMobile && "file-mobile")}>
            <div className={cx("file-icon", isMobile && "file-icon-mobile")}>
                <SvgIcon name="Docx" svgPath={svgPath} />
            </div>
            <div className={cx("file-desc", isMobile && "file-desc-mobile")}>
                <span className={cx("file-name")}>{file.name}</span>
                <span className={cx("file-date")}>{new Date(file.dateCreate).toLocaleDateString()}</span>
            </div>
            <ButtonIcon path={svgPath} nameIcon="Delete" handleAction={() => handleDelete(file.id)} />
        </div>
    );
};
