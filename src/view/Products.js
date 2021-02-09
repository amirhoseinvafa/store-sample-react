import React from "react";

import img1 from "../assets/img/1.jpg";
import img2 from "../assets/img/2.png";

const Products = ({ products, addToCart }) => {
  return (
    <>
      <div className="products rounded">
        {products.map((item) => (
          <div className="product" key={item.id}>
            <div className="product__image">
              <img
                src={item.id === 1 ? img2 : img1}
                alt={item.img.url}
                width="200"
              />
            </div>
            <h2 className="product__title text-center mt-2">{item.name}</h2>
            <h5 className="product__price text-center mt-4 text-success">
              {item.price} تومان
            </h5>
            <div className="text-center mt-4">
              <button
                className="btn btn-primary btn-block"
                onClick={() => addToCart(item.id)}
              >
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
