import React from "react";
import { useDispatch } from "react-redux";

//function
import { shortanWord } from "../../helper/function";

//Dispatch Action
import { increase , decrease , removeItem } from "../../redux/cart/cartAction";

//icon
import trashIcon from "../../assets/image/trash.svg";

//styles
import styles from "./CartTable.module.css";

const CartTable = (props) => {
  const { image, title, quantity, price } = props.productData;
  const dispatch = useDispatch()

  return (
    <div className={styles.carttable}>
      <img src={image} alt="product" className={styles.image} />
        <h3 className={styles.title}>{shortanWord(title)}</h3>
        <p className={styles.price}>{price}$</p>
      <div>
        <span className={styles.quantity}>{quantity}</span>
      </div>
      <div className={styles.btns}>
        {quantity > 1 ? (
          <button
            onClick={() =>
              dispatch(decrease(props.productData))
            }
          >
            -
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch(removeItem(props.productData))
            }
          >
            <img src={trashIcon} alt="trsh" style={{ width: "20px" }} />
          </button>
        )}
        <button
          onClick={() =>
            dispatch(increase(props.productData))
          }
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartTable;
