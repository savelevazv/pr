import { FC, useState } from "react";
import styled, { css } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { useMediaQuery } from 'react-responsive'
import { setMenu } from '../../store/reducers/menuReducer';
import { StyledLink } from "../../styles/Link.styled";
import { StyledDefaultBtn } from "./Buttons.styled";
import { StyledDrawerProps } from "../Drawer"
import { StyledSpan } from "../../styles/Fonts.styled";

const StyledMenuLink = styled(StyledLink)`
    & {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
    }

    &:hover {
        opacity: 0.8;
    }
`

const StyledMenuBtn = styled(StyledDefaultBtn)`
    & {
        display: block;
        width: 50px;
        height: 50px;
        background-color: #FFE8E4;
        border-radius: 50%;
        position: relative;
        @media (max-width: 999.5px) {
            width: 40px;
            height: 40px;
          }
    }
`

const StyledMenuBtnSpan = styled('span')`
    &, &::before, &::after {
        position: absolute;
        top: 50%;
        margin-top: -1px;
        left: 50%;
        margin-left: -10px;
        background-color: #FF654E;
        width: 20px;
        height: 2px;
        border-radius: 100px;
    }

    &::before, &::after {
        content: '';
        display: block;
    }

    &::before {
        transform: translateY(-5px);
    }

    &::after {
        transform: translateY(5px);
    }
`
const StyledMobileMenuBtnSpan = styled(StyledMenuBtnSpan) <StyledDrawerProps>`
    &::before, &::after {
        transition: 0.15s;
    }

    ${props => props.active && css`
        & {
            height: 0;
        }

        &:before {
            transform: rotate(45deg);
        }

        &:after {
            transform: rotate(-45deg);
        }
    `}
`


export const MenuBtn: FC = () => {
    const dispatch = useAppDispatch()
    const isTablet = useMediaQuery({ query: '(max-width: 999.5px)' })
    const menuState = useAppSelector(state => state.menu.value)

    return (
        <>
            {
                isTablet
                    ? (
                        <StyledMenuBtn
                            onClick={() => dispatch(setMenu(!menuState))}
                        >
                            <StyledMobileMenuBtnSpan
                                active={menuState}
                            />
                        </StyledMenuBtn >
                    ) : (
                        <>
                            <StyledMenuLink
                                fontSize={'12px'}
                                color={'#FF654E'}
                                onClick={() => dispatch(setMenu(true))}
                            >
                                <StyledSpan
                                    fontSize={'16px'}
                                    fontWeight={'500'}
                                    color={'#FF654E'}
                                >
                                    Меню
                                </StyledSpan>
                                <StyledMenuBtn>
                                    <StyledMenuBtnSpan />
                                </StyledMenuBtn>
                            </StyledMenuLink>
                        </>
                    )
            }
        </>
    )
}