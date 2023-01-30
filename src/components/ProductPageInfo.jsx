import React, { useEffect, useState } from "react";
import axios from "axios";

import ProductSlider from "./ProductSlider";

const ProductPageInfo = ({ images, title, price, description, sizes }) => {
    const [sizesAvailable, setSizesAvailable] = useState([]);
    const [selectedSize, setSelectedSize] = useState(0);

    console.log(sizesAvailable);

    useEffect(() => {
        axios
            .get(`https://63bd66d518bc301c0266259f.mockapi.io/sizes`)
            .then((res) => {
                const sizesAvailableSub = [];
                sizes.forEach((elem) => {
                    res.data.forEach((item) => {
                        if (elem === item.id) {
                            sizesAvailableSub.push(item);
                        }
                    });
                });
                setSizesAvailable(sizesAvailableSub);
            });
    }, [sizes]);

    return (
        <div className='product__info'>
            <ProductSlider images={images}></ProductSlider>
            <div className='product__info-text'>
                <h3>{title}</h3>
                <p>Цена: {price}</p>
                <p>{description}</p>
                <div className='product__info-sizes'>
                    {sizes.length ? (
                        sizesAvailable.map((elem, index) => (
                            <button
                                key={elem.id}
                                className={
                                    index === selectedSize
                                        ? "button_active"
                                        : "button"
                                }
                                onClick={() => setSelectedSize(index)}
                            >
                                {elem.label}
                            </button>
                        ))
                    ) : (
                        <p>Товар закончился :(</p>
                    )}
                </div>
            </div>
        </div>
    );
};
export default ProductPageInfo;
