import styled from "styled-components";
import { Flex } from "../../styles/Flex.styled";

export const StyledCard = styled(Flex)`
    & {
        transition: box-shadow 0.2s ease-in-out, fransform 0.2s ease-in-out;
    }

    &:hover {
        box-shadow: 0px 14px 30px rgba(0, 0, 0, 0.05);
        transform: translateY(-5px);
    }
`

export const StyledPromocodeSpan = styled('span')`
& {
    font-size: 14px;
    font-weight: 600;
}
`