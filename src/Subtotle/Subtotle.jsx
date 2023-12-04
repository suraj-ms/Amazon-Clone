import React from "react";
import "./Subtotle.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../Contexts/StateProvider";
import { getBasketTotal } from "../Subtotle/Reducer.jsx";
function Subtotle() {

  const [{basket}, dispatch] = useStateValue();

  

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} item): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotle;
