import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//icon
import shopping from "../../assets/image/shop.svg";

//styles
import styles from "./Navbar.module.css";

const Navbar = () => {
  const state = useSelector(state => state.cartState);
  
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/products" className={styles.link}>
          Products
        </Link>
        <div className={styles.rightnavbar}>
          <Link to="/cart">
            <img src={shopping} alt="shop" />
          </Link>
          <span>{state.itemCounter}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
