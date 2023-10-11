export interface IToolbarType {
    isDelete?: boolean;
    handleIsAction?: (indexBtn?: number) => void;
    isMobile?: boolean;
    className?: string;
    indexBtn?: number;
    svgPath?: string;
}
