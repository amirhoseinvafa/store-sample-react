import { useState } from "react";

import Products from "./view/Products";
import ShoppingCart from "./view/ShoppingCart";
import { products } from "./initial-data/InitialData";
import "./App.css";

function App() {
  const [cart, setCart] = useState({
    items: [],
    total: 0,
  });

  const addToCart = (id) => {
    const product = products[id - 1];
    let existingProduct = false;

    const newCartItems = cart.items.reduce((state, item) => {
      if (product.name === item.name) {
        existingProduct = true;

        const newItem = {
          ...item,
          qty: item.qty + 1,
          total: (item.qty + 1) * item.price,
        };

        return [...state, newItem];
      }

      return [...state, item];
    }, []);

    if (!existingProduct) {
      newCartItems.push({
        ...product,
        qty: 1,
        total: product.price,
      });
    }
    setCart({
      ...cart,
      items: newCartItems,
    });
  };

  const removeFromCart = (productId) => {
    let newCartItems = cart.items.reduce((state, item) => {
      if (item.id === productId) {
        const newItem = {
          ...item,
          qty: item.qty - 1,
          total: (item.qty - 1) * item.price,
        };
        if (newItem.qty > 0) {
          return [...state, newItem];
        } else {
          return state;
        }
      }
      return [...state, item];
    }, []);

    setCart({
      ...cart,
      items: newCartItems,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Products products={products} addToCart={addToCart} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
        </div>
      </div>
    </div>
  );
}

export default App;
