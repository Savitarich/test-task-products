import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ name, image, id }) => {
    return (
        <div className='product__card'>
            <img
                src={image}
                alt={name}
                width='240'
            />
            <h3>{name}</h3>
            <button>
                <Link to={`product/${id}`}>ПОДРОБНЕЕ</Link>
            </button>
        </div>
    );
};
export default ProductItem;
