import React, { FC, MouseEvent } from "react";
import { RoundBtn } from "./RoundBtn";


export interface CloseBtnProps {
    onClick: (event: MouseEvent<HTMLElement>) => void
}

export const CloseBtn: FC<CloseBtnProps> = ({ onClick }) => {
    return (
        <RoundBtn
            onClick={onClick}
            width={'24px'}
            height={'24px'}
            backgroundColor={'#FFE8E4'}
            hoverOpacity={0.8}
            icon={
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.70696 3.99999L7.85351 0.85379C8.04883 0.65847 8.04883 0.341795 7.85351 0.14649C7.65819 -0.0488301 7.34151 -0.0488301 7.14621 0.14649L3.99999 3.29302L0.85379 0.14649C0.65847 -0.0488301 0.341795 -0.0488301 0.14649 0.14649C-0.0488144 0.341811 -0.0488301 0.658485 0.14649 0.85379L3.29302 3.99999L0.14649 7.14621C-0.0488301 7.34153 -0.0488301 7.6582 0.14649 7.85351C0.341811 8.04881 0.658485 8.04883 0.85379 7.85351L3.99999 4.70696L7.14619 7.85351C7.34151 8.04883 7.65819 8.04883 7.85349 7.85351C8.04881 7.65819 8.04881 7.34151 7.85349 7.14621L4.70696 3.99999Z" fill="#FF654E" />
                </svg>
            }
        />
    )
}