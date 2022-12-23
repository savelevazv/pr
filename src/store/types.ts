export type Shop = {
    id: number
    name: string
    category: string
    logo: string
    translit_shop_name: string
    letter: string
}

export interface shopsSliceState {
    shops: Shop[]
    isLoading: boolean
    error: string
}

export interface searchSliceState {
    searchValue: string
    foundShops: Shop[]
}