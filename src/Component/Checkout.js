import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "../StateProvider";
import Checkoutproduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="amazon__ads"
          src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
          alt="amazon_ads"
        />
        <div>
          <h2 className="shopping_title"> Your Shopping Basket</h2>

          {basket.map((item) => (
            <Checkoutproduct
              id={item.id}
              image={item.image}
              title={item.title}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
