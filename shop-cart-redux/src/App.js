import {Routes , Route , Navigate} from "react-router-dom";
import { Provider } from "react-redux";

//Components
import ShopPage from "./components/ShopPage";
import ProductsDetails from "./components/ProductsDetails";

//Redux
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/products" element={<ShopPage />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
        <Route path="/*" element={<Navigate to="/products" />} />
      </Routes>
    </Provider>
  );
}

export default App;
