import React, { FC, ReactNode } from "react";
import { Div } from "../styles/Div.styled";
import { Flex } from "../styles/Flex.styled";
import { StyledP, StyledSpan } from "../styles/Fonts.styled";

interface SubscriptionInfoCardProps {
    color: string,
    title: string,
    content: ReactNode
}

const SubscriptionInfoCard: FC<SubscriptionInfoCardProps> = ({ color, title, content }): JSX.Element => {
    return (
        <Flex
            direction={'column'}
        >
            <StyledSpan
                color={color}
                fontSize={'32px'}
                fontWeight={'700'}
                mb={'4px'}
                textAlign={'center'}
            >
                {title}
            </StyledSpan>
            <StyledP
                fontSize={'18px'}
                color={'#9F9F9F'}
                textAlign={'center'}
            >
                {content}
            </StyledP>
        </Flex>
    )
}

export const SubscriptionInfoBlock: FC = () => {
    return (
        <Flex
            margin={'40px 0 50px 0'}
            justify={'space-between'}
            boxShadow={'0px 10px 80px rgb(90 90 90 / 10%)'}
            backgroundColor={'#FFFFFF'}
            padding={'40px'}
            br={'14px'}
        >
            <SubscriptionInfoCard
                color={'#F13C47'}
                title={'ПОЛЕЗНО'}
                content={'обсуждаем накопления и траты'}
            />
            <SubscriptionInfoCard
                color={'#4A89C1'}
                title={'РЕДКО'}
                content={<>рассылка не чаще 1 раза<br /> в неделю</>}
            />
            <SubscriptionInfoCard
                color={'#31A169'}
                title={'АКТУАЛЬНО'}
                content={'только новые предложения'}
            />
        </Flex>
    )
}