import { useState } from "react";
// router dom imports
import { Link, NavLink } from "react-router-dom";
//  css import
import "./styles.css";
// material icon imports.
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
//component import.
import Cart from "../../pages/cart/Cart";
import useCart from "../../hooks/useCart";

// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Navbar = () => {
    const [open, setopen] = useState(false);
    const { cartItems } = useCart();

    return (
        <nav className="bg-white top-0 sticky z-50">
            <div
                id="wrapper"
                className="px-6 py-2 flex justify-between items-center mb-2 shadow-md h-16 "
            >
                <Link
                    to="/"
                    className="uppercase text-xl text-center font-semibold lg:text-2xl"
                >
                    Clothing Store
                </Link>
                <div
                    id="icons"
                    className="h-full flex items-center gap-4 lg:gap-6"
                >
                    <NavLink to="/search" className="hover:text-cyan-500">
                        <SearchOutlinedIcon />
                    </NavLink>
                    <NavLink to="/wishlist" className="hover:text-cyan-500">
                        <FavoriteBorderOutlinedIcon />
                    </NavLink>
                    <NavLink to="/profile" className="hover:text-cyan-500">
                        <Person2OutlinedIcon />
                    </NavLink>
                    <div
                        className="relative hover:text-cyan-500 hover:cursor-pointer"
                        onClick={() => setopen(!open)}
                    >
                        <span className="absolute bg-cyan-400 w-5 h-5 rounded-full text-white text-center -top-3 left-5 flex justify-center items-center">
                            {cartItems.length}
                        </span>
                        <ShoppingCartOutlinedIcon />
                    </div>
                </div>
            </div>
            <div id="categories-wrapper" className="flex justify-center h-10">
                <div id="categories" className="flex gap-2">
                    <NavLink to="/products/men" className="cs-category-button">
                        Men
                    </NavLink>
                    <NavLink
                        to="/products/women"
                        className="cs-category-button"
                    >
                        Women
                    </NavLink>
                    <NavLink
                        to="/products/children"
                        className="cs-category-button"
                    >
                        Children
                    </NavLink>
                    <NavLink
                        to="/products/accessories"
                        className="cs-category-button"
                    >
                        Accessories
                    </NavLink>
                </div>
            </div>
            {open && <Cart />}
        </nav>
    );
};
export default Navbar;
