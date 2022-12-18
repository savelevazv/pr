import React, { FC } from "react";
import styled from "styled-components";
import { Div } from "../styles/Div.styled";

const BreadcrumbsItemsContainer = styled(Div)`
    & {
       span {
            color: #9F9F9F;
            transition: color 0.15s ease-in-out;
                span: hover {
                    color: #303030;
                    }
        }
    }
`

interface BreadcrumbsProps {
    titleSecondPage?: string
    titleSecondPageLink?: string
    titleThirdPage?: string
    titleThirdPageLink?: string
    titleLastPage: string
}


export const Breadcrumbs: FC<BreadcrumbsProps> = ({
    titleSecondPage,
    titleSecondPageLink,
    titleThirdPage,
    titleThirdPageLink,
    titleLastPage
}): JSX.Element => {
    return (
        <Div
            mt={'40px'}
            mb={'16px'}
        >
            <BreadcrumbsItemsContainer fontSize={'12px'} cursor={'default'} className="breadcrumbs" itemScope itemType="http://schema.org/BreadcrumbList">
                <span itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                    <a itemProp="item" href="/">
                        <span style={{ color: '#FF654E' }} itemProp="name">Главная </span>
                        <meta itemProp="position" content="1" />
                    </a>
                </span>
                {
                    titleSecondPage &&
                    <span itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                        /
                        <a itemProp="item" href={titleSecondPageLink}
                        >
                            <span itemProp="name">{` ${titleSecondPage} `}</span>
                            <meta itemProp="position" content="2" />
                        </a>
                    </span>
                }
                {
                    titleThirdPage &&
                    <span itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                        /
                        <a itemProp="item" href={titleThirdPageLink}>
                            <span itemProp="name">{` ${titleThirdPage} `}</span>
                            <meta itemProp="position" content="3" />
                        </a>
                    </span>
                }
                <span itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                    /
                    <span style={{ color: '#9F9F9F' }} itemProp="name">{` ${titleLastPage}`}</span>
                    <meta itemProp="position" content={titleSecondPage ? '3' : titleThirdPage ? '4' : '2'} />
                </span>
            </BreadcrumbsItemsContainer>
        </Div>
    )
}