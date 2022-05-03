import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//Fetch Dispatch
import { fetchProducts } from "../redux/products/productsAction";

//Components
import ProductCard from "./shared/ProductCard";
import Loader from "./shared/Loader";

const ShopPage = () => {
  const productsState = useSelector((state) => state.productsState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!productsState.products.length) dispatch(fetchProducts());
  }, []);

  return (
    <div className="container">
      <div className={!productsState.loading ? "shop-page" : ""}>
        {productsState.loading ? (
          <Loader />
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
