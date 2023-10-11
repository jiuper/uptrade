import { useMemo, useState } from "react";

import { useLocalSave } from "../../../../shared/lib/hooks/useLocalSave";
import type { ICommentType } from "../../type/index.type";
import { CommentItem } from "../CommentItem/CommentItem";

export const CommentList = ({ comments }: { comments: ICommentType[] }) => {
    useLocalSave({ comment: comments });
    const [isActive, setIsActive] = useState<string>("");
    const handleIsActive = (id: string) => {
        if (isActive === id) {
            setIsActive("");
        }
        setIsActive(id);
    };
    const rootComments = useMemo(() => comments.filter((el) => el.parentId === null), [comments]);
    const getReplies = (commentId: string) => {
        return comments.filter((comment) => comment.parentId === commentId);
    };

    return (
        <>
            {rootComments.map((comment, i) => (
                <CommentItem
                    key={i}
                    {...comment}
                    handleIsActive={handleIsActive}
                    isActive={isActive}
                    replies={getReplies(comment.id)}
                    comments={comments}
                />
            ))}
        </>
    );
};
