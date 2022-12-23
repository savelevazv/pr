import { FC } from "react";
import styled from "styled-components";
import { CenteredLayout } from "../components/Layouts/CenteredLayout";
import { CenteredLayoutBody } from "../components/Layouts/CenteredLayoutBody";
import { TimeOfAction } from "../components/Card/TimeOfAction";
import { UsageStatistics } from "../components/Card/UsageStatistics";
import { Div } from "../styles/Div.styled";
import { Flex } from "../styles/Flex.styled";
import { StyledH1, StyledH2, StyledH3, StyledP, StyledSpan } from "../styles/Fonts.styled";
import { Promocode } from "../components/Card/Promocode";
import { Recommendation } from "../components/Card/Recommendation";
import { PromocodeProps } from "../assets/types";
import { StyledFilterBtn, StyledPromotionBtn, StyledSimilarBtn } from "../components/Buttons/Buttons.styled";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { setActiveIndex } from "../store/reducers/filterReducer";
import { useParams } from "react-router-dom";
import { Breadcrumbs } from "../components/Breadcrumbs";

const arrFilterEl = [
    {
        id: 1,
        filtering: 'Всё'
    },
    {
        id: 2,
        filtering: 'Промокоды'
    },
    {
        id: 3,
        filtering: 'Акции'
    }
]

const Filter: FC = () => {
    const activeIndex = useAppSelector(state => state.filter.activeIndex)
    const dispatch = useAppDispatch()

    const onClickFilterEl = (index: number) => {
        dispatch(setActiveIndex(index))
    }

    return (
        <Flex
            gap={'12px'}
        >
            {arrFilterEl.map((el, index) => {
                return (
                    <StyledFilterBtn
                        key={el.id}
                        onClick={() => onClickFilterEl(index)}
                        active={(activeIndex === index) && true}
                    >
                        {el.filtering}
                    </StyledFilterBtn>
                )
            })
            }
        </Flex>
    )
}

const StyledDiscountAmount = styled(Div)`
    & {
        font-weight: 600;
    }
`

interface DiscountCardProps extends PromocodeProps {
    type: 'promocode' | 'promotion'
    terms: string
}

const Promotion: FC = () => {
    return (
        <StyledPromotionBtn>
            <StyledSpan
                color={'#FFFFFF'}
                fontSize={'16px'}
            >
                Перейти к акции
            </StyledSpan>
        </StyledPromotionBtn>
    )
}

const testArrData: DiscountCardProps[] = [
    {
        id: 1,
        type: 'promocode',
        discount: '10%',
        terms: 'Условия условия условия условия',
        recommendation: true,
        title: 'Скидка 30%',
        promocode: '121234',
        usage: 'Воспользовались 102 раза',
        time: 'Заканчивается через 2 дня'
    },
    {
        id: 2,
        type: 'promocode',
        discount: '20%',
        terms: 'Условия условия условия условия',
        recommendation: false,
        title: 'Скидка 30%',
        promocode: '121234',
        usage: 'Воспользовались 102 раза',
        time: 'Заканчивается через 2 дня'
    },
    {
        id: 3,
        type: 'promotion',
        discount: '100р',
        terms: 'Условия условия условия условия',
        recommendation: true,
        title: 'Скидка 30%',
        promocode: '121234',
        usage: 'Воспользовались 102 раза',
        time: 'Заканчивается через 2 дня'
    }
]


export const DiscountCard: FC<DiscountCardProps> = ({
    type,
    discount,
    terms,
    recommendation,
    title,
    promocode,
    usage,
    time
}): JSX.Element => {
    return (
        <Div
            backgroundColor={'#FFFFFF'}
            width={'100%'}
            height={'160px'}
            br={'14px'}
            padding={'20px 20px 16px 20px'}
            position={'relative'}
        >
            <Div
                br={'7px'}
                backgroundColor={'#E0F1E9'}
                position={'absolute'}
                top={'4px'}
                left={'4px'}

            >
                {
                    recommendation &&
                    <Recommendation />
                }
            </Div>
            <Flex
                align={'center'}
                height={'100%'}
                gap={'36px'}
            >
                <StyledDiscountAmount
                    color={type == 'promocode' ? '#FF654E' : '#4A89C1'}
                    fontSize={discount.length <= 3 ? '40px' : '32px'}
                >
                    {discount}
                </StyledDiscountAmount>
                <Flex
                    height={'100%'}
                    direction={'column'}
                    justify={'space-between'}
                >
                    <StyledH3>
                        {title}
                    </StyledH3>
                    <Div
                        color={'#9F9F9F'}
                        fontSize={'14px'}
                    >
                        {terms}
                    </Div>
                    <UsageStatistics
                        usage={usage}
                    />
                </Flex>
                <Div
                    position={'absolute'}
                    right={'280px'}
                >
                    <svg width="1" height="160" viewBox="0 0 1 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.5" y1="0.5" x2="0.499993" y2="159.5" stroke="#9F9F9F" stroke-linecap="round" stroke-dasharray="4 4" />
                    </svg>
                </Div>
                <Flex
                    direction={'column'}
                    align={'center'}
                    position={'absolute'}
                    right={'30px'}
                    bottom={'16px'}
                    gap={'45px'}
                >
                    {
                        type == 'promocode'
                            ? <Promocode
                                promocode={promocode}
                            />
                            : <Promotion />
                    }
                    <TimeOfAction
                        time={time}
                    />
                </Flex>
            </Flex>
        </Div>
    )
}

const DiscountBlock: FC = () => {

    const activeIndex = useAppSelector(state => state.filter.activeIndex)

    return (
        <Div
            width={'72%'}
        >

            <Filter />
            <StyledH2
                fontSize={'14px'}
                fontWeight={'500'}
                mt={'20px'}
                mb={'30px'}
            >
                description
            </StyledH2>
            <Flex
                direction={'column'}
                gap={'20px'}
            >
                {
                    activeIndex === 0 &&
                    <>
                        {testArrData.map((el) => {
                            return (
                                <DiscountCard
                                    key={el.id}
                                    type={el.type}
                                    discount={el.discount}
                                    terms={el.terms}
                                    recommendation={el.recommendation}
                                    title={el.title}
                                    promocode={el.promocode}
                                    usage={el.usage}
                                    time={el.time}
                                />
                            )
                        })}
                    </>
                }
                {
                    activeIndex === 1 &&
                    <>
                        {testArrData.filter(item => item.type === 'promocode').map((el) => {
                            return (
                                <DiscountCard
                                    key={el.id}
                                    type={el.type}
                                    discount={el.discount}
                                    terms={el.terms}
                                    recommendation={el.recommendation}
                                    title={el.title}
                                    promocode={el.promocode}
                                    usage={el.usage}
                                    time={el.time}
                                />
                            )
                        })
                        }
                    </>
                }
                {
                    activeIndex === 2 &&
                    <>
                        {testArrData.filter(item => item.type === 'promotion').map((el) => {
                            return (
                                <DiscountCard
                                    key={el.id}
                                    type={el.type}
                                    discount={el.discount}
                                    terms={el.terms}
                                    recommendation={el.recommendation}
                                    title={el.title}
                                    promocode={el.promocode}
                                    usage={el.usage}
                                    time={el.time}
                                />
                            )
                        })
                        }
                    </>
                }
            </Flex>
            <Div
                mt={'30px'}
            >
                <StyledH3
                    fontSize={'16px'}
                    mb={'20px'}
                >
                    Вам может быть интересно:
                </StyledH3>
                <Flex
                    direction={'column'}
                    gap={'20px'}
                >
                    <DiscountCard
                        type={'promocode'}
                        discount={'LOGO'}
                        terms={'Условия'}
                        title={'title'}
                        recommendation={true}
                        promocode={'test'}
                        usage={'Воспользовались 10 раз'}
                        time={'Заканчивается через 2 дня'}

                    />
                    <DiscountCard
                        type={'promotion'}
                        discount={'LOGO'}
                        title={'title'}
                        terms={'Условия'}
                        recommendation={false}
                        promocode={'test22'}
                        usage={'Воспользовались 10 раз'}
                        time={'Заканчивается через 2 дня'}
                    />
                </Flex>
            </Div>
        </Div>
    )
}

const SimilarElement: FC<{ shop_name: string }> = ({ shop_name }) => {
    return (
        <StyledSimilarBtn>
            {shop_name}
        </StyledSimilarBtn>
    )
}

export const SimilarStores: FC<{ title: string }> = ({ title }) => {
    return (
        <Flex
            direction={'column'}
            align={'center'}
            br={'14px'}
            backgroundColor={'#FFFFFF'}
            padding={'20px 30px'}
            boxShadow={'0px 1px 30px rgba(0, 0, 0, 0.05)'}
        >
            <StyledSpan
                fontSize={'16px'}
                mb={'20px'}
            >
                {title}
            </StyledSpan>
            <Flex
                gap={'8px'}
                wrap={'wrap'}
            >
                {/* {testArr.map((el) => {
                    return (
                        <SimilarElement
                            shop_name={el.shop_name}
                        />
                    )
                })} */}
            </Flex>
        </Flex>
    )
}

const InfoBlock: FC = () => {
    return (
        <Div
            width={'280px'}
        >
            <Div
                br={'14px'}
                backgroundColor={'#FFFFFF'}
                padding={'20px 30px'}
                boxShadow={'0px 1px 30px rgba(0, 0, 0, 0.05)'}
                mb={'36px'}
            >
                <Flex
                    direction={'column'}
                    align={'center'}
                >
                    LOGO
                    <StyledP
                        fontSize={'13px'}
                    >
                        Lamoda.ru – это онлайн-магазин
                        одежды, обуви и аксессуаров,
                        который предлагает широчайший
                        выбор продукции на самый
                        взыскательный вкус.
                    </StyledP>
                </Flex>
            </Div>
            <SimilarStores
                title={'Похожие магазины'}
            />
        </Div >
    )
}

export const ShopPage: FC = () => {
    const { translit_shop_name } = useParams()

    return (
        <CenteredLayout>
            <CenteredLayoutBody>
                <Breadcrumbs
                    titleLastPage={'ЗАМЕНИТЬ'}
                />
                <StyledH1
                    mb={'20px'}
                >
                    Title
                </StyledH1>
                <Flex
                    justify={'space-between'}
                >
                    <DiscountBlock />
                    <InfoBlock />
                </Flex>
            </CenteredLayoutBody>
        </CenteredLayout>
    )
}