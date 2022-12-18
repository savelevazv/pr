import styled, { css } from "styled-components"
import { StyledDrawerProps } from '../Drawer'

export const StyledDefaultBtn = styled('button')`
    & {
        border: 0;
        font-size: 16px;
        cursor: pointer;
        background-color: transparent;
    }
`

export const StyledPromocodeBtn = styled('button')`
    & {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 220px;
        height: 40px;
        background-color: #F3F3F3;
        border-radius: 7px;
        border: 0;
        cursor: pointer;
        padding: 0px 14px 0px 0px;
        transition: opacity 0.2s ease-in-out;
    }

    &:hover {
       opacity 0.8;
    }
`

export interface StyledSortBtnProps {
    backgroundColorHover?: string
    justify?: string
}

export const StyledSortBtn = styled(StyledDefaultBtn) <StyledSortBtnProps>`
    & {
        display: flex;
        justify-content: ${props => props.justify || 'center'};
        align-items: center;
        padding: 10px 20px;
        border-radius: 7px;
        transition: background-color 0.3s ease;

        svg {
            margin-right: 10px;
        }
    }

    &:hover {
        background-color: ${props => props.backgroundColorHover || ''};
    }
`

export const StyledDefaultOrangeBtn = styled(StyledDefaultBtn)`
    & {
        background-color: #FF654E;
        color: #FFFFFF;
        font-weight: 600;
        border-radius: 14px;
    }

    &:hover {
        opacity: 0.8;
    }
`

export const StyledShopsMobileBtn = styled(StyledDefaultOrangeBtn)`
    & {
        font-size: 14px;
        padding: 13px 26px;
    }
`

export const AllShopsBtn = styled(StyledDefaultOrangeBtn)`
    & {
        position: relative;
        width: 245px;
        height: 55px;
        border-radius: 14px;
        background-color: #FF654E;
        color: #FFFFFF;
        font-weight: 600;

        svg {
            transition: transform 0.15s ease-in-out;
            position: absolute;
            right: 30px;
            top: 22px;
        }

    &:hover {
        svg {
            transform: translateX(3px);
        }
    } 
`

export const StyledContactsBtn = styled(StyledDefaultBtn)`
    & {
        border-radius: 14px;
        width: 56px;
        height: 56px;
        background-color: #F3F3F3;
        padding: 13px;
        transition: opacity 0.15s ease-in-out;
    }

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.8;
    }
`

export interface StyledRoundBtnProps {
    width?: string
    height?: string
    backgroundColor?: string
    zIndex?: number
    position?: string
    boxShadow?: string
    top?: string
    bottom?: string
    left?: string
    right?: string
    opacity?: number
    visibility?: string
    hoverOpacity?: number
}

export const StyledRoundBtn = styled('button') <StyledRoundBtnProps>`
    & {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: none;
        padding: 0;
        cursor: pointer;
        width: ${props => props.width || '50px'};
        height: ${props => props.height || '50px'};
        position: ${props => props.position || ''};
        top: ${props => props.top || ''};
        bottom: ${props => props.bottom || ''};
        left: ${props => props.left || ''};
        right: ${props => props.right || ''};
        opacity: ${props => props.opacity || ''};
        visibility: ${props => props.visibility || ''};
        background-color: ${props => props.backgroundColor || '#FFFFFF'};
        z-index:  ${props => props.zIndex || ''};
        box-shadow: ${props => props.boxShadow || ''};
    }

    &:hover {
        opacity: ${props => props.hoverOpacity || ''};
    }
`

export const StyledFilterBtn = styled(StyledDefaultBtn) <StyledDrawerProps>`
    & {
        background-color: #F3F3F3;
        font-size: 14px;
        padding: 6px 10px;
        border-radius: 14px;
        ${props => props.active && css`
            background-color: #FF654E;
            color: #FFFFFF;
        `}
    }
`

export const StyledPromotionBtn = styled(StyledDefaultBtn)`
    & {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #4A89C1;
        border-radius: 7px;
        width: 220px;
        height: 40px;
        transition: opacity 0.2s ease-in-out;
    }

    &:hover {
        opacity: 0.8;
    }
`

export const StyledSimilarBtn = styled(StyledDefaultBtn)`
    & {
        background-color: #F3F3F3;
        padding: 6px 10px;
        font-size: 14px;
        border-radius: 14px;
        transition: opacity 0.15s ease-in-out;
    }

    &: hover {
        opacity: 0.8;
    }
`

export const StyledSortShopsBtn = styled(StyledDefaultBtn) <StyledDrawerProps>`
    & {
        padding: 10px;
        color: #4A89C1;
        border-radius: 7px;
        font-size: 16px;
        font-weight: 600;
        transition: background-color 0.3s ease;

        ${props => props.active && css`
            background-color: #F2F3F5;
        `}
    }

    &:hover {
        background-color: #F2F3F5;
    }
`

interface StyledSortBtnSecondaryProps {
    width: string
}

export const StyledSortShopsBtnSecondary = styled(StyledSortBtn) <StyledSortBtnSecondaryProps>`
    & {
        width:${props => props.width};
        justify-content: flex-start;
    }
`

export const StyledBannerStatisticsBtn = styled(StyledDefaultBtn) <{ backgroundColor?: string }>`
    & {
        padding: 0 26px;
        height: 55px;
        font-weight: 600;
        background-color: ${props => props.backgroundColor || ' #FFFFFF'};
        border-radius: 14px;
        transition: color 0.3s ease;
        z-index: 1;
    }

    &:hover {
        color: #FF654E;
    }

    &:disabled {
        cursor: default;
        color: #BCBCC3;
    }

`

export const StyledSupportBannerBtn = styled(StyledBannerStatisticsBtn)`
    & {
        display: flex;
        align-items: center;
        transition: fill 0.3s ease;
        font-weight: 700;
        gap: 6px;
    }

    &:hover {
        path {
            fill: #FF654E;
        }
    }
`

export const StyledFormBtn = styled(StyledDefaultOrangeBtn)`
    & {
        height: 50px;
        width: 100%;
        margin: 16px 0 12px 0;
    }

    &:disabled {
        background-color: #EAEAEA;
        cursor: default;
        opacity: 1;
        color: #BCBCC3;
    } 
`

export const StyledCopyBtn = styled(StyledDefaultBtn) <StyledDrawerProps>`
    & {
        display: flex;
        gap: 8px;
        align-items: center;
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        font-weight: 500;
        font-size: 14px;
        color: ${props => props.active ? '#31A169' : '#9F9F9F'};
        border: ${props => props.active ? '2px solid #31A169' : '2px solid #9F9F9F'};
        border-radius: 14px;
        background-color: #FFFFFF;
        padding: 16px 17px;
        transition: all 0.3s ease-in-out;

        path {
            fill: ${props => props.active ? '#31A169' : ''};
            transition: all 0.3s ease-in-out;
        }
    }

    &:hover {
        color: ${props => props.active ? '' : '#4A89C1'};
        border-color: ${props => props.active ? '' : '#4A89C1'};

        path {
            fill: ${props => props.active ? '' : '#4A89C1'};
        }
    }
`

export const StyledGoStoreBtn = styled(StyledDefaultOrangeBtn)`
    & {
        font-size: 16px;
        width: 320px;
        height: 50px;
        margin-left: 80px;
        margin-bottom: 20px;
        border-radius: 14px;
    }
`

export const StyledSubscribeNewsletterBtn = styled(StyledDefaultBtn)`
    & {
        transition: background-color 0.3s ease-in-out;
        font-size: 12px;
        border-radius: 7px;
        background-color: #E0F1E9;
        color: #31A169;
        padding: 6px 10px;
        font-weight: 600;
    }

    &:hover {
        background-color: #D6ECE1;
    }
`