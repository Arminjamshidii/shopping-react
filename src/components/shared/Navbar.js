import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//context
import { cartContext } from '../../context/CartContextProvider';
import { themContext } from '../../context/DarkModeContext';
//icon 
import shopIcon from "../../asset/icons/shopping.svg"
//styles
import styles from "./Navbar.module.css"
import "../../App.css"
// import themStyles from "../DarkModeContext.module.css"
 

const Navbar = () => {
    const { state } = useContext(cartContext);
    const{DarkMode,toggleThem}=useContext(themContext);
     
    
    return (
        <div className={`${styles.mainContainer} ${DarkMode}`} >
            
            <div className={styles.container}>
                <Link className={styles.productLink} to="/products">products</Link>
                <div className={styles.iconContainer}>
                    <Link to='/cart'><img src={shopIcon} alt='shop' /> </Link>
                    <span>{state.itemCounter}</span>
                </div>
                <div>
                <label className={styles.switch}>
                    {/* <button  onClick={()=> }>toggleThem</button> */}
    <input  type="checkbox" onChange={()=>toggleThem()}/>
    <span className={styles.slider}></span>
</label>

                </div>
            </div>
        </div>

    );
};

export default Navbar;
