import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//components
import Cart from './shared/Cart';
import { notify } from '../helpers/Tostify';

//context
import { cartContext } from '../context/CartContextProvider';
import { themContext } from '../context/DarkModeContext';
// Style
import styles from "./ShopCart.module.css";
import "../App.css"

const ShopCart = () => {
    const { DarkMode } = useContext(themContext);
    const { state, dispatch } = useContext(cartContext);
    state.checkedout && notify()
    return (
        <div className={DarkMode}>
            <div className={styles.container}>
                <div className={styles.cartContainer}>
                    {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
                </div>
                {state.itemCounter > 0 && <div className={styles.payments}>
                        <p><span>Total item:</span> {state.itemCounter} </p>
                        <p><span>Total Payments:</span> {state.total} </p>
                        <div className={styles.buttonContainer}>
                            <button className={styles.clear} onClick={() => dispatch({ type: "CLEAR" })}>Clear All</button>
                            <button className={styles.checkout} onClick={() => {
                                dispatch({ type: "CHECKOUT" });


                            }}>Check Out</button>


                        </div>
                    </div>

                }
                {
                    state.checkedout && <div className={styles.complete}><h3>
                        checked out successfully</h3>


                        <Link to='./products'>buy more</Link>
                    </div>
                }
                {
                    !state.checkedout && state.itemCounter === 0 && <div className={styles.complete}><h3>
                        Want you buy ?</h3>


                        <Link to='./products'>Go To Shop</Link>
                    </div>
                }
                <ToastContainer />
            </div>
        </div>
    );
};

export default ShopCart;






