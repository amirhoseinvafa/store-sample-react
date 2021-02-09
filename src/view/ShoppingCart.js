import React from "react";

const ShoppingCart = ({ cart, removeFromCart }) => {
  let totalPrice = 0;
  cart.items.forEach((item) => {
    totalPrice += item.total;
  });
  return (
    <>
      <div className="card text-center">
        <table className="table">
          <thead className="thead">
            <tr>
              <th className="cart__title" colspan="3">
                سبد خرید
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.items.length !== 0 ? (
              cart.items.map((item) => (
                <tr className="cart__items">
                  <td className=" pr-3">{item.name}</td>
                  <td className="text-right">{item.qty}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <small>محصولی در سبد خرید وجود ندارد</small>
            )}
          </tbody>
        </table>
        <div className="cart__total-price m-2">
          <small>مجموع: {totalPrice} تومان</small>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
