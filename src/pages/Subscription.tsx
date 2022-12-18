import React, { FC } from "react";
import { CenteredLayout } from "../components/Layouts/CenteredLayout";
import { CenteredLayoutBody } from "../components/Layouts/CenteredLayoutBody";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Form } from "../components/Form";
import { SubscriptionInfoBlock } from "../components/SubscriptionInfoBlock";
import { Div } from "../styles/Div.styled";
import { Flex } from "../styles/Flex.styled";
import { StyledH1, StyledP } from "../styles/Fonts.styled";

export const Subscription: FC = () => {
    return (
        <Div
            height={'100%'}
        >
            <CenteredLayout>
                <CenteredLayoutBody>
                    <Breadcrumbs
                        titleLastPage={'Подписаться на рассылку'}
                    />
                    <Flex
                        justify={'space-between'}
                    >
                        <Flex
                            direction={'column'}
                        >
                            <StyledH1
                                fontSize={'40px'}
                                fontWeight={'700'}
                                pb={'30px'}
                            >
                                Подписаться на рассылку:<br />почему и зачем
                            </StyledH1>
                            <StyledP
                                fontSize={'20px'}
                                color={'#9F9F9F'}
                            >
                                Рассказываем о новых скидках и акциях, чтобы вы ничего не пропустили.<br />
                                Делимся советами по управлению финансами и полезными лайфхаками.
                            </StyledP>
                        </Flex>
                        <Form />
                    </Flex>
                    <SubscriptionInfoBlock />
                </CenteredLayoutBody>
            </CenteredLayout>
        </Div>
    )
}