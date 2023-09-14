import React from 'react';

import useProducts from "../hooks/products.hook";
import {useParams} from "react-router-dom";

import ProductDescriptionItem from "../components/ProductDescriptionOne/ProductDescriptionItem";


function OneProductContainer() {
const {title} = useParams()
const {products} = useProducts()
const data = products.find((el) => el.title === title)

    return (
        <div>
            <ProductDescriptionItem productInfo={data} />
        </div>
    );
}

export default OneProductContainer;