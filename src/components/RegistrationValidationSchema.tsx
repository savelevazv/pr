import * as yup from "yup";

export const RegistrationValidationSchema = yup.object().shape({
    email: yup.string()
        .required('')
        .email('')
})
