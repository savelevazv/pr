import React, { ReactNode } from "react";
import { FC } from "react";
import { useMediaQuery } from "react-responsive";
import { Div } from "../../styles/Div.styled";

export const CenteredLayoutBody: FC<{ children: ReactNode }> = ({ children }) => {
    const isMobile = useMediaQuery({ query: '(min-width: 320px) and (max-width: 479px)' })
    const isMobile480 = useMediaQuery({ query: '(min-width: 480px) and (max-width: 767.5px)' })
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 999.5px)' })
    const isDesktop = useMediaQuery({ query: '(min-width: 1000px) and (max-width: 1199px)' })
    

    return (
        <Div
            width={
                isDesktop ? '940px' : isTablet ? '740px' : isMobile480 ? '90%' : isMobile ? '300px' : '1200px'
            }
        >
            {children}
        </Div>
    )
}