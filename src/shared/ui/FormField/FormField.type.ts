export interface IFormFieldType {
    value: string;
    placeholder: string;
    error?: string | null;
    name: string;
    disabled?: boolean;
    classPrefix?: string;
    isBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    title: string;
    type?: string;
}
