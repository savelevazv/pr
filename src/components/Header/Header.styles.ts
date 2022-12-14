import styled from "styled-components";

export const StyledHeader = styled('header')`
& {
     background-color: #FFFFFF;
     box-shadow: 0px 1px 16px rgba(0, 0, 0, 0.25);
     position: sticky;
     top: 0;
     width: 100%;
     z-index: 2;
     padding: 12px 0;
     @media (max-width: 999.5px) {
          height: 70px;
          padding: 8px 0;
        }
}
`