import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//Fetch Dispatch
import { fetchProducts } from "../redux/products/productsAction";

//Components
import ProductCard from "./shared/ProductCard";

const ShopPage = () => {
  const productsState = useSelector((state) => state.productsState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log(productsState.products);

  return (
    <div className="container">
      <div className="shop-page">
        {productsState.loading ? (
          <h2>Loading ...</h2>
        ) : productsState.error ? (
          <h2>Warning</h2>
        ) : (
          productsState.products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default ShopPage;
