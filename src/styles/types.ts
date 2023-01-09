import { StyledSortBtnProps } from "../components/Buttons/Buttons.styled"

interface BaseProps {
    padding?: string
    pt?: string
    pl?: string
    pr?: string
    pb?: string
    margin?: string
    mt?: string
    ml?: string
    mr?: string
    mb?: string
    color?: string
    fontSize?: string
}

export interface DivProps extends FontBaseProps {
    width?: string
    maxWidth?: string
    height?: string
    maxHeight?: string
    minHeight?: string
    backgroundColor?: string
    boxShadow?: string
    border?: string
    br?: string
    position?: string
    top?: string
    bottom?: string
    left?: string
    right?: string
    zIndex?: number
    visibility?: string
    opacity?: string
    overflowX?: string
    overflowY?: string
    overflow?: string
}

export interface FlexProps {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
}

export interface FontBaseProps extends BaseProps {
    textAlign?: string
    cursor?: string
    fontWeight?: string
}

export interface FontProps extends Omit<FontBaseProps, "cursor"> {
    fontWeight?: string
}

export interface StyledLinkProps extends StyledSortBtnProps, Omit<FontProps, "textAlign"> {
    colorHover?: string
    width?: string // избежать повтора
}

export interface GridProps {
    columns?: string
    rows?: string
    gap?: string
}