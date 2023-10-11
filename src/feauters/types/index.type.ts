export type UniversalFormState<T> = {
    [key in keyof T]: {
        value: T[key];
        error: string | null;
        isDirty: boolean;
    };
};
