import React, { FC } from "react"
import { Div } from "../../styles/Div.styled"
import { StyledP } from "../../styles/Fonts.styled"

export const Recommendation: FC = () => {
    return (
        <Div
            br={'7px'}
            backgroundColor={'#E0F1E9'}

        >
            <StyledP
                fontSize={'12px'}
                color={'#31A169'}
                padding={'4px 10px'}
            >
                Рекомендуем!
            </StyledP>
        </Div>
    )
}