import React, { FC } from "react";
import { StyledInputForm } from "./Inputs.styled";
import { InputProps } from "./InputBanner";

export const InputForm: FC<InputProps> = ({ value, isDirty, errorMessage, onFocus, onChange }) => {
    return (
        <StyledInputForm
            type={'text'}
            placeholder={'Email'}
            value={value}
            onFocus={onFocus}
            onChange={onChange}
        />
    )
}