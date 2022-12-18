import React, { FC, useState } from "react";
import { Div } from "../../styles/Div.styled";
import { Flex } from "../../styles/Flex.styled";
import { Link } from "../../Link";
import { PromocodeProps } from "../../assets/types";
import { Recommendation } from "./Recommendation";
import { Promocode } from "./Promocode";
import { UsageStatistics } from "./UsageStatistics";
import { TimeOfAction } from "./TimeOfAction";
import { StyledCard } from "./Card.styled";
import { StyledP } from "../../styles/Fonts.styled";

export const Card: FC<PromocodeProps> = ({
    id,
    discount,
    recommendation,
    logo_Url,
    logo_Alt,
    title,
    shop_name,
    promocode,
    usage,
    time
}): JSX.Element => {
    return (
        <StyledCard
            direction={'column'}
            justify={'space-between'}
            width={'266px'}
            height={'360px'}
            br={'14px'}
            padding={'12px'}
            backgroundColor={'#FFFFFF'}
        >
            <Flex
                justify={'space-between'}
                align={'flex-start'}
            >
                <Div
                    br={'7px'}
                    backgroundColor={'#FDE2E3'}
                    padding={'10px'}
                >
                    <StyledP
                        fontSize={(discount.length <= 16) ? '14px' : '12px'}
                        color={'#F13C47'}
                    >
                        {discount}
                    </StyledP>
                </Div>
                {
                    recommendation &&
                    <Recommendation />
                }

            </Flex>
            <Div
                padding={'20px 54px 0 54px'}
            >
                <img style={{ borderRadius: '14px' }} width={144} height={60} src={logo_Url} alt={logo_Alt} />
            </Div>
            <StyledP
                padding={'20px 20px 12px 20px'}
            >
                <Link
                    to={'modal'} // заменить на динамический
                    colorHover={'#FF654E'}
                >
                    {title}
                </Link>
            </StyledP>
            <Flex
                align={'center'}
                pl={'20px'}
                mb={'20px'}
            >
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.71935 15C4.71958 14.7349 4.82509 14.4807 5.01268 14.2933L10.1273 9.17867C10.2822 9.0239 10.405 8.84015 10.4887 8.63791C10.5725 8.43567 10.6157 8.21891 10.6157 8C10.6157 7.78109 10.5725 7.56433 10.4887 7.36209C10.405 7.15986 10.2822 6.97611 10.1273 6.82134L5.01934 1.71C4.83719 1.5214 4.73639 1.2688 4.73867 1.0066C4.74095 0.744403 4.84612 0.493591 5.03153 0.308183C5.21693 0.122774 5.46775 0.0176055 5.72994 0.0153271C5.99214 0.0130487 6.24474 0.113843 6.43334 0.296001L11.5413 5.40333C12.2282 6.09151 12.6139 7.02406 12.6139 7.99633C12.6139 8.96861 12.2282 9.90116 11.5413 10.5893L6.42668 15.704C6.28703 15.8437 6.10911 15.939 5.91538 15.9777C5.72165 16.0165 5.52078 15.9969 5.33814 15.9216C5.15549 15.8463 4.99925 15.7186 4.88912 15.5546C4.77899 15.3905 4.71991 15.1976 4.71935 15V15Z" fill="#FF654E" />
                </svg>
                <Link
                    to={'/'}
                    color={'#9F9F9F'}
                    colorHover={'#FF654E'}
                    fontSize={'14px'}
                    pl={'2px'} // переход на страницу магазина
                >
                    Все скидки от {shop_name}
                </Link>
            </Flex>
            <Div
                margin={'0 16px 14px 16px'}
            >
                <Promocode
                    promocode={promocode}
                />
            </Div>
            <Flex
                direction={'column'}
                align={'center'}
                gap={'4px'}
                cursor={'text'}
            >
                <UsageStatistics
                    usage={usage}
                />
                <TimeOfAction
                    time={time}
                />
            </Flex>
        </StyledCard >
    )
}