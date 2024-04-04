import React, { useContext } from 'react';
//components
import ProductItem from './shared/ProductItem';

//context
import { ProductsContext } from '../context/ProductContextProvider';
import { themContext } from '../context/DarkModeContext';

// Style
import styles from "./Store.module.css";
import "../App.css"


const Store = () => {
    const products = useContext(ProductsContext)
    const{DarkMode}=useContext(themContext);
    return (
        <div className={`${styles.container} ${DarkMode}`}>
            {
                products.map(product => <ProductItem key={product.id} productData={product} />)
            }
        </div>
    );
};

export default Store;