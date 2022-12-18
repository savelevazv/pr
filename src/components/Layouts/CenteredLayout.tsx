import React, { ReactNode } from "react";
import { FC } from "react";
import { Flex } from "../../styles/Flex.styled";

export const CenteredLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Flex
            justify={'center'}
            align={'flex-start'}
            wrap={'wrap'}
            width={'100%'}
        >
            {children}
        </Flex>
    )
}