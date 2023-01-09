import React, { FC } from "react";
import { Flex } from "../../styles/Flex.styled";
import { StyledP } from "../../styles/Fonts.styled";

export const TimeOfAction: FC<{ time: string }> = ({ time }) => {
    return (
        <Flex
            gap={'2px'}
        >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_735_20)">
                    <path d="M11.5 5.5C11.3674 5.5 11.2402 5.55268 11.1464 5.64645C11.0527 5.74022 11 5.86739 11 6C11.0041 7.16264 10.6042 8.29059 9.86876 9.19108C9.13332 10.0916 8.10796 10.7087 6.96794 10.9369C5.82792 11.1652 4.64402 10.9904 3.61859 10.4424C2.59316 9.89449 1.78987 9.00742 1.34602 7.93284C0.902162 6.85825 0.845303 5.66287 1.18516 4.551C1.52501 3.43914 2.24048 2.47983 3.20927 1.83704C4.17807 1.19424 5.34003 0.907877 6.49657 1.02689C7.65311 1.14589 8.73241 1.66289 9.55 2.4895C9.53355 2.49399 9.51686 2.49749 9.5 2.5H8C7.86739 2.5 7.74021 2.55268 7.64645 2.64645C7.55268 2.74022 7.5 2.86739 7.5 3C7.5 3.13261 7.55268 3.25979 7.64645 3.35355C7.74021 3.44732 7.86739 3.5 8 3.5H9.5C9.89782 3.5 10.2794 3.34197 10.5607 3.06066C10.842 2.77936 11 2.39783 11 2V0.5C11 0.367392 10.9473 0.240215 10.8536 0.146447C10.7598 0.0526784 10.6326 0 10.5 0C10.3674 0 10.2402 0.0526784 10.1464 0.146447C10.0527 0.240215 10 0.367392 10 0.5V1.5325C8.97627 0.617265 7.66946 0.0810832 6.29792 0.0135513C4.92639 -0.0539806 3.57322 0.351228 2.46454 1.16147C1.35585 1.97171 0.558816 3.13789 0.206611 4.46515C-0.145593 5.79241 -0.0316291 7.20034 0.52946 8.45368C1.09055 9.70701 2.06478 10.7298 3.28934 11.3512C4.51391 11.9726 5.91463 12.1549 7.25745 11.8676C8.60026 11.5804 9.80383 10.841 10.667 9.77303C11.5302 8.70506 12.0008 7.3732 12 6C12 5.86739 11.9473 5.74022 11.8536 5.64645C11.7598 5.55268 11.6326 5.5 11.5 5.5Z" fill="#9F9F9F" />
                    <path d="M6 3C5.86739 3 5.74021 3.05268 5.64645 3.14645C5.55268 3.24021 5.5 3.36739 5.5 3.5V6C5.50003 6.1326 5.55273 6.25975 5.6465 6.3535L7.1465 7.8535C7.2408 7.94458 7.3671 7.99498 7.4982 7.99384C7.6293 7.9927 7.75471 7.94011 7.84741 7.84741C7.94011 7.75471 7.9927 7.6293 7.99384 7.4982C7.99498 7.3671 7.94458 7.2408 7.8535 7.1465L6.5 5.793V3.5C6.5 3.36739 6.44732 3.24021 6.35355 3.14645C6.25979 3.05268 6.13261 3 6 3Z" fill="#9F9F9F" />
                </g>
                <defs>
                    <clipPath id="clip0_735_20">
                        <rect width="12" height="12" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <StyledP
                fontSize={'12px'}
                color={'#9F9F9F'} 
                fontWeight={'400'}
            >
                {time}
            </StyledP>
        </Flex>
    )
}