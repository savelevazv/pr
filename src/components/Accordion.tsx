import React, { FC, useState, useEffect, ReactNode } from "react";
import styled, { css } from "styled-components";
import { Div } from "../styles/Div.styled";
import { Flex } from "../styles/Flex.styled";
import { Link } from "./Link";
import { StyledH3, StyledP } from "../styles/Fonts.styled";
import { StyledDrawerProps } from './Drawer'
import { useMediaQuery } from "react-responsive";

// добавить рабочие ссылки на почты

const accordionData = [
    {
        question: 'Как воспользоваться промокодом?',
        answer: <>
            <p>Найти интересующий вас магазин можно через поиск или раздел<br />
                <Link
                    color={'#FF654E'}
                    to={'shops'}
                > «Все магазины».
                </Link>
            </p>
            <p>
                Далее, нажмите на кнопку «Открыть промокод».<br />
                Появится окно, оттуда можно скопировать промокод и применить его на сайте магазина.
            </p>
            <p>Готово, вы превосходны!</p>
        </>
    },
    {
        question: 'Безопасно ли пользоваться промокодами?',
        answer: <>
            <p>Промокоды, предоставленные на нашем сайте безопасны для использования.</p>
            <p>Магазины сами предоставляют промокоды и информацию об акциях.</p>
            <p>Желаем удачных покупок!</p>
        </>
    },
    {
        question: 'Какие промокоды бывают?',
        answer: <>
            <p>
                Промокоды обычно дают одну из трех привилегий:<br />
            </p>
            <p>
                • скидка в виде процента или фиксированной суммы<br />
                • бесплатная доставка<br />
                • подарок к заказу<br />
            </p>

        </>
    },
    {
        question: 'Нужного магазина нет на сайте',
        answer: <>
            <p>
                Если вы не нашли магазин на сайте, напишите, пожалуйста,<br />
                <Link
                    color={'#FF654E'}
                    to={'support'}
                    target={'_blank'}
                >
                    в поддержку.
                </Link>
            </p>
            <p>Мы свяжемся с магазином и постараемся договориться о сотрудничестве.</p>
        </>
    }
]

type accordionData = Array<AccordionProps>

interface AccordionProps {
    question: string
    answer: ReactNode
}

const StyledAnswer = styled(StyledP) <StyledDrawerProps> ` 
    & {
        ${props => props.active ? '' : 'display: none'}
    }
`

const StyledAccordion = styled(Div)`
    & {
        transition: background-color 0.3s;
    }

    &:hover {
        background-color: #DDDDDD;
    }
`

const SvgContainer = styled(Div)`
    & {
        svg {
            transition: transform 0.15s ease-in-out;
        }
    }
`

export const Accordion: FC = () => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1000px) and (max-width: 1280px)' })
    const [activeAccordicon, setActiveAccordion] = useState<number>(-1)

    const toggleAccordion = (index: number) => {
        if (index === activeAccordicon) {
            setActiveAccordion(-1)
            return
        }
        setActiveAccordion(index)
    }
    return (
        <Div
            width={'520px'}
        >
            {
                accordionData.map((item, index) => {
                    return (
                        <StyledAccordion
                            width={isDesktop ? '96%' : '100%'}
                            backgroundColor={activeAccordicon === index ? '#DDDDDD' : '#e9e9e9'}
                            br={'14px'}
                            mb={'20px'}
                            padding={'24px 30px'}
                            cursor={'pointer'}
                            key={index}
                            onClick={() => toggleAccordion(index)}
                        >
                            <Flex
                                align={'center'}
                                justify={'space-between'}
                            >
                                <Div>
                                    <StyledH3
                                        fontSize={'16px'}
                                    >
                                        {item.question}
                                    </StyledH3>
                                </Div>
                                <SvgContainer>
                                    {activeAccordicon === index
                                        ? <svg style={{ transform: 'rotate(-45deg)' }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_514_10)">
                                                <path d="M15 7H9V1C9 0.447719 8.55228 0 8 0C7.44772 0 7 0.447719 7 1V7H1C0.447719 7 0 7.44772 0 8C0 8.55228 0.447719 9 1 9H7V15C7 15.5523 7.44772 16 8 16C8.55228 16 9 15.5523 9 15V9H15C15.5523 9 16 8.55228 16 8C16 7.44772 15.5523 7 15 7Z" fill="#303030" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_514_10">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        : <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_514_10)">
                                                <path d="M15 7H9V1C9 0.447719 8.55228 0 8 0C7.44772 0 7 0.447719 7 1V7H1C0.447719 7 0 7.44772 0 8C0 8.55228 0.447719 9 1 9H7V15C7 15.5523 7.44772 16 8 16C8.55228 16 9 15.5523 9 15V9H15C15.5523 9 16 8.55228 16 8C16 7.44772 15.5523 7 15 7Z" fill="#303030" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_514_10">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>}
                                </SvgContainer>
                            </Flex>
                            <Div>
                                <StyledAnswer
                                    fontSize={'13px'}
                                    fontWeight={'400'}
                                    mt={'24px'}
                                    active={activeAccordicon === index}
                                >
                                    {item.answer}
                                </StyledAnswer>
                            </Div>
                        </StyledAccordion>
                    )
                })
            }
        </Div>
    )
}