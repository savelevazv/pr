import React, { FC } from "react";
import { Flex } from "../../styles/Flex.styled";
import { StyledP } from "../../styles/Fonts.styled";

export const UsageStatistics: FC<{ usage: string }> = ({ usage }): JSX.Element => {
    return (
        <Flex
            gap={'2px'}
        >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_735_26)">
                    <path d="M13.5747 5.4944C12.67 4.0209 10.612 1.54874 7 1.54874C3.388 1.54874 1.33 4.0209 0.425249 5.4944C0.145557 5.94678 -0.00259399 6.46813 -0.00259399 6.99999C-0.00259399 7.53185 0.145557 8.05319 0.425249 8.50557C1.33 9.97907 3.388 12.4512 7 12.4512C10.612 12.4512 12.67 9.97907 13.5747 8.50557C13.8544 8.05319 14.0026 7.53185 14.0026 6.99999C14.0026 6.46813 13.8544 5.94678 13.5747 5.4944V5.4944ZM12.5802 7.89482C11.8032 9.15832 10.0444 11.2846 7 11.2846C3.95558 11.2846 2.19683 9.15832 1.41983 7.89482C1.25366 7.62593 1.16565 7.31608 1.16565 6.99999C1.16565 6.68389 1.25366 6.37404 1.41983 6.10515C2.19683 4.84165 3.95558 2.7154 7 2.7154C10.0444 2.7154 11.8032 4.83932 12.5802 6.10515C12.7463 6.37404 12.8344 6.68389 12.8344 6.99999C12.8344 7.31608 12.7463 7.62593 12.5802 7.89482V7.89482Z" fill="#9F9F9F" />
                    <path d="M7 4.08334C6.42313 4.08334 5.85923 4.2544 5.37958 4.57489C4.89994 4.89538 4.5261 5.3509 4.30535 5.88385C4.08459 6.4168 4.02683 7.00325 4.13937 7.56902C4.25191 8.1348 4.5297 8.6545 4.9376 9.06241C5.3455 9.47031 5.8652 9.74809 6.43098 9.86063C6.99676 9.97317 7.5832 9.91542 8.11616 9.69466C8.64911 9.4739 9.10463 9.10007 9.42512 8.62042C9.7456 8.14078 9.91666 7.57687 9.91666 7.00001C9.91574 6.22675 9.60815 5.48542 9.06137 4.93864C8.51459 4.39186 7.77326 4.08427 7 4.08334V4.08334ZM7 8.75001C6.65388 8.75001 6.31553 8.64737 6.02775 8.45508C5.73996 8.26279 5.51566 7.98948 5.38321 7.66971C5.25075 7.34994 5.2161 6.99807 5.28362 6.6586C5.35115 6.31914 5.51782 6.00732 5.76256 5.76257C6.0073 5.51783 6.31912 5.35116 6.65859 5.28364C6.99805 5.21611 7.34992 5.25077 7.66969 5.38322C7.98946 5.51567 8.26278 5.73998 8.45507 6.02776C8.64736 6.31555 8.75 6.65389 8.75 7.00001C8.75 7.46414 8.56562 7.90926 8.23743 8.23745C7.90924 8.56564 7.46413 8.75001 7 8.75001Z" fill="#9F9F9F" />
                </g>
                <defs>
                    <clipPath id="clip0_735_26">
                        <rect width="14" height="14" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <StyledP
                fontSize={'12px'}
                color={'#9F9F9F'}
                fontWeight={'400'}
            >
                {usage}
            </StyledP>
        </Flex>
    )
}