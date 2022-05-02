import React from "react";
import { Link } from "react-router-dom";

//Styles
import styles from "./ProductCard.module.css";

//Functioins
import { shortanWord } from "../../helper/function";

const ProductCard = ({ data }) => {
  return (
    <div className={styles.product}>
      <img src={data.image} alt="product" className={styles.image} />
      <h3 className={styles.title}>{shortanWord(data.title)}</h3>
      <p className={styles.price}>{data.price}$</p>
      <div className={styles.cardfooter}>
        <Link to={`/products/${data.id}`}>details</Link>
        <div className={styles.cardbutton}>
          {/* {quantityItem(state, productsData.id) === 1 && (
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productsData })
              }
              className={styles.lettelbtn}
            >
              <img src={trash} alt="trash" style={{ width: "20px" }} />
            </button>
          )}
          {quantityItem(state, productsData.id) > 1 && (
            <button
              className={styles.lettelbtn}
              onClick={() =>
                dispatch({ type: "DECREASE", payload: productsData })
              }
            >
              -
            </button>
          )}
          {quantityItem(state, productsData.id) > 0 && (
            <span className={styles.quantity}>
              {quantityItem(state, productsData.id)}
            </span>
          )}
          {isInCart(state, productsData.id) ? (
            <button
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productsData })
              }
              className={styles.lettelbtn}
            >
              +
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productsData })
              }
              className={styles.additem}
            >
              Add to cart
            </button>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
