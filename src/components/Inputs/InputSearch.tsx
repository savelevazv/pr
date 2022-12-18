import React, { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Div } from "../../styles/Div.styled";
import { Flex } from "../../styles/Flex.styled";
import { RoundBtn } from "../Buttons/RoundBtn";
import { StyledInputSearch } from "./Inputs.styled";
import { StyledBannerStatisticsBtn } from "../Buttons/Buttons.styled";

import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { setSearchValue } from "../../store/reducers/searchReducer";
import axios from 'axios';
import { Shop } from "../../store/types";
import { CircularProgress } from "@mui/material";
import { StyledP } from "../../styles/Fonts.styled";
import { StyledLink } from "../../styles/Link.styled";
import { Link } from "../../Link";

const StyledInputContainer = styled(Flex)`
    & {
        transition: border 0.15s ease-in-out;
    }
`

const StyledSearchContentContainer = styled(Div)`
    & {
        text-align: center;
    }
    
    &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #F3F3F3;
  }

`

const StyledFoundShopsLink = styled(StyledLink)`
  & {
    display: flex;
    align-items: center;
    width: 100%;
    height: 92px;
    border-radius: 14px;
    transition: background-color 0.3s ease-in-out;
  }
`

export const InputSeach: FC = (): JSX.Element => {
    const [activeInput, setActiveInput] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [foundShops, setFoundShops] = useState<Shop[]>([])
    const searchValue = useAppSelector(state => state.search.searchValue)
    const dispatch = useAppDispatch()

    useEffect(() => {
        (async () => {
            setIsLoading(true)
            try {
                const searchResponce = await axios.get(`https://63870765e399d2e473f2752a.mockapi.io/shops?name=${searchValue}`)
                setTimeout(() => setIsLoading(false), 500)
                setFoundShops(searchResponce.data)
            } catch (error) {
                console.error(error)
            }
        })()
    }, [searchValue])

    return (
        <Div
            position={'relative'}
            width={'40%'}
        >
            <StyledInputContainer
                align={'center'}
                width={'100%'}
                height={'50px'}
                backgroundColor={'#F3F3F3'}
                br={'14px'}
                border={activeInput ? '1px solid #FF654E' : '1px solid #F3F3F3'}
            >
                <Div
                    padding={'0 16px'}
                >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_659_4)">
                            <path d="M17.7802 16.7198L13.3035 12.243C14.5235 10.751 15.1233 8.84707 14.9789 6.92518C14.8345 5.00328 13.9569 3.2104 12.5277 1.91739C11.0985 0.624387 9.22693 -0.0698265 7.30022 -0.0216526C5.37351 0.0265212 3.53902 0.813397 2.1762 2.17621C0.813382 3.53903 0.026506 5.37352 -0.0216679 7.30024C-0.0698418 9.22695 0.624372 11.0985 1.91738 12.5277C3.21039 13.9569 5.00326 14.8345 6.92516 14.9789C8.84706 15.1233 10.7509 14.5235 12.243 13.3035L16.7197 17.7803C16.8612 17.9169 17.0506 17.9925 17.2473 17.9908C17.4439 17.9891 17.632 17.9102 17.7711 17.7711C17.9102 17.6321 17.989 17.444 17.9907 17.2473C17.9925 17.0507 17.9169 16.8612 17.7802 16.7198ZM7.49999 13.5C6.3133 13.5 5.15326 13.1481 4.16657 12.4888C3.17987 11.8295 2.41084 10.8925 1.95671 9.79611C1.50259 8.69975 1.38377 7.49335 1.61528 6.32946C1.84679 5.16558 2.41823 4.09648 3.25735 3.25736C4.09646 2.41825 5.16556 1.8468 6.32945 1.61529C7.49333 1.38378 8.69973 1.5026 9.79609 1.95673C10.8924 2.41085 11.8295 3.17989 12.4888 4.16658C13.1481 5.15328 13.5 6.31332 13.5 7.5C13.4982 9.09076 12.8655 10.6158 11.7407 11.7407C10.6158 12.8655 9.09074 13.4982 7.49999 13.5Z" fill="#9F9F9F" />
                        </g>
                        <defs>
                            <clipPath id="clip0_659_4">
                                <rect width="18" height="18" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </Div>
                <StyledInputSearch
                    type={'text'}
                    placeholder={'Найти магазин'}
                    value={searchValue}
                    onChange={e => dispatch(setSearchValue(e.target.value))}
                    onFocus={() => setActiveInput(true)}
                    onBlur={() => setActiveInput(false)}
                />
                <Flex
                    align={'center'}
                    justify={'center'}
                    padding={'0px 16px'}
                >
                    {
                        (searchValue && isLoading === false) ?
                            (
                                <RoundBtn
                                    onClick={() => dispatch(setSearchValue(''))}
                                    width={'16px'}
                                    height={'16px'}
                                    backgroundColor={'#9F9F9F'}
                                    hoverOpacity={0.8}
                                    icon={
                                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.70696 3.99999L7.8535 0.853789C8.04882 0.658469 8.04882 0.341795 7.8535 0.14649C7.65818 -0.04883 7.34151 -0.04883 7.1462 0.14649L3.99999 3.29302L0.853789 0.14649C0.658469 -0.04883 0.341795 -0.04883 0.14649 0.14649C-0.0488144 0.34181 -0.04883 0.658485 0.14649 0.853789L3.29302 3.99999L0.14649 7.1462C-0.04883 7.34152 -0.04883 7.6582 0.14649 7.8535C0.34181 8.04881 0.658485 8.04882 0.853789 7.8535L3.99999 4.70696L7.14619 7.8535C7.34151 8.04882 7.65818 8.04882 7.85349 7.8535C8.04881 7.65818 8.04881 7.34151 7.85349 7.1462L4.70696 3.99999Z" fill="#F2F2F2" />
                                        </svg>
                                    }
                                />
                            ) : activeInput && isLoading ? (
                                <CircularProgress
                                    size={16}
                                    thickness={3}
                                />
                            ) : (
                                <></>
                            )
                    }

                </Flex>
                {
                    activeInput && searchValue && isLoading === false &&
                    <Div
                        backgroundColor={'#FFFFFF'}
                        position={'absolute'}
                        top={'100%'}
                        br={'14px'}
                        boxShadow={' 0px 1px 20px rgba(0, 0, 0, 0.15)'}
                        padding={'16px 8px 16px 16px'}
                        width={'100%'}
                    >
                        <StyledSearchContentContainer
                            overflowY={'auto'}
                            overflowX={'hidden'}
                            maxHeight={'276px'}
                            pr={'8px'}
                        >
                            <Flex
                                direction={'column'}
                            >
                                {foundShops.map((el) => {
                                    return (
                                        <StyledFoundShopsLink
                                            key={el.id}
                                            colorHover={'#FF654E'}
                                            fontWeight={'500'}
                                            fontSize={'14px'}
                                            backgroundColorHover={'#F5F2F2'}
                                            href={`/shops/${el.translit_shop_name}`}
                                            padding={'16px'}
                                        >
                                            <Div
                                                mr={'16px'}
                                            >
                                                <img style={{ borderRadius: '14px' }} src={el.logo} />
                                            </Div>
                                            {el.name}
                                        </StyledFoundShopsLink>
                                    )
                                })}
                            </Flex>
                            {
                                foundShops.length == 0 ? (
                                    <Flex
                                        justify={'center'}
                                        align={'center'}
                                        gap={'2px'}
                                    >
                                        <StyledP>
                                            К сожалению, ничего не найдено
                                        </StyledP>
                                        <img width={16} height={16} src="/img/sad-emoji.png" alt="sad-emoji" />
                                    </Flex>
                                ) : (
                                    <Div
                                        mt={'16px'}
                                    >
                                        <Link
                                            to={'/'} // добавить нормальную ссылку
                                        >
                                            <StyledBannerStatisticsBtn
                                                backgroundColor={'#F3F3F3'}
                                            >
                                                Показать все
                                            </StyledBannerStatisticsBtn>
                                        </Link>
                                    </Div>
                                )
                            }
                        </StyledSearchContentContainer>
                    </Div>
                }
            </StyledInputContainer>
        </Div>
    )
}