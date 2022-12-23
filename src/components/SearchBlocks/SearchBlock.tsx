import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { Div } from '../../styles/Div.styled'

const StyledSearchContentContainer = styled(Div)`
    & {
        text-align: center;
    }
    
    &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #F3F3F3;
  }

`

export const SearchBlock: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Div
            backgroundColor={'#FFFFFF'}
            position={'absolute'}
            top={'100%'}
            br={'14px'}
            boxShadow={' 0px 1px 20px rgba(0, 0, 0, 0.15)'}
            padding={'16px 8px 16px 16px'}
            width={'100%'}
        >
            <StyledSearchContentContainer
                overflowY={'auto'}
                overflowX={'hidden'}
                maxHeight={'276px'}
                pr={'8px'}
            >
                {children}
            </StyledSearchContentContainer>
        </Div>
    )
}
