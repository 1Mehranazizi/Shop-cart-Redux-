import React from "react";
import {useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";

//styles
import styles from "./ProductsDetails.module.css";

const ProductsDetails = () => {
  const params = useParams()
  const id =params.id;
  const data = useSelector(state => state.productsState.products);
  const product = data[id - 1];
  const {price , title , image , description , category} = product;

  return (
    <div className={styles.details}>
      <img src={image} alt="product" className={styles.leftdetails} />
      <div className={styles.rightdetails}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <div className={styles.footerdetails}>
            <p>category : {category}</p>
            <span>{price} $</span>
          </div>
          <Link to="/products">Go to products</Link>
      </div>
    </div>
  );
};

export default ProductsDetails;
