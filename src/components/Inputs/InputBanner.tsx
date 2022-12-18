import React, { FC } from "react";
import styled from "styled-components";
import { StyledInputBanner } from "./Inputs.styled";

export interface InputProps {
    value?: string
    isDirty?: boolean
    errorMessage?: string
    onFocus?: (event: React.FocusEvent<HTMLDivElement>) => void,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const InputBanner: FC<InputProps> = ({ value, isDirty, errorMessage, onFocus, onChange }) => {
    return (
        <StyledInputBanner
            type={'text'}
            placeholder={'Email'}
            value={value}
            onFocus={onFocus}
            onChange={onChange}
        />
    )
}