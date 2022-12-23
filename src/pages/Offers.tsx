import { FC } from 'react'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { CenteredLayout } from '../components/Layouts/CenteredLayout'
import { CenteredLayoutBody } from '../components/Layouts/CenteredLayoutBody'
import { Div } from '../styles/Div.styled'
import { Flex } from '../styles/Flex.styled'
import { StyledH3 } from '../styles/Fonts.styled'
import { DiscountCard, SimilarStores } from './ShopPage'
import { StyledSortShopsBtnSecondary } from '../components/Buttons/Buttons.styled'
import { Link } from '../components/Link'
import { arrCategoriesTranslit } from '../data/data'
import { Pagination } from '../components/Pagination'


export const Offers: FC = () => {
    return (
        <CenteredLayout>
            <CenteredLayoutBody>
                <Breadcrumbs
                    titleLastPage={'Все предложения'}
                />
                <StyledH3
                    fontSize={'32px'}
                    mb={'30px'}
                >
                    Все предложения
                </StyledH3>
                <Flex
                    justify={'space-between'}
                >
                    <Flex
                        direction={'column'}
                        gap={'20px'}
                        width={'72%'}
                    >
                        <DiscountCard
                            type={"promocode"}
                            discount={'10%'}
                            terms={'Условия'}
                            title={'title'}
                            recommendation={true}
                            promocode={'test'}
                            usage={'Воспользовались 10 раз'}
                            time={'Заканчивается через 2 дня'}

                        />
                        <DiscountCard
                            type={"promotion"}
                            discount={'20%'}
                            title={'title'}
                            terms={'Условия'}
                            recommendation={false}
                            promocode={'test22'}
                            usage={'Воспользовались 10 раз'}
                            time={'Заканчивается через 2 дня'}
                        />
                    </Flex>
                    <Flex
                        width={'280px'}
                        direction={'column'}
                    >
                        <SimilarStores
                            title={'Популярные магазины'}
                        />
                        <Div>
                            <StyledH3
                                fontSize={'18px'}
                                mt={'36px'}
                                mb={'12px'}
                                textAlign={'center'}
                            >
                                Категории
                            </StyledH3>
                            {arrCategoriesTranslit.map((el) => {
                                return (
                                    <Link
                                        key={el.title}
                                        to={`shops/${el.translit}`}
                                    >
                                        <StyledSortShopsBtnSecondary
                                            backgroundColorHover={'#F5F2F2'}
                                            width={'100%'}
                                        >
                                            {el.svg}
                                            {el.title}
                                        </StyledSortShopsBtnSecondary>
                                    </Link>
                                )
                            })}
                        </Div>
                    </Flex>
                </Flex>
                <Pagination />
            </CenteredLayoutBody>
        </CenteredLayout>

    )
}