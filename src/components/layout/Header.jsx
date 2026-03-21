import { Link, NavLink } from "react-router-dom";

export default function Header() {
    const navLink=({ isActive }) =>
            isActive ? "text-red-500 font-semibold" : "text-black";

    
  return (
    <header className="flex justify-between items-center p-4 shadow-md">
      <h1 className="text-xl font-bold">
        <Link to="/">ShopSphere</Link>
      </h1>

      <nav className="flex gap-6">
        <NavLink
          to="/"
          className={navLink}
        >
          Home
        </NavLink>

        <NavLink
          to="/shop"
          className={navLink}
        >
          Shop
        </NavLink>

        <NavLink
          to="/cart"
          className={navLink}
        >
          Cart
        </NavLink>

        <NavLink
          to="/wishlist"
          className={navLink}
        >
          Wishlist
        </NavLink>
      </nav>
    </header>
  );
}
