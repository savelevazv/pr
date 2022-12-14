import React, { FC } from "react";
import { Flex } from "../styles/Flex.styled";
import { StyledH1 } from "../styles/Fonts.styled";
import { PromocodeListProps, PromocodesList } from "./PromocodesList";

export const Popular: FC<PromocodeListProps> = ({ promocodesListData }): JSX.Element => {
    return (
        <Flex
            direction={'column'}
        >
            <StyledH1
                pt={'40px'}
                pb={'30px'}
            >
                Популярные промокоды
            </StyledH1>
            <PromocodesList
                promocodesListData={promocodesListData}
            />
        </Flex>
    )
}