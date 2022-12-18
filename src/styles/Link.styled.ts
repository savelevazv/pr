import styled from "styled-components";
import { StyledLinkProps } from "./types";

export const StyledLink = styled('a') <StyledLinkProps>`
    & {
        transition: color 0.3s ease-in-out;
        width: ${props => props.width || ''};
        color: ${props => props.color || 'inherit'};
        font-weight: ${props => props.fontWeight || ''};
        font-size: ${props => props.fontSize || ''};
        padding: ${props => props.padding || ''};
        padding-top: ${props => props.pt || ''};
        padding-left: ${props => props.pl || ''};
        padding-right: ${props => props.pr || ''};
        padding-bottom: ${props => props.pb || ''};
        margin: ${props => props.margin || ''};
        margin-top: ${props => props.mt || ''};
        margin-left: ${props => props.ml || ''};
        margin-right: ${props => props.mr || ''};
        margin-bottom: ${props => props.mb || ''};
    }
    
    &:hover {
        color: ${props => props.colorHover || ''};
        background-color: ${props => props.backgroundColorHover || ''};
    }

`