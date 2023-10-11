export interface IListButtons {
    icon: string;
    title?: string;
}

export interface IGroupButtonIconType {
    listIconsButton: IListButtons[];
    handleAction: (index: number) => void;
    classPrefix?: string;
    classPrefixIcon?: string;
    classPrefixUpLoader?: string;
    classPrefixTitle?: string;
    children?: React.ReactNode;
    svgPath: string;
    isLoad?: boolean;
    id: string;
    priority?: boolean;
}
