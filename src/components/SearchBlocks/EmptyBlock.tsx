import React, { FC } from 'react'
import { Flex } from '../../styles/Flex.styled'
import { StyledP } from '../../styles/Fonts.styled'

export const EmptyBlock: FC = () => {
    return (
        <Flex
            justify={'center'}
            align={'center'}
            gap={'2px'}
        >
            <StyledP>
                К сожалению, ничего не найдено
            </StyledP>
            <img width={16} height={16} src="/img/sad-emoji.png" alt="sad-emoji" />
        </Flex>
    )
}
