import React, { FC, ReactNode } from "react";
import { StyledLink } from "./styles/Link.styled";
import { StyledLinkProps } from "./styles/types";

export interface LinkProps extends StyledLinkProps {
    to?: string // сделать обязательным
    target?: string
    children: ReactNode
}

export const Link: FC<LinkProps> = ({
    width,
    fontSize,
    fontWeight,
    padding,
    pt,
    pr,
    pb,
    pl,
    margin,
    mt,
    mr,
    mb,
    ml,
    color,
    colorHover,
    backgroundColorHover,
    to,
    children,
    target,
}): JSX.Element => {

    return (
        <StyledLink
            width={width}
            fontSize={fontSize}
            fontWeight={fontWeight}
            padding={padding}
            pt={pt}
            pr={pr}
            pb={pb}
            pl={pl}
            margin={margin}
            mt={mt}
            mr={mr}
            mb={mb}
            ml={ml}
            color={color}
            colorHover={colorHover}
            backgroundColorHover={backgroundColorHover}
            target={target}
            href={to}>
            {children}
        </StyledLink>
    )
}