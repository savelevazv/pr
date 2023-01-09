import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { Div } from "../styles/Div.styled";
import { Flex } from "../styles/Flex.styled";
import { Link } from "./Link";
import { AllShopsBtn, StyledSortBtn } from "./Buttons/Buttons.styled";
import { StyledH2 } from "../styles/Fonts.styled";
import { arrCategoriesTranslit } from "../data/data";


interface ImgLogoArr {
    imageUrl: string
}

type arrImgLogo = Array<ImgLogoArr>

const arrImgLogo = [
    { imageUrl: 'img/shop-logo.jpg' },
    { imageUrl: 'img/shop-logo.jpg' },
    { imageUrl: 'img/shop-logo.jpg' },
    { imageUrl: 'img/shop-logo.jpg' },
    { imageUrl: 'img/shop-logo.jpg' },
    { imageUrl: 'img/shop-logo.jpg' },
    { imageUrl: 'img/shop-logo.jpg' },
    { imageUrl: 'img/shop-logo.jpg' },
    { imageUrl: 'img/shop-logo.jpg' },
    { imageUrl: 'img/shop-logo.jpg' }
]

const StyledLogoContainer = styled(Div)`
    & {
        display: inline-block;
        
        img {
            transition: transform 0.6s ease;
            display: block;
        }
    }

    &:hover {
        img {
            transform: scale(1.1);
        }
    }
`

export const Shops: FC = () => {
    return (
        <Div>
            <StyledH2
                mt={'40px'}
                mb={'30px'}
                fontWeight={'700'}
            >
                Топ магазинов
            </StyledH2>
            <Flex
                wrap={'wrap'}
                mb={'32px'}
            >
                {arrCategoriesTranslit.map((el) => {
                    return (
                        <Link
                            to={`/shops/${el.translit}`}
                        >
                            <StyledSortBtn
                                key={el.title}
                                backgroundColorHover={'#F5F2F2'}
                            >
                                {el.svg}
                                {el.title}
                            </StyledSortBtn>
                        </Link>
                    )
                })}
            </Flex>
            <Flex
                wrap={'wrap'}
                gap={'20px'}
                mb={'44px'}
            >
                {arrImgLogo.map((item, i) => {
                    return (
                        <Link
                            to={"#"}
                            key={i} // убрать индекс
                        >
                            <StyledLogoContainer
                                overflow={'hidden'}
                                br={'14px'}
                            >
                                <img src={item.imageUrl} />
                            </StyledLogoContainer>
                        </Link>
                    )
                })}
            </Flex>
            <Link
                to={'shops'}

            >
                <AllShopsBtn>
                    Все магазины
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 7H14.7143" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.7143 1L14.7143 7L8.7143 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </AllShopsBtn>
            </Link>
        </Div >
    )
}