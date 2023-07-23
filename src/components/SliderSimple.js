import React, { useEffect } from 'react'
import Swiper from 'swiper'

export default function SliderSimple() {
    useEffect(() => {
        new Swiper('.my-swiper', {
            loop: true,
            slidesPerView: "3",
        })
    }, [])
    return (
        <div className='w-2/4 mx-auto mt-28 border border-teal-700 p-20'>
            <swiper-container
                className="my-swiper"
            >
                <swiper-slide>
                    <img src="https://cdn.pixabay.com/photo/2023/06/27/10/51/man-8091933_1280.jpg" alt="" />
                </swiper-slide>
                <swiper-slide>
                    <img src="https://cdn.pixabay.com/photo/2023/04/10/06/32/tulip-7912886_1280.jpg" alt="" />
                </swiper-slide>
                <swiper-slide>
                    <img src="https://cdn.pixabay.com/photo/2023/04/26/03/48/drink-7951411_1280.jpg" alt="" />
                </swiper-slide>
                <swiper-slide>
                    <img src="https://cdn.pixabay.com/photo/2023/06/23/08/22/flower-8082986_1280.jpg" alt="" />
                </swiper-slide>
            </swiper-container>
        </div>
    )
}
