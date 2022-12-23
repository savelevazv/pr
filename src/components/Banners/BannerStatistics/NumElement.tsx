import { FC, useEffect, useState } from "react";
import { Flex } from "../../../styles/Flex.styled";
import CountUp from 'react-countup';
import { StyledSpan } from "../../../styles/Fonts.styled";
import { Div } from "../../../styles/Div.styled";
import { BaseLinkProps, TitleProps } from "../../Link";

interface NumElementProps extends TitleProps {
    number: number
}

export const NumElement: FC<NumElementProps> = ({ number, title }): JSX.Element => {

    const [counterOn, setCounterOn] = useState<boolean>(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 3000) {
                setCounterOn(true)
            } else {
                setCounterOn(false)
            }
        })
    }, [])

    return (
        <Flex
            direction={'column'}
            align={'center'}
        >
            <Div
                fontSize={'40px'}
                fontWeight={'600'}
                width={'110px'}
                height={'50px'}
                textAlign={'center'}
            >
                {
                    counterOn === true &&
                    <CountUp
                        start={0}
                        end={number}
                        delay={0}
                    />
                }
            </Div>
            <StyledSpan
            >
                {title}
            </StyledSpan>
        </Flex>
    )
}