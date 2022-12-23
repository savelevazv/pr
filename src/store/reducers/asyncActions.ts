import axios from 'axios'; 
import { RootDispatch } from '..';
import { Shop } from '../types';
import { shopsFetching, shopsFetchingError, shopsFetchingSuccess } from './shopsReducer';

export const fetchShops = () => async (dispatch: RootDispatch) => {
    try {
        dispatch(shopsFetching())
        const shopResponce = await axios.get<Shop[]>('https://63870765e399d2e473f2752a.mockapi.io/shops')
        dispatch(shopsFetchingSuccess(shopResponce.data))
    } catch (e) {
        if (e instanceof Error) {
            dispatch(shopsFetchingError(e.message))
        }
    }
}

