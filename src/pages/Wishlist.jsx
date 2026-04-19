import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

export default function Wishlist() {
  const { wishlist } = useContext(WishlistContext);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Wishlist ❤️</h1>

      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        wishlist.map((item) => (
          <div key={item.id} className="border p-4 mb-2">
            <h2>{item.title}</h2>
            <p>₹{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}