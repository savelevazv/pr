import { useAppDispatch, useAppSelector } from '../store/hooks/hooks'
import { setMobileSearchState } from '../store/reducers/searchReducer'
import { Div } from '../styles/Div.styled'
import { Flex } from '../styles/Flex.styled'
import { StyledDefaultBtn } from './Buttons/Buttons.styled'
import { InputSeach, ShowAllBtn, StyledFoundShopsLink } from './Inputs/InputSearch'
import { EmptyBlock } from './SearchBlocks/EmptyBlock'

const MobileSearch = () => {
    const mobileSearchState = useAppSelector(state => state.search.mobileSearchState)
    const foundShops = useAppSelector(state => state.search.foundShops)
    const dispatch = useAppDispatch()
    return (
        mobileSearchState
            ? <Div
                width={'100%'}
                height={'100%'}
                position={'fixed'}
                left={'0'}
                top={'0'}
                backgroundColor={'#FFFF'}
                zIndex={100}
                padding={'20px'}
                overflowY={'auto'}
            >
                <Div
                    position={'absolute'}
                    top={'37px'}
                >
                    <StyledDefaultBtn
                        onClick={() => dispatch(setMobileSearchState(false))}
                    >
                        <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.75 7.48215H1.75" stroke="#303030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.875 13.6071L1.75 7.48215L7.875 1.35715" stroke="#303030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </StyledDefaultBtn>
                </Div>
                <Div
                    width={'90%'}
                    margin={'auto'}
                >
                    <InputSeach
                        width={'100%'}
                    />
                    <Flex
                        direction={'column'}
                        align={'center'}
                        mt={'16px'}
                    >
                        {foundShops.map((el) => {
                            return (
                                <StyledFoundShopsLink
                                    key={el.id}
                                    colorHover={'#FF654E'}
                                    fontWeight={'500'}
                                    fontSize={'14px'}
                                    backgroundColorHover={'#F5F2F2'}
                                    href={`/shops/${el.translit_shop_name}`}
                                    padding={'16px'}
                                >
                                    <Div
                                        mr={'16px'}
                                    >
                                        <img style={{ borderRadius: '14px' }} src={el.logo} />
                                    </Div>
                                    {el.name}
                                </StyledFoundShopsLink>
                            )
                        })}
                        {
                            foundShops.length == 0 ? (
                                <Div
                                    mt={'100px'}
                                >
                                    <EmptyBlock />
                                </Div>
                            ) : (
                                <ShowAllBtn />
                            )
                        }
                    </Flex>
                </Div>
            </Div>
            : <></>
    )
}

export default MobileSearch
