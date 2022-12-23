import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { useAppSelector } from '../store/hooks/hooks'
import { Flex } from '../styles/Flex.styled'
import { StyledH1 } from '../styles/Fonts.styled'

export const SearchPage: FC = () => {
    const searchValue = useAppSelector(state => state.search.searchValue)
    return (
        <Flex
            direction={'column'}
        >
            <Breadcrumbs
                titleLastPage={'Результаты поиска'}
            />
            <StyledH1>
                {`Поиск по запросу «${searchValue}»`}
            </StyledH1>
        </Flex>
    )
}
