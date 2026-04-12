import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Cart 🛒</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="border p-4 mb-2">
            <h2>{item.title}</h2>
            <p>₹{item.price}</p>
            <p>Qty: {item.qty}</p>

            <button
              onClick={() => dispatch({ type: "REMOVE", payload: index })}
              className="bg-red-500 text-white px-2 py-1 mt-2"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}
