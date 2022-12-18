import styled from "styled-components";
import { Div } from "./Div.styled";
import { GridProps } from "./types";

export const Grid = styled(Div) <GridProps>`
    & {
        display: grid;
        grid-template-columns: ${props => props.columns || 'repeat(4, 1fr)'};
        grid-template-rows:  ${props => props.rows || ''};
        gap: ${props => props.gap || ''};
    }
`