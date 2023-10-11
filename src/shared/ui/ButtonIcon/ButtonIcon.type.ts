export interface ButtonIconType {
    path: string;
    nameIcon: string;
    handleAction?: () => void;
    classPrefix?: string;
    classPrefixIcon?: string;
    fill?: "clear" | "default" | "outline" | "solid" | undefined;
    classIconSize?: "low" | "medium" | "hard";
    children?: React.ReactNode;
    disabled?: boolean;
}
