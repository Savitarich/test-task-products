import React from "react";

import ProductList from "../components/ProductList";

const Home = () => {
    return (
        <>
            <div className='container'>
                <div className='home'>
                    <h1>Список товаров</h1>
                    <ProductList></ProductList>
                </div>
            </div>
        </>
    );
};
export default Home;
