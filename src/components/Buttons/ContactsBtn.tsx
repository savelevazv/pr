import React, { FC, ReactNode } from 'react';
import { StyledContactsBtn } from './Buttons.styled';
import { Flex } from '../../styles/Flex.styled';
import { StyledP } from '../../styles/Fonts.styled';
import { BaseLinkProps, LinkProps, TitleProps } from '../Link';
import { Link } from 'react-router-dom';

interface ContactsBtnProps extends IconProps, TitleProps, Omit<LinkProps, "children"> { }

export interface IconProps {
    icon: ReactNode
}

export const ContactsBtn: FC<ContactsBtnProps> = ({ to, title, target, icon }): JSX.Element => {
    return (
        <Link
            target={target}
            to={to}
        >
            <Flex
                direction={'column'}
                gap={'4px'}
                align={'center'}
            >
                <StyledContactsBtn>
                    {icon}
                </StyledContactsBtn>
                <StyledP
                    fontSize={'10px'}
                    color={'#9F9F9F'}
                    fontWeight={'500'}
                >
                    {title}
                </StyledP>
            </Flex>
        </Link>
    )
}