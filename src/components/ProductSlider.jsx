import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductSlider = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='slider'>
            <Slider {...settings}>
                {images.map((item) => (
                    <div
                        className='slide'
                        key={item}
                    >
                        <img
                            src={item}
                            alt={item}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};
export default ProductSlider;
