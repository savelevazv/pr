import React, { FC } from "react";
import { CenteredLayout } from "../components/Layouts/CenteredLayout";
import { CenteredLayoutBody } from "../components/Layouts/CenteredLayoutBody";
import { BannerStatistics } from "../components/Banners/BannerStatistics/BannerStatistics";
import { BestPromotions } from "../components/BestPromotions";
import { FAQ } from "../components/FAQ";
import { Popular } from "../components/Popular";
import { StagesOfInterpretation } from "../components/StagesOfInteraction";
import { PromocodesList } from "../PromocodesList";
import { Shops } from "../components/Shops";

const testData = [
    {
        id: 1,
        discount: 'Подарок',
        recommendation: true,
        logoUrl: '',
        logoAlt: '',
        title: 'test',
        shop: 'test',
        promocode: 'test',
        usage: 2,
        time: 2,
    },
    {
        id: 2,
        discount: 'Подарок',
        recommendation: true,
        logoUrl: '',
        logoAlt: '',
        title: 'test',
        shop: 'test',
        promocode: 'РРРРН',
        usage: 2,
        time: 2,
    },
    {
        id: 3,
        discount: 'Подарок',
        recommendation: true,
        logoUrl: '',
        logoAlt: '',
        title: 'test',
        shop: 'test',
        promocode: '9дв',
        usage: 2,
        time: 2,
    },
    {
        id: 4,
        discount: 'Подарок',
        recommendation: true,
        logoUrl: '',
        logoAlt: '',
        title: 'test',
        shop: 'test',
        promocode: 'test',
        usage: 2,
        time: 2,
    },
    {
        id: 5,
        discount: 'Подарок',
        recommendation: true,
        logoUrl: '',
        logoAlt: '',
        title: 'test',
        shop: 'test',
        promocode: 'test',
        usage: 2,
        time: 2,
    },
    {
        id: 6,
        discount: 'Подарок',
        recommendation: true,
        logoUrl: '',
        logoAlt: '',
        title: 'test',
        shop: 'test',
        promocode: 'test',
        usage: 2,
        time: 2,
    },
    {
        id: 7,
        discount: 'Подарок',
        recommendation: true,
        logoUrl: '',
        logoAlt: '',
        title: 'test',
        shop: 'test',
        promocode: 'test',
        usage: 2,
        time: 2,
    },
    {
        id: 8,
        discount: 'Подарок',
        recommendation: true,
        logoUrl: '',
        logoAlt: '',
        title: 'test',
        shop: 'test',
        promocode: 'test',
        usage: 2,
        time: 2,
    }
]

export const Home: FC = () => {
    return (
        <>
            <Popular
                promocodesListData={testData}
            />
            <BestPromotions />
            <PromocodesList
                promocodesListData={testData}
            />
            <Shops />
            <StagesOfInterpretation />
            <BannerStatistics />
            <FAQ />
        </>
    )
}