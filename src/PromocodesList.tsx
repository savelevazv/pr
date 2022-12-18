import React, { FC } from "react";
import styled from "styled-components";
import { Card } from "./components/Card/Card";
import { Grid } from "./styles/Grid.styled";
import { PromocodeProps } from "./assets/types";

export interface PromocodeListProps {
    promocodesListData: PromocodeProps[]
}

export const PromocodesList: FC<PromocodeListProps> = ({ promocodesListData }) => {
    return (
        <Grid
            rows={'repeat(2, 1fr)'}
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