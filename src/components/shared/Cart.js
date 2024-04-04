import React, { useContext } from 'react';
//context
import { cartContext } from '../../context/CartContextProvider';
import { themContext } from '../../context/DarkModeContext';
//function
import { shorten } from '../../helpers/functions'
//icons
import trashIcon from "../../asset/icons/trash.svg"
//style 
import styles from "./Cart.module.css";
import "../../App.css"
const Cart = (props) => {
    const{DarkMode}=useContext(themContext);

    const { dispatch } = useContext(cartContext)

    const { image, price, title, quantity } = props.data
    
    return (
    <div className={DarkMode}>
        <div className={styles.container}>
            
            <img className={styles.productImage} src={image} alt='product' />
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1 ?
                        <button onClick={() => dispatch({ type: 'DECREASE', payload: props.data })}>-</button> :
                        <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: props.data })}>
                            <img src={trashIcon} alt='trash'  />
                        </button>

                }
                <button onClick={() => dispatch({ type: 'INCREASE', payload: props.data })} >+</button>


            </div>
            </div>
        </div>
    );
};

export default Cart;