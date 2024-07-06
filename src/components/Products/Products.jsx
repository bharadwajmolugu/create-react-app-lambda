import React from 'react';
import EachProduct from './EachProduct';
const Products=(props)=>{
    const {products}=props;
    const productData=products.map((product)=><EachProduct product={product}/>)
    console.log(productData)
    return (
        <div>
            <div>
                <h2>Products</h2>
                {productData}
            </div>
        </div>
    )
}

export default Products;