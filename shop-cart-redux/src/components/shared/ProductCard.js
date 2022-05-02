import React from "react";
import { useSelector , useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//Styles
import styles from "./ProductCard.module.css";

//Functioins
import { shortanWord , isInCart , quantityItem } from "../../helper/function";

//Redux Actions
import { addItem , removeItem , increase , decrease } from "../../redux/cart/cartAction";

//Icon
import trash from "../../assets/image/trash.svg"

const ProductCard = ({ data }) => {

  const state = useSelector(state => state.cartState);
  const dispatch = useDispatch()

  return (
    <div className={styles.product}>
      <img src={data.image} alt="product" className={styles.image} />
      <h3 className={styles.title}>{shortanWord(data.title)}</h3>
      <p className={styles.price}>{data.price}$</p>
      <div className={styles.cardfooter}>
        <Link to={`/products/${data.id}`}>details</Link>
        <div className={styles.cardbutton}>
          {quantityItem(state, data.id) === 1 && (
            <button
              onClick={() =>
                dispatch(dispatch(removeItem(data)))
              }
              className={styles.lettelbtn}
            >
              <img src={trash} alt="trash" style={{ width: "20px" }} />
            </button>
          )}
          {quantityItem(state, data.id) > 1 && (
            <button
              className={styles.lettelbtn}
              onClick={() =>
                dispatch(decrease(data))
              }
            >
              -
            </button>
          )}
          {quantityItem(state, data.id) > 0 && (
            <span className={styles.quantity}>
              {quantityItem(state, data.id)}
            </span>
          )}
          {isInCart(state, data.id) ? (
            <button
              onClick={() =>
                dispatch(increase((data)))
              }
              className={styles.lettelbtn}
            >
              +
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch(addItem(data))
              }
              className={styles.additem}
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
