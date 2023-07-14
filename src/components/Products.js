import React from 'react';
import Product from "@/components/Product";
import {observer} from "mobx-react-lite";

const Products = ({ products }) => {
    return <div className="products__items">
        {products.map(product => <Product key={product.id} product={product} />)}
    </div>;
};

export default observer(Products);