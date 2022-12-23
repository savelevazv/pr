import { FC } from "react";
import styled from "styled-components";
import { CenteredLayout } from "./Layouts/CenteredLayout";
import { CenteredLayoutBody } from "./Layouts/CenteredLayoutBody";
import { Flex } from "../styles/Flex.styled";
import { StyledP } from "../styles/Fonts.styled";
import { BaseLinkProps, Link } from "./Link";
import { Div } from "../styles/Div.styled";

const FooterSvgContainer = styled('a')`
    & {
        cursor: pointer;
        transition: opacity 0.3s ease-in-out;
        opacity: 0.8;
    }

    &:hover {
        opacity: 1;
    }

`

const StyledFooter = styled('footer')`
    padding: 50px 0;
    background-color: #FF654E;
`

interface FooterSectionProps {
    sectionName: string
    footerMenuLinksArr: BaseLinkProps[]
}

const FooterSection: FC<FooterSectionProps> = ({ sectionName, footerMenuLinksArr }): JSX.Element => {
    return (
        <Div
            width={'30%'}
        >
            <Div
                fontSize={'16px'}
                fontWeight={'600'}
                color={'#FFFFFF'}
                mb={'16px'}
            >
                {sectionName}
            </Div>
            <Flex
                direction={'column'}
                gap={'8px'}
            >
                {footerMenuLinksArr.map((el) => {
                    return (
                        <Link
                            key={el.title}
                            to={el.to}
                            fontSize={'14px'}
                            color={'rgb(255 255 255 / 60%)'}
                            colorHover={'#FFFFFF'}
                        >
                            {el.title}
                        </Link>
                    )
                })}
            </Flex>
        </Div>
    )
}

const companyFooterSection: BaseLinkProps[] = [
    {
        title: 'О нас',
        to: '/about'
    },
    {
        title: 'Сотрудничество',
        to: '/collaboration'
    },
    {
        title: 'Поддержка',
        to: '/support'
    }
]

const infoFooterSection: BaseLinkProps[] = [
    {
        title: 'Пользовательское соглашение',
        to: '/agreement'
    },
    {
        title: 'Политика конфиденциальности',
        to: '/privacy'
    }
]

const discountFooterSection: BaseLinkProps[] = [
    {
        title: 'Магазины',
        to: '/shops'

    },
    {
        title: 'Все предложения',
        to: '/offers'
    }
]

export const Footer: FC = () => {
    return (
        <StyledFooter>
            <CenteredLayout>
                <CenteredLayoutBody>
                    <Flex
                        height={'200px'}
                    >
                        <Flex
                            direction={'column'}
                            justify={'space-between'}
                            width={'40%'}
                        >
                            <Flex
                                direction={'column'}
                                gap={'16px'}
                            >
                                <Link
                                    fontSize={'20px'}
                                    fontWeight={'700'}
                                    color={'#FFFFFF'}
                                    to={'/'}
                                >
                                    PROMOCODESHUB
                                </Link>
                                <FooterSvgContainer
                                    target="_blank"
                                    href='https://vk.com/promohubru'
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_700_6)">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M23.45 5.948C23.616 5.402 23.45 5 22.655 5H20.03C19.362 5 19.054 5.347 18.887 5.73C18.887 5.73 17.552 8.926 15.661 11.002C15.049 11.604 14.771 11.795 14.437 11.795C14.27 11.795 14.019 11.604 14.019 11.057V5.948C14.019 5.292 13.835 5 13.279 5H9.151C8.734 5 8.483 5.304 8.483 5.593C8.483 6.214 9.429 6.358 9.526 8.106V11.904C9.526 12.737 9.373 12.888 9.039 12.888C8.149 12.888 5.984 9.677 4.699 6.003C4.45 5.288 4.198 5 3.527 5H0.9C0.15 5 0 5.347 0 5.73C0 6.412 0.89 9.8 4.145 14.281C6.315 17.341 9.37 19 12.153 19C13.822 19 14.028 18.632 14.028 17.997V15.684C14.028 14.947 14.186 14.8 14.715 14.8C15.105 14.8 15.772 14.992 17.33 16.467C19.11 18.216 19.403 19 20.405 19H23.03C23.78 19 24.156 18.632 23.94 17.904C23.702 17.18 22.852 16.129 21.725 14.882C21.113 14.172 20.195 13.407 19.916 13.024C19.527 12.533 19.638 12.314 19.916 11.877C19.916 11.877 23.116 7.451 23.449 5.948H23.45Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_700_6">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </FooterSvgContainer>
                            </Flex>
                            <StyledP
                                fontSize={'12px'}
                                color={'#FFFFFF'}
                            >
                                © 2022-2023 «Promocodeshub.ru» - Все права защищены
                            </StyledP>
                        </Flex>
                        <Flex
                            width={'60%'}
                        >
                            <FooterSection
                                sectionName={'Компания'}
                                footerMenuLinksArr={companyFooterSection}
                            />
                            <FooterSection
                                sectionName={'Скидки'}
                                footerMenuLinksArr={discountFooterSection}
                            />
                            <FooterSection
                                sectionName={'Правовая информация'}
                                footerMenuLinksArr={infoFooterSection}
                            />
                        </Flex>
                    </Flex>
                </CenteredLayoutBody>
            </CenteredLayout>
        </StyledFooter >
    )
}
