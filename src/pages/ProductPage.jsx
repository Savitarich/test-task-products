import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import ProductPageInfo from "../components/ProductPageInfo";

const Product = () => {
    const productId = useParams().id;
    const navigate = useNavigate();

    const [isProductsLoaded, setIsProductLoaded] = useState(false);
    const [productInfo, setProductInfo] = useState({});
    const [selectedColor, setSelectedColor] = useState(0);

    useEffect(() => {
        setIsProductLoaded(false);

        axios
            .get(
                `https://63bd66d518bc301c0266259f.mockapi.io/products?id=${productId}`
            )
            .then((res) => {
                setProductInfo(res.data[0]);
                setIsProductLoaded(true);
            });
    }, [productId]);

    return (
        <>
            <div className='container'>
                <button
                    className='button-navigate'
                    onClick={() => navigate(-1)}
                >
                    НАЗАД
                </button>
                <div className='product__page-row'>
                    <div className='product__page-colors'>
                        {!isProductsLoaded ? (
                            <></>
                        ) : (
                            productInfo.colors.map((elem, index) => (
                                <button
                                    className={
                                        index === selectedColor
                                            ? "button_active"
                                            : "button"
                                    }
                                    key={elem.id}
                                    onClick={() => setSelectedColor(index)}
                                >
                                    {elem.name}
                                </button>
                            ))
                        )}
                    </div>
                    {!isProductsLoaded ? (
                        <></>
                    ) : (
                        <ProductPageInfo
                            title={productInfo.name}
                            {...productInfo.colors[selectedColor]}
                        ></ProductPageInfo>
                    )}
                </div>
            </div>
        </>
    );
};
export default Product;
