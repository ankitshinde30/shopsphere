import products from "../data/products.json";
import ProductCard from "../components/product/ProductCard";

export default function Home() {
  return (
    <div>
      {/* 🔥 Hero Section */}
      <section className="bg-gray-100 p-10 text-center rounded-lg">
        <h1 className="text-4xl font-bold">Welcome to ShopSphere</h1>
        <p className="mt-2 text-gray-600">
          Your one-stop shop for everything 🛍️
        </p>
      </section>

      {/* 🔥 Featured Products */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
