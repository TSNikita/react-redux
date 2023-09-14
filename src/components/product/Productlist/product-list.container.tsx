import React, {useCallback, useState} from 'react';

import ProductList from "./product-list.component";
import useProducts from "../../../hooks/products.hook";
import {ClipLoader} from "react-spinners";

import styled from "styled-components";

import ProductCreationContainer from "../../ProductCreationContainer";

const LoderStyle = styled.div`
  position: absolute;
  top: 350px;
  left: 47%;
`

const  ProductListContainer = () => {
    const { products, loading, error } = useProducts();
    console.log('product', products)

    return (
        <div>
            <h1>Products</h1>
            {error && <div>{error}</div>}
            {loading &&
                <LoderStyle>
                    <ClipLoader size={100} color="#36d7b7" />
                </LoderStyle>}
           <ProductList products={products} />
            <ProductCreationContainer />
        </div>
    );
}

export default ProductListContainer;