import { useMemo } from "react";
import cnBind from "classnames/bind";

import svgPath from "../../../../../../shared/assets/icons/sprite.svg";
import { FilePreview } from "../../../../../../shared/ui/FilePreview/FilePreview";
import { SvgIcon } from "../../../../../../shared/ui/SvgIcon/SvgIcon";
import { CommentList } from "../../../../../Comment";

import type { ITaskInfoBodyType } from "./TaskInfoBody.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);
export const TaskInfoBody = ({ title, dateEnd, description, fileInfo, comment, dateCreate, id }: ITaskInfoBodyType) => {
    const dateMil: number = useMemo(
        () => new Date(dateEnd).getTime() - new Date(dateCreate).getTime(),
        [dateEnd, dateCreate],
    );

    return (
        <div className={cx("task-info__body")}>
            <div className={cx("body-top")}>
                <span className={cx("body-title")}>{title}</span>
                <div className={cx("body-date")}>
                    <SvgIcon classPrefix={cx("icon")} name="Clock" svgPath={svgPath} />
                    <span>{new Date(dateEnd).toLocaleDateString()}</span>
                </div>
            </div>
            <div className={cx("body-desc")}>{description}</div>
            <div className={cx("body-time")}>
                <div className={cx("time-end")}>End Time: {Math.floor(dateMil / (1000 * 60 * 60))}h</div>
            </div>
            <div className={cx("body-files")}>
                {fileInfo.length !== 0 && fileInfo.map((file, i) => <FilePreview key={i} file={file} taskId={id} />)}
            </div>

            {comment.length !== 0 && (
                <div className={cx("body-comments")}>
                    <CommentList comments={comment} />
                </div>
            )}
        </div>
    );
};
