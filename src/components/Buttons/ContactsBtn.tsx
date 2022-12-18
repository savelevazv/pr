import React, { FC, ReactNode } from 'react';
import { StyledContactsBtn } from './Buttons.styled';
import { Flex } from '../../styles/Flex.styled';
import { StyledP } from '../../styles/Fonts.styled';

interface ContactsBtnProps {
    svg: ReactNode
    title: string
    target: string
    href: string
}

export const ContactsBtn: FC<ContactsBtnProps> = ({ svg, title, target, href }): JSX.Element => {
    return (
        <a
            target={target}
            href={href}
        >
            <Flex
                direction={'column'}
                gap={'4px'}
                align={'center'}
            >
                <StyledContactsBtn>
                    {svg}
                </StyledContactsBtn>
                <StyledP
                    fontSize={'10px'}
                    color={'#9F9F9F'}
                >
                    {title}
                </StyledP>
            </Flex>
        </a>
    )
}