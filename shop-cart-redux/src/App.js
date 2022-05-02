import {Routes , Route} from "react-router-dom";
import { Provider } from "react-redux";

//Components
import ShopPage from "./components/ShopPage";

//Redux
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<ShopPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
