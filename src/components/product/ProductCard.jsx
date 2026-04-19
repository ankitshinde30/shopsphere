import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";

export default function ProductCard({ product }) {
  const { dispatch: cartDispatch } = useContext(CartContext);
  const { wishlist, dispatch: wishlistDispatch } = useContext(WishlistContext);
  const isInWishlist = wishlist.find((item) => item.id === product.id);

  return (
    <Link to={`/product/${product.id}`}>
      <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-cover"
        />

        <h2 className="mt-2 font-semibold">{product.title}</h2>

        <p className="text-gray-500">{product.category}</p>

        <p className="text-gray-600">₹{product.price}</p>

        <button
          onClick={() => dispatch({ type: "ADD", payload: product })}
          className="mt-2 w-full bg-black text-white py-1 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>

        <button className="mt-2 w-full bg-blue-500 text-white py-1 rounded hover:bg-blue-700 transition">
          View Details
        </button>

        <button
          onClick={() =>
            dispatch({
              type: isInWishlist ? "REMOVE" : "ADD",
              payload: isInWishlist ? product.id : product,
            })
          }
          className="mt-2 w-full bg-pink-500 text-white py-1 rounded hover:bg-pink-600"
        >
          {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist ❤️"}
        </button>
      </div>
    </Link>
  );
}
