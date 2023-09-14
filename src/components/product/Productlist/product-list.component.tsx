import React from 'react';

import {ProductModel} from "../../../../product.model";
import ProductCard from "../card/product-card.component";

interface ProductListProps {
    products: ProductModel[] | undefined | null
}

const ProductList: React.FC<ProductListProps> = ({products}) =>  {
    return (
        <div>
            {products && products.map((item) => (
                <ProductCard key={item?.id} title={item?.title} image={item?.image} price={item?.price} description={item?.description} />
            ))}
        </div>
    );
}

export default ProductList;