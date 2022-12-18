import { FC } from "react";
import { Drawer } from "../Drawer";
import { Div } from "../../styles/Div.styled";
import { Flex } from "../../styles/Flex.styled";
import { StyledSpan } from "../../styles/Fonts.styled";
import { InputSeach } from "../Inputs/InputSearch";
import { Link } from "../../Link";
import { MenuBtn } from "../Buttons/MenuBtn";
import { CenteredLayout } from "../Layouts/CenteredLayout";
import { CenteredLayoutBody } from "../Layouts/CenteredLayoutBody";
import { StyledHeader } from "./Header.styles";
import { RoundBtn } from "../Buttons/RoundBtn";
import { useMediaQuery } from 'react-responsive'
import { StyledShopsMobileBtn } from "../Buttons/Buttons.styled";

export const Header: FC = (): JSX.Element => {
    const isTablet = useMediaQuery({ query: '(max-width: 999.5px)' })

    return (
        <StyledHeader>
            <CenteredLayout>
                <CenteredLayoutBody>
                    <Flex
                        align={'center'}
                        justify={'space-between'}
                    >
                        {
                            isTablet ? (
                                <>
                                    <MenuBtn />
                                    <Flex
                                        direction={'column'}
                                        align={'center'}
                                    >
                                        <Link
                                            to={'/'}
                                        >
                                            <StyledSpan
                                                fontSize={'34px'}
                                                fontWeight={'700'}
                                                color={'#FF654E'}
                                            >
                                                PROMOCODESHUB
                                            </StyledSpan>
                                        </Link>
                                        <Div
                                            height={'20px'}
                                        >
                                            <StyledSpan
                                                fontSize={'16px'}
                                                color={'#9F9F9F'}
                                            >
                                                <Link
                                                    to={'/'}
                                                    colorHover={'#848383'}
                                                >
                                                    актуальные промокоды и акции
                                                </Link>
                                            </StyledSpan>
                                        </Div>
                                    </Flex>
                                    <Link
                                        to={'shops'}
                                    >
                                        <StyledShopsMobileBtn>
                                            Все магазины
                                        </StyledShopsMobileBtn>
                                    </Link>
                                    <RoundBtn
                                        backgroundColor={'#FFE8E4'}
                                        icon={
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_748_6)">
                                                    <path d="M19.7558 18.5775L14.7817 13.6033C16.1372 11.9455 16.8037 9.83008 16.6432 7.69464C16.4828 5.55919 15.5077 3.56711 13.9197 2.13044C12.3316 0.69376 10.2522 -0.0775884 8.11137 -0.0240619C5.97058 0.0294646 3.93225 0.903771 2.41801 2.41801C0.903771 3.93225 0.0294646 5.97058 -0.0240619 8.11137C-0.0775884 10.2522 0.69376 12.3316 2.13044 13.9197C3.56711 15.5077 5.55919 16.4828 7.69464 16.6432C9.83008 16.8037 11.9455 16.1372 13.6033 14.7817L18.5775 19.7558C18.7347 19.9076 18.9452 19.9916 19.1637 19.9897C19.3822 19.9878 19.5912 19.9002 19.7457 19.7457C19.9002 19.5912 19.9878 19.3822 19.9897 19.1637C19.9916 18.9452 19.9076 18.7347 19.7558 18.5775ZM8.33333 15C7.01479 15 5.72586 14.609 4.62953 13.8765C3.53321 13.1439 2.67872 12.1027 2.17414 10.8846C1.66955 9.66638 1.53753 8.32594 1.79477 7.03273C2.052 5.73953 2.68694 4.55164 3.61929 3.61929C4.55164 2.68694 5.73953 2.052 7.03273 1.79477C8.32594 1.53753 9.66638 1.66955 10.8846 2.17414C12.1027 2.67872 13.1439 3.53321 13.8765 4.62953C14.609 5.72586 15 7.01479 15 8.33333C14.998 10.1008 14.295 11.7954 13.0452 13.0452C11.7954 14.295 10.1008 14.998 8.33333 15Z" fill="#FF654E" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_748_6">
                                                        <rect width="20" height="20" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        }
                                        hoverOpacity={0.8}
                                    />
                                </>
                            ) : (
                                <>
                                    <Flex
                                        direction={'column'}
                                        align={'center'}
                                    >
                                        <Link
                                            to={'/'}
                                        >
                                            <StyledSpan
                                                fontSize={'34px'}
                                                fontWeight={'700'}
                                                color={'#FF654E'}
                                            >
                                                PROMOCODESHUB
                                            </StyledSpan>
                                        </Link>
                                        <Div
                                            height={'20px'}
                                        >
                                            <StyledSpan
                                                fontSize={'16px'}
                                                color={'#9F9F9F'}
                                            >
                                                <Link
                                                    to={'/'}
                                                    colorHover={'#848383'}
                                                >
                                                    актуальные промокоды и акции
                                                </Link>
                                            </StyledSpan>
                                        </Div>
                                    </Flex>
                                    <InputSeach />
                                    <MenuBtn />
                                </>
                            )
                        }
                    </Flex >
                </CenteredLayoutBody>
            </CenteredLayout>
        </StyledHeader>
    )
}