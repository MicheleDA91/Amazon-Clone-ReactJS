import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider";

function Checkoutproduct({ id, title, image, rating, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutproduct">
      <img className="checkoutproduct__image" src={image} />

      <div className="checkoutproduct__info">
        <p className="checkoutprodutc__title">{title}</p>
        <p className="checkoutprodutc__price">
          €<strong>{price}</strong>
        </p>
        <p className="checkoutproduct__rating">
          {" "}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </p>

        <button className="checkoutbutton" onClick={removeFromBasket}>
          {" "}
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default Checkoutproduct;
