import React from 'react'
import ReactPaginate from 'react-paginate'
import styled from 'styled-components'
import { Div } from '../../styles/Div.styled'

export const StyledPaginationContainer = styled(Div)`
    & {
        ul {
            list-style-type: none;

            li {
                display: inline-block;

                a {
                    transition: color 0.3s ease-in-out;
                    display: inline-flex;
                    padding: 0 10px;
                    color: #9F9F9F;

                    &:hover {
                        color: #FF654E;
                       cursor: pointer;
                    }
                }
            }

            li.selected {
                a {
                    color: #303030;
                }
            }

        }
    }
`

export const Pagination = () => {
    return (
        <StyledPaginationContainer>
            <ReactPaginate
                breakLabel="..."
                nextLabel="Вперёд"
                onPageChange={(e) => console.log(e)}
                pageRangeDisplayed={5}
                pageCount={7} // передать правильное количество страниц
                previousLabel="Назад"
            />
        </StyledPaginationContainer>
    )
}
