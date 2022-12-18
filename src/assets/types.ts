import React, { ReactNode } from "react";

export type PromocodeProps = {
    id?: number
    discount: string
    recommendation: boolean
    title: string
    shop_name?: string
    promocode: string
    usage: number
    time: number
    logo_Url?: string
    logo_Alt?: string
    date_end?: string
}