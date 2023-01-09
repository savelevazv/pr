import React, { FC } from "react";
import { Card } from "./Card/Card";
import { Grid } from "../styles/Grid.styled";
import { PromocodeProps } from "../assets/types";
import { useMediaQuery } from "react-responsive";

export interface PromocodeListProps {
    promocodesListData: PromocodeProps[]
}

export const PromocodesList: FC<PromocodeListProps> = ({ promocodesListData }) => {
    const isMobile = useMediaQuery({ query: '(min-width: 320px) and (max-width: 479px)' })
    const isMobile480 = useMediaQuery({ query: '(min-width: 480px) and (max-width: 767.5px)' })
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 999.5px)' })
    const isDesktop = useMediaQuery({ query: '(min-width: 1000px) and (max-width: 1280px)' })

    return (
        <Grid
            rows={isDesktop ? 'repeat(2, 1fr)' : isTablet ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)'}
            columns={isDesktop ? 'repeat(3, 1fr)' : isTablet ? 'repeat(2, 1fr)' : ''}
            gap={'20px'}
            mb={'36px'}
        >
            {promocodesListData.map(el => {
                return (
                    <Card
                        key={el.id}
                        {...el}
                    />
                )
            })}
        </Grid>
    )
}