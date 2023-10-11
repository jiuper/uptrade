export interface IButton {
    children: React.ReactNode;
    className?: string;
    type?: "submit" | "button";
    handleClick: () => void;
    fill?: "clear" | "default" | "outline" | "solid" | undefined;
    disabled?: boolean;
}
