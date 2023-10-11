export interface ITextField {
    placeholder?: string;
    name?: string;
    classPrefix?: string;
    value?: string | undefined;
    disabled?: boolean;
    type?: string;
    error?: string | null;
    maxLength?: number | undefined;
    isBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
