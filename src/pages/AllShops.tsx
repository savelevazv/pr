import React, { useState, useEffect } from "react";
import { CenteredLayout } from "../components/Layouts/CenteredLayout";
import { CenteredLayoutBody } from "../components/Layouts/CenteredLayoutBody";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { StyledSortShopsBtn, StyledSortShopsBtnSecondary } from "../components/Buttons/Buttons.styled";
import { Flex } from "../styles/Flex.styled";
import { Div } from "../styles/Div.styled";
import { StyledH1, StyledH2 } from "../styles/Fonts.styled";
import { Link } from "../components/Link";
import { Grid } from "../styles/Grid.styled";
import { arrCategoriesTranslit } from "../data/data";
import axios from 'axios';
import { Shop } from "../store/types";

const arrAlphabet = ['Символы', 'Цифры', 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Э', 'Ю', 'Я', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

export const AllShops = ({ }) => {
    const [activeLetter, setActiveLetter] = useState<string>('Всё')
    const onClickStyledSortBtn = (letter: string) => {
        setActiveLetter(letter)
    }
    const [letter, setLetter] = useState<Shop[]>([])

    useEffect(() => {
        (async () => {
            try {
                const letterSortResponce = await axios.get(`https://63870765e399d2e473f2752a.mockapi.io/shops?letter=${activeLetter}`)
                setLetter(letterSortResponce.data)
            } catch (error) {
                console.error(error)
            }
        })()
    }, [activeLetter])

    return (
        <>
            <CenteredLayout>
                <CenteredLayoutBody>
                    <Breadcrumbs
                        titleLastPage={'Все магазины'}
                    />
                    <StyledH1
                        mb={'30px'}
                    >
                        Все магазины
                    </StyledH1>
                    <StyledH2
                        fontSize={'18px'}
                        mb={'20px'}
                    >
                        Интернет-магазины по категориям:
                    </StyledH2>
                    <Grid
                        mb={'60px'}
                    >
                        {arrCategoriesTranslit.map((el) => {
                            return (
                                <Link
                                    to={`/shops/${el.translit}`}
                                >
                                    <StyledSortShopsBtnSecondary
                                        key={el.title}
                                        width={'290px'}
                                        backgroundColorHover={'#F5F2F2'}
                                    >
                                        {el.svg}
                                        {el.title}
                                    </StyledSortShopsBtnSecondary>
                                </Link>
                            )
                        })}
                    </Grid>
                    <StyledH2
                        fontSize={'18px'}
                        mb={'20px'}
                    >
                        Интернет-магазины по алфавиту:
                    </StyledH2>
                    <Flex
                        wrap={'wrap'}
                        width={'95%'}
                    >
                        <Div>
                            <StyledSortShopsBtn
                                active={activeLetter === 'Всё' && true}
                                onClick={() => onClickStyledSortBtn('Всё')}
                            >
                                Всё
                            </StyledSortShopsBtn>
                            {arrAlphabet.map((el, index) => {
                                return (
                                    <StyledSortShopsBtn
                                        key={el}
                                        active={activeLetter === el && true}
                                        onClick={() => onClickStyledSortBtn(el)}
                                    >
                                        {el}
                                    </StyledSortShopsBtn>
                                )
                            })}
                        </Div>
                    </Flex>
                    {
                        activeLetter === 'Всё' ? (
                            <>
                                {arrAlphabet.map(el => {
                                    return (
                                        <StyledH2
                                            key={el}
                                            mt={'30px'}
                                            mb={'16px'}
                                            color={'#4A89C1'}
                                            fontSize={'24px'}
                                        >
                                            {el}
                                        </StyledH2>

                                    )
                                })}
                            </>
                        ) : (
                            <>
                                <StyledH2
                                    mt={'30px'}
                                    mb={'16px'}
                                    color={'#4A89C1'}
                                    fontSize={'24px'}
                                >
                                    {activeLetter}
                                </StyledH2>
                                <Grid
                                    width={'100%'}
                                    gap={'8px'}
                                >
                                    {letter.map(el => {
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
                                    })}
                                </Grid>
                            </>
                        )
                    }
                </CenteredLayoutBody>
            </CenteredLayout >
        </>
    )
}