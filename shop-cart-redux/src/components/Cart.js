import React from "react";
import { Link } from "react-router-dom";
import {useSelector , useDispatch} from "react-redux"; 

//components
import CartTable from "./shared/CartTable";

//Dispatch Actions
import {checkout , clear} from "../redux/cart/cartAction";

//styles
import styles from "./Cart.module.css";

const Cart = () => {
  const state = useSelector(state => state.cartState);
  const dispatch = useDispatch();
  
  return (
    <div className={styles.cart}>
      <div className={styles.cartrow}>
        {state.selectedItem.map((item) => (
          <CartTable key={item.id} productData={item} />
        ))}
      </div>
      {state.itemCounter > 0 && (
        <div className={styles.cartpayment}>
          <p>Total item : {state.itemCounter}</p>
          <p>Total price : {state.total}</p>
          <div className={styles.cartbutton}>
            <button className={styles.checkout} onClick={() => dispatch(checkout())}>
              Checkout
            </button>
            <button className={styles.clear} onClick={() => dispatch(clear())}>Clear</button>
          </div>
        </div>
      )}
      {state.checkout && (
        <div>
          <h3>Checkout is seccussfoly</h3>
          <Link to="/products">Buy more</Link>
        </div>
      )}
      {!state.checkout && state.itemCounter === 0 && (
        <div>
          <h3>Cart is clear</h3>
          <Link to="products">Go to shop</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
