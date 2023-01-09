import styled from "styled-components";

const StyledBasicInput = styled('input')`
    & {
        height: 50px;
        color: #303030;
        background-color: transparent;
        border: 0;
    }

     &:focus {
        outline: 0;  
    }

    &::placeholder {
        font-size: 15px;
        color: #9F9F9F;
    }
`

export const StyledPromocodeInput = styled('input')`
    & {
        font-size: 20px;
        font-weight: 600;
        width: 100%;
        border-radius: 14px;
        outline: none;
        border: none;
        text-align: center;
        padding-right: 160px;
    }
`

export const StyledInputSearch = styled(StyledBasicInput)`
    & {
        width: 100%;
        caret-color: #FF654E;
    }

`

export const StyledInputForm = styled(StyledBasicInput)`
    & {
        width: 100%;
        background-color: #F3F3F3;
        padding: 0 40px 0 16px;
        border-radius: 14px;
    }
`

export const StyledInputBanner = styled(StyledInputForm)` 
    & {
        z-index: 1;
        height: 55px;
    }
`