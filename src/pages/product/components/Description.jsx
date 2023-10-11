import { useState } from "react";
// material icon imports.
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Description = () => {
    const [quantity, setQuantity] = useState(0);

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
            <span className="uppercase text-xl font-bold">
                Name of the product
            </span>
            <span className="font-semibold text-lg">
                <span>&#8377;</span> 20
            </span>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, excepturi! Dignissimos porro nulla ratione ea
                tempore sequi minima tempora autem laborum ducimus? Laboriosam
                porro, voluptas ut dicta ad eos nemo.
            </p>
            <div className="flex gap-2 items-center">
                <button
                    className="w-10 h-10 text-xl font-bold cs-button-color cs-button-color-hover"
                    onClick={() => handleQuantity("decrease")}
                >
                    -
                </button>
                <span className="text-lg font-semibold">{quantity}</span>
                <button
                    className="w-10 h-10 text-xl font-bold cs-button-color cs-button-color-hover"
                    onClick={() => handleQuantity("increase")}
                >
                    +
                </button>
            </div>
            <button className="p-2 w-max flex items-center gap-2 cs-button-color cs-button-color-hover">
                <ShoppingCartOutlinedIcon />
                Add To Cart
            </button>
            <div id="add-to-Wishlist-btn">
                <button className="p-2 w-max flex items-center gap-2 cs-button-color cs-button-color-hover">
                    <FavoriteBorderOutlinedIcon />
                    Add To Wishlist
                </button>
            </div>
        </div>
    );
};
export default Description;
