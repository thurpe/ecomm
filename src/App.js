import "./App.css";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddItem from "./components/AddItem";
import Cart from "./components/Cart";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/lib/integration/react";
import { createStore } from "redux";
import rootReducer from "./reducer/rootReducer";
import { Provider } from "react-redux";
import Footer from "./components/Footer";

function App() {
  const persistConfig = {
    key: "root",
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);

  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navbar />
          <BrowserRouter>
            <Switch>
              <Route path="/" component={Items} exact />
              <Route path="/addItem" component={AddItem} />
              <Route path="/cart" component={Cart} />
            </Switch>
          </BrowserRouter>
          <Footer />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
