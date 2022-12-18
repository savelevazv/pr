import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Div } from "../../styles/Div.styled";
import { StyledRoundBtn } from "./Buttons.styled";
import { RoundBtn } from "./RoundBtn";

const StyledTopToScroll = styled(StyledRoundBtn)`
    &:hover {
        path {
            stroke: #FF654E;
        }
    }
`

export const ScrollToTop: FC = () => {
    const [scrollToTop, setScrollToTop] = useState<boolean>(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 450) {
                setScrollToTop(true)
            } else {
                setScrollToTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <Div
            position={'fixed'}
            right={'20px'}
            bottom={'20px'}
        >
            {scrollToTop && (
                <StyledTopToScroll
                    boxShadow={'0px 1px 30px rgb(0 0 0 / 5%);'}
                    backgroundColor={'#FFF'}
                    onClick={scrollUp}
                >
                    <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 24.8571L12 2.00001" stroke="#303030" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2 12L12 2L22 12" stroke="#303030" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </StyledTopToScroll>
            )
            }
        </Div>
    )
}