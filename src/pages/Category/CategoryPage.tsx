import { FC } from 'react';
import { useParams } from "react-router-dom";
import { useAppSelector } from '../../store/hooks/hooks';
import { Div } from '../../styles/Div.styled';
import { Flex } from '../../styles/Flex.styled';
import { StyledH1 } from '../../styles/Fonts.styled';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { CenteredLayout } from '../../components/Layouts/CenteredLayout';
import { CenteredLayoutBody } from '../../components/Layouts/CenteredLayoutBody';
import { Link } from '../../components/Link';
import { Skeleton } from './Skeleton';
import { Grid } from '../../styles/Grid.styled';
import { arrCategoriesTranslit } from '../../data/data';

export const CategoryPage: FC = ({ }): JSX.Element => {
    const shops = useAppSelector(state => state.shops.shops)
    const isLoading = useAppSelector(state => state.shops.isLoading)
    const skeletons = [...Array(16)].map((el) => <Skeleton />)

    const { translit } = useParams()

    return (
        <CenteredLayout>
            <CenteredLayoutBody>
                {arrCategoriesTranslit.filter((item) => item.translit === translit).map((el) => {
                    return (
                        <Flex
                            direction={'column'}
                        >
                            <Breadcrumbs
                                titleSecondPage={'Все магазины'}
                                titleSecondPageLink={'/shops'}
                                titleLastPage={`${el.title}`}
                            />
                            <Flex
                                align={'center'}
                                gap={'10px'}
                                mb={'40px'}
                            >
                                {el.svg_category_page}
                                <StyledH1>
                                    {el.title}
                                </StyledH1>
                            </Flex>
                            <Grid
                                gap={'10px'}
                            >
                                {
                                    isLoading ? (
                                        skeletons
                                    ) : (
                                        shops.filter((item) => item.category === el.title).map((el) => {
                                            return (
                                                <Div>
                                                    <Link
                                                        key={el.id}
                                                        colorHover={'#FF654E'}
                                                        fontWeight={'500'}
                                                        fontSize={'16px'}
                                                        to={`/shops/${el.translit_shop_name}`}
                                                    >
                                                        {el.name}
                                                    </Link>
                                                </Div>
                                            )
                                        })
                                    )
                                }

                            </Grid>
                        </Flex>
                    )
                })}
            </CenteredLayoutBody>
        </CenteredLayout >
    )
}