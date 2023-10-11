import { formData } from "../const/formData";
import { useForm } from "../hooks/useForm";
import { FormData } from "../ui/Form/Form.type";

export const useListFormData = () => {
    const { state, handleChange, handleOnBlur, isValid } = useForm(formData);

    const formDataProject = [
        {
            title: "Title",
            value: state.title.value,
            placeholder: FormData.TITLE,
            error: state.title.error,
            name: FormData.TITLE,
            handleOnBlur,
            handleChange,
        },
        {
            title: "Description",
            value: state.description.value,
            placeholder: FormData.DESCRIPTION,
            error: state.description.error,
            name: FormData.DESCRIPTION,
            handleOnBlur,
            handleChange,
        },
    ];
    const formDataTasks = [
        {
            title: "End Time",
            value: state.end.value,
            placeholder: FormData.END_TIME,
            error: state.end.error,
            name: FormData.END_TIME,
            handleOnBlur,
            handleChange,
        },
    ];

    return { formDataProject, formDataTasks, isValid, state };
};
