import React, { useContext } from 'react';
import ProductItem from './product-item.component';
import { ProductsContext } from '../contexts/ProductsContext';

const ProductsList = () => {
    const { products} = useContext(ProductsContext)

    return ( 
        <div className="row">
            <div className="row">
                <div className="col-sm-8">
                    <div className="py-3">
                        {products.length} Products
                    </div>
                </div>
            </div>
            <div>
                {
                    products.map(product => (
                        <ProductItem key={product._id} product={product}/>
                    ))
                }
            </div>
        </div>
     );
}
 
export default ProductsList;
