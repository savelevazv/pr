import React, { FC, useState } from "react";
import { useFormik } from "formik";
import { Flex } from "../styles/Flex.styled";
import { RegistrationValidationSchema } from "./RegistrationValidationSchema";
import { InputForm } from "./Inputs/InputForm";
import { StyledFormBtn } from "./Buttons/Buttons.styled";
import { StyledP, StyledSpan } from "../styles/Fonts.styled";

export const Form: FC = () => {
    const [formSubscription, setFormSubscription] = useState<boolean>(false)

    const {
        values,
        errors,
        touched,
        setFieldValue,
        setFieldTouched,
        isValid,
        dirty,
        handleSubmit
    } = useFormik({
        initialValues: {
            email: ''
        },
        validateOnChange: true,
        validationSchema: RegistrationValidationSchema,
        onSubmit(values, { resetForm }) {
            console.log(values);
            resetForm();
        }
    })

    return (
        <Flex
            direction={'column'}
            align={'center'}
            justify={formSubscription ? 'center' : 'space-between'}
            backgroundColor={'#FFFFFF'}
            boxShadow={'0px 10px 80px rgb(90 90 90 / 10%)'}
            width={'30%'}
            height={'280px'}
            br={'14px'}
            padding={'22px'}
        >
            {
                formSubscription ? (
                    <StyledSpan
                        fontSize={'20px'}
                        textAlign={'center'}
                    >
                        Благодарим за подписку и<br />
                        желаем хорошего дня!
                    </StyledSpan>
                ) : (
                    <>
                        <StyledP
                            fontSize={'18px'}
                            mb={'16px'}
                            textAlign={'center'}
                        >
                            Если хотите получать от нас письма, оставьте адрес электронной почты
                        </StyledP>
                        <InputForm
                            value={values.email}
                            isDirty={touched.email}
                            errorMessage={errors.email}
                            onFocus={() => setFieldTouched('email', true, false)}
                            onChange={(e) => {
                                setFieldValue('email', e.target.value)
                            }}
                        />
                        <StyledFormBtn
                            disabled={!(isValid && dirty)}
                            onClick={() => {
                                handleSubmit();
                                setFormSubscription(true);
                            }}
                        >
                            Подписаться
                        </StyledFormBtn>
                        <StyledP
                            fontSize={'10px'}
                            textAlign={'center'}
                            color={'#9F9F9F'}
                        >
                            Нажимая на кнопку «Подписаться»,<br />вы соглашаетесь с политикой конфиденциальности
                        </StyledP>
                    </>
                )
            }
        </Flex>
    )
}