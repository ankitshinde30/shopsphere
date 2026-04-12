import { createContext, useReducer } from "react";

export const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const existing = state.find((item) => item.id === action.payload.id);

      if (existing) {
        return state.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }

      return [...state, { ...action.payload, qty: 1 }];

    case "REMOVE":
      return state.filter((_, index) => index !== action.payload);

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
