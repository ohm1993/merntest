import React, { createContext, useEffect, useState } from 'react';
import { ApiService } from '../services/product.service';
export const ProductsContext = createContext()

const ProductsContextProvider = ({children}) => {
    
    const [products,setProducts] = useState([]);

    const fetchMyData = async  () => {
        const data = await ApiService.getProducts(setProducts)
        setProducts(data)
    }

    useEffect(()=>{
        fetchMyData()
    },[])

    return ( 
        <ProductsContext.Provider value={{products}} >
            { children }
        </ProductsContext.Provider>
     );
}
 
export default ProductsContextProvider;