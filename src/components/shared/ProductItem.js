import React, { useContext } from 'react';
import { shorten, isInCart, quantityCount } from '../../helpers/functions';
import { Link } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faTrashCan  } from '@fortawesome/free-solid-svg-icons';

//context
import { cartContext } from '../../context/CartContextProvider';
import { themContext } from '../../context/DarkModeContext';
//icons
import trashicon from '../../asset/icons/trash.svg'
//style
import styles from "./ProductItem.module.css"



const ProductItem = ({ productData }) => {
    const { state, dispatch } = useContext(cartContext);
    const { DarkMode } = useContext(themContext);

    return (
        <div className={styles.container}>
            <div className={DarkMode}>

                <img className={styles.cardImage} src={productData.image} alt="product" />
                <h3>{shorten(productData.title)}</h3>
                <p>{productData.price} $</p>
                <div className={styles.linkContainer}>
                    <Link to={`/products/${productData.id}`}>Details</Link>
                    <div className={styles.buttonContainer}>
                        {
                            quantityCount(state, productData.id) > 1 && <button className={styles.smallButton} onClick={
                                () => dispatch({ type: "DECREASE", payload: productData })
                            }>-</button>


                        }
                        {quantityCount(state, productData.id) > 0 && <span className={styles.counter}>
                            {quantityCount(state, productData.id)}
                        </span>}
                        {
                            quantityCount(state, productData.id) === 1 && <button className={styles.smallButton} onClick={
                                () => dispatch({ type: "REMOVE_ITEM", payload: productData })}>
                                <img src={trashicon} alt='trash' /></button>

                        }
                        {
                            isInCart(state, productData.id) ?
                                <button className={styles.smallButton} onClick={() => dispatch({ type: "INCREASE", payload: productData })}>+</button> :
                                <button className={styles.addToCart} onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}>Add to Cart</button>
                        }


                    </div>
                </div>
            </div>
        </div>
    );
};


export default ProductItem;
