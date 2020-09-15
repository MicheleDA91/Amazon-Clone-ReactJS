import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../Reducer";

function Subtotal() {
  // aggiunge gli oggetti al cestino
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This Order contains a gift
            </small>
          </>
        )}
        decimalscale={2}
        value={getBasketTotal(basket)}
        displayType="text"
        thousandSeparator={true}
        prefix={"€"}
      />
      <button className="subtotal__button"> Proceed with your order</button>
    </div>
  );
}

export default Subtotal;
