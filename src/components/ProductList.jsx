import React, { useState, useEffect } from "react";
import axios from "axios";

import ProductItem from "./ProductItem";

const ProductList = () => {
    const [isProductsLoaded, setIsProductLoaded] = useState(false);
    const [productList, serProductList] = useState([]);
    console.log(productList);

    useEffect(() => {
        setIsProductLoaded(false);

        axios
            .get("https://63bd66d518bc301c0266259f.mockapi.io/products")
            .then((res) => {
                serProductList(res.data);
                setIsProductLoaded(true);
            });
    }, []);

    return (
        <div className='product__list'>
            {!isProductsLoaded ? (
                <></>
            ) : (
                productList.map((elem) => (
                    <ProductItem
                        key={elem.id}
                        id={elem.id}
                        name={elem.name}
                        image={elem.colors[0].images[0]}
                    ></ProductItem>
                ))
            )}
        </div>
    );
};
export default ProductList;
