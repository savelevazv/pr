import React, { FC, useState } from "react";
import { Div } from "../styles/Div.styled";
import { Flex } from "../styles/Flex.styled";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RoundBtn } from "./Buttons/RoundBtn";
import { Link } from "../Link";
import { StyledH2 } from "../styles/Fonts.styled";

interface CarouselProps {
    src?: string
    to: string
    id?: number
}

type CarouselContentArray = Array<CarouselProps>

const carouselContent: CarouselContentArray = [
    {
        id: 1,
        src: '/img/1.jpg',
        to: '/'
    },
    {
        id: 2,
        src: '/img/2.jpg',
        to: '/'
    },
    {
        id: 3,
        src: '/img/3.jpg',
        to: '/'
    }
]

export const BestPromotions: FC = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 5000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <RoundBtn
            icon={
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.06586 18.7501C5.06615 18.4186 5.19804 18.1009 5.43252 17.8667L11.8259 11.4734C12.0194 11.2799 12.1729 11.0502 12.2776 10.7974C12.3823 10.5446 12.4362 10.2737 12.4362 10.0001C12.4362 9.72642 12.3823 9.45547 12.2776 9.20267C12.1729 8.94987 12.0194 8.72018 11.8259 8.52672L5.44086 2.13755C5.21316 1.9018 5.08717 1.58605 5.09001 1.2583C5.09286 0.930557 5.22432 0.617042 5.45608 0.385282C5.68784 0.153521 6.00136 0.0220603 6.32911 0.0192123C6.65685 0.0163643 6.9726 0.142357 7.20836 0.370055L13.5934 6.75422C14.4519 7.61444 14.9341 8.78013 14.9341 9.99547C14.9341 11.2108 14.4519 12.3765 13.5934 13.2367L7.20002 19.6301C7.02546 19.8047 6.80306 19.9238 6.5609 19.9722C6.31873 20.0206 6.06766 19.9962 5.83935 19.9021C5.61104 19.8079 5.41573 19.6483 5.27807 19.4432C5.14041 19.2382 5.06657 18.997 5.06586 18.7501V18.7501Z" fill="black" />
                </svg>
            }
            backgroundColor={'#FFFFFF'}
            boxShadow={'0px 1px 7px rgb(0 0 0 / 9%);'}
            zIndex={1}
            position={'absolute'}
            bottom={'-70px'}
            right={'0'}
            hoverOpacity={0.7}
        />,
        prevArrow: <RoundBtn
            icon={
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.9342 1.25417C14.9339 1.58558 14.802 1.90331 14.5675 2.1375L8.17418 8.53084C7.98067 8.7243 7.82716 8.95399 7.72243 9.20679C7.6177 9.45958 7.56379 9.73054 7.56379 10.0042C7.56379 10.2778 7.6177 10.5488 7.72243 10.8016C7.82716 11.0544 7.98067 11.284 8.17418 11.4775L14.5592 17.8625C14.7869 18.0983 14.9129 18.414 14.91 18.7418C14.9072 19.0695 14.7757 19.383 14.544 19.6148C14.3122 19.8465 13.9987 19.978 13.6709 19.9808C13.3432 19.9837 13.0274 19.8577 12.7917 19.63L6.40668 13.25C5.54815 12.3898 5.06598 11.2241 5.06598 10.0088C5.06598 8.79341 5.54815 7.62772 6.40668 6.7675L12.8 0.370002C12.9748 0.195072 13.1976 0.0759295 13.4402 0.027651C13.6827 -0.0206274 13.9341 0.00412773 14.1626 0.098784C14.3911 0.19344 14.5864 0.353743 14.7237 0.559409C14.861 0.765075 14.9343 1.00686 14.9342 1.25417V1.25417Z" fill="black" />
                </svg>
            }
            backgroundColor={'#FFFFFF'}
            boxShadow={'0px 1px 7px rgb(0 0 0 / 9%);'}
            zIndex={1}
            position={'absolute'}
            bottom={'-70px'}
            right={'60px'}
            hoverOpacity={0.7}
        />,

    };

    return (
        <Div
            mb={'100px'}
            position={'relative'}
        >
            <StyledH2
                mb={'32px'}
            >
                Лучшие акции
            </StyledH2>
            <Slider {...settings}>
                {carouselContent.map((item, i) => {
                    return (
                        <Link
                            to={item.to}
                            key={item.id}
                        >
                            <img
                                src={item.src}
                            />
                        </Link>


                    )
                })}
            </Slider>
        </Div>
    )
}