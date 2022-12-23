import { FC, MouseEvent, ReactNode } from "react";
import { StyledRoundBtn, StyledRoundBtnProps } from "./Buttons.styled";
import { IconProps } from "./ContactsBtn";

export interface RoundBtnProps extends StyledRoundBtnProps, IconProps {
    onClick?: (event: MouseEvent<HTMLElement>) => void
}

export const RoundBtn: FC<RoundBtnProps> = ({
    icon,
    backgroundColor,
    boxShadow,
    onClick,
    width,
    height,
    zIndex,
    position,
    top,
    left,
    right,
    bottom,
    hoverOpacity,
}): JSX.Element => {
    return (
        <StyledRoundBtn
            width={width}
            height={height}
            backgroundColor={backgroundColor}
            boxShadow={boxShadow}
            onClick={onClick}
            zIndex={zIndex}
            position={position}
            top={top}
            left={left}
            right={right}
            bottom={bottom}
            hoverOpacity={hoverOpacity}
        >
            {icon}
        </StyledRoundBtn>
    )
}