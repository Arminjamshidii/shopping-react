import React,{useState,useEffect, createContext} from 'react';
//api
import { getProducts } from '../services/api';

export const ProductsContext=createContext()

const ProductContextProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    
    //fetch data when component mounts
    
    useEffect(()=>{
        const fetchApi=async()=>{
            setProducts(await getProducts())
        }
        fetchApi();
    },[])
        
    
        
    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductContextProvider;