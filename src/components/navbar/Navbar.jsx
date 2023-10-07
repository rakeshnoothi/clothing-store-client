// router dom imports
import { Link, NavLink } from "react-router-dom";
//  css import
import "./styles.css";
// material icon imports.
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Navbar = () => {
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
                    <NavLink to="/search">
                        <SearchOutlinedIcon />
                    </NavLink>
                    <NavLink to="/wishlist">
                        <FavoriteBorderOutlinedIcon />
                    </NavLink>
                    <NavLink to="/profile">
                        <Person2OutlinedIcon />
                    </NavLink>
                    <NavLink to="/cart" className="relative ">
                        <span className="absolute bg-cyan-400 w-5 h-5 rounded-full text-white text-center -top-3 left-5 flex justify-center items-center">
                            0
                        </span>
                        <ShoppingCartOutlinedIcon />
                    </NavLink>
                </div>
            </div>
            <div id="categories-wrapper" className="flex justify-center">
                <div id="categories" className="flex gap-2">
                    <NavLink to="/products/1" className="cs-category-button">
                        Men
                    </NavLink>
                    <NavLink to="/products/2" className="cs-category-button">
                        Women
                    </NavLink>
                    <NavLink to="/products/3" className="cs-category-button">
                        Children
                    </NavLink>
                    <NavLink to="/products/4" className="cs-category-button">
                        Accessories
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
