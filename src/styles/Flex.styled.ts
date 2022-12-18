import styled from "styled-components";
import { Div } from "./Div.styled";
import { FlexProps } from "./types";

export const Flex = styled(Div) <FlexProps>`
& {
    display: flex;
    flex-direction: ${props => props.direction || ''};
    justify-content: ${props => props.justify || ''};
    align-items: ${props => props.align || ''};
    flex-wrap: ${props => props.wrap || ''};
    min-height: ${props => props.minHeight || ''};
    gap: ${props => props.gap || ''};    
}
`