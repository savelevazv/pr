import React, { FC } from "react";
import { BannerStatistics } from "../components/Banners/BannerStatistics/BannerStatistics";
import { BestPromotions } from "../components/BestPromotions";
import { FAQ } from "../components/FAQ";
import { Popular } from "../components/Popular";
import { StagesOfInterpretation } from "../components/StagesOfInteraction";
import { PromocodesList } from "../components/PromocodesList";
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
        usage: 'Воспользовались 102 раза',
        time: 'Заканчивается через 2 дня'
    },
    {
        id: 2,
        discount: '10%',
        recommendation: true,
        logoUrl: '',
        logoAlt: '',
        title: 'test',
        shop: 'test',
        promocode: 'РРРРН',
        usage: 'Воспользовались 102 раза',
        time: 'Заканчивается через 2 дня'
    },
    {
        id: 3,
        discount: '20%',
        recommendation: true,
        logoUrl: '',
        logoAlt: '',
        title: 'test',
        shop: 'test',
        promocode: '9дв',
        usage: 'Воспользовались 102 раза',
        time: 'Заканчивается через 2 дня'
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
        usage: 'Воспользовались 102 раза',
        time: 'Заканчивается через 2 дня'
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
        usage: 'Воспользовались 102 раза',
        time: 'Заканчивается через 2 дня'
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
        usage: 'Воспользовались 102 раза',
        time: 'Заканчивается через 2 дня'
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
        usage: 'Воспользовались 102 раза',
        time: 'Заканчивается через 2 дня'
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
        usage: 'Воспользовались 102 раза',
        time: 'Заканчивается через 2 дня'
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