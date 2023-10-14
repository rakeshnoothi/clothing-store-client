import { useState } from "react";
// material icon imports.
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// custom hook imports.
import useCart from "../../../hooks/useCart";
import useProduct from "../../../hooks/useProduct";

const Description = () => {
    const [quantity, setQuantity] = useState(0);
    const { product } = useProduct();
    const { cartItems, setCartItems } = useCart();

    const addToCart = product => {
        setCartItems([...cartItems, product]);
    };

    console.log("came from prodcut description");

    const handleQuantity = type => {
        if (type === "increase" && quantity >= 0) {
            return setQuantity(quantity + 1);
        }
        if (quantity !== 0) {
            return setQuantity(quantity - 1);
        }
    };

    return (
        <div
            id="about_description_wrapper"
            className="w-full flex flex-col gap-4"
        >
            <span className="uppercase text-xl font-bold">{product.name}</span>
            <span className="font-semibold text-lg">
                <span>&#8377;</span> {product.price}
            </span>
            <p>{product.description}</p>
            <div className="flex gap-2 items-center">
                <button
                    className="w-10 h-10 text-xl font-bold cs-button-color-standard"
                    onClick={() => handleQuantity("decrease")}
                >
                    -
                </button>
                <span className="text-lg font-semibold">{quantity}</span>
                <button
                    className="w-10 h-10 text-xl font-bold cs-button-color-standard"
                    onClick={() => handleQuantity("increase")}
                >
                    +
                </button>
            </div>
            <div className="flex gap-4">
                <button
                    className="p-2 flex items-center gap-2 cs-button-color-standard"
                    onClick={() => addToCart(product)}
                >
                    <ShoppingCartOutlinedIcon />
                    Add To Cart
                </button>
                <button className="p-2 flex items-center gap-2 cs-button-color-standard">
                    <FavoriteBorderOutlinedIcon />
                    Add To Wishlist
                </button>
            </div>
        </div>
    );
};
export default Description;
