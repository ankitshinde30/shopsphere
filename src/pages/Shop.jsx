import { useState } from "react";
import products from "../data/products.json";
import ProductCard from "../components/product/ProductCard";

export default function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "All" || product.category === category;

    const matchesPrice =
      priceRange === "All" ||
      (priceRange === "low" && product.price < 1000) ||
      (priceRange === "mid" &&
        product.price >= 1000 &&
        product.price <= 3000) ||
      (priceRange === "high" && product.price > 3000);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Shop 🛍️</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search Products..."
        className="border p-2 w-full mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Category Buttons */}
      <div className="flex gap-4 mb-4">
         <span className="font-semibold">Category:</span>
        {["All", "Shoes", "Clothing", "Electronics"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-3 py-1 rounded transition duration-200 hover:bg-gray-300 ${
              category === cat ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Price Range */}
      <div className="flex gap-4 mb-4">
         <span className="font-semibold">Price:</span>
        {[
          { label: "All", value: "All" },
          { label: "Under ₹1000", value: "low" },
          { label: "₹1000 - ₹3000", value: "mid" },
          { label: "Above ₹3000", value: "high" },
        ].map((item) => (
          <button
            key={item.value}
            onClick={() => setPriceRange(item.value)}
            className={`px-3 py-1 rounded border transition duration-200 hover:bg-blue-700
        ${
          priceRange === item.value
            ? "bg-yellow-600 text-white"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found 😢
          </p>
        )}
      </div>
    </div>
  );
}
