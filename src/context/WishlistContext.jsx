import { createContext, useReducer } from "react";

export const WishlistContext = createContext();

function wishlistReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const exists = state.find(item => item.id === action.payload.id);
      if (exists) return state;

      return [...state, action.payload];

    case "REMOVE":
      return state.filter(item => item.id !== action.payload);

    default:
      return state;
  }
}

export function WishlistProvider({ children }) {
  const [wishlist, dispatch] = useReducer(wishlistReducer, []);

  return (
    <WishlistContext.Provider value={{ wishlist, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
}