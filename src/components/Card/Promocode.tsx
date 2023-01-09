import React, { FC } from "react";
import { Flex } from "../../styles/Flex.styled";
import { StyledSpan } from "../../styles/Fonts.styled";
import { useAppDispatch } from "../../store/hooks/hooks";
import { StyledPromocodeBtn } from "../Buttons/Buttons.styled";
import { StyledPromocodeSpan } from "./Card.styled";
import { setModal } from "../../store/reducers/modalReducer";
import { useMediaQuery } from "react-responsive";

export const Promocode: FC<{ promocode: string }> = ({ promocode }) => {
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 999.5px)' })
    const dispatch = useAppDispatch()

    return (
        <StyledPromocodeBtn
            onClick={() => dispatch(setModal(true))}
        >
            <Flex
                align={'center'}
                justify={'center'}
                width={isTablet ? '90%' : '180px'}
                height={'40px'}
                backgroundColor={'#FF654E'}
                br={'7px 0 0 7px'}
                pl={'8px'}

            >
                <StyledSpan
                    color={'#FFFFFF'}
                    fontSize={'16px'}

                >
                    Открыть промокод
                </StyledSpan>
            </Flex>
            <svg style={{ marginLeft: '-4px' }} width="10" height="40" viewBox="0 0 10 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_399_2)">
                    <rect y="9" width="10" height="31" fill="#FF654E" />
                    <path d="M0 0L10 10V0H0Z" fill="#F2F2F2" />
                    <path d="M10 10.0104L0.010389 -3.03035e-06L5.00679e-06 9.99999L10 10.0104Z" fill="#FF654E" />
                    <path d="M10 10.0104L0.010389 -3.03035e-06L5.00679e-06 9.99999L10 10.0104Z" fill="black" fillOpacity="0.2" />
                </g>
                <defs>
                    <clipPath id="clip0_399_2">
                        <rect width="10" height="40" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <StyledPromocodeSpan>{promocode.slice(-2).toUpperCase()}</StyledPromocodeSpan>
        </StyledPromocodeBtn>
    )
}