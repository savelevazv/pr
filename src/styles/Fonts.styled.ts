import styled from "styled-components";
import { FontBaseProps, FontProps } from "./types";

export const StyledH1 = styled('h1') <FontProps>`
  & {
        font-weight: ${props => props.fontWeight || '600'};
        font-size: ${props => props.fontSize || '32px'};
        color: ${props => props.color || ''};
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
        text-align: ${props => props.textAlign || ''};

        @media (max-width: 999.5px) {
            font-size: 24px;
          }
  }
`

export const StyledH2 = styled('h2') <FontProps>`
   & {
        font-weight: ${props => props.fontWeight || '600'};
        font-size: ${props => props.fontSize || '32px'};
        color: ${props => props.color || ''};
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
        text-align: ${props => props.textAlign || ''};

        @media (max-width: 999.5px) {
            font-size: 24px;
          }
   }
`

export const StyledH3 = styled('h3') <FontBaseProps>`
    & {
        font-weight: 600;
        font-size: ${props => props.fontSize || '20px'};
        color: ${props => props.color || ''};
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
        text-align: ${props => props.textAlign || ''};
        cursor: ${props => props.cursor || ''};
    }
`

export const StyledSpan = styled('span') <FontProps>`
    & {
        font-weight: ${props => props.fontWeight || '600'};
        font-size: ${props => props.fontSize || '14px'};
        color: ${props => props.color || ''};
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
        text-align: ${props => props.textAlign || ''};
    }
`

export const StyledP = styled('p') <FontBaseProps>`
    & {
        font-weight: 500;
        font-size: ${props => props.fontSize || '16px'};
        color: ${props => props.color || ''};
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
        text-align: ${props => props.textAlign || ''};
        cursor: ${props => props.cursor || ''};
    }
`



