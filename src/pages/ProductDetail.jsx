import {useParams} from "react-router-dom";
import products from "../data/products.json";

export default function ProductDetail(){
    const {id} = useParams();

    const product = products.find(
        (p)=> p.id ===Number(id)
    );

    if (!product) {
  return <p>Product not found</p>;
}
    return (
        <div className="grid md:grid-cols-2 gap-10">
    <img
      src={product.image}
      alt={product.title}
      className="w-full h-80 object-cover"
    />

    <div>
      <h1 className="text-3xl font-bold">{product.title}</h1>

      <p className="text-gray-500 mt-2">{product.category}</p>

      <p className="text-2xl mt-4 font-semibold">
        ₹{product.price}
      </p>

      <p className="mt-4 text-gray-600">
        This is a high-quality product available at the best price.
      </p>

      <button className="mt-6 bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
        Add to Cart
      </button>
    </div>
  </div>
    )
}