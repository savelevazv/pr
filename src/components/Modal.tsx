import React, { FC, useState } from 'react';
import { Div } from '../styles/Div.styled';
import { Flex } from '../styles/Flex.styled';
import { StyledH3, StyledP } from '../styles/Fonts.styled';
import { Link } from '../Link';
import { CloseBtn } from './Buttons/CloseBtn';
import { onCloseModal } from '../store/reducers/modalReducer';
import { useAppDispatch, useAppSelector } from '../store/hooks/hooks';
import { StyledCopyBtn, StyledSubscribeNewsletterBtn } from './Buttons/Buttons.styled';
import { useParams } from 'react-router-dom';
import { StyledPromocodeInput } from './Inputs/Inputs.styled';
import styled from 'styled-components';
import { StyledDrawerProps } from './Drawer'
import { AllShopsBtn } from './Buttons/Buttons.styled'

export const Modal: FC = (): JSX.Element => {
    const [copy, setCopy] = useState<boolean>(false)

    const dispatch = useAppDispatch()
    const modalState = useAppSelector(state => state.modal.value)

    const handleClick = () => {
        navigator.clipboard.writeText('VV_13E2') // добавить значение
        setCopy(true)
    }

    const StyledOverlayModal = styled(Flex)`
        & {
            transition: visibility 0.3s;
        }
    `

    const StyledModal = styled(Flex) <StyledDrawerProps>`
        & {
            transition: transform 0.8s;
            ${props => props.active ? 'transform: scale(1)' : 'transform: scale(0.7)'};
        }
    `

    return (
        <StyledOverlayModal
            width={'100%'}
            height={'100%'}
            position={'fixed'}
            left={'0'}
            top={'0'}
            justify={'center'}
            align={'center'}
            backgroundColor={'rgba(0,0,0,.8)'}
            zIndex={3}
            cursor={'pointer'}
            onClick={() => dispatch(onCloseModal())}
            visibility={modalState ? 'visible' : 'hidden'}
        >
            <StyledModal
                active={modalState && true}
                direction={'column'}
                width={'600px'}
                zIndex={4}
                cursor={'default'}
                onClick={e => e.stopPropagation()}
            >
                <Flex
                    justify={'center'}
                    align={'center'}
                    br={'14px 14px 0 0'}
                    backgroundColor={'#FFFFFF'}
                    height={'56px'}
                    position={'relative'}
                >
                    <StyledH3
                        cursor={'text'}
                    >
                        Скидка 20% на первый заказ
                    </StyledH3>
                    <Div
                        position={'absolute'}
                        top={'12px'}
                        right={'12px'}
                    >
                        <CloseBtn
                            onClick={() => dispatch(onCloseModal())}
                        />
                    </Div>
                </Flex>
                <Flex
                    padding={'0 60px'}
                    height={'100%'}
                    backgroundColor={'#F3F3F3'}
                    direction={'column'}
                >
                    <Flex
                        width={'100%'}
                        height={'50px'}
                        mt={'30px'}
                        position={'relative'}
                    >
                        <StyledPromocodeInput // с бэкэнда
                            value={'value37645'}
                            readOnly={true}
                        />
                        <StyledCopyBtn
                            onClick={handleClick}
                            active={copy && true}
                        >
                            {
                                copy === false
                                    ? <>
                                        СКОПИРОВАТЬ
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_575_14)">
                                                <path d="M10 13.3333H3.33333C2.4496 13.3323 1.60237 12.9807 0.97748 12.3559C0.352588 11.731 0.00105857 10.8837 0 10L0 3.33333C0.00105857 2.4496 0.352588 1.60237 0.97748 0.97748C1.60237 0.352588 2.4496 0.00105857 3.33333 0L10 0C10.8837 0.00105857 11.731 0.352588 12.3559 0.97748C12.9807 1.60237 13.3323 2.4496 13.3333 3.33333V10C13.3323 10.8837 12.9807 11.731 12.3559 12.3559C11.731 12.9807 10.8837 13.3323 10 13.3333V13.3333ZM3.33333 1.33333C2.8029 1.33333 2.29419 1.54405 1.91912 1.91912C1.54405 2.29419 1.33333 2.8029 1.33333 3.33333V10C1.33333 10.5304 1.54405 11.0391 1.91912 11.4142C2.29419 11.7893 2.8029 12 3.33333 12H10C10.5304 12 11.0391 11.7893 11.4142 11.4142C11.7893 11.0391 12 10.5304 12 10V3.33333C12 2.8029 11.7893 2.29419 11.4142 1.91912C11.0391 1.54405 10.5304 1.33333 10 1.33333H3.33333ZM16 12.6667V4C16 3.82319 15.9298 3.65362 15.8047 3.5286C15.6797 3.40357 15.5101 3.33333 15.3333 3.33333C15.1565 3.33333 14.987 3.40357 14.8619 3.5286C14.7369 3.65362 14.6667 3.82319 14.6667 4V12.6667C14.6667 13.1971 14.456 13.7058 14.0809 14.0809C13.7058 14.456 13.1971 14.6667 12.6667 14.6667H4C3.82319 14.6667 3.65362 14.7369 3.5286 14.8619C3.40357 14.987 3.33333 15.1565 3.33333 15.3333C3.33333 15.5101 3.40357 15.6797 3.5286 15.8047C3.65362 15.9298 3.82319 16 4 16H12.6667C13.5504 15.9989 14.3976 15.6474 15.0225 15.0225C15.6474 14.3976 15.9989 13.5504 16 12.6667V12.6667Z" fill="#9F9F9F" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_575_14">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </>
                                    : <>
                                        СКОПИРОВАНО
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_835_7)">
                                                <path d="M5.16613 13.775C4.71195 13.7752 4.27638 13.5947 3.9555 13.2733L0.295374 9.6145C-0.098458 9.22054 -0.098458 8.58193 0.295374 8.18798C0.689332 7.79414 1.32794 7.79414 1.72189 8.18798L5.16613 11.6322L14.2781 2.52023C14.6721 2.1264 15.3107 2.1264 15.7046 2.52023C16.0985 2.91419 16.0985 3.55279 15.7046 3.94675L6.37675 13.2733C6.05587 13.5947 5.6203 13.7752 5.16613 13.775Z" fill="#9F9F9F" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_835_7">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </>
                            }
                        </StyledCopyBtn>
                    </Flex>
                    <StyledP // c бэкэнда
                        fontSize={'13px'}
                        color={'#303030'}
                        mt={'30px'}
                        mb={'30px'}
                        cursor={'text'}
                    >
                        description
                    </StyledP>
                    <Div
                        textAlign={'center'}
                        mb={'30px'}
                    >
                        <AllShopsBtn>
                            Перейти в магазин
                        </AllShopsBtn>
                    </Div>
                </Flex>
                <Flex
                    br={'0px 0px 14px 14px'}
                    backgroundColor={'#FFFFFF'}
                    height={'56px'}
                    padding={'0px 60px'}
                    align={'center'}
                    gap={'16px'}
                >
                    <StyledP
                        fontSize={'12px'}
                    >
                        Подпишитесь на рассылку и получайте секретные промокоды
                    </StyledP>
                    <Link
                        to={'subscription'}
                        target={'_blank'}
                    >
                        <StyledSubscribeNewsletterBtn>
                            Подписаться
                        </StyledSubscribeNewsletterBtn>
                    </Link>
                </Flex>
            </StyledModal>
        </StyledOverlayModal>
    )
}