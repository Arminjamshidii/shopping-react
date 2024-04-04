import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

//context
import { ProductsContext } from '../context/ProductContextProvider';
import { themContext } from '../context/DarkModeContext';



//styles
import styles from "./ProductDetails.module.css";
import "../App.css"



const ProductDetail = () => {

    const { id } = useParams()
    const data = useContext(ProductsContext);
    const{DarkMode}=useContext(themContext);
    


    const product = data[id - 1]
    const { image, title, price, description, category, rating: { rate } } = product
    return (
        <div className={`${styles.container} ${DarkMode}`}>
        {/* <div className={styles.container}> */}
            <img className={styles.image} src={image} alt="product" />
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}><span>Category:</span> {category}</p>
                <div className={styles.buttonContainer}>
                    <div className={styles.priceAndRate}>
                        <span className={styles.price}>{price} $</span>
                        <span>{rate}<FontAwesomeIcon className={styles.rate} icon={faStar} /></span>
                    </div>

                    <Link to="/products">Back to Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
